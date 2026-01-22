
import React from 'react';
import { Heart, ArrowRight, BookOpen, Users } from 'lucide-react';

interface UserDashboardProps {
  onStartHealing: () => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ onStartHealing }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 space-y-12 page-fade min-h-[70vh]">
      <div className="text-center space-y-4 mb-16">
        <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto text-indigo-600 shadow-lg">
          <BookOpen size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
          Mon Espace
        </h1>
        <p className="text-xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
          Bienvenue dans votre espace personnel. Retrouvez ici les informations générales.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Section Demandes de Soin */}
        <div className="p-8 bg-white rounded-[3rem] border border-stone-100 shadow-xl space-y-6">
          <div className="flex items-center gap-3 text-indigo-600">
            <Heart size={24} fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-widest">Vos Demandes de Soin</span>
          </div>
          <p className="text-stone-600 leading-relaxed">
            Pour le moment, le suivi détaillé de vos demandes nécessite une connexion sécurisée.
            Vous pouvez envoyer une nouvelle demande ou consulter l'historique par échange direct avec Jean-François.
          </p>
          <button
            onClick={onStartHealing}
            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-md group"
          >
            Nouvelle Demande de Soin
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Section Ressources Utiles */}
        <div className="p-8 bg-stone-50 rounded-[3rem] border border-stone-100 shadow-inner space-y-6">
          <div className="flex items-center gap-3 text-stone-700">
            <Users size={24} />
            <span className="text-xs font-bold uppercase tracking-widest">Ressources Utiles</span>
          </div>
          <p className="text-stone-600 leading-relaxed">
            Explorez notre FAQ pour en savoir plus sur le magnétisme, ou utilisez le chat pour poser vos questions à l'assistant.
          </p>
          <div className="flex flex-col gap-3">
            <button className="w-full py-4 bg-white text-stone-800 rounded-xl font-bold border border-stone-200 hover:bg-stone-100 transition-all shadow-sm">
              Consulter la FAQ
            </button>
            <button className="w-full py-4 bg-white text-stone-800 rounded-xl font-bold border border-stone-200 hover:bg-stone-100 transition-all shadow-sm">
              Parler à l'Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;