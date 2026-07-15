import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/Mario-Brothers-Web-Essentials/',
  resolve: {
    alias: {
      '@imagens': path.resolve(__dirname, 'src/imagens'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@js': path.resolve(__dirname, 'src/js'),
      '@video': path.resolve(__dirname, 'src/video'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        jogo: path.resolve(__dirname, 'src/page/jogo-memory.html'),
      },
    },
  },
});