
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration pour optimiser le build et éviter les avertissements de taille
export default defineConfig({
  plugins: [react()],
  build: {
    // Augmente la limite d'avertissement de taille de chunk à 1600kb
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Sépare les grosses librairies dans des fichiers distincts
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react'],
          ai: ['@google/genai']
        },
      },
    },
  },
});
