import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@imagens': path.resolve(__dirname, 'src/imagens'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@js': path.resolve(__dirname, 'src/js'),
      '@video': path.resolve(__dirname, 'src/video'),
      '@page' : path.resolve(__dirname, 'src/page'),
    },
  },
});