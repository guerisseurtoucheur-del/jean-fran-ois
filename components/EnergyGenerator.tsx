
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Zap, Activity, Heart, Brain, ArrowRight, ChevronDown } from 'lucide-react';

const EnergyCalculator: React.FC = () => {
  const [scores, setScores] = useState({
    physical: 50,
    emotional: 50,
    mental: 50
  });
  const [reading, setReading] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const globalFrequency = Math.round((scores.physical + scores.emotional + scores.mental) / 3);

  const getFrequencyLabel = (freq: number) => {
    if (freq < 30) return "Fréquence Basse - Besoin de régénération";
    if (freq < 60) return "Fréquence Neutre - Équilibre à consolider";
    if (freq < 85) return "Fréquence Harmonieuse - Flux fluide";
    return "Fréquence Élevée - Rayonnement optimal";
  };

  const analyzeEnergy = async () => {
    setLoading(true);
    setError(null);
    setReading(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `En tant que Jean-François, magnétiseur bienveillant, analyse ces scores énergétiques (sur 100) : 
      Physique: ${scores.physical}, Émotionnel: ${scores.emotional}, Mental: ${scores.mental}. 
      Donne une lecture intuitive très courte (2-3 phrases) et un conseil spirituel pour remonter ou stabiliser la vibration. 
      Utilise un ton apaisant et poétique.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setReading(response.text || "Le souffle de vie circule en vous. Prenez un instant pour respirer profondément.");
    } catch (err) {
      console.error("Erreur d'analyse:", err);
      setError("Le canal énergétique est encombré. Fiez-vous à votre propre ressenti un instant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-stone-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Formulaire de calcul */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
                <Activity size={14} /> Diagnostic Vibratoire
              </div>
              <h2 className="text-5xl font-serif font-bold text-stone-900 leading-tight">
                Calculez votre <span className="text-indigo-600 italic">état fréquentiel</span>
              </h2>
              <p className="text-stone-500 text-lg leading-relaxed">
                Le magnétisme agit sur vos différents corps. Découvrez votre signature vibratoire du moment.
              </p>
            </div>

            <div className="space-y-8">
              {/* Phrase d'instruction ajoutée ici */}
              <div className="flex items-center gap-3 text-indigo-600/70 animate-bounce-subtle">
                <ChevronDown size={18} />
                <p className="text-sm font-medium italic">
                  Ajustez les curseurs ci-dessous selon votre ressenti actuel :
                </p>
              </div>

              <div className="space-y-8 bg-stone-50 p-8 md:p-10 rounded-[3rem] border border-stone-100 shadow-inner">
                {/* Physique */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-600">
                      <Zap size={14} className="text-amber-500" /> Vitalité Physique
                    </label>
                    <span className="text-indigo-600 font-serif font-bold">{scores.physical}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="100" value={scores.physical}
                    onChange={(e) => setScores({...scores, physical: parseInt(e.target.value)})}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>

                {/* Émotionnel */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-600">
                      <Heart size={14} className="text-rose-500" /> Paix Émotionnelle
                    </label>
                    <span className="text-indigo-600 font-serif font-bold">{scores.emotional}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="100" value={scores.emotional}
                    onChange={(e) => setScores({...scores, emotional: parseInt(e.target.value)})}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>

                {/* Mental */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-600">
                      <Brain size={14} className="text-blue-500" /> Clarté Mentale
                    </label>
                    <span className="text-indigo-600 font-serif font-bold">{scores.mental}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="100" value={scores.mental}
                    onChange={(e) => setScores({...scores, mental: parseInt(e.target.value)})}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>

                <button 
                  onClick={analyzeEnergy}
                  disabled={loading}
                  className="w-full py-5 bg-stone-900 text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 mt-4"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                  {loading ? 'Analyse du souffle...' : 'Analyser mon énergie'}
                </button>
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div className="relative h-full flex flex-col justify-center">
            <div className={`p-10 md:p-16 bg-white rounded-[4rem] border border-stone-100 shadow-2xl transition-all duration-700 relative overflow-hidden flex flex-col items-center text-center ${loading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              
              {/* Cercle de Fréquence */}
              <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-stone-100" />
                  <circle 
                    cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" 
                    className="text-indigo-600 transition-all duration-1000"
                    strokeDasharray={552}
                    strokeDashoffset={552 - (552 * globalFrequency) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-serif font-bold text-stone-900">{globalFrequency}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Hz/Vibe</span>
                </div>
                {/* Aura pulsante */}
                <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-2xl animate-pulse -z-10" style={{ transform: `scale(${1 + globalFrequency/200})` }}></div>
              </div>

              <div className="space-y-6 relative z-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-500">
                  {getFrequencyLabel(globalFrequency)}
                </p>
                
                {reading ? (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <p className="text-xl font-serif italic text-stone-700 leading-relaxed">
                      "{reading}"
                    </p>
                    <div className="pt-8 flex justify-center">
                      <div className="h-px w-12 bg-stone-200"></div>
                    </div>
                  </div>
                ) : (
                  <p className="text-stone-400 italic">
                    {loading ? "Jean-François se connecte à vos données..." : "Actionnez les réglages pour recevoir votre lecture intuitive."}
                  </p>
                )}
              </div>

              {reading && (
                <div className="mt-10 animate-in fade-in duration-1000 delay-500">
                   <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Besoin d'un rééquilibrage ?</p>
                   <button className="flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all group">
                      Faire une demande de soin <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              )}
            </div>

            {/* Décoration arrière plan */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50/50 blur-[120px] rounded-full"></div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default EnergyCalculator;
