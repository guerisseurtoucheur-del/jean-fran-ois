
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart, MessageCircle, Home, LayoutDashboard, Globe, CreditCard, Wind, Clock, Users, Mail, ArrowDown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liveUsers, setLiveUsers] = useState(14);

  // Horloge en temps réel ultra-précise
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulation de fluctuation du compteur "En direct"
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
    { id: 'chat', label: 'Poser vos questions à Jean-François', icon: MessageCircle },
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

  const scrollToNav = () => {
    const header = document.querySelector('header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar - Contact, Date, Heure et Live */}
      <div className="bg-stone-900 text-white/70 py-2.5 px-6 text-[10px] font-bold uppercase tracking-[0.2em] flex flex-col lg:flex-row justify-between items-center gap-4 z-[60] border-b border-white/5">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a href="tel:0955554462" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <Phone size={12} className="text-indigo-400" />
            <span>09.55.55.44.62</span>
          </a>
          <a href="mailto:guerisseurtoucheur@gmail.com" className="flex items-center gap-2 hover:text-indigo-400 transition-colors lowercase tracking-normal">
            <Mail size={12} className="text-indigo-400" />
            <span>guerisseurtoucheur@gmail.com</span>
          </a>
        </div>

        {/* Horloge précise et visible */}
        <div className="hidden lg:flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 text-white shadow-sm">
          <div className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </div>
          <Clock size={12} className="text-indigo-400" />
          <span className="font-mono tabular-nums">{formattedDate} — {formattedTime}</span>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={scrollToNav}
            className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full hover:bg-indigo-600 hover:text-white transition-all text-white border border-white/10 group"
          >
            <ArrowDown size={10} className="group-hover:translate-y-0.5 transition-transform" />
            <span>Accéder au Menu</span>
          </button>
          
          <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400">{liveUsers} en direct</span>
          </div>
        </div>
      </div>

      <header className="fixed top-0 lg:top-12 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-stone-100 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <div 
            className="flex flex-col cursor-pointer group shrink-0"
            onClick={() => setActiveTab('home')}
          >
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-900 group-hover:text-indigo-600 transition-colors leading-none">
              Jean-François
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-500 flex items-center gap-1 mt-1">
              Magnétiseur Guérisseur
            </span>
          </div>

          <nav className="hidden xl:flex items-center gap-1 justify-center flex-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all relative group ${
                  activeTab === item.id 
                    ? 'text-indigo-600 bg-indigo-50/50' 
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                <item.icon size={14} className={activeTab === item.id ? 'text-indigo-600' : 'text-stone-300 group-hover:text-stone-500'} />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  {item.label}
                </span>
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-indigo-600 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <a 
              href="tel:0955554462" 
              className="hidden lg:flex items-center gap-2 px-5 py-3 bg-stone-900 text-white rounded-full text-[11px] font-bold hover:bg-black transition-all shadow-lg shadow-stone-200"
            >
              <Phone size={14} />
              09.55.55.44.62
            </a>
            <button className="xl:hidden p-2 text-stone-900 hover:bg-stone-100 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-100 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300 z-50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-4 w-full p-4 rounded-2xl text-base font-bold transition-all ${
                  activeTab === item.id ? 'bg-indigo-50 text-indigo-600 shadow-inner' : 'text-stone-600 active:bg-stone-50'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeTab === item.id ? 'bg-white text-indigo-600' : 'bg-stone-50 text-stone-400'}`}>
                  <item.icon size={20} />
                </div>
                {item.label}
              </button>
            ))}
            <a 
              href="tel:0955554462" 
              className="flex items-center justify-center gap-3 w-full p-5 bg-stone-900 text-white rounded-2xl text-lg font-bold"
            >
              <Phone size={20} />
              Appeler Jean-François
            </a>
          </div>
        )}
      </header>

      <main className="flex-1 pt-20 lg:pt-40">
        {children}
      </main>

      <footer className="bg-stone-950 text-white py-20 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <h2 className="text-3xl font-serif font-bold italic">L'énergie au service de votre santé.</h2>
            <p className="text-stone-400 max-w-sm">Pratique ancestrale et bienveillante disponible partout en France par le magnétisme sur photo.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-stone-200 uppercase text-xs tracking-widest">Contact National</h4>
            <p className="text-stone-500">Alençon (61) & France entière<br/>Consultations à distance</p>
            <p className="text-stone-300 font-bold text-xl">09.55.55.44.62</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-stone-200 uppercase text-xs tracking-widest">Mentions</h4>
            <p className="text-stone-500 text-sm italic">Le magnétisme ne se substitue pas à un avis médical. L'action à distance complète les soins traditionnels sans les remplacer.</p>
            <div className="pt-4 text-[10px] text-stone-600 uppercase tracking-widest font-bold">
               Version 2.8 (Live Clock & Dynamic AI)
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
