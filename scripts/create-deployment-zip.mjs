import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const rawArgs = process.argv.slice(2);
const args = new Set(rawArgs);
const isFullZip = args.has('--full');
const outputArg = rawArgs.find((arg) => arg.startsWith('--output='));
const outputName = outputArg
  ? outputArg.slice('--output='.length)
  : isFullZip
    ? 'mstar-airsoft-live-deployment.zip'
    : 'mstar-airsoft-update-deployment.zip';
if (!/^[A-Za-z0-9._-]+\.zip$/.test(outputName)) {
  throw new Error(`Unsafe ZIP output filename: ${outputName}`);
}
const outputPath = path.join(rootDir, outputName);
const defaultDiffBase = process.env.DEPLOY_DIFF_BASE || 'HEAD~5';

const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i += 1) {
  let c = i;
  for (let j = 0; j < 8; j += 1) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[i] = c >>> 0;
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date) {
  const year = Math.max(date.getFullYear(), 1980);
  const dosTime = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const dosDate = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { dosDate, dosTime };
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

function toArchivePath(relativePath) {
  return relativePath.split(path.sep).join('/');
}

function listFiles(dir, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(dir, entry.name);
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;

    if (entry.isDirectory()) return listFiles(absolutePath, relativePath);
    if (!entry.isFile()) return [];
    if (relativePath.endsWith('.map')) return [];
    return [{ absolutePath, archivePath: toArchivePath(relativePath) }];
  });
}

function gitNames(argsForGit) {
  try {
    return execFileSync('git', argsForGit, { cwd: rootDir, encoding: 'utf8' })
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

function addIfExists(files, relativePath) {
  const archivePath = toArchivePath(relativePath);
  const absolutePath = path.join(distDir, ...archivePath.split('/'));
  if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
    files.set(archivePath, { absolutePath, archivePath });
  }
}

function addCurrentBundles(files) {
  addIfExists(files, 'index.html');
  const assetsDir = path.join(distDir, 'assets');
  if (!fs.existsSync(assetsDir)) return;

  for (const entry of fs.readdirSync(assetsDir)) {
    if (/^index-[\w-]+\.(css|js)$/.test(entry)) {
      addIfExists(files, `assets/${entry}`);
    }
  }
}

function changedSourcePaths() {
  const names = new Set([
    ...gitNames(['diff', '--name-only', `${defaultDiffBase}..HEAD`]),
    ...gitNames(['diff', '--name-only', 'HEAD']),
    ...gitNames(['diff', '--cached', '--name-only']),
  ]);
  return Array.from(names).sort();
}

function listChangedDeploymentFiles() {
  const files = new Map();
  const changed = changedSourcePaths();

  for (const sourcePath of changed) {
    if (
      sourcePath === 'index.html' ||
      sourcePath === 'package.json' ||
      sourcePath === 'package-lock.json' ||
      sourcePath === 'vite.config.ts' ||
      sourcePath === 'tsconfig.json' ||
      sourcePath === 'tsconfig.app.json' ||
      sourcePath.startsWith('src/')
    ) {
      addCurrentBundles(files);
      continue;
    }

    if (sourcePath === 'public/.htaccess') {
      addIfExists(files, '.htaccess');
      continue;
    }

    if (sourcePath.startsWith('public/')) {
      addIfExists(files, sourcePath.slice('public/'.length));
    }
  }

  return Array.from(files.values()).sort((a, b) => a.archivePath.localeCompare(b.archivePath));
}

function assertSafeFiles(files) {
  if (!files.length) {
    throw new Error('No deployment files were selected. Build first or check DEPLOY_DIFF_BASE.');
  }

  for (const file of files) {
    if (file.archivePath.includes('\\')) throw new Error(`Backslash archive path rejected: ${file.archivePath}`);
    if (file.archivePath.startsWith('dist/')) throw new Error(`Nested dist path rejected: ${file.archivePath}`);
    if (file.archivePath.startsWith('Mstar-Airsoft-Website/')) {
      throw new Error(`Nested project path rejected: ${file.archivePath}`);
    }
  }
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
  throw new Error('dist/index.html is missing. Run npm run build before creating the deployment ZIP.');
}

if (fs.existsSync(outputPath)) {
  fs.rmSync(outputPath, { force: true });
}

const files = isFullZip
  ? listFiles(distDir).sort((a, b) => a.archivePath.localeCompare(b.archivePath))
  : listChangedDeploymentFiles();

try {
  assertSafeFiles(files);
  writeZip(files);
  assertSafeFiles(files);
} catch (error) {
  if (fs.existsSync(outputPath)) fs.rmSync(outputPath, { force: true });
  throw error;
}

const size = fs.statSync(outputPath).size;
const sampleEntries = files.slice(0, 20).map((file) => file.archivePath);
const hasBackslashEntry = files.some((file) => file.archivePath.includes('\\'));

console.log(`mode: ${isFullZip ? 'full' : 'changes-only'}`);
if (!isFullZip) console.log(`diff base: ${defaultDiffBase}`);
console.log(`files added: ${files.length}`);
console.log(`ZIP size: ${(size / 1024 / 1024).toFixed(2)} MB`);
console.log(`output path: ${outputPath}`);
console.log('sample entries:');
for (const entry of sampleEntries) console.log(`- ${entry}`);
console.log(`backslash entries: ${hasBackslashEntry ? 'FOUND' : 'none'}`);
