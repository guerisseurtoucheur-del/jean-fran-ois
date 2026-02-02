import React, { useState, useEffect } from 'react';
import { Home, Heart, MessageCircle, CreditCard, LayoutDashboard } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'home', label: 'Accueil', icon: Home },
  { id: 'healing', label: 'Soin', icon: Heart },
  { id: 'chat', label: 'Chat', icon: MessageCircle },
  { id: 'payment', label: 'Don', icon: CreditCard },
  { id: 'dashboard', label: 'Espace', icon: LayoutDashboard },
];

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, setActiveTab }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Cache la barre seulement si on a scrollé un peu
    if (currentScrollY > lastScrollY && currentScrollY > 100) { 
      setVisible(false);
    } else { 
      setVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`md:hidden fixed bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-lg border-t border-stone-100 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out z-[100] ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex justify-around items-center h-full max-w-md mx-auto px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-200 ease-in-out transform active:scale-90 ${
              activeTab === item.id 
                ? 'text-indigo-600'
                : 'text-stone-400 hover:text-stone-900'
            }`}
            aria-label={item.label}
          >
            <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} />
            <span className={`text-[10px] font-bold mt-1 tracking-tight ${activeTab === item.id ? 'opacity-100' : 'opacity-70'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
