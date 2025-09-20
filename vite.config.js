import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // updated to match package.json

export default defineConfig({
  plugins: [react()],
  base: '/grossery-app/', // base path for Tomcat deployment
  build: {
    outDir: 'dist',       // ensure build output goes to dist/
  },
})
