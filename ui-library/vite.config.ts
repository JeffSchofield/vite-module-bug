import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UILib',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue', '@headlessui/vue'],
      output: {
        globals: { vue: 'Vue', '@headlessui/vue': '' }
      }
    }
  }
})