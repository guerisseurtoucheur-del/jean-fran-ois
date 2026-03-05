'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Heart, MessageCircle, Home, LayoutDashboard, CreditCard, Clock, Users, Mail, MapPin, Sparkles } from 'lucide-react'

interface LayoutWrapperProps {
  children: React.ReactNode
}

const navItems = [
  { id: '/', label: 'Accueil', icon: Home },
  { id: '/questions', label: 'Questions', icon: MessageCircle },
  { id: '/demande-soin', label: 'Soin Photo', icon: Heart },
  { id: '/paiement', label: 'Reglement', icon: CreditCard },
  { id: '/espace-patient', label: 'Mon Espace', icon: LayoutDashboard },
]

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [liveUsers, setLiveUsers] = useState(14)
  const [scrolled, setScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const userTimer = setInterval(() => {
      setLiveUsers(prev => Math.max(8, Math.min(25, prev + Math.floor(Math.random() * 3) - 1)))
    }, 5000)
    
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearInterval(userTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_-10px_rgba(0,0,0,0.1)] py-3' : 'bg-white py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 cursor-pointer group shrink-0">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-100 group-hover:scale-105 transition-transform">
              <Sparkles className="text-white" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-serif font-bold tracking-tight text-stone-900 leading-none">Jean-Francois</span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-3 h-px bg-indigo-400"></span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-extrabold text-indigo-500">Magnetiseur</span>
              </div>
            </div>
          </Link>

          {/* Navigation Bureau */}
          <nav className="hidden xl:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all relative group ${isActive(item.id) ? 'text-indigo-600 bg-indigo-50/50' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'}`}
              >
                <item.icon size={14} className={isActive(item.id) ? 'text-indigo-600' : 'text-stone-300 group-hover:text-stone-500'} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                {isActive(item.id) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-indigo-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {isClient && (
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">{liveUsers} en ligne</span>
              </div>
            )}
            
            <a href="tel:0955554462" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all">
              <Phone size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">09 55 55 44 62</span>
            </a>
            
            <button onClick={() => setIsMenuOpen(true)} className="xl:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-stone-100 text-stone-600 hover:bg-stone-200 transition-all">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-white/98 backdrop-blur-xl flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-serif font-bold text-stone-900">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-stone-100 text-stone-600">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-4 w-full p-4 rounded-2xl text-base font-bold transition-all ${isActive(item.id) ? 'bg-indigo-600 text-white shadow-xl' : 'text-stone-600 bg-stone-50/50 hover:bg-stone-50'}`}
              >
                <item.icon size={20} className={isActive(item.id) ? 'text-white' : 'text-indigo-400'} />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8 border-t border-stone-100">
            <a href="tel:0955554462" className="flex items-center justify-center gap-3 w-full p-4 bg-indigo-600 text-white rounded-2xl font-bold">
              <Phone size={20} />
              09 55 55 44 62
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-20 sm:pt-28 pb-24 md:pb-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <span className="text-2xl font-serif font-bold">Jean-Francois</span>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold">Magnetiseur Guerisseur</p>
                </div>
              </div>
              <p className="text-stone-400 text-sm max-w-sm leading-relaxed">Praticien expert en magnetisme et soins energetiques a distance. Intervention sur photo partout en France.</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">Contact</h4>
              <div className="space-y-3 text-stone-400 text-sm">
                <a href="tel:0955554462" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={14} /> 09 55 55 44 62
                </a>
                <p className="flex items-center gap-3">
                  <MapPin size={14} /> 6 Rue du 14E Hussards, 61000 Alencon
                </p>
                <a href="mailto:contact@jean-francois-magnetiseur.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={14} /> contact@jean-francois-magnetiseur.com
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">Horaires</h4>
              <div className="space-y-2 text-stone-400 text-sm">
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>Lun-Ven: 9h - 19h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>Sam: 9h - 12h</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-xs">2024 Jean-Francois Magnetiseur. Tous droits reserves.</p>
            <a href="https://maps.app.goo.gl/7T8BscaocjerZRNWA" target="_blank" rel="noopener noreferrer" className="text-xs text-stone-500 hover:text-indigo-400 transition-colors">
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-lg border-t border-stone-100 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)] z-[100]">
        <div className="flex justify-around items-center h-full max-w-md mx-auto px-2">
          {[
            { id: '/', label: 'Accueil', icon: Home },
            { id: '/demande-soin', label: 'Soin', icon: Heart },
            { id: '/questions', label: 'Chat', icon: MessageCircle },
            { id: '/paiement', label: 'Don', icon: CreditCard },
            { id: '/espace-patient', label: 'Espace', icon: LayoutDashboard },
          ].map((item) => (
            <Link
              key={item.id}
              href={item.id}
              className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-200 ease-in-out transform active:scale-90 ${
                isActive(item.id) 
                  ? 'text-indigo-600'
                  : 'text-stone-400 hover:text-stone-900'
              }`}
            >
              <item.icon size={24} strokeWidth={isActive(item.id) ? 2.5 : 2} />
              <span className={`text-[10px] font-bold mt-1 tracking-tight ${isActive(item.id) ? 'opacity-100' : 'opacity-70'}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
