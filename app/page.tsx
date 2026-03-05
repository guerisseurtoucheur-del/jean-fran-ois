'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Globe, MapPin, Zap, ShieldCheck, Phone, Star, Wind, Clock, Sparkles, Heart } from 'lucide-react'
import { citiesData } from '@/data/cities'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [isClient, setIsClient] = useState(false)

  const relievedCount = useMemo(() => {
    const startDate = new Date('2024-01-01')
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7))
    return 6450 + (diffWeeks * 6)
  }, [])

  useEffect(() => {
    setIsClient(true)
    setCurrentTime(new Date())
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formattedDate = currentTime ? currentTime.toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  }) : ''

  const formattedTime = currentTime ? currentTime.toLocaleTimeString('fr-FR', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  }) : ''

  return (
    <LayoutWrapper>
      <div className="page-fade">
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex items-center px-6 overflow-hidden bg-white">
          <div className="energy-field w-96 h-96 bg-indigo-100 -top-20 -left-20"></div>
          <div className="energy-field w-[500px] h-[500px] bg-amber-50 -bottom-40 -right-20" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-600 text-white rounded-full w-fit shadow-lg shadow-indigo-100">
                    <Globe size={14} className="animate-spin-slow" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Action Energetique France Entiere</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-400 text-xs font-medium">
                    <MapPin size={14} className="text-indigo-500" />
                    <span>Cabinet a Alencon (61) & <strong>Soins sur photo a distance</strong></span>
                  </div>
                </div>

                <p className="text-2xl font-serif italic text-indigo-600 leading-relaxed border-l-4 border-indigo-100 pl-6 py-2">
                  "L&apos;energie est le lien invisible <br/>
                  qui nous unit tous : <br/>
                  mon souffle vous rejoint."
                </p>
              </div>

              <h1 className="text-5xl md:text-[70px] font-serif font-bold text-stone-900 leading-[1] tracking-tight">
                Le Souffle <br/>
                <span className="text-stone-400 italic font-normal">sans frontieres.</span>
              </h1>
              
              <p className="text-xl text-stone-600 font-light max-w-lg leading-relaxed">
                Jean-Francois, magnetiseur expert. Je soulage vos maux par le souffle et l&apos;energie, <strong>que vous soyez a Paris, Lyon, Marseille ou partout en France.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link href="/demande-soin" className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all btn-glow flex items-center justify-center gap-3 group shadow-xl">
                  <span>Demarrer un soin sur photo</span>
                  <Sparkles size={20} />
                </Link>
                <a href="tel:0955554462" className="px-10 py-5 border-2 border-stone-900 text-stone-900 rounded-2xl font-bold text-lg hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center gap-3">
                  <Phone size={20} />
                  <span>Appel direct</span>
                </a>
              </div>
            </div>
            
            <div className="relative hidden md:flex flex-col items-center">
              {isClient ? (
                <div className="mb-8 flex flex-col items-center">
                  <div className="flex items-center gap-3 bg-white border border-stone-100 px-6 py-3 rounded-full shadow-xl">
                    <Clock size={16} className="text-indigo-600" />
                    <span className="text-stone-900 font-mono font-bold text-lg" suppressHydrationWarning>{formattedTime}</span>
                    <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest" suppressHydrationWarning>{formattedDate}</span>
                  </div>
                </div>
              ) : (
                <div className="mb-8 flex flex-col items-center">
                  <div className="flex items-center gap-3 bg-white border border-stone-100 px-6 py-3 rounded-full shadow-xl">
                    <Clock size={16} className="text-indigo-600" />
                    <span className="text-stone-900 font-mono font-bold text-lg">--:--:--</span>
                    <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">chargement...</span>
                  </div>
                </div>
              )}

              <div className="aspect-[4/5] bg-stone-100 rounded-[5rem] overflow-hidden shadow-2xl relative group border-8 border-stone-50 w-full max-w-md">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean-francois-magnetiseur-guerisseur_video-NLOPDOs77bOl491U2cfIJSUXAeijtj.MP4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl">
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">&quot;La distance est une illusion&quot;</h3>
                  <p className="text-stone-500 text-xs italic">Mon travail energetique vous rejoint instantanement sur simple envoi de votre photo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Compteur */}
        <section className="py-12 bg-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-white"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20">
                <Heart size={40} className="text-white animate-pulse" fill="currentColor" />
              </div>
              <div>
                <div className="text-5xl font-serif font-bold tabular-nums">
                  {relievedCount.toLocaleString('fr-FR')}
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-200 mt-1">Personnes soulagees a ce jour</div>
              </div>
            </div>
            <div className="h-px w-24 bg-white/20 hidden md:block"></div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Bienveillance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold">24h</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Delai moyen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold">France</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Action nationale</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section SEO */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-stone-100">
                  <Wind size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold">Le Souffle Vital</h3>
                <p className="text-stone-500 text-sm leading-relaxed">Le magnetisme utilise les courants energetiques universels. En me connectant a votre photo, je focalise mon intention pour debloquer vos centres energetiques.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-stone-100">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold">Action Immediate</h3>
                <p className="text-stone-500 text-sm leading-relaxed">Que ce soit pour un zona, une brulure (coupeur de feu) ou un eczema, l&apos;energie ne connait pas de delai de route. L&apos;effet est souvent ressenti dans l&apos;heure.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-stone-100">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold">Serenite Partout</h3>
                <p className="text-stone-500 text-sm leading-relaxed">Depuis Alencon, j&apos;accompagne quotidiennement des patients habitant aux quatre coins de la France (Paris, Lille, Toulouse...) avec les memes resultats probants.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Temoignages */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center gap-6 mb-16">
              <div className="flex items-center gap-4 w-full">
                <div className="h-px flex-1 bg-stone-100"></div>
                <h2 className="text-3xl font-serif font-bold italic text-stone-400">Paroles de patients (France Entiere)</h2>
                <div className="h-px flex-1 bg-stone-100"></div>
              </div>
              <a 
                href="https://maps.app.goo.gl/7T8BscaocjerZRNWA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-stone-200 rounded-full hover:border-indigo-500 hover:shadow-lg transition-all group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#4285F4"/>
                  <circle cx="12" cy="9" r="2.5" fill="#fff"/>
                </svg>
                <span className="font-bold text-stone-700 group-hover:text-indigo-600 transition-colors">Voir les avis Google</span>
                <span className="text-amber-500 font-bold">5/5</span>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-stone-400 text-sm">(3 avis)</span>
              </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Sophie M.", city: "Lyon (69)", text: "Jean-Francois m'a aide pour un zona tres douloureux. En deux seances a distance, le feu s'est eteint.", subject: "Zona" },
                { name: "Marc D.", city: "Paris (75)", text: "Mes douleurs de dos chroniques ont disparu apres l'envoi de ma photo. Un vrai soulagement.", subject: "Dos" },
                { name: "Thomas R.", city: "Nantes (44)", text: "Brulure domestique grave, Jean-Francois a 'coupe le feu' immediatement a distance.", subject: "Feu" },
                { name: "Julie V.", city: "Strasbourg (67)", text: "Ma fille souffrait d'un eczema tenace. Son soin sur photo a ete fulgurant.", subject: "Eczema" },
                { name: "Frederic L.", city: "Bordeaux (33)", text: "Soin a distance pour une douleur a l'epaule qui trainait depuis des mois. Le resultat est bluffant.", subject: "Epaule" },
                { name: "Sandrine K.", city: "Nice (06)", text: "Une seance sur photo pour mon fils qui faisait des cauchemars. Depuis, ses nuits sont paisibles.", subject: "Sommeil" },
                { name: "Alain P.", city: "Lille (59)", text: "Je recommande vivement Jean-Francois pour son efficacite sur les brulures. Un vrai coupeur de feu.", subject: "Brulures" },
                { name: "Isabelle B.", city: "Toulouse (31)", text: "Mon eczema s'est apaise des la premiere connexion. Merci pour cette aide precieuse.", subject: "Eczema" }
              ].map((t, i) => (
                <div key={i} className="p-8 bg-stone-50 rounded-[2.5rem] space-y-4 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-stone-100">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-stone-600 italic text-sm">&quot;{t.text}&quot;</p>
                  <div>
                    <p className="font-bold text-stone-900 text-xs">{t.name}</p>
                    <p className="text-[10px] text-indigo-500 uppercase font-bold tracking-widest">{t.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Grid SEO */}
        <section className="py-20 bg-stone-950 text-white/40">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-center text-indigo-500">Rayonnement energetique national - Cliquez pour decouvrir</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Object.values(citiesData).map(city => (
                <Link 
                  key={city.slug} 
                  href={`/magnetiseur-${city.slug}`}
                  className="text-[10px] uppercase font-bold tracking-widest hover:text-white hover:bg-white/10 transition-all cursor-pointer text-center border border-white/5 hover:border-indigo-500 py-3 rounded-xl"
                >
                  Magnetiseur {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-indigo-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic">Pret a retrouver votre equilibre ?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/demande-soin" className="px-12 py-6 bg-white text-indigo-600 rounded-3xl font-bold text-xl hover:shadow-2xl transition-all">Soin a distance immediat</Link>
            </div>
            <p className="text-indigo-200 text-sm font-medium">Jean-Francois traite chaque demande personnellement sous 24h.</p>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
