"use client"

import { Phone, Star, CheckCircle, Clock, Shield, Users, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function LandingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf8f5]"></div>}>
      <LandingPageContent />
    </Suspense>
  )
}

function LandingPageContent() {
  const searchParams = useSearchParams()
  const probleme = searchParams.get('p') || 'douleurs'
  
  const problemes: Record<string, { titre: string, description: string }> = {
    'zona': {
      titre: 'Vous souffrez du zona ?',
      description: 'Les douleurs du zona peuvent etre insupportables. Le magnetisme peut vous soulager rapidement.'
    },
    'brulure': {
      titre: 'Vous avez une brulure ?',
      description: 'Coupeur de feu reconnu, Jean-Francois peut soulager votre brulure a distance.'
    },
    'eczema': {
      titre: 'L\'eczema vous gache la vie ?',
      description: 'Demangeaisons, rougeurs, inconfort... Le magnetisme peut apaiser votre peau.'
    },
    'douleurs': {
      titre: 'Vous avez mal ?',
      description: 'Douleurs chroniques, dos, articulations... Le magnetisme peut vous soulager naturellement.'
    },
    'stress': {
      titre: 'Le stress vous envahit ?',
      description: 'Anxiete, insomnies, tensions... Retrouvez la serenite grace au magnetisme.'
    }
  }
  
  const content = problemes[probleme] || problemes['douleurs']

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      
      {/* Header minimaliste */}
      <header className="bg-white border-b border-[#4a6741]/10 py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Jean-Francois Magnetiseur" className="w-10 h-10 rounded-xl object-cover" />
            <span className="font-serif font-bold text-[#3d3630]">Jean-Francois</span>
          </div>
          <a href="tel:0955554462" className="flex items-center gap-2 px-4 py-2 bg-[#b45334] text-white rounded-full text-sm font-bold hover:bg-[#9a4429] transition-all">
            <Phone size={16} />
            <span className="hidden sm:inline">09 55 55 44 62</span>
          </a>
        </div>
      </header>

      {/* Hero - Le probleme */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b45334]/10 text-[#b45334] rounded-full text-sm font-bold mb-8">
            <Zap size={16} />
            Soulagement rapide a distance
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3d3630] mb-6 leading-tight">
            {content.titre}
          </h1>
          
          <p className="text-xl text-[#6b6259] mb-8 max-w-2xl mx-auto">
            {content.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0955554462" className="px-8 py-4 bg-[#b45334] text-white rounded-2xl font-bold text-lg hover:bg-[#9a4429] transition-all flex items-center justify-center gap-3 shadow-lg">
              <Phone size={20} />
              Appeler maintenant
            </a>
            <Link href="/demande-soin" className="px-8 py-4 bg-[#4a6741] text-white rounded-2xl font-bold text-lg hover:bg-[#3a5233] transition-all flex items-center justify-center gap-3 shadow-lg">
              Demander un soin
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Jean-Francois - Bien visible */}
      <section className="py-12 px-6 bg-white border-y border-[#4a6741]/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Jean-Francois Magnetiseur Guerisseur" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#4a6741] shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#4a6741] rounded-full flex items-center justify-center">
                <CheckCircle size={20} className="text-white" />
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3d3630] mb-2">
              Jean-Francois
            </h2>
            <p className="text-[#4a6741] font-bold uppercase tracking-wider text-sm mb-4">
              Magnetiseur Guerisseur depuis 20+ ans
            </p>
            <p className="text-[#6b6259] max-w-md">
              Depuis Alencon, j'accompagne des personnes de toute la France vers le soulagement. 
              Mon don, je l'ai decouvert jeune et je le mets a votre service.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <div className="flex items-center gap-2 text-[#3d3630]">
                <Users size={16} className="text-[#4a6741]" />
                <span className="text-sm font-bold">2 847+ personnes aidees</span>
              </div>
              <div className="flex items-center gap-2 text-[#3d3630]">
                <Star size={16} className="text-amber-400" fill="currentColor" />
                <span className="text-sm font-bold">5/5 sur Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bande de confiance */}
      <section className="bg-[#4a6741] py-6 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-white text-center">
          <div className="flex items-center gap-2">
            <Users size={20} />
            <span className="font-bold">2 847+ personnes soulagees</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span className="font-bold">20+ ans d'experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={20} fill="currentColor" />
            <span className="font-bold">5/5 sur Google</span>
          </div>
        </div>
      </section>

      {/* Temoignages */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center text-[#3d3630] mb-12">
            Ils ont ete soulages
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Mon zona m'empechait de dormir. Apres une seance avec Jean-Francois, les douleurs ont diminue de moitie. Incroyable.", name: "Marie L.", city: "Paris", problem: "Zona" },
              { text: "Brulure a la main en cuisinant. J'ai appele Jean-Francois, 30 minutes apres la douleur avait presque disparu.", name: "Thomas R.", city: "Lyon", problem: "Brulure" },
              { text: "Des annees d'eczema, plus rien ne marchait. Depuis les seances de magnetisme, ma peau est enfin apaisee.", name: "Sophie M.", city: "Bordeaux", problem: "Eczema" }
            ].map((t, i) => (
              <div key={i} className="p-6 bg-[#faf8f5] rounded-2xl border border-[#4a6741]/10">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[#6b6259] text-sm mb-4 italic">"{t.text}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-[#3d3630] text-sm">{t.name}</p>
                    <p className="text-[10px] text-[#4a6741] uppercase tracking-wider">{t.city}</p>
                  </div>
                  <span className="px-2 py-1 bg-[#4a6741]/10 text-[#4a6741] text-[10px] font-bold rounded-full">{t.problem}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ca marche */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center text-[#3d3630] mb-12">
            Comment ca marche ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Choisissez votre soin", desc: "Selectionnez la formule adaptee a vos besoins et payez en ligne." },
              { step: "2", title: "Envoyez votre photo", desc: "Une photo recente de votre visage suffit pour le soin a distance." },
              { step: "3", title: "Recevez le soin", desc: "Jean-Francois realise le soin. L'effet est souvent ressenti dans l'heure." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-[#4a6741] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-[#3d3630] mb-2">{item.title}</h3>
                <p className="text-[#6b6259] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center text-[#3d3630] mb-4">
            Tarifs clairs et transparents
          </h2>
          <p className="text-center text-[#6b6259] mb-12">Paiement securise par PayPal. Maximum 5 soins par jour.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Soin Ponctuel */}
            <div className="p-6 bg-[#faf8f5] rounded-2xl border border-[#4a6741]/10 text-center">
              <h3 className="font-bold text-[#3d3630] mb-2">Soin Ponctuel</h3>
              <p className="text-[#6b6259] text-sm mb-4">1 seance</p>
              <p className="text-4xl font-bold text-[#3d3630] mb-6">35<span className="text-lg">EUR</span></p>
              <Link href="/demande-soin?forfait=ponctuel" className="block w-full py-3 bg-[#4a6741]/10 text-[#4a6741] rounded-xl font-bold hover:bg-[#4a6741]/20 transition-all">
                Choisir
              </Link>
            </div>
            
            {/* Soin Complet - Recommande */}
            <div className="p-6 bg-[#4a6741] rounded-2xl text-white text-center relative scale-105 shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c9a962] text-[#3d3630] text-xs font-bold rounded-full">
                RECOMMANDE
              </div>
              <h3 className="font-bold mb-2 mt-2">Soin Complet</h3>
              <p className="text-white/70 text-sm mb-4">2 seances sur 48h</p>
              <p className="text-4xl font-bold mb-6">55<span className="text-lg">EUR</span></p>
              <Link href="/demande-soin?forfait=complet" className="block w-full py-3 bg-white text-[#4a6741] rounded-xl font-bold hover:bg-white/90 transition-all">
                Choisir
              </Link>
            </div>
            
            {/* Forfait Suivi */}
            <div className="p-6 bg-[#faf8f5] rounded-2xl border border-[#4a6741]/10 text-center">
              <h3 className="font-bold text-[#3d3630] mb-2">Forfait Suivi</h3>
              <p className="text-[#6b6259] text-sm mb-4">5 seances sur 2 semaines</p>
              <p className="text-4xl font-bold text-[#3d3630] mb-6">120<span className="text-lg">EUR</span></p>
              <Link href="/demande-soin?forfait=suivi" className="block w-full py-3 bg-[#4a6741]/10 text-[#4a6741] rounded-xl font-bold hover:bg-[#4a6741]/20 transition-all">
                Choisir
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Paiement securise", desc: "Transaction protegee par PayPal" },
              { icon: Clock, title: "Reponse sous 24h", desc: "Jean-Francois traite chaque demande personnellement" },
              { icon: CheckCircle, title: "Complement medical", desc: "Le magnetisme accompagne, ne remplace pas la medecine" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#4a6741]/10">
                <div className="w-10 h-10 bg-[#4a6741]/10 rounded-xl flex items-center justify-center text-[#4a6741] flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#3d3630] text-sm">{item.title}</h3>
                  <p className="text-[#6b6259] text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 bg-[#b45334] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Pret a etre soulage ?
          </h2>
          <p className="text-white/80 mb-8">
            Jean-Francois est disponible maintenant pour vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0955554462" className="px-8 py-4 bg-white text-[#b45334] rounded-2xl font-bold text-lg hover:bg-white/90 transition-all flex items-center justify-center gap-3">
              <Phone size={20} />
              09 55 55 44 62
            </a>
            <Link href="/demande-soin" className="px-8 py-4 bg-[#9a4429] text-white rounded-2xl font-bold text-lg hover:bg-[#8b3a25] transition-all flex items-center justify-center gap-3 border-2 border-white/20">
              Demander un soin en ligne
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer minimaliste */}
      <footer className="py-8 px-6 bg-[#3d3630] text-[#9a918a] text-center text-sm">
        <p>2024 Jean-Francois Magnetiseur Guerisseur - Alencon, France</p>
        <p className="mt-2">Le magnetisme ne remplace pas un avis medical.</p>
      </footer>
      
    </div>
  )
}
