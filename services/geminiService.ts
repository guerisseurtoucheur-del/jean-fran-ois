import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * CONFIGURATION :
 * On utilise import.meta.env.VITE_API_KEY car c'est la seule syntaxe 
 * que Vite accepte pour lire ta clé sur Vercel.
 */
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

export const analyzeProject = async (files: any[]) => {
  /**
   * CHOIX DU MODÈLE :
   * J'ai mis "gemini-1.5-flash". Même si tu vois 2.5 sur ton écran AI Studio, 
   * dans le code, "1.5-flash" est le nom universel qui fonctionne partout 
   * sans erreur de quota ou de timeout sur Vercel.
   */
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // On prépare les fichiers pour que l'IA puisse les lire
  const filesContext = files
    .map((f) => `File: ${f.path}\nContent:\n${f.content}`)
    .join("\n\n---\n\n");

  const prompt = `Agis comme un expert React. Analyse ces fichiers et fais un résumé structuré :
    ${filesContext}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    // Si ça plante, on affiche l'erreur dans la console pour comprendre pourquoi
    console.error("Erreur Gemini détaillée:", error);
    return "L'IA ne répond pas. Vérifie si ta clé VITE_API_KEY est bien configurée sur Vercel.";
  }
};