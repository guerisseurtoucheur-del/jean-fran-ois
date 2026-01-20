
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration pour optimiser le build et éviter les avertissements de taille
export default defineConfig({
  plugins: [react()],
  build: {
    // Augmente la limite d'avertissement de taille de chunk à 2000kb pour éviter les warnings
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Sépare les grosses librairies dans des fichiers distincts pour optimiser le chargement
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react'],
          ai: ['@google/genai']
        },
      },
    },
  },
});
