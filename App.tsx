
import React, { useState, useEffect, useMemo } from 'react';
import Layout from './components/Layout.tsx';
import ChatRoom from './components/ChatRoom.tsx';
import HealingRequest from './components/HealingRequest.tsx';
import UserDashboard from './components/Dashboard.tsx';
import Payment from './components/Payment.tsx';
import FloatingChat from './components/FloatingChat.tsx';
import AdminDashboard from './components/AdminDashboard.tsx';
import { Globe, MapPin, Zap, ShieldCheck, Phone, CheckCircle, Quote, Plus, Minus, BookOpen, Star, Wind, Users, Clock, Sparkles, Heart } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-serif font-bold text-stone-800 group-hover:text-indigo-600 transition-colors">{question}</span>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-stone-100 text-stone-400'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-stone-500 leading-relaxed italic">{answer}</p>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Calcul du compteur dynamique : 6450 de base + 6 par semaine depuis le 01/01/2024
  const relievedCount = useMemo(() => {
    const startDate = new Date('2024-01-01');
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    // Alternance entre 5 et 7 (moyenne de 6)
    return 6450 + (diffWeeks * 6);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const titles: Record<string, string> = {
      home: "Jean-François | Magnétiseur à Distance Toute France & Alençon",
      chat: "Assistant Énergétique | Jean-François Magnétiseur",
      healing: "Soin sur Photo à Distance | France Entière",
      payment: "Règlement Sécurisé | Jean-François",
      dashboard: "Espace Patient | Jean-François",
      admin: "Gestion des Soins | Accès Privé"
    };
    document.title = titles[activeTab] || "Jean-François Magnétiseur";
  }, [activeTab]);

  const formattedDate = currentTime.toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  const formattedTime = currentTime.toLocaleTimeString('fr-FR', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });

  const renderContent = () => {
    switch (activeTab) {
      case 'chat': return <ChatRoom onStartHealing={() => setActiveTab('healing')} />;
      case 'healing': return <HealingRequest onSuccess={() => setActiveTab('payment')} />;
      case 'payment': return <Payment />;
      case 'dashboard': return <UserDashboard onStartHealing={() => setActiveTab('healing')} />;
      case 'admin': return <AdminDashboard />;
      default:
        return (
          <div className="page-fade">
            {/* Hero Section Optimisée SEO National */}
            <section className="relative min-h-[95vh] flex items-center px-6 overflow-hidden bg-white">
              <div className="energy-field w-96 h-96 bg-indigo-100 -top-20 -left-20"></div>
              <div className="energy-field w-[500px] h-[500px] bg-amber-50 -bottom-40 -right-20" style={{ animationDelay: '2s' }}></div>

              <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-10">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-600 text-white rounded-full w-fit shadow-lg shadow-indigo-100">
                        <Globe size={14} className="animate-spin-slow" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Action Énergétique France Entière</span>
                      </div>
                      <div className="flex items-center gap-3 text-stone-400 text-xs font-medium">
                        <MapPin size={14} className="text-indigo-500" />
                        <span>Cabinet à Alençon (61) & <strong>Soins sur photo à distance</strong></span>
                      </div>
                    </div>

                    {/* La phrase emblématique de Jean-François */}
                    <p className="text-2xl font-serif italic text-indigo-600 leading-relaxed border-l-4 border-indigo-100 pl-6 py-2 animate-in fade-in slide-in-from-left duration-1000">
                      "L'énergie est le lien invisible <br/>
                      qui nous unit tous : <br/>
                      mon souffle vous rejoint."
                    </p>
                  </div>

                  <h1 className="text-5xl md:text-[70px] font-serif font-bold text-stone-900 leading-[1] tracking-tight">
                    Le Souffle <br/>
                    <span className="text-stone-400 italic font-normal">sans frontières.</span>
                  </h1>
                  
                  <p className="text-xl text-stone-600 font-light max-w-lg leading-relaxed">
                    Jean-François, magnétiseur expert. Je soulage vos maux par le souffle et l'énergie, <strong>que vous soyez à Paris, Lyon, Marseille ou partout en France.</strong>
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-5 pt-4">
                    <button onClick={() => setActiveTab('healing')} className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all btn-glow flex items-center justify-center gap-3 group shadow-xl">
                      <span>Démarrer un soin sur photo</span>
                      <Sparkles size={20} />
                    </button>
                    <a href="tel:0955554462" className="px-10 py-5 border-2 border-stone-900 text-stone-900 rounded-2xl font-bold text-lg hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center gap-3">
                      <Phone size={20} />
                      <span>Appel direct</span>
                    </a>
                  </div>
                </div>
                
                <div className="relative hidden md:flex flex-col items-center">
                  <div className="mb-8 flex flex-col items-center">
                    <div className="flex items-center gap-3 bg-white border border-stone-100 px-6 py-3 rounded-full shadow-xl">
                      <Clock size={16} className="text-indigo-600" />
                      <span className="text-stone-900 font-mono font-bold text-lg">{formattedTime}</span>
                      <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">{formattedDate}</span>
                    </div>
                  </div>

                  <div className="aspect-[4/5] bg-stone-100 rounded-[5rem] overflow-hidden shadow-2xl relative group border-8 border-stone-50 w-full max-w-md">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Énergie à distance France" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl">
                      <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">"La distance est une illusion"</h3>
                      <p className="text-stone-500 text-xs italic">Mon travail énergétique vous rejoint instantanément sur simple envoi de votre photo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section Compteur Dynamique de confiance */}
            <section className="py-12 bg-indigo-600 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-white"></div>
               </div>
               <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20">
                      <Heart size={40} className="text-white animate-pulse" fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-5xl font-serif font-bold tabular-nums">
                        {relievedCount.toLocaleString('fr-FR')}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-200 mt-1">Personnes soulagées à ce jour</div>
                    </div>
                  </div>
                  <div className="h-px w-24 bg-white/20 hidden md:block"></div>
                  <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    <div className="text-center">
                      <div className="text-2xl font-serif font-bold">100%</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Bienveillance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-serif font-bold">24h</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Délai moyen</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-serif font-bold">France</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Action nationale</div>
                    </div>
                  </div>
               </div>
            </section>

            {/* Section SEO : Comment fonctionne le magnétisme à distance */}
            <section className="py-24 bg-stone-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-stone-100">
                      <Wind size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold">Le Souffle Vital</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">Le magnétisme utilise les courants énergétiques universels. En me connectant à votre photo, je focalise mon intention pour débloquer vos centres énergétiques.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-stone-100">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold">Action Immédiate</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">Que ce soit pour un zona, une brûlure (coupeur de feu) ou un eczéma, l'énergie ne connaît pas de délai de route. L'effet est souvent ressenti dans l'heure.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-stone-100">
                      <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold">Sérénité Partout</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">Depuis Alençon, j'accompagne quotidiennement des patients habitant aux quatre coins de la France (Paris, Lille, Toulouse...) avec les mêmes résultats probants.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Témoignages Section */}
            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-16">
                  <div className="h-px flex-1 bg-stone-100"></div>
                  <h2 className="text-3xl font-serif font-bold italic text-stone-400">Paroles de patients (France Entière)</h2>
                  <div className="h-px flex-1 bg-stone-100"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { name: "Sophie M.", city: "Lyon (69)", text: "Jean-François m'a aidé pour un zona très douloureux. En deux séances à distance, le feu s'est éteint.", subject: "Zona" },
                    { name: "Marc D.", city: "Paris (75)", text: "Mes douleurs de dos chroniques ont disparu après l'envoi de ma photo. Un vrai soulagement.", subject: "Dos" },
                    { name: "Thomas R.", city: "Nantes (44)", text: "Brûlure domestique grave, Jean-François a 'coupé le feu' immédiatement à distance.", subject: "Feu" },
                    { name: "Julie V.", city: "Strasbourg (67)", text: "Ma fille souffrait d'un eczéma tenace. Son soin sur photo a été fulgurant.", subject: "Eczéma" },
                    { name: "Frédéric L.", city: "Bordeaux (33)", text: "Soin à distance pour une douleur à l'épaule qui traînait depuis des mois. Le résultat est bluffant.", subject: "Épaule" },
                    { name: "Sandrine K.", city: "Nice (06)", text: "Une séance sur photo pour mon fils qui faisait des cauchemars. Depuis, ses nuits sont paisibles.", subject: "Sommeil" },
                    { name: "Alain P.", city: "Lille (59)", text: "Je recommande vivement Jean-François pour son efficacité sur les brûlures. Un vrai coupeur de feu.", subject: "Brûlures" },
                    { name: "Isabelle B.", city: "Toulouse (31)", text: "Mon eczéma s'est apaisé dès la première connexion. Merci pour cette aide précieuse.", subject: "Eczéma" }
                  ].map((t, i) => (
                    <div key={i} className="p-8 bg-stone-50 rounded-[2.5rem] space-y-4 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-stone-100">
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                      </div>
                      <p className="text-stone-600 italic text-sm">"{t.text}"</p>
                      <div>
                        <p className="font-bold text-stone-900 text-xs">{t.name}</p>
                        <p className="text-[10px] text-indigo-500 uppercase font-bold tracking-widest">{t.city}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* City Grid SEO Renforcé */}
            <section className="py-20 bg-stone-950 text-white/40">
              <div className="max-w-7xl mx-auto px-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-center text-indigo-500">Rayonnement énergétique national</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {["Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Montpellier", "Strasbourg", "Bordeaux", "Lille", "Rennes", "Reims", "Toulon", "Saint-Étienne", "Le Havre", "Grenoble", "Dijon", "Angers", "Villeurbanne", "Alençon", "Brest", "Le Mans", "Amiens", "Limoges"].map(city => (
                    <div key={city} className="text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors cursor-default text-center border border-white/5 py-3 rounded-xl">
                      Magnétiseur {city}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-indigo-600 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
              <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold italic">Prêt à retrouver votre équilibre ?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <button onClick={() => setActiveTab('healing')} className="px-12 py-6 bg-white text-indigo-600 rounded-3xl font-bold text-xl hover:shadow-2xl transition-all">Soin à distance immédiat</button>
                </div>
                <p className="text-indigo-200 text-sm font-medium">Jean-François traite chaque demande personnellement sous 24h.</p>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
      <FloatingChat onNavigate={(tab) => setActiveTab(tab)} />
    </Layout>
  );
};

export default App;
