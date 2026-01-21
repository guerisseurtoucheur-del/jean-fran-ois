
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Zap, Download } from 'lucide-react';

const EnergyGenerator: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateEnergyImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: "A professional, cinematic photo of two human hands, palms open and facing upwards, with vibrant, ethereal blue and gold spiritual energy flowing and radiating from the palms. Soft focus background, mystical atmosphere, healing light, high resolution, spiritual healing concept.",
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          setImage(`data:image/png;base64,${base64Data}`);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
        throw new Error("Aucune image n'a pu être générée.");
      }
    } catch (err) {
      console.error("Erreur de génération d'image:", err);
      setError("Le flux d'énergie est instable. Réessayez dans quelques instants.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles size={14} /> Création Unique par IA
            </div>
            <h2 className="text-5xl font-serif font-bold text-stone-900 leading-tight">
              Visualisez votre <span className="text-indigo-600 italic">propre énergie</span>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              J'ai configuré mon intelligence artificielle pour qu'elle puisse vous montrer une représentation visuelle du souffle guérisseur. Cliquez pour générer une image unique de mains diffusant l'énergie.
            </p>
            <button 
              onClick={generateEnergyImage}
              disabled={loading}
              className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Zap size={20} />}
              {loading ? 'Connexion au flux...' : 'Générer mon visuel d\'énergie'}
            </button>
            {error && <p className="text-red-500 text-sm font-medium italic">{error}</p>}
          </div>

          <div className="relative group">
            <div className={`aspect-video rounded-[3rem] bg-stone-200 overflow-hidden shadow-2xl transition-all duration-700 ${image ? 'scale-100' : 'scale-95 opacity-50'}`}>
              {image ? (
                <img src={image} alt="Énergie générée" className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                    <Sparkles size={32} className="animate-pulse" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest">En attente de votre demande</p>
                </div>
              )}
            </div>
            
            {image && (
              <div className="absolute -bottom-6 -right-6">
                <div className="p-8 bg-white rounded-full shadow-2xl text-indigo-600 animate-bounce">
                  <Zap size={32} />
                </div>
              </div>
            )}
            
            {/* Effet d'aura décoratif */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-200/30 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyGenerator;
