import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

export const analyzeProject = async (files: any[]) => {
  // On utilise gemini-1.5-flash car c'est le plus stable pour débuter
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const filesContext = files
    .slice(0, 3) 
    .map((f) => `Fichier: ${f.path}\nContenu:\n${f.content.substring(0, 500)}`)
    .join("\n\n---\n\n");

  const prompt = `Fais un résumé rapide de ce code : ${filesContext}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    // Si la clé est encore bloquée, l'erreur s'affichera ici en rouge (F12)
    console.error("ERREUR CRITIQUE GEMINI :", error);
    if (error.message?.includes("API_KEY_INVALID")) {
      return "La nouvelle clé API n'est pas encore activée ou mal copiée.";
    }
    return "Connexion impossible. Vérifie la nouvelle clé sur Vercel.";
  }
};