import React from 'react';
import { Heart, CreditCard, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HealingRequestProps {
  onSuccess: () => void;
}

const HealingRequest: React.FC<HealingRequestProps> = ({ onSuccess }) => {
  // Utilisation de l'URL embed avec l'ID personnel jaPN0Q fourni par l'utilisateur
  const TALLY_URL = "https://tally.so/embed/jaPN0Q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <div className="bg-white rounded-[3rem] md:rounded-[4rem] border border-stone-100 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
        
        {/* Header de la section */}
        <div className="p-8 md:p-12 text-center space-y-4 relative z-10 border-b border-stone-50">
          <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto text-indigo-600">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">Demande de Soin</h2>
          <p className="text-stone-500 max-w-lg mx-auto italic">
            Remplissez ce formulaire sécurisé pour m'envoyer votre photo et vos informations. 
            Je traiterai votre demande dans les plus brefs délais.
          </p>
        </div>

        {/* Intégration Tally */}
        <div className="relative min-h-[600px] bg-stone-50/30">
          <iframe 
            src={TALLY_URL}
            width="100%" 
            height="800" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="Formulaire Jean-François Magnétiseur"
            className="w-full h-[800px]"
          ></iframe>
        </div>

        {/* Footer avec lien direct vers paiement si besoin */}
        <div className="p-8 md:p-12 bg-indigo-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Sparkles size={18} className="text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Étape suivante</span>
            </div>
            <p className="text-lg font-serif italic">Une fois votre formulaire envoyé, n'oubliez pas de finaliser votre démarche.</p>
          </div>
          
          <button 
            onClick={onSuccess}
            className="px-8 py-5 bg-white text-indigo-900 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-950/20 group whitespace-nowrap"
          >
            <CreditCard size={20} />
            Accéder au règlement
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Note d'information */}
      <div className="mt-8 flex items-center justify-center gap-4 text-stone-400">
        <div className="flex -space-x-2">
          {[1,2,3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 flex items-center justify-center">
              <Heart size={12} fill="currentColor" />
            </div>
          ))}
        </div>
        <p className="text-xs font-medium uppercase tracking-widest">Confidentialité garantie • Transmission sécurisée</p>
      </div>
    </div>
  );
};

export default HealingRequest;