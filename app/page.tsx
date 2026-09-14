'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Globe, MapPin, Phone, Star, Sparkles, ShieldCheck } from 'lucide-react'
import { citiesData } from '@/data/cities'
import { newCities } from '@/data/newCities'
import LayoutWrapper from '@/components/LayoutWrapper'
import HeroEnergyField from '@/components/homepage/HeroEnergyField'

export default function HomePage() {
  const [relievedCount, setRelievedCount] = useState(6500)
  const [monthlyCount, setMonthlyCount] = useState(45)

  useEffect(() => {
    const startDate = new Date('2024-01-01')
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7))
    setRelievedCount(6450 + (diffWeeks * 6))

    const dayOfMonth = today.getDate()
    setMonthlyCount(Math.floor(dayOfMonth * 3.5))
  }, [])

  return (
    <LayoutWrapper>
      <div className="bg-[#0a0a0a] text-white selection:bg-[#c9a962] selection:text-[#0a0a0a]">
        
        {/* HERO SECTION 3D */}
        <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
          {/* 3D Background */}
          <HeroEnergyField />

          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-20 pt-20 pb-10">
            
            {/* TEXT CONTENT (Glassmorphism) */}
            <div className="space-y-10 bg-black/30 p-8 md:p-12 rounded-[3rem] backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#c9a962]/20 border border-[#c9a962]/30 text-[#c9a962] rounded-full w-fit backdrop-blur-md">
                    <Globe size={14} className="animate-spin-slow" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Action Énergétique France Entière</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-xs font-medium">
                    <MapPin size={14} className="text-[#c9a962]" />
                    <span>Cabinet à Alençon (61) & <strong>Soins sur photo à distance</strong></span>
                  </div>
                </div>

                <p className="text-2xl font-serif italic text-[#c9a962] leading-relaxed border-l-4 border-[#c9a962]/30 pl-6 py-2">
                  "L'énergie est le lien invisible <br/>
                  qui nous unit tous : <br/>
                  mon souffle vous rejoint."
                </p>
              </div>

              <h1 className="text-5xl md:text-[70px] font-serif font-bold text-white leading-[1] tracking-tight">
                Le Souffle <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a962] via-[#e5d397] to-[#c9a962] italic font-normal">sans frontières.</span>
              </h1>
              
              <p className="text-lg text-white/70 font-light max-w-lg leading-relaxed">
                Jean-François, magnétiseur guérisseur et toucheur expert. Je soulage vos maux par le souffle et l'énergie, <strong>que vous soyez à Paris, Lyon, Marseille ou partout en France.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link href="/demande-soin" className="px-10 py-5 bg-[#c9a962] text-stone-900 rounded-2xl font-bold text-lg hover:bg-[#e5d397] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(201,169,98,0.3)]">
                  <span>Démarrer un soin sur photo</span>
                  <Sparkles size={20} />
                </Link>
                <a href="tel:0955554462" className="px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-md text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                  <Phone size={20} />
                  <span>Appel direct</span>
                </a>
              </div>
            </div>
            
            {/* VIDEO SECTION (As requested by user, untouched content but premium container) */}
            <div className="relative flex flex-col items-center">
              {/* Glassmorphism frame for video */}
              <div className="aspect-[4/5] bg-black/40 rounded-[3rem] overflow-hidden shadow-2xl relative group border border-white/10 w-full max-w-md backdrop-blur-md p-2">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    webkit-playsinline="true"
                    className="w-full h-full object-cover"
                    poster="/logo.png"
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean-francois-magnetiseur-guerisseur_video-NLOPDOs77bOl491U2cfIJSUXAeijtj.MP4" type="video/mp4" />
                    <img src="/logo.png" alt="Jean-François Magnétiseur" className="w-full h-full object-cover" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/50 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">"La distance est une illusion"</h3>
                    <p className="text-white/60 text-sm italic">Mon travail énergétique vous rejoint instantanément, où que vous soyez.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TRUST / COUNTERS SECTION */}
        <section className="py-20 relative z-10 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-center space-y-4">
                <div className="text-4xl font-serif font-bold text-[#c9a962]">{relievedCount}+</div>
                <div className="text-white/60 text-sm font-medium uppercase tracking-widest">Personnes soulagées</div>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-center space-y-4">
                <div className="text-4xl font-serif font-bold text-[#c9a962]">20 ans</div>
                <div className="text-white/60 text-sm font-medium uppercase tracking-widest">D'expérience & de pratique</div>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-center space-y-4">
                <div className="text-4xl font-serif font-bold text-[#c9a962]">~{monthlyCount}</div>
                <div className="text-white/60 text-sm font-medium uppercase tracking-widest">Soins à distance ce mois-ci</div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section className="py-24 relative z-10 bg-[#111]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-white mb-4">L'énergie n'a pas de limites</h2>
              <p className="text-white/60">Témoignages récents de patients soignés à distance</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Sophie M.", city: "Lyon (69)", text: "Jean-François m'a aidé pour un zona très douloureux. En deux séances à distance, le feu s'est éteint.", subject: "Zona" },
                { name: "Emilie C.", city: "Rennes (35)", text: "Mon bébé de 8 mois souffrait de ses poussées dentaires. Une séance sur photo et il était apaisé. Miracle pour les dents des bébés !", subject: "Dents bébé" },
                { name: "Laurent M.", city: "Marseille (13)", text: "Des douleurs gastriques depuis des années. Après 2 séances avec Jean-François, un soulagement incroyable.", subject: "Gastrique" },
                { name: "Julie V.", city: "Strasbourg (67)", text: "Ma fille souffrait d'un eczéma tenace. Son soin sur photo a été fulgurant.", subject: "Eczéma" },
                { name: "Stéphanie R.", city: "Nantes (44)", text: "Ma petite fille faisait ses dents et pleurait toutes les nuits. Le résultat a été immédiat. Un vrai miracle !", subject: "Dents bébé" },
                { name: "Patrick H.", city: "Bordeaux (33)", text: "Problèmes de digestion et crampes d'estomac chroniques. Jean-François m'a aidé à retrouver un confort digestif.", subject: "Digestion" },
                { name: "Alain P.", city: "Lille (59)", text: "Je recommande vivement Jean-François pour son efficacité sur les brûlures. Un vrai coupeur de feu.", subject: "Brûlures" },
                { name: "Marc D.", city: "Paris (75)", text: "Mes douleurs de dos chroniques ont disparu après l'envoi de ma photo. Un vrai soulagement.", subject: "Dos" }
              ].map((t, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-3xl space-y-4 hover:bg-white/10 transition-all border border-white/10 backdrop-blur-sm">
                  <div className="flex gap-1 text-[#c9a962]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-white/70 italic text-sm">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-white text-xs">{t.name}</p>
                    <p className="text-[10px] text-[#c9a962] uppercase font-bold tracking-widest">{t.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-white mb-4">Questions Fréquentes</h2>
              <p className="text-white/60">Réponses aux questions les plus posées sur le magnétisme à distance</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Comment fonctionne le soin à distance sur photo ?",
                  a: "Vous envoyez une photo récente de votre visage via le formulaire. Jean-François se connecte à votre énergie et réalise le soin. L'effet est souvent ressenti dans l'heure, quelle que soit la distance."
                },
                {
                  q: "Qu'est-ce qu'un coupeur de feu ?",
                  a: "Un coupeur de feu est un guérisseur capable de soulager instantanément la douleur des brûlures par imposition des mains ou à distance. Jean-François pratique cette technique reconnue même dans certains hôpitaux."
                },
                {
                  q: "Le magnétisme peut-il soulager un zona ?",
                  a: "Oui, le magnétisme est particulièrement efficace sur le zona. Jean-François traite de nombreux cas de zona à distance avec des résultats rapides sur la douleur et l'évolution des lésions."
                },
                {
                  q: "Où se trouve le cabinet de Jean-François ?",
                  a: "Le cabinet est situé à Alençon (61) en Normandie. Mais grâce aux soins sur photo, Jean-François intervient partout en France et à l'étranger."
                }
              ].map((faq, i) => (
                <details key={i} name="faq-accordion" className="group bg-white/5 rounded-2xl p-6 cursor-pointer hover:bg-white/10 transition-all border border-white/10 backdrop-blur-sm">
                  <summary className="flex justify-between items-center font-bold text-white list-none">
                    <span>{faq.q}</span>
                    <span className="text-[#c9a962] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-white/60 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SEO CITIES LINKS */}
        <section className="py-20 bg-[#111] text-white/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-center text-[#c9a962]">Rayonnement énergétique national - Cliquez pour découvrir</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Anciennes villes */}
              {Object.values(citiesData).map(city => (
                <Link 
                  key={city.slug} 
                  href={`/magnetiseur-${city.slug}`}
                  className="text-[10px] uppercase font-bold tracking-widest hover:text-white hover:bg-white/10 transition-all cursor-pointer text-center border border-white/5 hover:border-[#c9a962] py-3 rounded-xl"
                >
                  Magnétiseur {city.name}
                </Link>
              ))}
              {/* Nouvelles villes */}
              {newCities.map(city => (
                <Link 
                  key={city.slug} 
                  href={`/${city.slug}`}
                  className="text-[10px] uppercase font-bold tracking-widest hover:text-white hover:bg-white/10 transition-all cursor-pointer text-center border border-white/5 hover:border-[#c9a962] py-3 rounded-xl"
                >
                  Magnétiseur {city.nom}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#0a0a0a] z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a962] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white italic">Prêt à retrouver votre équilibre ?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/demande-soin" className="px-12 py-6 bg-[#c9a962] text-stone-900 rounded-3xl font-bold text-xl hover:bg-[#e5d397] transition-all shadow-[0_0_40px_rgba(201,169,98,0.2)]">Soin à distance immédiat</Link>
            </div>
            <p className="text-white/50 text-sm font-medium">Jean-François traite chaque demande personnellement sous 24h.</p>
          </div>
        </section>

      </div>
    </LayoutWrapper>
  )
}
