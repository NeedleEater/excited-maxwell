import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['dev.spencerlowe.com', 'localhost', '192.168.4.76'],
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['dev.spencerlowe.com', 'localhost', '192.168.4.76'],
  },
})
