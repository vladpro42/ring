import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['**/*.scss'],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
