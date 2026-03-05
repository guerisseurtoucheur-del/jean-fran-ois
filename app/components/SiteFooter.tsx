'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Sparkles, Heart } from 'lucide-react'

export default function SiteFooter() {
  const [clickCount, setClickCount] = useState(0)

  const handleSecretClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    if (newCount >= 5) {
      setClickCount(0)
      window.location.href = '/admin'
    }
    setTimeout(() => setClickCount(0), 2000)
  }

  return (
    <footer className="bg-stone-950 text-white py-24 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-2 space-y-8">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-white leading-none">Jean-Francois</span>
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-indigo-400 mt-2">Le Souffle sans frontieres</span>
            </div>
            <p className="text-stone-400 max-w-sm text-lg leading-relaxed italic">{"\"L'energie est le lien invisible qui nous unit tous.\""}</p>
            <div className="flex gap-4">
              <a href="mailto:guerisseurtoucheur@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-all" aria-label="Envoyer un email"><Mail size={20} /></a>
              <a href="tel:0955554462" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-all" aria-label="Appeler"><Phone size={20} /></a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-stone-200 uppercase text-[10px] tracking-widest">Soin a distance</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li className="flex items-center gap-2"><MapPin size={14} className="text-indigo-500" /> France entiere sur photo</li>
              <li className="flex items-center gap-2"><Sparkles size={14} className="text-indigo-500" /> Action sous 24h</li>
              <li className="flex items-center gap-2"><Heart size={14} className="text-indigo-500" /> Magnetisme & Souffle</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-stone-200 uppercase text-[10px] tracking-widest">Espace Prive</h4>
            <p className="text-stone-500 text-xs italic leading-relaxed">Le magnetisme est une aide precieuse qui ne remplace jamais un traitement medical conventionnel.</p>
            <div onClick={handleSecretClick} className="pt-4 text-[9px] text-stone-700 uppercase tracking-widest font-bold cursor-pointer hover:text-indigo-500 transition-colors">
              Acces Admin - v3.5
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-stone-600 uppercase tracking-[0.5em] font-bold">{"© "}{new Date().getFullYear()} Jean-Francois Magnetiseur Guerisseur</p>
        </div>
      </div>
    </footer>
  )
}
