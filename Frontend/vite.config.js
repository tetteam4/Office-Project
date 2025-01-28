import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["jwt-decode",'lucide-react', 'framer-motion', 'react-calendar-heatmap'],
  },
  plugins: [react()],
})
