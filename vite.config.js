import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tacos-madre/',
  plugins: [react()],
  server: { port: 5173, open: false },
  build: { outDir: 'dist', assetsInlineLimit: 2048 },
});
