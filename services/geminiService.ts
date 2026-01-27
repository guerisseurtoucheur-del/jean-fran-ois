import { GoogleGenerativeAI } from "@google/generative-ai";

export const analyzeProject = async (files: any[]) => {
  // On récupère la clé
  const apiKey = import.meta.env.VITE_API_KEY;

  // TEST CRITIQUE : On vérifie si la clé est là
  if (!apiKey || apiKey === "VOTRE_VALEUR_SECRÈTE_VA_ICI") {
    console.error("ERREUR : La variable VITE_API_KEY n'est pas chargée !");
    return "Erreur de configuration : La clé API est absente du déploiement Vercel.";
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  // On utilise gemini-1.5-flash pour la stabilité
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent("Dis 'Connexion établie'");
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("Détail de l'erreur Google :", error);
    return "L'IA ne peut pas répondre : " + (error.message || "Erreur inconnue");
  }
};