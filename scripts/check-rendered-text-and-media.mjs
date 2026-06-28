import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { createServer } from 'node:http';

const requireFromHere = createRequire(import.meta.url);
const requireFromTemp = process.env.PLAYWRIGHT_REQUIRE_ROOT
  ? createRequire(join(process.env.PLAYWRIGHT_REQUIRE_ROOT, 'package.json'))
  : null;
const { chromium } = requireFromTemp ? requireFromTemp('playwright') : requireFromHere('playwright');

const routes = [
  '/',
  '/ticket',
  '/events',
  '/events/force-of-conquest',
  '/events/force-of-conquest/event-info',
  '/events/force-of-conquest/mission-scenario',
  '/things-to-know',
  '/rules-and-regulation',
  '/how-to-get-to-the-event',
  '/equipment',
  '/terms-and-conditions',
  '/cancellation-and-refund',
  '/privacy',
  '/privacy-policy',
  '/complaints',
  '/become-a-vendor',
  '/become-a-sponsor',
];

const patterns = [
  'Ã¢',
  'Ã‚',
  'Ãƒ',
  'ï¿½',
  'Ã Â¸',
  'Ã Â¹',
  'Ã¢â‚¬â€œ',
  'Ã¢â‚¬â€',
  'Ã¢â‚¬â„¢',
  'Ã¢â‚¬Å“',
  'Ã¢â‚¬',
  'Ã¢â€žÂ¢',
  'Ã¢â€šÂ¬',
];

const distRoot = process.env.DIST_ROOT ? join(process.cwd(), process.env.DIST_ROOT) : join(process.cwd(), 'dist');
const mimeTypes = new Map([
  ['.html', 'text/html; charset=UTF-8'],
  ['.css', 'text/css; charset=UTF-8'],
  ['.js', 'application/javascript; charset=UTF-8'],
  ['.json', 'application/json; charset=UTF-8'],
  ['.svg', 'image/svg+xml; charset=UTF-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.jfif', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.avif', 'image/avif'],
  ['.mp4', 'video/mp4'],
  ['.webm', 'video/webm'],
  ['.xml', 'application/xml; charset=UTF-8'],
  ['.txt', 'text/plain; charset=UTF-8'],
]);

function findPattern(text) {
  return patterns.find((pattern) => text.includes(pattern));
}

function snippet(text, pattern) {
  const index = text.indexOf(pattern);
  const start = Math.max(0, index - 80);
  const end = Math.min(text.length, index + pattern.length + 80);
  return text.slice(start, end).replace(/\s+/g, ' ').trim();
}

function startServer() {
  const server = createServer((req, res) => {
    const url = new URL(req.url ?? '/', 'http://127.0.0.1');
    const decodedPath = decodeURIComponent(url.pathname);
    const requested = decodedPath === '/' ? '/index.html' : decodedPath;
    let filePath = normalize(join(distRoot, requested));

    if (!filePath.startsWith(distRoot) || !existsSync(filePath) || statSync(filePath).isDirectory()) {
      filePath = join(distRoot, 'index.html');
    }

    const ext = extname(filePath).toLowerCase();
    res.setHeader('Content-Type', mimeTypes.get(ext) ?? 'application/octet-stream');
    createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      resolve({ server, origin: `http://127.0.0.1:${address.port}` });
    });
  });
}

async function collectMedia(page) {
  return page.evaluate(() => {
    const urls = new Set();
    const add = (value) => {
      if (!value) return;
      try {
        const parsed = new URL(value, window.location.href);
        if (/^\/(?:images|videos|assets|banners|gallery)\//.test(parsed.pathname)) {
          urls.add(parsed.href);
        }
      } catch {}
    };

    document.querySelectorAll('img[src]').forEach((img) => add(img.getAttribute('src')));
    document.querySelectorAll('video[src]').forEach((video) => add(video.getAttribute('src')));
    document.querySelectorAll('source[src]').forEach((source) => add(source.getAttribute('src')));

    document.querySelectorAll('*').forEach((element) => {
      const background = window.getComputedStyle(element).backgroundImage;
      for (const match of background.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
        add(match[1]);
      }
    });

    const brokenImages = Array.from(document.querySelectorAll('img[src]'))
      .filter((img) => img.currentSrc && img.naturalWidth === 0)
      .map((img) => img.currentSrc);

    return { urls: Array.from(urls), brokenImages };
  });
}

