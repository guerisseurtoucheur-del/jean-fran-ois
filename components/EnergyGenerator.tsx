
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Zap, Activity, Heart, Brain, ArrowRight, MousePointer2 } from 'lucide-react';

const EnergyCalculator: React.FC = () => {
  const [scores, setScores] = useState({
    physical: 50,
    emotional: 50,
    mental: 50
  });
  const [reading, setReading] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [displayedFreq, setDisplayedFreq] = useState(50);
  const [hasInteracted, setHasInteracted] = useState(false);

  const globalFrequency = Math.round((scores.physical + scores.emotional + scores.mental) / 3);

  // Animation fluide du compteur
  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayedFreq < globalFrequency) setDisplayedFreq(prev => prev + 1);
      if (displayedFreq > globalFrequency) setDisplayedFreq(prev => prev - 1);
    }, 20);
    return () => clearTimeout(timer);
  }, [displayedFreq, globalFrequency]);

  const getFrequencyLabel = (freq: number) => {
    if (freq < 30) return "Vitalité Basse - Besoin de repos";
    if (freq < 60) return "Équilibre Moyen - À surveiller";
    if (freq < 85) return "Bonne Vitalité - Énergie fluide";
    return "Excellente Vitalité - État optimal";
  };

  const getColor = (freq: number) => {
    if (freq < 30) return "text-orange-500";
    if (freq < 60) return "text-amber-500";
    if (freq < 85) return "text-indigo-600";
    return "text-emerald-500";
  };

  const getAuraColor = (freq: number) => {
    if (freq < 30) return "bg-orange-400/30";
    if (freq < 60) return "bg-amber-400/30";
    if (freq < 85) return "bg-indigo-400/30";
    return "bg-emerald-400/30";
  };

  const analyzeEnergy = async () => {
    setLoading(true);
    setError(null);
    setReading(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `En tant que Jean-François, magnétiseur pragmatique et bienveillant, analyse ces scores de vitalité sur 100 : 
      Physique: ${scores.physical}, Émotionnel: ${scores.emotional}, Mental: ${scores.mental}. 
      Donne un constat concret sur l'état général et un conseil de bien-être pratique (repos, hydratation, grand air, déconnexion) pour améliorer ou maintenir ces scores. 
      IMPORTANT : Varie toujours ton vocabulaire et tes tournures de phrases. Ne donne jamais deux fois le même conseil de la même manière.
      Reste simple, direct et terre-à-terre. Évite le langage trop mystique. Maximum 2 phrases.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          temperature: 1.2, // Température haute pour garantir la diversité des réponses
        }
      });

      setReading(response.text || "Prenez simplement le temps de respirer et de vous reposer aujourd'hui.");
    } catch (err) {
      console.error("Erreur d'analyse:", err);
      setError("Impossible d'analyser les données pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  const handleSliderChange = (key: keyof typeof scores, value: string) => {
    setHasInteracted(true);
    setScores(prev => ({ ...prev, [key]: parseInt(value) }));
  };

  return (
    <section className="py-24 bg-white border-t border-stone-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Formulaire de calcul */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
                <Activity size={14} /> Diagnostic de Vitalité
              </div>
              <h2 className="text-5xl font-serif font-bold text-stone-900 leading-tight">
                Calculez votre <span className="text-indigo-600 italic">état de forme</span>
              </h2>
              <p className="text-stone-500 text-lg leading-relaxed">
                Déplacez les curseurs ci-dessous pour évaluer votre ressenti actuel.
              </p>
            </div>

            <div className="space-y-12 bg-stone-50 p-8 md:p-12 rounded-[3.5rem] border border-stone-100 shadow-inner relative overflow-hidden">
                {!hasInteracted && (
                  <div className="absolute top-8 right-8 animate-bounce flex items-center gap-2 text-indigo-500">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Glissez les curseurs</span>
                    <MousePointer2 size={16} />
                  </div>
                )}

                {/* Physique */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-700">
                      <div className="p-2 bg-amber-100 rounded-lg text-amber-600"><Zap size={16} /></div>
                      Vitalité Physique
                    </label>
                    <span className="text-2xl font-serif font-bold text-indigo-600">{scores.physical}%</span>
                  </div>
                  <div className="relative pt-2">
                    <input 
                      type="range" min="0" max="100" value={scores.physical}
                      onChange={(e) => handleSliderChange('physical', e.target.value)}
                      className="custom-range w-full h-3 bg-stone-200 rounded-full appearance-none cursor-grab active:cursor-grabbing"
                    />
                  </div>
                </div>

                {/* Émotionnel */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-700">
                      <div className="p-2 bg-rose-100 rounded-lg text-rose-600"><Heart size={16} /></div>
                      Équilibre Émotionnel
                    </label>
                    <span className="text-2xl font-serif font-bold text-indigo-600">{scores.emotional}%</span>
                  </div>
                  <div className="relative pt-2">
                    <input 
                      type="range" min="0" max="100" value={scores.emotional}
                      onChange={(e) => handleSliderChange('emotional', e.target.value)}
                      className="custom-range w-full h-3 bg-stone-200 rounded-full appearance-none cursor-grab active:cursor-grabbing"
                    />
                  </div>
                </div>

                {/* Mental */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-700">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Brain size={16} /></div>
                      Charge Mentale
                    </label>
                    <span className="text-2xl font-serif font-bold text-indigo-600">{scores.mental}%</span>
                  </div>
                  <div className="relative pt-2">
                    <input 
                      type="range" min="0" max="100" value={scores.mental}
                      onChange={(e) => handleSliderChange('mental', e.target.value)}
                      className="custom-range w-full h-3 bg-stone-200 rounded-full appearance-none cursor-grab active:cursor-grabbing"
                    />
                  </div>
                </div>

                <button 
                  onClick={analyzeEnergy}
                  disabled={loading}
                  className="w-full py-6 bg-stone-900 text-white rounded-[2rem] font-bold text-xl hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 mt-4 group"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />}
                  {loading ? 'Analyse en cours...' : 'Obtenir mon conseil personnalisé'}
                </button>
            </div>
          </div>

          {/* Résultats Interactifs */}
          <div className="relative flex flex-col items-center group">
            <div className={`p-10 md:p-16 bg-white rounded-[4rem] border border-stone-100 shadow-2xl transition-all duration-700 relative overflow-hidden flex flex-col items-center text-center w-full max-w-lg ${loading ? 'opacity-50 scale-95 blur-sm' : 'opacity-100 scale-100'}`}>
              
              {/* Particules d'énergie flottantes */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className={`absolute w-1 h-1 rounded-full bg-indigo-400 animate-float-energy`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 1.5}s`,
                      animationDuration: `${3 + Math.random() * 4}s`,
                      opacity: displayedFreq / 100
                    }}
                  />
                ))}
              </div>

              {/* Moniteur de Fréquence */}
              <div className="relative w-64 h-64 mb-10 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                <svg className="w-full h-full -rotate-90 filter drop-shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                  <defs>
                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={displayedFreq < 50 ? "#f97316" : "#6366f1"} />
                      <stop offset="100%" stopColor={displayedFreq < 50 ? "#f59e0b" : "#8b5cf6"} />
                    </linearGradient>
                  </defs>
                  <circle cx="128" cy="128" r="110" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-stone-100" />
                  <circle 
                    cx="128" cy="128" r="110" stroke="url(#energyGradient)" strokeWidth="12" fill="transparent" 
                    className="transition-all duration-300"
                    strokeDasharray={691}
                    strokeDashoffset={691 - (691 * displayedFreq) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-7xl font-serif font-bold transition-colors duration-500 ${getColor(displayedFreq)}`}>
                    {displayedFreq}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mt-2">Indice Vital</span>
                </div>

                {/* Aura Pulsante Dynamique */}
                <div className={`absolute inset-0 rounded-full blur-[60px] animate-pulse-slow -z-10 transition-all duration-1000 ${getAuraColor(displayedFreq)}`} style={{ transform: `scale(${0.8 + displayedFreq/150})` }}></div>
              </div>

              <div className="space-y-6 relative z-10 w-full">
                <div className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] inline-block mb-4 transition-colors duration-500 ${getColor(displayedFreq)} bg-stone-50 border border-stone-100`}>
                  {getFrequencyLabel(displayedFreq)}
                </div>
                
                {reading ? (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 bg-stone-50/50 p-6 rounded-3xl border border-stone-100">
                    <p className="text-xl font-serif text-stone-700 leading-relaxed italic">
                      "{reading}"
                    </p>
                  </div>
                ) : (
                  <div className="h-20 flex items-center justify-center">
                    <p className="text-stone-400 italic text-sm">
                      {loading ? "Jean-François se connecte à votre énergie..." : "Ajustez les curseurs pour voir votre état de forme évoluer en temps réel."}
                    </p>
                  </div>
                )}
              </div>

              {reading && (
                <div className="mt-10 animate-in fade-in duration-1000 delay-500 w-full">
                   <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-full flex items-center justify-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all group bg-indigo-50/50 py-4 rounded-2xl border border-indigo-100">
                      Demander un soin complet <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              )}
            </div>

            {/* Décoration arrière plan supplémentaire */}
            <div className="absolute -z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-radial-gradient from-indigo-50/20 to-transparent blur-[120px