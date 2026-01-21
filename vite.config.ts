
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement (Vercel injecte API_KEY dans process.env)
  // Fix: Cast process as any to access cwd() method which might not be present on the default Process type in this context.
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Correction robuste pour Rollup : on définit les constantes de remplacement
      'process.env.API_KEY': JSON.stringify(env.API_KEY || env.VITE_API_KEY || ""),
      'process.env.NODE_ENV': JSON.stringify(mode),
      // On définit également l'objet complet pour la compatibilité avec certaines librairies
      'process.env': JSON.stringify({
        API_KEY: env.API_KEY || env.VITE_API_KEY || "",
        NODE_ENV: mode
      })
    },
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          // Laisse Vite gérer le découpage pour éviter les erreurs de modules manquants
          manualChunks: undefined
        },
      },
    },
  };
});
