import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Cette ligne permet à Vite de reconnaître les variables process.env sur Vercel
    'process.env': process.env 
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});