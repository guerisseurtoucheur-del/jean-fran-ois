
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement (Vercel injecte API_KEY dans process.env)
  // Fix: Use '.' instead of process.cwd() as the 'process' object might have incomplete type definitions in some TypeScript environments
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // Remplace uniquement process.env.API_KEY par sa valeur au moment du build.
      // On ne redéfinit plus process.env globalement pour éviter les erreurs de compilation.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || env.VITE_API_KEY || ""),
    },
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            ui: ['lucide-react'],
            ai: ['@google/genai']
          },
        },
      },
    },
  };
});
