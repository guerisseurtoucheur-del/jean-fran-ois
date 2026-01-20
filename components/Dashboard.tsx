
import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Wind, User, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Dashboard: React.FC = () => {
  const [dailyWisdom, setDailyWisdom] = useState<string>('');
  const [loadingWisdom, setLoadingWisdom] = useState(true);

  const treatments = [
    { id: 1, type: 'Soin Zona', status: 'En cours', date: 'Aujourd\'hui', progress: 65 },
    { id: 2, type: 'Inflammation Dos', status: 'Terminé', date: 'Il y a 2 jours', progress: 100 },
  ];

  useEffect(() => {
    const fetchWisdom = async () => {
      // Protection si la clé API n'est pas encore configurée
      const apiKey = process.env.API_KEY;
      if (!apiKey || apiKey.includes("API_KEY")) {
        setDailyWisdom("La lumière du souffle vous accompagne aujourd'hui.");
        setLoadingWisdom(false);
        return;
      }

      try {
        const ai = new GoogleGenAI({ apiKey: apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Génère un court message intuitif et bienveillant (max 2 lignes) pour un patient qui vient voir son magnétiseur. Parle d'énergie, de souffle ou de lumière.",
          config: {
            systemInstruction: "Tu es Jean-François, un magnétiseur bienveillant. Ton message doit être poétique et apaisant."
          }
        });
        setDailyWisdom(response.text || "La lumière du souffle vous accompagne aujourd'hui.");
      } catch (err) {
        setDailyWisdom("Votre énergie est votre plus belle alliée.");
      } finally {
        setLoadingWisdom(false);
      }
    };
    fetchWisdom();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-12 space-y-12 page-fade">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-5xl font-serif font-bold">Bonjour.</h1>
          <p className="text-stone-500">Voici l'historique de vos connexions énergétiques.</p>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 bg-indigo-50 rounded-full border border-indigo-100 text-indigo-600">
          <Wind size={20} className="animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-widest">Énergie Active</span>
        </div>
      </div>

      {/* Daily Wisdom Card */}
      <div className="relative p-10 bg-indigo-600 rounded-[3.5rem] text-white overflow-hidden shadow-2xl shadow-indigo-200">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
             <Sparkles size={20} className="text-indigo-200" />
             <span className="text-xs font-bold uppercase tracking-widest opacity-80">Vibration du moment</span>
          </div>
          {loadingWisdom ? (
            <div className="flex items-center gap-3 text-indigo-100 italic">
              <Loader2 size={20} className="animate-spin" />
              <span>Réception du souffle...</span>
            </div>
          ) : (
            <p className="text-3xl font-serif italic leading-relaxed">
              "{dailyWisdom}"
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {treatments.map((t) => (
          <div key={t.id} className="p-8 bg-stone-50 rounded-[3rem] border border-stone-100 hover:shadow-xl transition-all group bg-white">
            <div className="flex justify-between items-start mb-8">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">{t.date}</span>
                <h3 className="text-2xl font-serif font-bold text-stone-900">{t.type}</h3>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                t.status === 'En cours' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
              }`}>
                {t.status}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold text-stone-500 uppercase tracking-tighter">
                <span>Régénération</span>
                <span>{t.progress}%</span>
              </div>
              <div className="h-3 w-full bg-stone-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${t.status === 'En cours' ? 'bg-indigo-500' : 'bg-emerald-500'}`} 
                  style={{ width: `${t.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-200 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="text-sm font-bold text-indigo-600 hover:underline">Détails du ressenti</button>
               <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-stone-900 border-2 border-white flex items-center justify-center text-[10px] text-white">JF</div>
                 <div className="w-8 h-8 rounded-full bg-stone-300 border-2 border-white flex items-center justify-center text-[10px] text-stone-600"><User size={12}/></div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
