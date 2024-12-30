import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  base: './',
  build: {
    rollupOptions: {
      input: [
        ...glob.sync('./src/*.html'), 
        ...glob.sync('./src/tr/*.html'),
      ],
    },
    outDir: '../dist',
  },
  server: {
    open: true,
    host: '0.0.0.0',
  },

  plugins: [injectHTML(), FullReload(['./src/**/*'])],
});
