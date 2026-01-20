
import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Wind, User, Sparkles, Loader2, ShieldCheck, AlertTriangle, RefreshCw, Terminal, ArrowRight, Settings } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Fonction utilitaire centralisée et optimisée pour Vite/Vercel
const getApiKey = (): string => {
  // 1. Priorité absolue à Vite (import.meta.env)
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      if (import.meta.env.VITE_API_KEY) return import.meta.env.VITE_API_KEY;
      // @ts-ignore
      if (import.meta.env.API_KEY) return import.meta.env.API_KEY;
    }
  } catch (e) {}

  // 2. Fallback process.env (Node/System)
  if (typeof process !== 'undefined' && process.env) {
    if (process.env.VITE_API_KEY) return process.env.VITE_API_KEY;
    if (process.env.REACT_APP_API_KEY) return process.env.REACT_APP_API_KEY;
    if (process.env.NEXT_PUBLIC_API_KEY) return process.env.NEXT_PUBLIC_API_KEY;
    if (process.env.API_KEY) return process.env.API_KEY;
  }
  return '';
};

const Dashboard: React.FC = () => {
  const [dailyWisdom, setDailyWisdom] = useState<string>('');
  const [loadingWisdom, setLoadingWisdom] = useState(true);
  const [keyStatus, setKeyStatus] = useState<'checking' | 'ok' | 'missing'>('checking');
  const [testResult, setTestResult] = useState<string | null>(null);
  
  // États pour le diagnostic détaillé
  const [diagInfo, setDiagInfo] = useState({
    viteKeyFound: false,
    stdKeyFound: false,
    isVercel: false
  });

  const treatments = [
    { id: 1, type: 'Soin Zona', status: 'En cours', date: 'Aujourd\'hui', progress: 65 },
    { id: 2, type: 'Inflammation Dos', status: 'Terminé', date: 'Il y a 2 jours', progress: 100 },
  ];

  useEffect(() => {
    // Diagnostic au chargement
    try {
      const isVercel = window.location.hostname.includes('vercel.app');
      // @ts-ignore
      const vKey = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_KEY;
      
      setDiagInfo({
        viteKeyFound: !!vKey,
        stdKeyFound: !!getApiKey(),
        isVercel: isVercel
      });
    } catch(e) {}
  }, []);

  const testConnection = async () => {
     setTestResult("Test en cours...");
     try {
       const key = getApiKey();
       if (!key) throw new Error("Aucune clé trouvée dans les variables.");
       
       const ai = new GoogleGenAI({ apiKey: key });
       await ai.models.generateContent({
         model: 'gemini-3-flash-preview',
         contents: 'ping',
       });
       setTestResult("✅ SUCCÈS : Clé valide et connectée à Google.");
     } catch (e: any) {
       setTestResult(`❌ ÉCHEC : ${e.message || String(e)}`);
     }
  };

  useEffect(() => {
    const fetchWisdom = async () => {
      try {
        const apiKey = getApiKey();
        
        if (!apiKey) {
           setKeyStatus('missing');
           setDailyWisdom("⚠️ Configuration requise : La connexion énergétique (API) n'est pas établie.");
           setLoadingWisdom(false);
           return;
        } else {
           setKeyStatus('ok');
        }

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
    <div className="max-w-6xl mx-auto p-6 md:p-12 space-y-12 page-fade">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Bonjour.</h1>
          <p className="text-stone-500">Espace de contrôle énergétique.</p>
        </div>
        <div className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all ${
           keyStatus === 'ok' 
             ? 'bg-indigo-50 border-indigo-100 text-indigo-600'
             : 'bg-red-50 border-red-100 text-red-600 animate-pulse'
        }`}>
          {keyStatus === 'ok' ? <Wind size={20} className="" /> : <AlertTriangle size={20} />}
          <span className="text-sm font-bold uppercase tracking-widest">
            {keyStatus === 'ok' ? 'Énergie Active' : 'Connexion Rompue'}
          </span>
        </div>
      </div>

      {/* Guide de dépannage Vercel - Visible seulement si la clé manque */}
      {keyStatus === 'missing' && (
        <div className="bg-red-50 border-2 border-red-100 rounded-[2rem] p-8 space-y-6 shadow-xl animate-in fade-in slide-in-from-top-4">
           <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-full text-red-500 shadow-sm"><Settings size={24} /></div>
              <div>
                 <h2 className="text-2xl font-bold text-red-900">Ça ne marche pas sur Vercel ? C'est normal !</h2>
                 <p className="text-red-700 mt-2">Vous devez ajouter votre Clé API dans les réglages de Vercel. Suivez ces étapes simples :</p>
              </div>
           </div>

           <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
                 <span className="absolute top-0 right-0 bg-red-100 text-red-600 px-3 py-1 rounded-bl-xl font-bold text-xs">ÉTAPE 1</span>
                 <p className="font-bold text-stone-800 mb-2">Allez sur Vercel.com</p>
                 <p className="text-stone-600">Connectez-vous, cliquez sur votre projet, puis cliquez sur l'onglet <strong>Settings</strong> en haut.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
                 <span className="absolute top-0 right-0 bg-red-100 text-red-600 px-3 py-1 rounded-bl-xl font-bold text-xs">ÉTAPE 2</span>
                 <p className="font-bold text-stone-800 mb-2">Environment Variables</p>
                 <p className="text-stone-600">Dans le menu de gauche, choisissez <strong>Environment Variables</strong>. Ajoutez une nouvelle variable :</p>
                 <ul className="mt-2 space-y-1 font-mono text-xs bg-stone-100 p-2 rounded">
                    <li><strong>Key:</strong> VITE_API_KEY</li>
                    <li><strong>Value:</strong> (Collez votre clé Google ici)</li>
                 </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
                 <span className="absolute top-0 right-0 bg-red-100 text-red-600 px-3 py-1 rounded-bl-xl font-bold text-xs">ÉTAPE 3 (CRUCIAL)</span>
                 <p className="font-bold text-stone-800 mb-2">Redéployez !</p>
                 <p className="text-stone-600">Pour que cela marche, il faut refaire un déploiement. Allez dans l'onglet <strong>Deployments</strong>, cliquez sur les 3 points à droite du dernier déploiement &gt; <strong>Redeploy</strong>.</p>
              </div>
           </div>
        </div>
      )}

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

      {/* Diagnostic Footer */}
      <div className="border-t border-stone-100 pt-8 flex flex-col items-center gap-6">
        <div className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 border ${
          keyStatus === 'ok' 
            ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
            : keyStatus === 'missing'
              ? 'bg-red-50 text-red-500 border-red-100' 
              : 'bg-stone-50 text-stone-400 border-stone-100'
        }`}>
          {keyStatus === 'ok' && <><ShieldCheck size={14} /> Système Connecté</>}
          {keyStatus === 'missing' && <><AlertTriangle size={14} /> Clé API non détectée</>}
          {keyStatus === 'checking' && <><Loader2 size={14} className="animate-spin" /> Vérification...</>}
        </div>

        <button 
           onClick={testConnection}
           className="text-xs text-indigo-600 underline flex items-center gap-2 hover:text-indigo-800"
        >
           <RefreshCw size={12} /> Tester la connexion Google manuellement
        </button>
        
        {testResult && (
           <div className={`text-xs font-mono p-2 rounded ${testResult.includes('SUCCÈS') ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
              {testResult}
           </div>
        )}

        {/* Panneau de Diagnostic Technique Discret */}
        <div className="w-full max-w-md bg-stone-100 text-stone-400 p-4 rounded-xl text-[10px] font-mono space-y-2 opacity-50 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2 border-b border-stone-200 pb-1 mb-1">
            <Terminal size={10} />
            <span className="font-bold uppercase">Debug Info</span>
          </div>
          <div className="flex justify-between">
             <span>VITE_API_KEY Detectée ?</span>
             <span>{diagInfo.viteKeyFound ? "OUI" : "NON"}</span>
          </div>
          <div className="flex justify-between">
             <span>Platforme :</span>
             <span>{diagInfo.isVercel ? "Vercel / Cloud" : "Localhost / Autre"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
