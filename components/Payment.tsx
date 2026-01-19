
import React from 'react';
import { CreditCard, Heart, Lock, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';

const Payment: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 page-fade">
      <div className="text-center space-y-6 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full text-amber-700 text-[10px] font-bold uppercase tracking-widest">
          <Sparkles size={12} /> Équilibre & Gratitude
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 leading-tight">
          Participation & <span className="text-indigo-600 italic">Honoraires</span>
        </h1>
        <p className="text-xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
          Le soin est un échange d'énergie. Votre participation permet de soutenir mon travail et de maintenir cet espace d'accompagnement pour tous.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        <div className="bg-white rounded-[3.5rem] p-10 border border-stone-100 shadow-xl space-y-8 flex flex-col">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-stone-900">Le Don Libre</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Il n'y a pas de tarif imposé pour le souffle. Je laisse chacun libre de contribuer selon ses moyens et son ressenti après le soin ou lors de la demande.
            </p>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-2xl">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-800">Soin à distance</p>
                <p className="text-xs text-stone-500">Action immédiate après réception de la photo.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-2xl">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                <Lock size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-800">Paiement Sécurisé</p>
                <p className="text-xs text-stone-500">Via la plateforme officielle PayPal.</p>
              </div>
            </div>
          </div>

          <a 
            href="https://paypal.me/magnetiseur61" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-6 bg-indigo-600 text-white rounded-[2rem] font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 group"
          >
            <span>Régler via PayPal</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          
          <p className="text-[10px] text-center text-stone-400 uppercase tracking-widest font-medium">
            Aucun compte PayPal requis pour payer par carte
          </p>
        </div>

        <div className="bg-stone-900 rounded-[3.5rem] p-10 text-white space-y-8 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
          
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-indigo-400">
            <Heart size={32} />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold italic">Pourquoi participer ?</h3>
            <p className="text-stone-400 leading-relaxed">
              Chaque soin demande une préparation, une connexion profonde et un suivi énergétique sur plusieurs jours. 
              Votre participation assure la pérennité de ce service de soin à distance dans toute la France.
            </p>
            
            <div className="pt-6 space-y-4">
               <div className="flex items-center gap-3 text-stone-300">
                 <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                 <span className="text-sm">Matériel & Support technique</span>
               </div>
               <div className="flex items-center gap-3 text-stone-300">
                 <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                 <span className="text-sm">Temps de connexion & Suivi</span>
               </div>
               <div className="flex items-center gap-3 text-stone-300">
                 <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                 <span className="text-sm">Engagement spirituel</span>
               </div>
            </div>
          </div>

          <div className="mt-auto pt-10">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 italic text-stone-400 text-sm">
              "L'argent est un outil de circulation de l'énergie. Donnez ce qui vous semble juste."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
