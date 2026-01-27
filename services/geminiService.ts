import { GoogleGenerativeAI } from "@google/generative-ai";

// Utilisation de la variable configurée sur Vercel
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

export const analyzeProject = async (files: any[]) => {
  // On utilise 1.5-flash car c'est le plus léger pour éviter l'erreur 429
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // On limite l'analyse aux fichiers essentiels pour économiser le quota
  const filesContext = files
    .slice(0, 5) // On ne prend que les 5 premiers fichiers max
    .map((f) => `File: ${f.path}\nContent:\n${f.content}`)
    .join("\n\n---\n\n");

  const prompt = `Analyse courte de ces fichiers : ${filesContext}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("Erreur Gemini:", error);
    if (error.message?.includes("429")) {
      return "Quota dépassé (Erreur 429). Réessaie dans quelques minutes, Google limite les requêtes gratuites.";
    }
    return "L'IA est indisponible pour le moment.";
  }
};