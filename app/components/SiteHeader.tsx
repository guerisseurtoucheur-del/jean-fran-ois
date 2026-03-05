'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Home, MessageCircle, Heart, CreditCard, LayoutDashboard, Wind, Clock } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/assistant', label: 'Questions', icon: MessageCircle },
  { href: '/soin-photo', label: 'Soin Photo', icon: Heart },
  { href: '/reglement', label: 'Reglement', icon: CreditCard },
  { href: '/mon-espace', label: 'Mon Espace', icon: LayoutDashboard },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [liveUsers, setLiveUsers] = useState(14)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUsers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        const next = prev + change
        return next >= 10 && next <= 20 ? next : prev
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Banner */}
      <div className={`bg-stone-950 text-white/50 py-1.5 px-6 text-[9px] font-bold uppercase tracking-[0.3em] flex justify-center items-center gap-8 z-[70] transition-all duration-500 ${scrolled ? '-translate-y-full opacity-0 h-0' : 'h-8'}`}>
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse"></span>
          Cabinet Alencon & France Entiere
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Clock size={10} />
          {currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* Header */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'top-0 py-2' : 'top-8 py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 h-16 md:h-20 rounded-[2rem] border transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-stone-100 shadow-xl' : 'bg-white/60 backdrop-blur-md border-white/20'}`}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group shrink-0">
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-serif font-bold tracking-tight text-stone-900 leading-none">Jean-Francois</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-3 h-px bg-indigo-400"></span>
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-extrabold text-indigo-500">Magnetiseur</span>
                </div>
              </div>
            </Link>

            {/* Nav Desktop */}
            <nav className="hidden xl:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all relative group ${isActive ? 'text-indigo-600 bg-indigo-50/50' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'}`}
                  >
                    <item.icon size={14} className={isActive ? 'text-indigo-600' : 'text-stone-300 group-hover:text-stone-500'} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-indigo-600 rounded-full"></span>
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-emerald-500/5 rounded-full border border-emerald-500/10 text-[10px] font-bold text-emerald-600">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                {liveUsers} en ligne
              </div>

              <a href="tel:0955554462" className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 text-white rounded-full text-[10px] sm:text-[11px] font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 btn-glow">
                <Phone size={14} />
                <span className="hidden sm:inline">09.55.55.44.62</span>
              </a>

              <button
                className={`xl:hidden flex items-center gap-2 px-4 py-2 rounded-full transition-all border ${isMenuOpen ? 'bg-stone-900 text-white border-stone-900 shadow-lg' : 'bg-white/80 text-stone-900 border-stone-200 shadow-sm'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{isMenuOpen ? 'Fermer' : 'Menu'}</span>
                {isMenuOpen ? <X size={16} /> : <Wind size={16} className="text-indigo-500 animate-pulse" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-stone-100 p-6 space-y-4 shadow-2xl z-[60]">
            <div className="pb-4 border-b border-stone-50 mb-2">
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-stone-400 text-center">Navigation Energetique</p>
            </div>
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-4 w-full p-4 rounded-2xl text-base font-bold transition-all ${isActive ? 'bg-indigo-600 text-white shadow-xl' : 'text-stone-600 bg-stone-50/50 hover:bg-stone-50'}`}
                >
                  <item.icon size={20} className={isActive ? 'text-white' : 'text-indigo-400'} />
                  {item.label}
                </Link>
              )
            })}
            <a href="tel:0955554462" className="flex items-center justify-center gap-3 w-full p-5 bg-stone-900 text-white rounded-2xl text-sm font-bold mt-4 shadow-xl">
              <Phone size={18} />
              Appeler le cabinet
            </a>
          </div>
        )}
      </header>
    </>
  )
}
