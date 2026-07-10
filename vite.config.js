import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so the built site works from any
// sub-path or static host (CloudStudio, GitHub Pages, file server, etc.)
export default defineConfig({
  plugins: [react()],
  base: './',
})
