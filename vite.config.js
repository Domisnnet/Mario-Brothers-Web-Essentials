import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Mario-Brothers-Web-Essentials/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'page/jogo': resolve(__dirname, 'src/page/jogo.html'), 
      },
    },
  },
  resolve: {
    alias: {
      '@imagens': resolve(__dirname, 'src/imagens'),
      '@video': resolve(__dirname, 'src/video'),
      '@css': resolve(__dirname, 'src/css'),
      '@js': resolve(__dirname, 'src/js'),
    },
  },
});