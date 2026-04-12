'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, Heart, Sparkles, MapPin, Clock, Award, Users, Star, CheckCircle } from 'lucide-react'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function QuiSuisJePage() {
  return (
    <LayoutWrapper>
      <div className="page-fade">
        {/* Hero Section */}
        <section className="relative py-24 bg-[#faf8f5] overflow-hidden">
          <div className="energy-field w-96 h-96 bg-[#4a6741]/10 -top-20 -right-20"></div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Photo */}
              <div className="relative">
                <div className="aspect-[4/5] bg-stone-100 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="/logo.png" 
                    alt="Jean-Francois Magnetiseur Guerisseur" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge experience */}
                <div className="absolute -bottom-6 -right-6 bg-[#4a6741] text-white px-8 py-4 rounded-2xl shadow-xl">
                  <div className="text-3xl font-serif font-bold">20+</div>
                  <div className="text-xs uppercase tracking-widest opacity-80">ans d&apos;experience</div>
                </div>
              </div>

              {/* Texte */}
              <div className="space-y-8">
                <div>
                  <p className="text-[#4a6741] text-sm font-bold uppercase tracking-widest mb-4">Qui suis-je ?</p>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#3d3630] leading-tight">
                    Jean-Francois,<br/>
                    <span className="text-[#4a6741] italic">Magnetiseur Guerisseur</span>
                  </h1>
                </div>

                <p className="text-xl text-[#6b6259] leading-relaxed">
                  Depuis plus de 20 ans, j&apos;accompagne des milliers de personnes vers le soulagement et le mieux-etre grace au magnetisme et aux soins energetiques.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#4a6741]/20">
                    <MapPin size={16} className="text-[#4a6741]" />
                    <span className="text-sm font-medium text-[#3d3630]">Alencon, Normandie</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#4a6741]/20">
                    <Users size={16} className="text-[#4a6741]" />
                    <span className="text-sm font-medium text-[#3d3630]">+6500 personnes aidees</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/demande-soin" className="px-8 py-4 bg-[#4a6741] text-white rounded-xl font-bold hover:bg-[#3a5233] transition-all flex items-center justify-center gap-2">
                    <Sparkles size={18} />
                    Demander un soin
                  </Link>
                  <a href="tel:0955554462" className="px-8 py-4 border-2 border-[#3d3630] text-[#3d3630] rounded-xl font-bold hover:bg-[#3d3630] hover:text-white transition-all flex items-center justify-center gap-2">
                    <Phone size={18} />
                    09 55 55 44 62
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mon Histoire */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d3630] mb-4">Mon Parcours</h2>
              <p className="text-[#6b6259]">Comment j&apos;ai decouvert le don du magnetisme</p>
            </div>

            <div className="space-y-12">
              <div className="relative pl-8 border-l-4 border-[#4a6741]/30">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#4a6741] rounded-full"></div>
                <h3 className="text-xl font-serif font-bold text-[#3d3630] mb-3">La decouverte du don</h3>
                <p className="text-[#6b6259] leading-relaxed">
                  Tres jeune, j&apos;ai ressenti cette energie particuliere qui circulait en moi. Un jour, en posant mes mains sur un proche souffrant, j&apos;ai senti cette chaleur intense se transmettre. La douleur s&apos;est apaisee. Ce fut une revelation : j&apos;avais le don de soulager par l&apos;energie.
                </p>
              </div>

              <div className="relative pl-8 border-l-4 border-[#4a6741]/30">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#4a6741] rounded-full"></div>
                <h3 className="text-xl font-serif font-bold text-[#3d3630] mb-3">L&apos;apprentissage et la transmission</h3>
                <p className="text-[#6b6259] leading-relaxed">
                  J&apos;ai eu la chance d&apos;apprendre aupres d&apos;anciens guerisseurs qui m&apos;ont transmis leurs secrets : les prieres de coupeur de feu, les techniques pour apaiser le zona, les gestes pour liberer les blocages energetiques. Cette connaissance ancestrale, je la perpetue aujourd&apos;hui.
                </p>
              </div>

              <div className="relative pl-8 border-l-4 border-[#4a6741]/30">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#4a6741] rounded-full"></div>
                <h3 className="text-xl font-serif font-bold text-[#3d3630] mb-3">Le soin a distance : une evolution naturelle</h3>
                <p className="text-[#6b6259] leading-relaxed">
                  Avec le temps, j&apos;ai realise que l&apos;energie ne connait pas de frontieres. Une photo suffit pour etablir le lien. Aujourd&apos;hui, je soigne des personnes dans toute la France depuis mon cabinet d&apos;Alencon, avec les memes resultats qu&apos;en presence.
                </p>
              </div>

              <div className="relative pl-8 border-l-4 border-[#c9a962]">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#c9a962] rounded-full"></div>
                <h3 className="text-xl font-serif font-bold text-[#3d3630] mb-3">Aujourd&apos;hui : plus de 6500 personnes soulagees</h3>
                <p className="text-[#6b6259] leading-relaxed">
                  Chaque jour, je recois des demandes de partout en France. Zona, brulures, eczema, douleurs chroniques... Je traite chaque personne avec le meme engagement. Mon objectif reste le meme qu&apos;au premier jour : soulager ceux qui souffrent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mes Specialites */}
        <section className="py-24 bg-[#f5f0e8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d3630] mb-4">Mes Specialites</h2>
              <p className="text-[#6b6259]">Les domaines ou mon magnetisme est le plus efficace</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Coupeur de feu",
                  description: "Technique ancestrale pour soulager instantanement les brulures et stopper la douleur.",
                  icon: "🔥"
                },
                {
                  title: "Traitement du zona",
                  description: "Soulagement rapide des douleurs du zona et acceleration de la guerison.",
                  icon: "⚡"
                },
                {
                  title: "Eczema & peau",
                  description: "Apaisement des problemes cutanes, demangeaisons et inflammations.",
                  icon: "🌿"
                },
                {
                  title: "Douleurs chroniques",
                  description: "Dos, articulations, migraines... Liberation des tensions et blocages.",
                  icon: "💆"
                }
              ].map((specialite, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-[#4a6741]/10 hover:shadow-xl hover:border-[#4a6741]/30 transition-all">
                  <div className="text-4xl mb-4">{specialite.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-[#3d3630] mb-3">{specialite.title}</h3>
                  <p className="text-[#6b6259] text-sm leading-relaxed">{specialite.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mes Valeurs */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d3630] mb-8">Mes Engagements</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Ecoute et bienveillance",
                      description: "Chaque personne est unique. Je prends le temps de comprendre votre situation avant d'agir."
                    },
                    {
                      title: "Reponse sous 24h",
                      description: "Je m'engage a traiter votre demande rapidement, car la souffrance n'attend pas."
                    },
                    {
                      title: "Maximum 5 soins par jour",
                      description: "Pour garantir la qualite de chaque soin, je limite volontairement le nombre de patients quotidiens."
                    },
                    {
                      title: "Complement a la medecine",
                      description: "Le magnetisme ne remplace pas un traitement medical. Je travaille en complementarite avec la medecine."
                    }
                  ].map((valeur, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#4a6741]/10 rounded-full flex items-center justify-center">
                        <CheckCircle size={18} className="text-[#4a6741]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#3d3630] mb-1">{valeur.title}</h3>
                        <p className="text-[#6b6259] text-sm">{valeur.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#4a6741] text-white p-10 rounded-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Heart size={32} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-bold">+6500</div>
                    <div className="text-sm opacity-80">personnes soulagees</div>
                  </div>
                </div>
                <blockquote className="text-xl font-serif italic mb-6">
                  "Mon don est un cadeau que je mets au service de ceux qui souffrent. Chaque personne soulagee est une victoire."
                </blockquote>
                <p className="text-sm opacity-80">— Jean-Francois</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-24 bg-[#f5f0e8]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d3630] mb-4">Mes Tarifs</h2>
              <p className="text-[#6b6259]">Des soins accessibles pour tous</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-[#4a6741]/10 text-center">
                <h3 className="text-xl font-serif font-bold text-[#3d3630] mb-2">Soin Ponctuel</h3>
                <div className="text-4xl font-serif font-bold text-[#4a6741] mb-2">35€</div>
                <p className="text-[#6b6259] text-sm mb-6">1 seance de magnetisme</p>
                <Link href="/demande-soin" className="block w-full py-3 border-2 border-[#4a6741] text-[#4a6741] rounded-xl font-bold hover:bg-[#4a6741] hover:text-white transition-all">
                  Choisir
                </Link>
              </div>

              <div className="bg-[#4a6741] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#c9a962] text-[#3d3630] text-xs font-bold px-3 py-1 rounded-full">
                  Recommande
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">Soin Complet</h3>
                <div className="text-4xl font-serif font-bold mb-2">55€</div>
                <p className="text-white/80 text-sm mb-6">2 seances sur 48h</p>
                <Link href="/demande-soin" className="block w-full py-3 bg-white text-[#4a6741] rounded-xl font-bold hover:shadow-lg transition-all text-center">
                  Choisir
                </Link>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-[#4a6741]/10 text-center">
                <h3 className="text-xl font-serif font-bold text-[#3d3630] mb-2">Forfait Suivi</h3>
                <div className="text-4xl font-serif font-bold text-[#4a6741] mb-2">120€</div>
                <p className="text-[#6b6259] text-sm mb-6">5 seances sur 2 semaines</p>
                <Link href="/demande-soin" className="block w-full py-3 border-2 border-[#4a6741] text-[#4a6741] rounded-xl font-bold hover:bg-[#4a6741] hover:text-white transition-all">
                  Choisir
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-[#4a6741] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a962]/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic">Pret a soulager vos maux ?</h2>
            <p className="text-xl text-white/80">Je suis la pour vous accompagner vers le mieux-etre.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/demande-soin" className="px-12 py-6 bg-white text-[#4a6741] rounded-3xl font-bold text-xl hover:shadow-2xl transition-all">
                Demander un soin
              </Link>
              <a href="tel:0955554462" className="px-12 py-6 border-2 border-white text-white rounded-3xl font-bold text-xl hover:bg-white hover:text-[#4a6741] transition-all flex items-center justify-center gap-3">
                <Phone size={24} />
                09 55 55 44 62
              </a>
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
