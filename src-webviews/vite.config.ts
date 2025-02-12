import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import globImporter from 'node-sass-glob-importer';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'C:/Users/felip/Source/repos/AD/txData/CFXDefaultFiveM_C8B072.base/resources/[gamemodes]/adrp-webviews/',
    emptyOutDir: true,
    minify: 'esbuild',
    reportCompressedSize: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        importer: globImporter(),
      }
    }
  }
});
