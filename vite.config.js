import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@primitives': path.resolve(__dirname, './src/components/primitives'),
      '@views': path.resolve(__dirname, './src/views'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  base: process.env.VITE_BASEURL,
})
