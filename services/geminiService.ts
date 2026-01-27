import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Initialisation avec la clé configurée sur Vercel
// On utilise import.meta.env pour que Vite puisse lire la clé en ligne
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

export const analyzeProject = async (files: any[]) => {
  // 2. Utilisation du modèle 1.5-flash (le plus rapide et compatible)
  // Même si tu vois "2.5" sur AI Studio, écris "1.5-flash" ici pour la stabilité
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Préparation du contexte avec les fichiers
  const filesContext = files
    .map((f) => `File: ${f.path}\nContent:\n${f.content}`)
    .join("\n\n---\n\n");

  const prompt = `Analyse les fichiers suivants de mon projet React et fais un résumé :
    ${filesContext}`;

  try {
    // 3. Appel à l'IA
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    // Affiche l'erreur précise dans la console du navigateur pour le debug
    console.error("Erreur détaillée Gemini:", error);
    return "Désolé, une erreur est survenue lors de la connexion à l'IA.";
  }
};