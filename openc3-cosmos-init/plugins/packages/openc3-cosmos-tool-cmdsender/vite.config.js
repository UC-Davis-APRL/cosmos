import { resolve } from 'path'
import { defineConfig } from 'vite'
import { vitePluginSingleSpa } from 'vite-plugin-single-spa'
import vue from '@vitejs/plugin-vue'

const DEFAULT_EXTENSIONS = ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']

export default defineConfig({
  build: {
    outDir: 'tools/cmdsender',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format: 'systemjs',
      },
    },
  },
  plugins: [
    vue(),
    vitePluginSingleSpa({
      type: 'mife', // micro front-end
      serverPort: 2913,
      spaEntryPoints: 'src/main.js',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: [...DEFAULT_EXTENSIONS, '.vue'], // not recommended but saves us from having to change every SFC import
  },
  define: {
    __BASE_URL__: JSON.stringify('/tools/cmdsender'),
  },
  optimizeDeps: {
    entries: [], // https://github.com/vituum/vituum/issues/25#issuecomment-1690080284
  },
})
