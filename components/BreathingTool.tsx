
import React, { useState, useEffect } from 'react';
import { Wind, Play, Pause, RotateCcw, Sparkles } from 'lucide-react';

const BreathingTool: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: number;
    if (isActive) {
      interval = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setPhase((currentPhase) => {
              if (currentPhase === 'inhale') return 'hold';
              if (currentPhase === 'hold') return 'exhale';
              return 'inhale';
            });
            return 0;
          }
          return prev + 1; // Ajustement de la vitesse pour env. 4-5 secondes par phase
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Inspirez le souffle vital';
      case 'hold': return 'Laissez infuser';
      case 'exhale': return 'Expirez les tensions';
    }
  };

  const circleScale = phase === 'inhale' 
    ? 1 + (progress / 100) * 0.5 
    : phase === 'hold' 
      ? 1.5 
      : 1.5 - (progress / 100) * 0.5;

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 page-fade text-center space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
          <Wind size={14} /> Apaisement Immédiat
        </div>
        <h1 className="text-5xl font-serif font-bold text-stone-900 italic">Soin Express par le Souffle</h1>
        <p className="text-stone-500 max-w-xl mx-auto">Prenez un instant pour vous reconnecter à votre énergie. Suivez le rythme du cercle pour une cohérence cardiaque profonde.</p>
      </div>

      <div className="relative flex items-center justify-center py-20">
        {/* Background Aura */}
        <div 
          className="absolute w-64 h-64 bg-indigo-100 rounded-full blur-[80px] opacity-50 transition-all duration-1000"
          style={{ transform: `scale(${circleScale * 1.2})` }}
        ></div>

        {/* The Breathing Circle */}
        <div 
          className="relative w-64 h-64 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-indigo-50 transition-transform duration-1000 ease-in-out z-10"
          style={{ transform: `scale(${circleScale})` }}
        >
          <div className="text-center space-y-2">
             <div className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                <Wind size={40} className="text-indigo-600 mx-auto" />
             </div>
          </div>
        </div>

        {/* Phase Text Overlay */}
        <div className="absolute -bottom-10 w-full text-center">
          <p className="text-2xl font-serif font-bold text-stone-800 animate-pulse">
            {isActive ? getPhaseText() : 'Prêt pour une pause ?'}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-6 pt-10">
        <button 
          onClick={() => setIsActive(!isActive)}
          className={`flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl ${
            isActive ? 'bg-stone-900 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {isActive ? <Pause size={20} /> : <Play size={20} />}
          {isActive ? 'Pause' : 'Commencer le soin'}
        </button>
        <button 
          onClick={() => { setIsActive(false); setProgress(0); setPhase('inhale'); }}
          className="p-5 border border-stone-200 rounded-2xl text-stone-400 hover:text-stone-900 transition-colors"
        >
          <RotateCcw size={24} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 pt-20">
        <div className="p-8 bg-stone-50 rounded-[2.5rem] border border-stone-100 space-y-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm mx-auto"><Sparkles size={20}/></div>
          <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Libération</p>
          <p className="text-sm text-stone-600">Apaise le système nerveux en moins de 3 minutes.</p>
        </div>
        <div className="p-8 bg-stone-50 rounded-[2.5rem] border border-stone-100 space-y-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm mx-auto"><Wind size={20}/></div>
          <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Ancrage</p>
          <p className="text-sm text-stone-600">Renforce votre présence énergétique et votre focus.</p>
        </div>
        <div className="p-8 bg-stone-50 rounded-[2.5rem] border border-stone-100 space-y-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm mx-auto"><Wind size={20}/></div>
          <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Équilibre</p>
          <p className="text-sm text-stone-600">Idéal avant une nuit de sommeil ou après un stress.</p>
        </div>
      </div>
    </div>
  );
};

export default BreathingTool;
