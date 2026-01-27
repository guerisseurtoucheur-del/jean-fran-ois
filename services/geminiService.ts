import { GoogleGenerativeAI } from "@google/generative-ai";

export const analyzeProject = async (files: any[]) => {
  // On récupère la clé DIRECTEMENT à l'intérieur de la fonction
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) {
    console.error("Clé introuvable dans import.meta.env");
    return "Erreur : La clé VITE_API_KEY est introuvable. Vérifiez le Redeploy sur Vercel.";
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent("Réponds par un seul mot : Connecté !");
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    return "Erreur Gemini : " + error.message;
  }
};