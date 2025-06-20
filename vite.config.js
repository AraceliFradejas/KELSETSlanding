import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Cambiar de /KELSETSlanding/ a / para Vercel
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
