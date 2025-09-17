import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/grosery/',  // 🔥 VERY IMPORTANT for subdirectory deployment
  build: {
    outDir: 'dist', // optional; 'dist' is the default
  },
})
