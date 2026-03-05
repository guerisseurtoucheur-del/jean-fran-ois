'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Star, CheckCircle, ArrowRight, Shield, Clock, Zap, Heart, Users, Award, Sparkles, Plus, Minus } from 'lucide-react'
import LayoutWrapper from '@/components/LayoutWrapper'
import { CityData } from '@/data/cities'

interface CityPageContentProps {
  city: CityData
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-stone-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-serif font-bold text-stone-800 group-hover:text-indigo-600 transition-colors">{question}</span>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-stone-100 text-stone-400'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-stone-500 leading-relaxed italic">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function CityPageContent({ city }: CityPageContentProps) {
  return (
    <LayoutWrapper>
      <div className="page-fade">
        {/* Hero Section Ville */}
        <section className="relative py-20 px-6 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-from)_0%,_transparent_50%)] from-white"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <nav className="flex items-center gap-2 text-indigo-200 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-white font-medium">Magnetiseur {city.name}</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  <MapPin size={14} />
                  <span>{city.department} ({city.departmentCode}) - {city.region}</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                  Magnetiseur a {city.name}
                  <span className="block text-2xl md:text-3xl font-normal text-indigo-200 mt-4">Guerisseur & Coupeur de Feu</span>
                </h1>
                
                <p className="text-xl text-indigo-100 leading-relaxed">
                  Jean-Francois, magnetiseur expert, intervient a distance pour les habitants de <strong>{city.name}</strong> et ses environs. 
                  Soins energetiques sur photo pour zona, eczema, brulures et douleurs.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/demande-soin" className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-3">
                    <Sparkles size={20} />
                    Demander un soin
                  </Link>
                  <a href="tel:0955554462" className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3">
                    <Phone size={20} />
                    09 55 55 44 62
                  </a>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Award size={32} />
                    </div>
                    <div>
                      <div className="text-3xl font-serif font-bold">5.0/5</div>
                      <div className="flex gap-1 text-amber-300">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold">24h</div>
                      <div className="text-xs text-indigo-200">Delai de reponse</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-xs text-indigo-200">A distance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zones couvertes */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-serif font-bold text-center mb-8">
              Intervention a {city.name} et ses environs
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {city.nearbyAreas.map((area, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-stone-600 border border-stone-200">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                Soins energetiques a distance pour {city.name}
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Specialise dans le traitement de nombreuses affections par le magnetisme et le souffle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Zap, title: "Coupeur de Feu", desc: "Brulures, zona, coups de soleil - soulagement immediat" },
                { icon: Heart, title: "Douleurs", desc: "Dos, articulations, migraines, sciatique" },
                { icon: Shield, title: "Peau", desc: "Eczema, psoriasis, allergies cutanees" },
                { icon: Users, title: "Bien-etre", desc: "Stress, anxiete, insomnie, fatigue" },
              ].map((service, i) => (
                <div key={i} className="p-6 bg-stone-50 rounded-2xl hover:bg-indigo-50 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{service.title}</h3>
                  <p className="text-stone-500 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-indigo-50 rounded-2xl">
              <h3 className="font-bold text-stone-900 mb-3">Problemes frequemment traites a {city.name} :</h3>
              <div className="flex flex-wrap gap-2">
                {city.specificConditions.map((condition, i) => (
                  <span key={i} className="px-3 py-1 bg-white text-indigo-600 rounded-full text-sm font-medium capitalize">
                    {condition}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Temoignages locaux */}
        <section className="py-20 bg-stone-950 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Temoignages de {city.name}
              </h2>
              <p className="text-stone-400">
                Ce que disent les habitants de {city.name} et du {city.department}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {city.localTestimonials.map((testimonial, i) => (
                <div key={i} className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-stone-300 italic mb-6">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-xs text-stone-500">{city.name}</p>
                    </div>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                      {testimonial.condition}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a 
                href="https://maps.app.goo.gl/7T8BscaocjerZRNWA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
              >
                <Star size={16} className="text-amber-400" fill="currentColor" />
                <span>Voir tous les avis Google - 5/5</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Questions frequentes - Magnetiseur {city.name}
            </h2>
            
            <div className="bg-stone-50 rounded-3xl p-8">
              <FAQItem 
                question={`Comment se deroule un soin a distance pour ${city.name} ?`}
                answer={`C'est tres simple : vous m'envoyez votre photo via le formulaire de demande de soin. Je me connecte ensuite a votre energie pour effectuer le soin. La distance n'est pas un obstacle.`}
              />
              <FAQItem 
                question="Etes-vous disponible en urgence ?"
                answer="Oui, pour les brulures et zonas qui necessitent une intervention rapide, je reponds dans les meilleurs delais. Appelez au 09 55 55 44 62."
              />
              <FAQItem 
                question={`Intervenez-vous sur les villes autour de ${city.name} ?`}
                answer={`Absolument ! J'interviens pour ${city.nearbyAreas.join(', ')}, et toute la France. Le soin a distance fonctionne partout.`}
              />
              <FAQItem 
                question="Quel est le tarif d'une seance ?"
                answer="Je fonctionne sur la base du don libre. Chacun donne selon ses moyens et sa satisfaction."
              />
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Vous habitez {city.name} ou ses environs ?
            </h2>
            <p className="text-indigo-100 text-lg">
              Beneficiez d&apos;un soin energetique a distance. Jean-Francois vous accompagne personnellement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/demande-soin" className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3">
                <Sparkles size={20} />
                Demander un soin gratuit
              </Link>
              <a href="tel:0955554462" className="px-10 py-5 border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <Phone size={20} />
                Appeler maintenant
              </a>
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