async function clickThaiControls(page) {
  return page.evaluate(async () => {
    const thaiControlPattern = /^(thai|th|ภาษาไทย|ไทย)$/i;
    const candidates = Array.from(document.querySelectorAll('button, [role="button"], input[type="button"]'));
    const clicked = [];

    for (const element of candidates) {
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      const visible = rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
      const label = (element.innerText || element.value || element.getAttribute('aria-label') || '').trim();
      if (!visible || !thaiControlPattern.test(label)) continue;
      element.click();
      clicked.push(label);
      await new Promise((resolve) => setTimeout(resolve, 150));
    }

    return clicked;
  });
}

async function main() {
  const liveBaseUrl = process.env.CHECK_BASE_URL;
  const shouldServeDist = !liveBaseUrl;

  if (shouldServeDist && process.env.SKIP_BUILD !== '1') {
    execFileSync('cmd', ['/c', 'npm', 'run', 'build'], { stdio: 'inherit' });
  }

  const served = shouldServeDist ? await startServer() : { server: null, origin: liveBaseUrl.replace(/\/+$/, '') };
  const { server, origin } = served;
  const browser = await chromium.launch({ headless: true });
  const failures = [];
  const checked = [];

  try {
    for (const viewport of [
      { name: 'desktop', width: 1440, height: 1100 },
      { name: 'mobile', width: 390, height: 900 },
    ]) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
      page.setDefaultNavigationTimeout(60000);
      page.setDefaultTimeout(15000);
      const badResponses = [];
      page.on('response', (response) => {
        const request = response.request();
        const type = request.resourceType();
        if (!['document', 'script', 'stylesheet', 'image', 'media', 'font'].includes(type)) return;
        if (response.status() >= 400) {
          badResponses.push(`${response.status()} ${type} ${response.url()}`);
        }
      });

      for (const route of routes) {
        const label = `${viewport.name} ${route}`;
        await page.goto(`${origin}${route}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await page.waitForTimeout(500);

        const title = await page.title();
        if (!title) failures.push(`${label}: missing document title`);

        const rootContent = await page.locator('#root').textContent().catch(() => '');
        if (!rootContent || rootContent.trim().length < 40) {
          failures.push(`${label}: app root appears blank or too short`);
        }

        const englishText = await page.evaluate(() => document.body.innerText);
        const englishPattern = findPattern(englishText);
        if (englishPattern) {
          failures.push(`${label}: rendered English text contains ${englishPattern}: ${snippet(englishText, englishPattern)}`);
        }

        const thaiClicks = await clickThaiControls(page);
        await page.waitForTimeout(250);
        const afterThaiText = await page.evaluate(() => document.body.innerText);
        const thaiPattern = findPattern(afterThaiText);
        if (thaiPattern) {
          failures.push(`${label}: rendered Thai-switched text contains ${thaiPattern}: ${snippet(afterThaiText, thaiPattern)}`);
        }

        const media = await collectMedia(page);
        if (media.brokenImages.length) {
          failures.push(`${label}: broken rendered images: ${media.brokenImages.join(', ')}`);
        }
        for (const mediaUrl of media.urls) {
          let response = await page.request.head(mediaUrl, { timeout: 15000 }).catch(() => null);
          if (response && response.status() === 405) {
            response = await page.request.get(mediaUrl, {
              headers: { Range: 'bytes=0-2047' },
              timeout: 15000,
            }).catch(() => null);
          }
          if (!response) {
            failures.push(`${label}: media check timed out or failed for ${mediaUrl}`);
            continue;
          }
          if (!response.ok()) {
            failures.push(`${label}: missing media ${mediaUrl} returned ${response.status()}`);
          }
        }

        checked.push({ label, thaiClicks: thaiClicks.length, media: media.urls.length });
      }

      if (badResponses.length) {
        failures.push(`${viewport.name}: failed document/script/stylesheet/image/media/font responses: ${badResponses.slice(0, 20).join(' | ')}`);
      }
      await page.close();
    }
  } finally {
    await browser.close();
    if (server) server.close();
  }

  if (failures.length) {
    console.error(`Runtime verification failed (${failures.length})`);
    console.error(failures.slice(0, 30).join('\n'));
    process.exit(1);
  }

  console.log(`Runtime verification passed for ${origin}: ${checked.length} route/view checks, zero rendered mojibake, zero missing media.`);
  console.log(`Thai controls clicked in ${checked.filter((item) => item.thaiClicks > 0).length} route/view checks.`);
  console.log(`Local media references verified: ${checked.reduce((sum, item) => sum + item.media, 0)} total route/view references.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
