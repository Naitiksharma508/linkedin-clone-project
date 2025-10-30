import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // This is the new part
  server: {
    proxy: {
      // any request that starts with /api
      '/api': {
        target: 'http://localhost:8080', // will be sent to this backend
        changeOrigin: true,
      }
    }
  }
})