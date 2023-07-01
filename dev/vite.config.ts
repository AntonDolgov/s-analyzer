import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [preact(), tsConfigPaths()],
  build: {
    outDir: '../',
  },
})
