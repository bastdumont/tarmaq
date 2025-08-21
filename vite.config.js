import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Enable hot reload on save
    hmr: true,
    // Automatically open browser
    open: true,
    // Watch for file changes
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: false
  }
})
