import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

export const analyzeProject = async (files: any[]) => {
  // On reste sur le 1.5-flash car c'est le seul qui accepte beaucoup de requêtes gratuites
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // ON RÉDUIT AU MAXIMUM : On ne prend que le 1er fichier et seulement les 500 premiers caractères
  const firstFile = files[0];
  const shortContent = firstFile ? firstFile.content.substring(0, 500) : "Pas de contenu";
  
  const prompt = `Fais un résumé de 2 lignes sur ce fichier : ${shortContent}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("Erreur Gemini:", error);
    // Si tu vois encore 429, il faut vraiment attendre 5 minutes
    if (error.status === 429) return "Google sature. Attends 5 min.";
    return "Erreur de connexion.";
  }
};