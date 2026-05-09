import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    cssCodeSplit: false,
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
})
