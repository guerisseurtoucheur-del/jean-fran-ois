"use client"

import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import { Droplets, CheckCircle, Clock, Phone, Star, ArrowRight, Shield, Heart, Zap } from 'lucide-react'

export default function MagnetiseurEczemaPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6">Peau Apaisee</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Magnetiseur Eczema : Apaisez Vos Demangeaisons</h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">Jean-Francois aide a soulager l'eczema et les problemes de peau grace au magnetisme. Demangeaisons, rougeurs, plaques : retrouvez une peau apaisee.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demande-soin" className="px-8 py-4 bg-white text-teal-600 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Droplets size={20} />
                  Demander un soin pour mon eczema
                </Link>
                <a href="tel:0955554462" className="px-8 py-4 bg-white/10 border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} />
                  09 55 55 44 62
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comprendre l'eczema */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Comprendre l'Eczema</h2>
            <div className="prose prose-lg max-w-none text-stone-600">
              <p>L'eczema (ou dermatite atopique) est une maladie inflammatoire de la peau qui provoque des demangeaisons intenses, des rougeurs, des plaques seches et parfois des suintements. Cette affection touche aussi bien les enfants que les adultes et peut considerablement affecter la qualite de vie.</p>
              <p className="mt-4">Le magnetisme agit sur plusieurs aspects : il aide a calmer l'inflammation, reduit les demangeaisons et favorise la regeneration de la peau. En complement des soins dermatologiques, il peut apporter un soulagement significatif.</p>
            </div>
          </div>
        </section>

        {/* Types d'eczema */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Types de Problemes de Peau Traites</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Eczema Atopique", desc: "Forme la plus courante, souvent hereditaire" },
                { title: "Eczema de Contact", desc: "Reaction a un allergene ou irritant" },
                { title: "Psoriasis", desc: "Plaques epaisses, squameuses et rouges" },
                { title: "Urticaire", desc: "Plaques rouges avec demangeaisons intenses" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-teal-50 rounded-2xl border border-teal-100">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefices */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Les Benefices du Magnetisme sur l'Eczema</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Reduit les Demangeaisons", desc: "Le magnetisme calme les terminaisons nerveuses responsables des demangeaisons, apportant un soulagement rapide." },
                { icon: Heart, title: "Apaise l'Inflammation", desc: "L'energie transmise aide a reduire l'inflammation et les rougeurs caracteristiques de l'eczema." },
                { icon: Zap, title: "Favorise la Cicatrisation", desc: "Le magnetisme stimule la regeneration cellulaire et accelere la reparation de la barriere cutanee." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon size={28} className="text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Temoignages */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Temoignages Eczema</h2>
            <div className="space-y-6">
              {[
                { name: "Sophie, 38 ans", city: "Rennes", text: "Mon eczema aux mains me faisait souffrir depuis des annees. Apres 3 seances avec Jean-Francois, les demangeaisons ont quasiment disparu. Ma peau a enfin pu cicatriser." },
                { name: "Thomas, 8 ans (maman temoigne)", city: "Nice", text: "Mon fils se grattait jusqu'au sang. Les corticoides ne faisaient plus effet. Le magnetisme de Jean-Francois a ete une revelation : il dort enfin la nuit." },
                { name: "Isabelle, 52 ans", city: "Strasbourg", text: "Psoriasis depuis 20 ans. J'avais tout essaye. Le magnetisme a reduit mes plaques de 70% en quelques semaines. Je vis enfin normalement." }
              ].map((t, i) => (
                <div key={i} className="p-8 bg-stone-50 rounded-3xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-stone-600 italic mb-4">"{t.text}"</p>
                  <p className="font-bold text-stone-900">{t.name} - {t.city}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Marre de Vous Gratter ?</h2>
            <p className="text-xl text-teal-100 mb-8">Le magnetisme peut vous aider a retrouver une peau apaisee. Essayez sans risque.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-teal-600 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Demander un soin maintenant
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-teal-200 text-sm">Reponse sous 2h en moyenne • Don libre apres resultat</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-stone-950 text-stone-500">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs">SIRET : 344 616 412 00062 | TVA intracommunautaire : FR6534461641200062</p>
          </div>
        </footer>
      </div>
    </LayoutWrapper>
  )
}
