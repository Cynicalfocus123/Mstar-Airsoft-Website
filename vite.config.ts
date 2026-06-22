import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === 'github-pages' ? '/Mstar-Airsoft-Website/' : '/',
  plugins: [react()],
  build: {
    sourcemap: false,
  },
}));
