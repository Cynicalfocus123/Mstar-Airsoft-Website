import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const indexPath = join(distDir, 'index.html');
const fallbackPath = join(distDir, '404.html');

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html was not found. Run the Vite build before creating the SPA fallback.');
}

copyFileSync(indexPath, fallbackPath);
