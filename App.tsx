import React, { useState, useEffect } from 'react';
import Layout from './components/Layout.tsx';
import ChatRoom from './components/ChatRoom.tsx';
import HealingRequest from './components/HealingRequest.tsx';
import UserDashboard from './components/Dashboard.tsx'; // Renommé en UserDashboard
import Payment from './components/Payment.tsx';
import FloatingChat from './components/FloatingChat.tsx';
import AdminDashboard from './components/AdminDashboard.tsx';
import { Globe, MapPin, Zap, ShieldCheck, Phone, CheckCircle, Quote, Plus, Minus, BookOpen, Star, Wind, Users, Clock } from 'lucide-react';

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
  const [visitorCount, setVisitorCount] = useState(8530);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const titles: Record<string, string> = {
      home: "Jean-François | Magnétiseur à Distance Toute France",
      chat: "Posez vos questions | Jean-François Magnétiseur",
      healing: "Demande de soin sur photo | Magnétisme à distance",
      payment: "Règlement & Participation | Jean-François",
      dashboard: "Mon Espace | Jean-François", // Titre mis à jour
      admin: "Espace Privé Administrateur | Jean-François"
    };
    document.title = titles[activeTab] || "Jean-François Magnétiseur";
    
    if (activeTab === 'home') {
      const timer = setTimeout(() => {
        setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  const formattedDate = currentTime.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedTime = currentTime.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const renderContent = () => {
    switch (activeTab) {
      case 'chat': return <ChatRoom onStartHealing={() => setActiveTab('healing')} />;
      case 'healing': return <HealingRequest onSuccess={() => setActiveTab('payment')} />;
      case 'payment': return <Payment />;
      case 'dashboard': return <UserDashboard onStartHealing={() => setActiveTab('healing')} />; // Utilisation de UserDashboard
      case 'admin': return <AdminDashboard />;
      default:
        return (
          <div className="page-fade">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden bg-white">
              <div className="energy-field w-96 h-96 bg-indigo-100 -top-20 -left-20"></div>
              <div className="energy-field w-[500px] h-[500px] bg-amber-50 -bottom-40 -right-20" style={{ animationDelay: '2s' }}></div>

              <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-10">
                  <div className="flex flex-col gap-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-900 ml-1">Jean-François Magnétiseur Guérisseur</span>
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full w-fit">
                      <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600">Soin à distance & Sur place à Alençon</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-stone-400 text-xs font-medium">
                      <Users size={14} className="text-stone-300" />
                      <span>Plus de <strong className="text-stone-900">{visitorCount.toLocaleString()}</strong> personnes accompagnées avec succès</span>
                    </div>
                  </div>

                  <h1 className="text-6xl md:text-[72px] font-serif font-bold text-stone-900 leading-[0.95] tracking-tight">
                    L'énergie est le lien invisible <br/>
                    <span className="text-indigo-600 italic font-normal">qui nous unit tous</span> :<br/>
                    mon souffle vous rejoint.
                  </h1>
                  <p className="text-xl text-stone-600 font-light max-w-lg leading-relaxed">
                    Je m'appelle Jean-François. J'utilise la force du magnétisme pour soulager vos maux, <strong>peu importe où vous vous trouvez sur la planète.</strong>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 pt-4">
                    <button onClick={() => setActiveTab('healing')} className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all btn-glow flex items-center justify-center gap-3 group shadow-xl shadow-indigo-100">
                      <span>Soin sur photo</span>
                      <ShieldCheck size={20} />
                    </button>
                    {/* Le bouton "Soin Express" a été retiré */}
                  </div>
                </div>
                
                <div className="relative hidden md:flex flex-col items-center">
                  {/* Horloge Temps Réel au-dessus de la Terre */}
                  <div className="mb-8 flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-1000">
                    <div className="flex items-center gap-3 bg-stone-50 border border-stone-100 px-6 py-3 rounded-full shadow-sm">
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                      </div>
                      <Clock size={16} className="text-indigo-600" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-stone-900 font-mono font-bold text-lg tabular-nums">{formattedTime}</span>
                        <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">{formattedDate}</span>
                      </div>
                    </div>
                    <div className="w-px h-8 bg-gradient-to-b from-stone-200 to-transparent mt-2"></div>
                  </div>

                  <div className="aspect-[4/5] bg-stone-100 rounded-[5rem] overflow-hidden shadow-inner relative group border-8 border-stone-50 w-full">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Énergie cosmique tournant autour de la terre" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-stone-900/10 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/95 backdrop-blur-md rounded-3xl border border-white shadow-2xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Globe size={16} className="text-indigo-600" />
                        <p className="text-stone-400 text-[10px] uppercase font-bold tracking-widest">Action Universelle</p>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-stone-800 italic leading-snug">"La puissance du magnétisme transcende l'espace et le temps."</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Témoignages Section */}
            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-16">
                  <div className="h-px flex-1 bg-stone-100"></div>
                  <h2 className="text-3xl font-serif font-bold italic text-stone-400">Paroles de patients</h2>
                  <div className="h-px flex-1 bg-stone-100"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {[
                    { name: "Catherine D.", city: "Alençon", text: "Habitant Alençon, j'ai fait appel à Jean-François pour des migraines chroniques. Le soulagement a été quasi immédiat. Une chance de l'avoir à nos côtés.", subject: "Migraines" },
                    { name: "Bernard T.", city: "Alençon", text: "Un magnétiseur exceptionnel ici même à Alençon. Il m'a soigné une sciatique qui me paralysait depuis des semaines. Merci pour votre don.", subject: "Sciatique" },
                    { name: "Sophie M.", city: "Lyon", text: "Jean-François m'a aidé pour un zona très douloureux. En deux séances à distance, le feu s'est éteint. Incroyable.", subject: "Zona" },
                    { name: "Marc D.", city: "Paris", text: "Mes douleurs de dos chroniques ont disparu après l'envoi de ma photo. Un vrai soulagement.", subject: "Douleurs de dos" },
                    { name: "Élise L.", city: "Bordeaux", text: "Une bienveillance rare. On ressent l'énergie même à des centaines de kilomètres.", subject: "Stress & Anxiété" },
                    { name: "Thomas R.", city: "Nantes", text: "Brûlure domestique grave, Jean-François a 'coupé le feu' immédiatement à distance. La cicatrisation a été fulgurante sans laisser de trace.", subject: "Coupeur de feu" },
                    { name: "Julie V.", city: "Strasbourg", text: "Ma fille souffrait d'un eczéma tenace depuis des mois. Après le soin sur photo, sa peau s'est apaisée en quelques jours seulement.", subject: "Eczéma infantile" },
                    { name: "Antoine P.", city: "Marseille", text: "En plein burn-out, j'ai retrouvé une clarté d'esprit et un calme intérieur que je n'espérais plus grâce à son travail énergétique.", subject: "Burn-out / Épuisement" }
                  ].map((t, i) => (
                    <div key={i} className="p-10 bg-stone-50 rounded-[3rem] space-y-6 relative group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-stone-100">
                      <Quote className="text-indigo-200 absolute top-8 right-8" size={40} />
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                      </div>
                      <p className="text-stone-600 italic leading-relaxed text-sm">"{t.text}"</p>
                      <div>
                        <p className="font-bold text-stone-900">{t.name}</p>
                        <p className="text-xs text-indigo-500 uppercase tracking-widest">{t.city} • {t.subject}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 bg-stone-50">
              <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-5xl font-serif font-bold">Questions Fréquentes</h2>
                  <p className="text-stone-500">Comprendre le fonctionnement du soin à distance.</p>
                </div>
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-stone-100">
                  <FAQItem 
                    question="Comment le magnétisme peut-il agir à distance ?" 
                    answer="L'énergie n'a pas de barrière physique. En travaillant sur votre photo, je me connecte à votre vibration énergétique unique. C'est un peu comme une fréquence radio que l'on capte peu importe la distance."
                  />
                  <FAQItem 
                    question="De quoi avez-vous besoin pour le soin ?" 
                    answer="Une photo récente où vous êtes seul(e), votre nom, prénom et date de naissance. Ces éléments me servent de 'canal' pour diriger le souffle et l'énergie vers vous."
                  />
                  <FAQItem 
                    question="Combien de temps dure l'effet d'un soin ?" 
                    answer="Cela dépend de la pathologie. Pour un zona ou une brûlure, l'effet est often immédiat. Pour des douleurs chroniques, le travail peut infuser pendant plusieurs jours."
                  />
                  <FAQItem 
                    question="Est-ce un don ou une technique ?" 
                    answer="C'est une sensibilité naturelle (le don) travaillée par des années de pratique et de connexion au souffle vital. Je ne suis qu'un intermédiaire pour relancer vos propres capacités de guérison."
                  />
                </div>
              </div>
            </section>

            {/* City Grid SEO */}
            <section className="py-20 bg-stone-50 border-t border-stone-100">
              <div className="max-w-7xl mx-auto px-6">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-10 text-center">Présence énergétique nationale</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-12">
                  {["Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Montpellier", "Strasbourg", "Bordeaux", "Lille", "Rennes", "Reims", "Toulon", "Saint-Étienne", "Le Havre", "Grenoble", "Dijon", "Angers", "Villeurbanne", "Alençon"].map(city => (
                    <div key={city} className="flex items-center gap-2 text-stone-400 hover:text-indigo-600 transition-colors cursor-default">
                      <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                      <span className="text-xs">Magnétiseur {city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-stone-900 text-white">
              <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold">Besoin d'un soin énergétique ?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <button onClick={() => setActiveTab('healing')} className="px-12 py-6 bg-white text-stone-900 rounded-3xl font-bold text-xl hover:bg-indigo-50 transition-all shadow-xl">Démarrer mon soin à distance</button>
                   <a href="tel:0955554462" className="px-12 py-6 border border-stone-700 rounded-3xl font-bold text-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-3">
                     <Phone size={20} /> 09.55.55.44.62
                   </a>
                </div>
                <p className="text-stone-500 text-sm">Action immédiate après réception de votre photo.</p>
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