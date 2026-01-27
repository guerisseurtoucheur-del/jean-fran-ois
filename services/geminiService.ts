import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialisation avec la clé Vercel
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

export const analyzeProject = async (files: any[]) => {
  // On utilise gemini-1.5-flash (le plus rapide et le moins sujet aux erreurs 429)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // On limite l'analyse pour ne pas dépasser les quotas de caractères
  const limitedFiles = files.slice(0, 3); // On ne prend que les 3 premiers fichiers
  const filesContext = limitedFiles
    .map((f) => `File: ${f.path}\nContent:\n${f.content.substring(0, 1000)}`) // On coupe le contenu trop long
    .join("\n\n---\n\n");

  const prompt = `Analyse courte de ces fichiers React : ${filesContext}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("Détail de l'erreur:", error);
    if (error.status === 429) {
      return "Désolé, Google limite les requêtes gratuites. Attends 1 minute et réessaie.";
    }
    return "Une erreur est survenue avec l'IA.";
  }
};