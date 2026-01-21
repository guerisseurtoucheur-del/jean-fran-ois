
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // @ts-ignore
  const cwd = process.cwd();
  const env = loadEnv(mode, cwd, '');
  
  return {
    plugins: [react()],
    define: {
      // Remplacement sécurisé des variables d'environnement
      'process.env.API_KEY': JSON.stringify(env.API_KEY || env.VITE_API_KEY || ""),
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    build: {
      // Configuration pour éviter les erreurs de parsing sur certaines librairies
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        // Pas de manualChunks complexes qui pourraient casser le graphe de dépendance
        output: {
          manualChunks: undefined,
        }
      }
    }
  };
});
