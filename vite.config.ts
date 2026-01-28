import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Rend process.env.API_KEY disponible dans le code client,
    // en prenant sa valeur de VITE_API_KEY (convention Vite pour les env vars client-side).
    'process.env.API_KEY': JSON.stringify(process.env.VITE_API_KEY),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), 
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