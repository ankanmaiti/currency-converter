import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src/',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
      '@contexts': '/src/contexts',
    },
  },
  server: {
    proxy: {
      '/api/currencies' : {
        target: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies'
      },
    },
  },
})
