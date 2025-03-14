import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import glsl from "vite-plugin-glsl";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
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
