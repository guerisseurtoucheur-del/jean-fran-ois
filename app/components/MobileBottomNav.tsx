'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Heart, MessageCircle, CreditCard, LayoutDashboard } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/soin-photo', label: 'Soin', icon: Heart },
  { href: '/assistant', label: 'Chat', icon: MessageCircle },
  { href: '/reglement', label: 'Don', icon: CreditCard },
  { href: '/mon-espace', label: 'Espace', icon: LayoutDashboard },
]

export default function MobileBottomNav() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`md:hidden fixed bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-lg border-t border-stone-100 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out z-[100] ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex justify-around items-center h-full max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-200 ease-in-out transform active:scale-90 ${
                isActive ? 'text-indigo-600' : 'text-stone-400 hover:text-stone-900'
              }`}
              aria-label={item.label}
            >
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] font-bold mt-1 tracking-tight ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
