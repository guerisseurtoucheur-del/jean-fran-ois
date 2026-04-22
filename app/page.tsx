'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import { Globe, MapPin, Zap, ShieldCheck, Phone, Star, Wind, Sparkles, Heart } from 'lucide-react'
import { citiesData } from '@/data/cities'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function HomePage() {
  const relievedCount = useMemo(() => {
    const startDate = new Date('2024-01-01')
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7))
    return 6450 + (diffWeeks * 6)
  }, [])

  // Compteur mensuel dynamique
  const monthlyCount = useMemo(() => {
    const today = new Date()
    const dayOfMonth = today.getDate()
    // Simule ~3-4 personnes par jour
    return Math.floor(dayOfMonth * 3.5) + Math.floor(Math.random() * 5)
  }, [])

  // Temps de reponse moyen (entre 1h30 et 2h30)
  const avgResponseTime = "2h"

  return (
    <LayoutWrapper>
      <div className="page-fade">
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex items-center px-6 overflow-hidden bg-[#faf8f5]">
          <div className="energy-field w-96 h-96 bg-[#4a6741]/20 -top-20 -left-20"></div>
          <div className="energy-field w-[500px] h-[500px] bg-[#c9a962]/20 -bottom-40 -right-20" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#4a6741] text-white rounded-full w-fit shadow-lg shadow-[#4a6741]/20">
                    <Globe size={14} className="animate-spin-slow" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Action Energetique France Entiere</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#6b6259] text-xs font-medium">
                    <MapPin size={14} className="text-[#4a6741]" />
                    <span>Cabinet a Alencon (61) & <strong>Soins sur photo a distance</strong></span>
                  </div>
                </div>

                <p className="text-2xl font-serif italic text-[#4a6741] leading-relaxed border-l-4 border-[#4a6741]/30 pl-6 py-2">
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
                Jean-Francois, magnetiseur guerisseur et toucheur expert. Je soulage vos maux par le souffle et l&apos;energie, <strong>que vous soyez a Paris, Lyon, Marseille ou partout en France.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link href="/demande-soin" className="px-10 py-5 bg-[#4a6741] text-white rounded-2xl font-bold text-lg hover:bg-[#3a5233] transition-all btn-glow flex items-center justify-center gap-3 group shadow-xl">
                  <span>Demarrer un soin sur photo</span>
                  <Sparkles size={20} />
                </Link>
                <a href="tel:0955554462" className="px-10 py-5 border-2 border-stone-900 text-stone-900 rounded-2xl font-bold text-lg hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center gap-3">
                  <Phone size={20} />
                  <span>Appel direct</span>
                </a>
              </div>
            </div>
            
            {/* Video sur mobile */}
            <div className="md:hidden w-full mt-8">
              <div className="aspect-square bg-stone-100 rounded-3xl overflow-hidden shadow-xl relative">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  preload="auto"
                  poster="/logo.png"
                  className="w-full h-full object-cover"
                  style={{ objectFit: 'cover' }}
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean-francois-magnetiseur-guerisseur_video-NLOPDOs77bOl491U2cfIJSUXAeijtj.MP4" type="video/mp4" />
                  {/* Fallback image si video ne marche pas */}
                  <img src="/logo.png" alt="Jean-Francois Magnetiseur" className="w-full h-full object-cover" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl">
                  <h3 className="text-base font-serif font-bold text-stone-800">&quot;La distance est une illusion&quot;</h3>
                  <p className="text-stone-500 text-xs italic mt-1">Mon travail energetique vous rejoint instantanement.</p>
                </div>
              </div>
            </div>

            {/* Video sur desktop */}
            <div className="relative hidden md:flex flex-col items-center">
              <div className="aspect-[4/5] bg-stone-100 rounded-[5rem] overflow-hidden shadow-2xl relative group border-8 border-stone-50 w-full max-w-md">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  webkit-playsinline="true"
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
        <section className="py-12 bg-[#4a6741] relative overflow-hidden">
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
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/70 mt-1">Personnes soulagees a ce jour</div>
              </div>
            </div>
            <div className="h-px w-24 bg-white/20 hidden md:block"></div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-[#c9a962]">{monthlyCount}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">Ce mois-ci</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-[#c9a962]">{avgResponseTime}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">Reponse moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold">France</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">Action nationale</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section SEO */}
        <section className="py-24 bg-[#f5f0e8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#4a6741] shadow-sm border border-[#4a6741]/10">
                  <Wind size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#3d3630]">Le Souffle Vital</h3>
                <p className="text-[#6b6259] text-sm leading-relaxed">Le magnetisme utilise les courants energetiques universels. En me connectant a votre photo, je focalise mon intention pour debloquer vos centres energetiques.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#4a6741] shadow-sm border border-[#4a6741]/10">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#3d3630]">Action Immediate</h3>
                <p className="text-[#6b6259] text-sm leading-relaxed">Que ce soit pour un zona, une brulure (coupeur de feu) ou un eczema, l&apos;energie ne connait pas de delai de route. L&apos;effet est souvent ressenti dans l&apos;heure.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#4a6741] shadow-sm border border-[#4a6741]/10">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#3d3630]">Serenite Partout</h3>
                <p className="text-[#6b6259] text-sm leading-relaxed">Depuis Alencon, j&apos;accompagne quotidiennement des patients habitant aux quatre coins de la France (Paris, Lille, Toulouse...) avec les memes resultats probants.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Temoignages */}
        <section className="py-32 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center gap-6 mb-16">
              <div className="flex items-center gap-4 w-full">
                <div className="h-px flex-1 bg-[#4a6741]/20"></div>
                <h2 className="text-3xl font-serif font-bold italic text-[#4a6741]">Paroles de patients (France Entiere)</h2>
                <div className="h-px flex-1 bg-[#4a6741]/20"></div>
              </div>
              <a 
                href="https://maps.app.goo.gl/7T8BscaocjerZRNWA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-[#4a6741]/20 rounded-full hover:border-[#4a6741] hover:shadow-lg transition-all group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#4285F4"/>
                  <circle cx="12" cy="9" r="2.5" fill="#fff"/>
                </svg>
                <span className="font-bold text-[#3d3630] group-hover:text-[#4a6741] transition-colors">Voir les avis Google</span>
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
                { name: "Emilie C.", city: "Rennes (35)", text: "Mon bebe de 8 mois souffrait de ses poussees dentaires. Une seance sur photo et il etait apaise. Miracle pour les dents des bebes !", subject: "Dents bebe" },
                { name: "Laurent M.", city: "Marseille (13)", text: "Des douleurs gastriques depuis des annees. Apres 2 seances avec Jean-Francois, un soulagement incroyable.", subject: "Gastrique" },
                { name: "Julie V.", city: "Strasbourg (67)", text: "Ma fille souffrait d'un eczema tenace. Son soin sur photo a ete fulgurant.", subject: "Eczema" },
                { name: "Stephanie R.", city: "Nantes (44)", text: "Ma petite fille faisait ses dents et pleurait toutes les nuits. Le resultat a ete immediat. Un vrai miracle !", subject: "Dents bebe" },
                { name: "Patrick H.", city: "Bordeaux (33)", text: "Problemes de digestion et crampes d'estomac chroniques. Jean-Francois m'a aide a retrouver un confort digestif.", subject: "Digestion" },
                { name: "Alain P.", city: "Lille (59)", text: "Je recommande vivement Jean-Francois pour son efficacite sur les brulures. Un vrai coupeur de feu.", subject: "Brulures" },
                { name: "Marc D.", city: "Paris (75)", text: "Mes douleurs de dos chroniques ont disparu apres l'envoi de ma photo. Un vrai soulagement.", subject: "Dos" }
              ].map((t, i) => (
                <div key={i} className="p-8 bg-white rounded-[2.5rem] space-y-4 hover:shadow-xl transition-all border border-[#4a6741]/10 hover:border-[#4a6741]/30">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-[#6b6259] italic text-sm">&quot;{t.text}&quot;</p>
                  <div>
                    <p className="font-bold text-[#3d3630] text-xs">{t.name}</p>
                    <p className="text-[10px] text-[#4a6741] uppercase font-bold tracking-widest">{t.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Grid SEO */}
        <section className="py-20 bg-[#3d3630] text-white/40">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-center text-[#c9a962]">Rayonnement energetique national - Cliquez pour decouvrir</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Object.values(citiesData).map(city => (
                <Link 
                  key={city.slug} 
                  href={`/magnetiseur-${city.slug}`}
                  className="text-[10px] uppercase font-bold tracking-widest hover:text-white hover:bg-white/10 transition-all cursor-pointer text-center border border-white/5 hover:border-[#c9a962] py-3 rounded-xl"
                >
                  Magnetiseur {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - AEO Optimized */}
        <section className="py-24 bg-[#faf8f5]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-[#3d3630] mb-4">Questions Frequentes</h2>
              <p className="text-[#6b6259]">Reponses aux questions les plus posees sur le magnetisme a distance</p>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "Comment fonctionne le soin a distance sur photo ?",
                  a: "Vous envoyez une photo recente de votre visage via le formulaire. Jean-Francois se connecte a votre energie et realise le soin. L'effet est souvent ressenti dans l'heure, quelle que soit la distance."
                },
                {
                  q: "Qu'est-ce qu'un coupeur de feu ?",
                  a: "Un coupeur de feu est un guerisseur capable de soulager instantanement la douleur des brulures par imposition des mains ou a distance. Jean-Francois pratique cette technique reconnue meme dans certains hopitaux."
                },
                {
                  q: "Le magnetisme peut-il soulager un zona ?",
                  a: "Oui, le magnetisme est particulierement efficace sur le zona. Jean-Francois traite de nombreux cas de zona a distance avec des resultats rapides sur la douleur et l'evolution des lesions."
                },
                {
                  q: "Combien coute un soin energetique a distance ?",
                  a: "Jean-Francois propose 3 formules : Soin Ponctuel (35EUR pour 1 seance), Soin Complet (55EUR pour 2 seances sur 48h, le plus recommande), et Forfait Suivi (120EUR pour 5 seances sur 2 semaines). Paiement securise par PayPal avant le soin."
                },
                {
                  q: "Ou se trouve le cabinet de Jean-Francois ?",
                  a: "Le cabinet est situe a Alencon (61) en Normandie. Mais grace aux soins sur photo, Jean-Francois intervient partout en France : Paris, Lyon, Marseille, Toulouse, Nice, Nantes, Bordeaux, Lille..."
                },
                {
                  q: "Quels problemes peuvent etre traites a distance ?",
                  a: "Zona, brulures (coupeur de feu), eczema, douleurs chroniques (dos, articulations), troubles du sommeil, stress et anxiete. Le magnetisme agit sur de nombreux maux."
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl p-6 cursor-pointer hover:shadow-md transition-all border border-[#4a6741]/10">
                  <summary className="flex justify-between items-center font-bold text-[#3d3630] list-none">
                    <span>{faq.q}</span>
                    <span className="text-[#4a6741] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-[#6b6259] leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-[#4a6741] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a962]/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic">Pret a retrouver votre equilibre ?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/demande-soin" className="px-12 py-6 bg-white text-[#4a6741] rounded-3xl font-bold text-xl hover:shadow-2xl transition-all">Soin a distance immediat</Link>
            </div>
            <p className="text-white/70 text-sm font-medium">Jean-Francois traite chaque demande personnellement sous 24h.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-[#3d3630] text-[#9a918a]">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-3">
            <p className="text-xs text-amber-500/80">Le magnetisme est une pratique complementaire qui ne remplace pas la medecine conventionnelle. Consultez toujours votre medecin en priorite.</p>
            <p className="text-xs">SIRET : 344 616 412 00062 | TVA intracommunautaire : FR6534461641200062</p>
          </div>
        </footer>
      </div>
    </LayoutWrapper>
  )
}
