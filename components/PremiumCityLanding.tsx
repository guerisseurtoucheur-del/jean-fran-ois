'use client'

import React from 'react'
import { MapPin, Star, ShieldCheck, Heart, Sparkles, ArrowDown } from 'lucide-react'
import CityEnergyOrb from './CityEnergyOrb'
import IntegratedChatbot from './IntegratedChatbot'
import IntegratedBookingForm from './IntegratedBookingForm'

interface PremiumCityLandingProps {
  city: {
    nom: string;
    departement: string;
    region: string;
    description: string;
    seoTitle?: string;
    seoText?: string[];
  }
}

export default function PremiumCityLanding({ city }: PremiumCityLandingProps) {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-[#c9a962] selection:text-stone-900 overflow-x-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <CityEnergyOrb />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        
        {/* Navigation / Header simple */}
        <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
          <div className="flex items-center gap-2">
            <Sparkles className="text-[#c9a962]" size={24} />
            <span className="font-serif font-bold text-xl tracking-wider">JEAN-FRANÇOIS</span>
          </div>
          <a href="/" className="text-sm font-bold uppercase tracking-widest hover:text-[#c9a962] transition-colors">
            Retour au site
          </a>
        </header>

        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex flex-col justify-center px-6 lg:px-20 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <MapPin className="text-[#c9a962]" size={18} />
              <span className="text-sm font-bold tracking-widest uppercase text-white/80">
                Magnétiseur Guérisseur • {city.region}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
              Soulagez vos maux à <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a962] via-[#e5d397] to-[#c9a962]">
                {city.nom}
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              {city.description} Jean-François, magnétiseur depuis plus de 20 ans, vous accompagne à distance avec la même efficacité qu'en cabinet.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-sm">
                <ShieldCheck className="text-emerald-400" size={16} />
                <span>Paiement Sécurisé</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-sm">
                <Star className="text-yellow-400" size={16} />
                <span>20 ans d'expérience</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-sm">
                <Heart className="text-red-400" size={16} />
                <span>Don de naissance</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ArrowDown size={32} />
          </div>
        </section>

        {/* TWO COLUMN SECTION: CHAT & FORM */}
        <section className="px-4 lg:px-12 py-24 bg-black/40 backdrop-blur-3xl border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Votre soin commence ici</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Posez vos questions en direct à l'assistant de Jean-François, ou remplissez directement votre demande de soin.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* CHATBOT COLUMN (Left) */}
              <div className="lg:col-span-5 h-[700px] sticky top-8">
                <IntegratedChatbot />
              </div>

              {/* BOOKING FORM COLUMN (Right) */}
              <div className="lg:col-span-7">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                  {/* We inject custom styles for the form to make it dark mode compatible since we copied it from the light mode site */}
                  <div className="form-dark-override">
                    <IntegratedBookingForm cityName={city.nom} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SEO TEXT SECTION */}
        <section className="px-6 py-24 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto text-white/50 space-y-6 text-sm leading-relaxed">
            <h3 className="text-xl font-serif text-white/80 mb-4">{city.seoTitle || `Un magnétiseur à votre écoute pour ${city.nom} (${city.departement})`}</h3>
            {city.seoText ? (
              city.seoText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <>
                <p>
                  Vous résidez à {city.nom} ou dans les environs de la région {city.region} et vous cherchez un magnétiseur guérisseur sérieux et expérimenté ? La distance n'est pas un obstacle à la guérison. Jean-François pratique les soins énergétiques sur photo depuis de nombreuses années avec des résultats remarquables.
                </p>
                <p>
                  Que ce soit pour soulager le zona, l'eczéma, agir comme coupeur de feu pour des brûlures, ou apaiser des douleurs chroniques et le stress, l'énergie vitale traverse l'espace. Les patients de {city.nom} peuvent ainsi bénéficier de l'expertise de Jean-François sans avoir à se déplacer.
                </p>
              </>
            )}
          </div>
        </section>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Overrides to make the imported form look good in dark mode */
        .form-dark-override .bg-white {
          background-color: rgba(255, 255, 255, 0.05) !important;
          color: white !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        .form-dark-override .bg-stone-50 {
          background-color: rgba(255, 255, 255, 0.02) !important;
          color: white !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        .form-dark-override .text-\\[\\#3d3630\\] { color: white !important; }
        .form-dark-override .text-\\[\\#6b6259\\] { color: rgba(255, 255, 255, 0.7) !important; }
        .form-dark-override input, .form-dark-override textarea, .form-dark-override select {
          color: white !important;
        }
        .form-dark-override .bg-stone-100 {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
      `}} />
    </div>
  )
}
