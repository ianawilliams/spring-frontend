import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import eslint from 'vite-plugin-eslint'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    eslint(),
    checker({
      // e.g. use TypeScript check
      vueTsc: {
        tsconfigPath: './tsconfig.app.json',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/scss/_global.scss" as *;`
      }
    }
  }
})
