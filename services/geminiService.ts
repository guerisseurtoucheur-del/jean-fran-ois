import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

// Structure pour les fichiers (assure-toi que ce type correspond à ton projet)
interface ProjectFile {
  path: string;
  content: string;
}

// Initialisation avec la syntaxe spécifique à Vite
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

export const analyzeProject = async (files: ProjectFile[]) => {
  // Sélection du modèle le plus performant et stable pour Vercel
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  const filesContext = files
    .map((f) => `File: ${f.path}\nContent:\n${f.content}`)
    .join("\n\n---\n\n");

  const prompt = `Analyze the following source code files from a React project and provide a structured summary.
    Identify the main purpose of the app, the core technologies used, and provide 3 suggestions for improvement.

    Code Context:
    ${filesContext}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // On retourne le JSON parsé
    return JSON.parse(text);
  } catch (error) {
    console.error("Erreur lors de l'analyse Gemini:", error);
    throw error;
  }
};