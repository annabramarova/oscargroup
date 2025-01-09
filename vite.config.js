import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  base: './',
  build: {
    rollupOptions: {
      input: [...glob.sync('./src/*.html'), ...glob.sync('./src/tr/*.html')],
    },
    outDir: '../dist',
  },
  server: {
    open: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://api.oskargroup.live', 
        changeOrigin: true, 
        rewrite: path => path.replace(/^\/api/, ''), 
      },
    },
  },
  plugins: [injectHTML(), FullReload(['./src/**/*'])],
});
