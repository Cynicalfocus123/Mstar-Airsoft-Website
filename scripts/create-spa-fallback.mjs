import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const indexPath = join(distDir, 'index.html');
const fallbackPath = join(distDir, '404.html');
const cleanRoutes = [
  'ticket',
  'events',
  'rules-and-regulation',
  'things-to-know',
  'immigration-visa',
  'how-to-get-to-the-event',
  'ship-your-equipment',
  'accommodation',
  'activity',
  'contact',
  'terms-and-conditions',
  'privacy',
  'complaints',
];

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html was not found. Run the Vite build before creating the SPA fallback.');
}

copyFileSync(indexPath, fallbackPath);

for (const route of cleanRoutes) {
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexPath, join(routeDir, 'index.html'));
}
