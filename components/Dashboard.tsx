
import React from 'react';
import { Clock, CheckCircle, Wind, User } from 'lucide-react';

const Dashboard: React.FC = () => {
  const treatments = [
    { id: 1, type: 'Soin Zona', status: 'En cours', date: 'Aujourd\'hui', progress: 65 },
    { id: 2, type: 'Inflammation Dos', status: 'Terminé', date: 'Il y a 2 jours', progress: 100 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-12 space-y-12 page-fade">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h1 className="text-5xl font-serif font-bold">Bonjour.</h1>
          <p className="text-stone-500">Voici l'historique de vos connexions énergétiques.</p>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 bg-indigo-50 rounded-full border border-indigo-100 text-indigo-600">
          <Wind size={20} className="animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-widest">Énergie Active</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {treatments.map((t) => (
          <div key={t.id} className="p-8 bg-stone-50 rounded-[3rem] border border-stone-100 hover:shadow-xl transition-all group">
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
