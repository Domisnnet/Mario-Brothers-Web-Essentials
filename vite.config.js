import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Mario-Brothers-Web-Essentials/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        jogo: resolve(__dirname, 'src/page/jogo.html'),
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === 'jogo') { return 'jogo.html'; }
          if (chunk.name === 'main') { return 'index.html'; }
          return '[name].html';
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
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