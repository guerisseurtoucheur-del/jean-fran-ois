import { GoogleGenerativeAI } from "@google/generative-ai";

// On force la lecture de la variable VITE_API_KEY
const apiKey = import.meta.env.VITE_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey || "");

export const analyzeProject = async (files: any[]) => {
  // TEST DE SÉCURITÉ
  if (!apiKey) {
    console.error("ERREUR : La variable VITE_API_KEY est vide !");
    return "Erreur : La clé n'est pas détectée par le site.";
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent("Bonjour, es-tu prêt ?");
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("Erreur Gemini détaillée:", error);
    return "L'IA est connectée mais ne peut pas répondre : " + error.message;
  }
};