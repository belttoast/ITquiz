import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use /ITquiz/ base path only when running in GitHub Actions
  base: process.env.GITHUB_ACTIONS ? '/ITquiz/' : '/',
})
