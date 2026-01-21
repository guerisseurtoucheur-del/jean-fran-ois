
import { GoogleGenAI, Type } from "@google/genai";
import { ProjectFile } from "../types";

export const analyzeProject = async (files: ProjectFile[]) => {
  // Détection robuste de la clé API pour Vite/Vercel
  const apiKey = (import.meta as any).env?.VITE_API_KEY || process.env.API_KEY || "";
  const ai = new GoogleGenAI({ apiKey });
  
  const filesContext = files.map(f => `File: ${f.path}\nContent:\n${f.content}`).join('\n\n---\n\n');
  
  const prompt = `
    Analyze the following source code files from a React project and provide a structured summary.
    Identify the main purpose of the app, the core technologies used, and provide 3 suggestions for the next steps in development.
    
    Code Context:
    ${filesContext}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            technologies: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["summary", "technologies", "suggestions"]
        }
      }
    });

    const jsonStr = response.text?.trim() || "{}";
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini analysis failed:", error);
    throw error;
  }
};

export const generateRestorePrompt = (files: ProjectFile[]): string => {
  const code = files.map(f => `### FILE: ${f.path}\n\`\`\`tsx\n${f.content}\n\`\`\``).join('\n\n');
  return `Bonjour, voici le code de mon projet GitHub/Vercel pour que nous puissions continuer à travailler dessus. \n\n${code}\n\nAnalyses ce code et dis-moi quand tu es prêt à continuer.`;
};
