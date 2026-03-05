import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Home, Heart, MessageCircle, CreditCard, LayoutDashboard } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: '/', label: 'Accueil', icon: Home },
  { id: '/demande-soin', label: 'Soin', icon: Heart },
  { id: '/questions', label: 'Chat', icon: MessageCircle },
  { id: '/paiement', label: 'Don', icon: CreditCard },
  { id: '/espace-patient', label: 'Espace', icon: LayoutDashboard },
];

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, setActiveTab }) => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (path: string) => location.pathname === path;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
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

  return (
    <nav className={`md:hidden fixed bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-lg border-t border-stone-100 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out z-[100] ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex justify-around items-center h-full max-w-md mx-auto px-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-200 ease-in-out transform active:scale-90 ${
              isActive(item.id) 
                ? 'text-indigo-600'
                : 'text-stone-400 hover:text-stone-900'
            }`}
            aria-label={item.label}
          >
            <item.icon size={24} strokeWidth={isActive(item.id) ? 2.5 : 2} />
            <span className={`text-[10px] font-bold mt-1 tracking-tight ${isActive(item.id) ? 'opacity-100' : 'opacity-70'}`}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
