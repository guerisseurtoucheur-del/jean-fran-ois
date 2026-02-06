
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart, MessageCircle, Home, LayoutDashboard, Globe, CreditCard, Wind, Clock, Users, Mail, ArrowDown, MapPin, Sparkles } from 'lucide-react';
import MobileBottomNav from './MobileBottomNav.tsx';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liveUsers, setLiveUsers] = useState(14);
  const [scrolled, setScrolled] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

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

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      setClickCount(0);
      setActiveTab('admin');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setTimeout(() => setClickCount(0), 2000);
  };

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'chat', label: 'Questions', icon: MessageCircle },
    { id: 'healing', label: 'Soin Photo', icon: Heart },
    { id: 'payment', label: 'Règlement', icon: CreditCard },
    { id: 'dashboard', label: 'Mon Espace', icon: LayoutDashboard },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Banner Discrète - Uniquement Info Flash */}
      <div className={`bg-stone-950 text-white/50 py-1.5 px-6 text-[9px] font-bold uppercase tracking-[0.3em] flex justify-center items-center gap-8 z-[70] transition-all duration-500 ${scrolled ? '-translate-y-full opacity-0 h-0' : 'h-8'}`}>
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse"></span>
          Cabinet Alençon & France Entière
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Clock size={10} />
          {currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* Header Unifié "Crystal" */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'top-0 py-2' : 'top-8 py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between gap-8 px-6 h-16 md:h-20 rounded-[2rem] border transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-stone-100 shadow-xl' : 'bg-white/60 backdrop-blur-md border-white/20'}`}>
            
            {/* Logo Signature */}
            <div className="flex items-center gap-4 cursor-pointer group shrink-0" onClick={() => setActiveTab('home')}>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-stone-900 leading-none">Jean-François</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-3 h-px bg-indigo-400"></span>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold text-indigo-500">Magnétiseur</span>
                </div>
              </div>
            </div>

            {/* Navigation Bureau - Design Minimaliste */}
            <nav className="hidden xl:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all relative group ${activeTab === item.id ? 'text-indigo-600 bg-indigo-50/50' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'}`}
                >
                  <item.icon size={14} className={activeTab === item.id ? 'text-indigo-600' : 'text-stone-300 group-hover:text-stone-500'} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                  {activeTab === item.id && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-indigo-600 rounded-full"></span>
                  )}
                </button>
              ))}
            </nav>

            {/* Actions & Status */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-emerald-500/5 rounded-full border border-emerald-500/10 text-[10px] font-bold text-emerald-600">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                {liveUsers} en ligne
              </div>

              <a href="tel:0955554462" className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full text-[11px] font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 btn-glow">
                <Phone size={14} />
                <span className="hidden sm:inline">09.55.55.44.62</span>
              </a>

              <button className="xl:hidden p-2 text-stone-900 hover:bg-stone-100 rounded-full transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Amélioré */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-24 left-6 right-6 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-stone-100 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-300 z-[60]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setIsMenuOpen(false); }}
                className={`flex items-center gap-4 w-full p-4 rounded-2xl text-base font-bold transition-all ${activeTab === item.id ? 'bg-indigo-600 text-white shadow-xl' : 'text-stone-600 bg-stone-50/50 hover:bg-stone-50'}`}
              >
                <item.icon size={20} className={activeTab === item.id ? 'text-white' : 'text-indigo-400'} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Ajustement du padding main pour compenser l'en-tête dynamique */}
      <main className="flex-1 transition-all duration-500">
        {children}
      </main>

      <footer className="bg-stone-950 text-white py-24 px-6 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-2 space-y-8">
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-white leading-none">Jean-François</span>
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-indigo-400 mt-2">Le Souffle sans frontières</span>
              </div>
              <p className="text-stone-400 max-w-sm text-lg leading-relaxed italic">"L'énergie est le lien invisible qui nous unit tous."</p>
              <div className="flex gap-4">
                <a href="mailto:guerisseurtoucheur@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-all"><Mail size={20} /></a>
                <a href="tel:0955554462" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-all"><Phone size={20} /></a>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-stone-200 uppercase text-[10px] tracking-widest">Soin à distance</h4>
              <ul className="space-y-4 text-stone-500 text-sm">
                <li className="flex items-center gap-2"><MapPin size={14} className="text-indigo-500" /> France entière sur photo</li>
                <li className="flex items-center gap-2"><Sparkles size={14} className="text-indigo-500" /> Action sous 24h</li>
                <li className="flex items-center gap-2"><Heart size={14} className="text-indigo-500" /> Magnétisme & Souffle</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-stone-200 uppercase text-[10px] tracking-widest">Espace Privé</h4>
              <p className="text-stone-500 text-xs italic leading-relaxed">Le magnétisme est une aide précieuse qui ne remplace jamais un traitement médical conventionnel.</p>
              <div onClick={handleSecretClick} className="pt-4 text-[9px] text-stone-700 uppercase tracking-widest font-bold cursor-pointer hover:text-indigo-500 transition-colors">
                 Accès Admin • v3.5
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-stone-600 uppercase tracking-[0.5em] font-bold">© {new Date().getFullYear()} Jean-François Magnétiseur Guérisseur</p>
          </div>
        </div>
      </footer>
      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Layout;
