import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Charge toutes les variables d'environnement (celles avec VITE_ et les autres comme API_KEY)
  // Fix: Cast process to any to avoid TypeScript error "Property 'cwd' does not exist on type 'Process'"
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Cette ligne est cruciale : elle remplace "process.env.API_KEY" dans le code 
      // par la vraie valeur de la clé pendant que Vercel construit le site.
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY || process.env.API_KEY),
      // Assure aussi la présence de l'objet process.env de base
      'process.env': {}
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
