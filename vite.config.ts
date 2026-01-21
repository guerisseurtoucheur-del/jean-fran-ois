
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement (Vercel injecte API_KEY dans process.env)
  // Utilisation de (process as any).cwd() pour éviter les erreurs de typage TS
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // REMPLACEMENT LITTÉRAL SÉCURISÉ :
      // On ne remplace QUE process.env.API_KEY et process.env.NODE_ENV.
      // On ne définit PAS 'process.env' entier car cela brise le build (erreur "Invalid assignment").
      'process.env.API_KEY': JSON.stringify(env.API_KEY || env.VITE_API_KEY || ""),
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          // Laisse Vite gérer le découpage automatique pour une compatibilité maximale
          manualChunks: undefined
        },
      },
    },
  };
});
