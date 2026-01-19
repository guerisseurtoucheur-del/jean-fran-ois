
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout.tsx';
import ChatRoom from './components/ChatRoom.tsx';
import HealingRequest from './components/HealingRequest.tsx';
import Dashboard from './components/Dashboard.tsx';
import Payment from './components/Payment.tsx';
import { Globe, MapPin, Zap, ShieldCheck, Phone } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'chat': return <ChatRoom onStartHealing={() => setActiveTab('healing')} />;
      case 'healing': return <HealingRequest onSuccess={() => setActiveTab('payment')} />;
      case 'payment': return <Payment />;
      case 'dashboard': return <Dashboard />;
      default:
        return (
          <div className="page-fade">
            {/* Hero Section Zen */}
            <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden bg-white">
              <div className="energy-field w-96 h-96 bg-indigo-100 -top-20 -left-20"></div>
              <div className="energy-field w-[500px] h-[500px] bg-amber-50 -bottom-40 -right-20" style={{ animationDelay: '2s' }}></div>

              <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-10">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600">Soin à distance • Toute la France</span>
                  </div>

                  <h1 className="text-7xl md:text-[90px] font-serif font-bold text-stone-900 leading-[0.85] tracking-tight">
                    L'énergie <br/>
                    <span className="text-indigo-600 italic font-normal">sans frontières</span><br/>
                    ni limites.
                  </h1>

                  <p className="text-xl text-stone-600 font-light max-w-lg leading-relaxed">
                    Je m'appelle Jean-François. J'utilise mon souffle et le magnétisme pour soulager vos maux, <strong>peu importe où vous vous trouvez en France.</strong>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5 pt-4">
                    <button 
                      onClick={() => setActiveTab('healing')}
                      className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all btn-glow flex items-center justify-center gap-3 group shadow-xl shadow-indigo-100"
                    >
                      <span>Soin sur photo (France)</span>
                      <ShieldCheck size={20} />
                    </button>
                    <button 
                      onClick={() => setActiveTab('chat')}
                      className="px-10 py-5 bg-stone-900 text-white rounded-2xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-3"
                    >
                      <span>Questions</span>
                    </button>
                  </div>
                </div>

                <div className="relative hidden md:block">
                  <div className="aspect-[4/5] bg-stone-100 rounded-[5rem] overflow-hidden shadow-inner relative group border-8 border-stone-50">
                    <img 
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
                      alt="Nature et air pur"
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/95 backdrop-blur-md rounded-3xl border border-white shadow-2xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Globe size={16} className="text-indigo-600" />
                        <p className="text-stone-400 text-[10px] uppercase font-bold tracking-widest">Action Nationale</p>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-stone-800 italic leading-snug">
                        "La distance n'altère pas la force du souffle. Je vous accompagne partout en France."
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section Services plus aérée */}
            <section className="py-32 bg-stone-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-5xl font-serif font-bold">Mes domaines d'intervention</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">Par le magnétisme et la vibration, j'agis sur les maux qui vous pèsent au quotidien.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-16">
                  <div className="space-y-6 p-8 bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-stone-100">
                    <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-3xl">🧬</div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">Maux de peau</h3>
                    <p className="text-stone-500 leading-relaxed">Zona, eczéma, psoriasis, ou brûlures. Le magnétisme apaise instantanément le feu cutané.</p>
                  </div>
                  <div className="space-y-6 p-8 bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-stone-100">
                    <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-3xl">⚡</div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">Douleurs Physiques</h3>
                    <p className="text-stone-500 leading-relaxed">Dos, articulations, migraines. Je travaille sur les blocages pour libérer votre corps.</p>
                  </div>
                  <div className="space-y-6 p-8 bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-stone-100">
                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-3xl">🌊</div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">Équilibre Vital</h3>
                    <p className="text-stone-500 leading-relaxed">Stress, anxiété, insomnies. Retrouvez une harmonie profonde et un sommeil réparateur.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section Rayonnement France Entière */}
            <section className="py-32 bg-white relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                <div className="relative">
                  <div className="w-full aspect-square bg-indigo-50 rounded-full overflow-hidden flex items-center justify-center border-8 border-white shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?auto=format&fit=crop&q=80&w=800" 
                      alt="France"
                      className="w-full h-full object-cover mix-blend-multiply opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap size={100} className="text-indigo-600/20 animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-lg text-[10px] font-bold uppercase tracking-widest text-stone-600">
                    <MapPin size={12} className="text-indigo-600" /> Disponibilité Immédiate
                  </div>
                  <h2 className="text-5xl font-serif font-bold leading-tight">Le soin à distance : <br/>Une réalité <span className="text-indigo-600 italic">sans limites</span>.</h2>
                  <p className="text-lg text-stone-500 leading-relaxed">
                    L'énergie n'est pas prisonnière de la géographie. Que vous soyez à Alençon, Paris, Marseille ou dans un petit village reculé, mon travail sur photo permet d'établir une connexion directe avec votre corps éthérique. 
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Intervention sur tout le territoire français",
                      "Soin par le souffle et le magnétisme pur",
                      "Accompagnement quotidien à distance",
                      "Résultats identiques au soin en cabinet"
                    ].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 font-medium text-stone-700">
                        <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] text-white">✓</div>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-stone-900 text-white">
              <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold">Prêt à retrouver votre équilibre ?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <button 
                    onClick={() => setActiveTab('healing')}
                    className="px-12 py-6 bg-white text-stone-900 rounded-3xl font-bold text-xl hover:bg-indigo-50 transition-all shadow-xl"
                   >
                     Démarrer mon soin à distance
                   </button>
                   <a href="tel:0955554462" className="px-12 py-6 border border-stone-700 rounded-3xl font-bold text-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-3">
                     <Phone size={20} /> 09.55.55.44.62
                   </a>
                </div>
                <p className="text-stone-500 text-sm">Disponible du lundi au samedi pour vous aider partout en France.</p>
              </div>
            </section>
          </div>
        );
    }
  };

  return <Layout activeTab={activeTab} setActiveTab={setActiveTab}>{renderContent()}</Layout>;
};

export default App;
