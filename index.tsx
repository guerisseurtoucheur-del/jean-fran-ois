
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  const msg = "ERREUR : L'élément 'root' est introuvable dans le HTML.";
  console.error(msg);
  document.body.innerHTML = `<div style="padding:20px;color:red">${msg}</div>`;
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Erreur de rendu React:", err);
    rootElement.innerHTML = `<div style="padding:20px;color:red">Erreur React : ${err instanceof Error ? err.message : String(err)}</div>`;
  }
}
