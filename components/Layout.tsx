
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart, MessageCircle, Home, LayoutDashboard, Globe, CreditCard, Wind, Clock, Users } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liveUsers, setLiveUsers] = useState(14);

  // Horloge en temps réel
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulation de fluctuation du compteur "En direct" (entre 12 et 19)
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUsers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const next = prev + change;
        return next >= 10 && next <= 20 ? next : prev;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'chat', label: 'Questions', icon: MessageCircle },
    { id: 'healing', label: 'Soin Photo', icon: Heart },
    { id: 'soin-express', label: 'Soin Express', icon: Wind },
    { id: 'payment', label: 'Règlement', icon: CreditCard },
    { id: 'dashboard', label: 'Mon Espace', icon: LayoutDashboard },
  ];

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar - Date, Heure et Live */}
      <div className="bg-stone-900 text-white/70 py-2 px-6 text-[10px] font-bold uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-2 z-[60]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-indigo-400" />
            <span>{formattedDate} — {formattedTime}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Users size={12} className="text-emerald-400" />
            <span className="text-white">{liveUsers} personnes en direct</span>
          </div>
        </div>
      </div>

      <header className="fixed top-0 md:top-8 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex flex-col cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-900 group-hover:text-indigo-600 transition-colors">
              Jean-François
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-500 flex items-center gap-1">
              <Globe size={10} /> Soin à distance • Toute la France
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-[11px] font-bold uppercase tracking-widest transition-all ${
                  activeTab === item.id ? 'text-indigo-600' : 'text-stone-400 hover:text-stone-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="tel:0955554462" 
              className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full text-[11px] font-bold hover:bg-black transition-all"
            >
              <Phone size={14} />
              09.55.55.44.62
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-100 p-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-4 w-full p-4 rounded-2xl text-lg font-bold ${
                  activeTab === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-stone-600'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1 pt-20 md:pt-28">
        {children}
      </main>

      <footer className="bg-stone-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <h2 className="text-3xl font-serif font-bold italic">L'énergie au service de votre santé.</h2>
            <p className="text-stone-400 max-w-sm">Pratique ancestrale et bienveillante disponible partout en France par le magnétisme sur photo.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-stone-200">Contact National</h4>
            <p className="text-stone-500">Alençon (61) & France entière<br/>Consultations à distance</p>
            <p className="text-stone-500 font-bold">09.55.55.44.62</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-stone-200">Mentions</h4>
            <p className="text-stone-500 text-sm italic">Le magnétisme ne se substitue pas à un avis médical. L'action à distance complète les soins traditionnels sans les remplacer.</p>
            <div className="pt-4 text-[10px] text-stone-600 uppercase tracking-widest font-bold">
               Version 2.0 (Correctif Vercel)
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
