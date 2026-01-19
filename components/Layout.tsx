
import React from 'react';
import { Menu, X, Phone, Heart, MessageCircle, Home, LayoutDashboard, Globe, CreditCard } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'chat', label: 'Questions', icon: MessageCircle },
    { id: 'healing', label: 'Soin Photo', icon: Heart },
    { id: 'payment', label: 'Règlement', icon: CreditCard },
    { id: 'dashboard', label: 'Mon Espace', icon: LayoutDashboard },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
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

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-all ${
                  activeTab === item.id ? 'text-indigo-600' : 'text-stone-400 hover:text-stone-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="tel:0955554462" 
              className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full text-sm font-bold hover:bg-black transition-all"
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
          <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-stone-100 p-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
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

      <main className="flex-1 pt-24">
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
