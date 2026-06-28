import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const stagingDir = path.join(rootDir, 'hostinger-current-deploy-package');
const outputName = 'mstar-airsoft-hostinger-current-deploy.zip';
const outputPath = path.join(rootDir, outputName);

const requiredRootFiles = ['index.html', '.htaccess', 'robots.txt', 'sitemap.xml'];
const localRefPattern = /\/(?:assets|images|videos|banners)\/[A-Za-z0-9._~!$&*+=:@%/-]+/g;

const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i += 1) {
  let c = i;
  for (let j = 0; j < 8; j += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  crcTable[i] = c >>> 0;
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function writeUInt16(value) {
  const buffer = Buffer.alloc(2);
  buffer.writeUInt16LE(value);
  return buffer;
}

function writeUInt32(value) {
  const buffer = Buffer.alloc(4);
  buffer.writeUInt32LE(value >>> 0);
  return buffer;
}

function dosDateTime(date) {
  const year = Math.max(date.getFullYear(), 1980);
  return {
    dosTime: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2),
    dosDate: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate(),
  };
}

function toArchivePath(relativePath) {
  return relativePath.split(path.sep).join('/');
}

function copyFileFromDist(relativePath) {
  const sourcePath = path.join(distDir, ...relativePath.split('/'));
  if (!fs.existsSync(sourcePath) || !fs.statSync(sourcePath).isFile()) {
    throw new Error(`Required deploy file is missing from dist: ${relativePath}`);
  }

  const destinationPath = path.join(stagingDir, ...relativePath.split('/'));
  fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
  fs.copyFileSync(sourcePath, destinationPath);
}

function collectRuntimeReferences() {
  const filesToRead = [path.join(distDir, 'index.html')];
  const assetsDir = path.join(distDir, 'assets');

  if (fs.existsSync(assetsDir)) {
    for (const entry of fs.readdirSync(assetsDir)) {
      if (/\.(js|css)$/.test(entry)) filesToRead.push(path.join(assetsDir, entry));
    }
  }

  const references = new Set();
  for (const file of filesToRead) {
    const text = fs.readFileSync(file, 'utf8');
    for (const match of text.matchAll(localRefPattern)) {
      references.add(decodeURIComponent(match[0].split(/[?#]/)[0].slice(1)));
    }
  }

  return Array.from(references).sort();
}

function listFiles(dir, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(dir, entry.name);
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;

    if (entry.isDirectory()) return listFiles(absolutePath, relativePath);
    if (!entry.isFile() || relativePath.endsWith('.map')) return [];
    return { absolutePath, archivePath: toArchivePath(relativePath) };
  });
}

function assertSafeEntries(files) {
  const archivePaths = files.map((file) => file.archivePath);
  const oldBundles = archivePaths.filter((entry) => /assets\/index-(DjVJ79JP|BIOSmsMW|BNZIBf1G|CXNzadvn)\.(js|css)$/.test(entry));
  const backslashes = archivePaths.filter((entry) => entry.includes('\\'));
  const nestedRoot = archivePaths.filter((entry) => entry.startsWith('hostinger-current-deploy-package/'));
  const sourceFiles = archivePaths.filter((entry) => /^(src|public|node_modules|\.git|\.github)\//.test(entry));
  const sourceMaps = archivePaths.filter((entry) => entry.endsWith('.map'));

  if (!archivePaths.includes('index.html')) throw new Error('ZIP root index.html is missing.');
  if (!archivePaths.includes('.htaccess')) throw new Error('ZIP root .htaccess is missing.');
  if (!archivePaths.some((entry) => entry.startsWith('assets/'))) throw new Error('assets/ folder entries are missing.');
  if (backslashes.length) throw new Error(`Backslash ZIP entries rejected: ${backslashes.slice(0, 5).join(', ')}`);
  if (nestedRoot.length) throw new Error(`Nested staging folder rejected: ${nestedRoot.slice(0, 5).join(', ')}`);
  if (sourceFiles.length) throw new Error(`Source files rejected: ${sourceFiles.slice(0, 5).join(', ')}`);
  if (sourceMaps.length) throw new Error(`Source maps rejected: ${sourceMaps.slice(0, 5).join(', ')}`);
  if (oldBundles.length) throw new Error(`Old stale bundle entries rejected: ${oldBundles.join(', ')}`);
}

function writeZip(files) {
  const outputParts = [];
  const centralParts = [];
  let offset = 0;

  for (const file of files) {
    const data = fs.readFileSync(file.absolutePath);
    const name = Buffer.from(file.archivePath, 'utf8');
    const stats = fs.statSync(file.absolutePath);
    const { dosDate, dosTime } = dosDateTime(stats.mtime);
    const checksum = crc32(data);

    const localHeader = Buffer.concat([
      writeUInt32(0x04034b50),
      writeUInt16(20),
      writeUInt16(0x0800),
      writeUInt16(0),
      writeUInt16(dosTime),
      writeUInt16(dosDate),
      writeUInt32(checksum),
      writeUInt32(data.length),
      writeUInt32(data.length),
      writeUInt16(name.length),
      writeUInt16(0),
      name,
    ]);

    outputParts.push(localHeader, data);

    const centralHeader = Buffer.concat([
      writeUInt32(0x02014b50),
      writeUInt16(20),
      writeUInt16(20),
      writeUInt16(0x0800),
      writeUInt16(0),
      writeUInt16(dosTime),
      writeUInt16(dosDate),
      writeUInt32(checksum),
      writeUInt32(data.length),
      writeUInt32(data.length),
      writeUInt16(name.length),
      writeUInt16(0),
      writeUInt16(0),
      writeUInt16(0),
      writeUInt16(0),
      writeUInt32(0),
      writeUInt32(offset),
      name,
    ]);

    centralParts.push(centralHeader);
    offset += localHeader.length + data.length;
  }

  const centralDirectory = Buffer.concat(centralParts);
  const endOfCentralDirectory = Buffer.concat([
    writeUInt32(0x06054b50),
    writeUInt16(0),
    writeUInt16(0),
    writeUInt16(files.length),
    writeUInt16(files.length),
    writeUInt32(centralDirectory.length),
    writeUInt32(offset),
    writeUInt16(0),
  ]);

  fs.writeFileSync(outputPath, Buffer.concat([...outputParts, centralDirectory, endOfCentralDirectory]));
}

if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  throw new Error('dist/index.html is missing. Run npm run build first.');
}

fs.rmSync(stagingDir, { recursive: true, force: true });
fs.rmSync(outputPath, { force: true });
fs.mkdirSync(stagingDir, { recursive: true });

for (const file of requiredRootFiles) {
  if (fs.existsSync(path.join(distDir, file))) copyFileFromDist(file);
}

const runtimeReferences = collectRuntimeReferences();
for (const reference of runtimeReferences) copyFileFromDist(reference);

const files = listFiles(stagingDir).sort((a, b) => a.archivePath.localeCompare(b.archivePath));
assertSafeEntries(files);
writeZip(files);
assertSafeEntries(files);

const sponsorAssets = files.filter((file) => file.archivePath.startsWith('images/sponsor/')).length;
const sizeMb = fs.statSync(outputPath).size / 1024 / 1024;
const stagingSizeMb =
  files.reduce((sum, file) => sum + fs.statSync(file.absolutePath).size, 0) / 1024 / 1024;

console.log(`staging folder: ${path.basename(stagingDir)}`);
console.log(`files staged: ${files.length}`);
console.log(`runtime references included: ${runtimeReferences.length}`);
console.log(`sponsor assets included: ${sponsorAssets}`);
console.log(`staging size: ${stagingSizeMb.toFixed(2)} MB`);
console.log(`zip: ${outputName}`);
console.log(`zip size: ${sizeMb.toFixed(2)} MB`);
console.log('backslash entries: none');
