"use client"

import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import { Flame, CheckCircle, Clock, Phone, Star, ArrowRight, Shield, Heart, Zap } from 'lucide-react'

export default function CoupeurDeFeuPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6">Tradition Ancestrale</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Coupeur de Feu : Soulagement des Brulures</h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">Jean-Francois pratique l'art ancestral du coupeur de feu pour soulager instantanement la douleur des brulures, coups de soleil et radiotherapie. A distance sur photo.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demande-soin" className="px-8 py-4 bg-white text-orange-600 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Flame size={20} />
                  Demander un soin brulure
                </Link>
                <a href="tel:0955554462" className="px-8 py-4 bg-white/10 border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} />
                  09 55 55 44 62
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Qu'est-ce qu'un coupeur de feu */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Qu'est-ce qu'un Coupeur de Feu ?</h2>
            <div className="prose prose-lg max-w-none text-stone-600">
              <p>Le coupeur de feu, aussi appele "barreur de feu" ou "panseur de secret", est un guerisseur traditionnel capable de soulager la douleur des brulures par imposition des mains ou a distance. Cette pratique ancestrale, transmise de generation en generation, est aujourd'hui reconnue et utilisee dans certains hopitaux et services de grands brules.</p>
              <p className="mt-4">Le coupeur de feu intervient sur les brulures domestiques, les coups de soleil, mais aussi les brulures liees a la radiotherapie chez les patients atteints de cancer. Son action permet de "couper" la douleur et d'accelerer la cicatrisation.</p>
            </div>
          </div>
        </section>

        {/* Types de brulures */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Sur Quelles Brulures Intervient Jean-Francois ?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Brulures Domestiques", desc: "Fer a repasser, four, eau bouillante, huile chaude..." },
                { title: "Coups de Soleil", desc: "Brulures solaires, meme severes avec cloques" },
                { title: "Radiotherapie", desc: "Brulures cutanees liees aux traitements anti-cancer" },
                { title: "Brulures Chimiques", desc: "Produits menagers, acides, bases" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reconnaissance medicale */}
        <section className="py-20 bg-orange-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Reconnu par le Corps Medical</h2>
            <p className="text-lg text-stone-600 mb-8">De nombreux hopitaux et centres anti-cancer en France font appel a des coupeurs de feu pour soulager leurs patients. Cette pratique complementaire est de plus en plus acceptee par le corps medical pour son efficacite sur la douleur et la cicatrisation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["CHU de Grenoble", "Institut Curie", "CHU de Lille", "Centre Leon Berard"].map((h, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-stone-700 shadow-sm">{h}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Temoignages */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Temoignages</h2>
            <div className="space-y-6">
              {[
                { name: "Catherine, 45 ans", city: "Nantes", text: "Je me suis brulee gravement avec de l'huile bouillante. J'ai appele Jean-Francois en urgence. La douleur a cesse en moins d'une heure. Le lendemain, la brulure avait deja bien cicatrise." },
                { name: "Patrick, 62 ans", city: "Toulouse", text: "Pendant ma radiotherapie, les brulures etaient insupportables. Jean-Francois m'a soulage a distance. Mon oncologue etait surpris de la rapidite de cicatrisation." },
                { name: "Amelie, 34 ans", city: "Bordeaux", text: "Mon fils de 3 ans s'est brule la main. J'ai envoye la photo a Jean-Francois qui a agi immediatement. Mon fils a arrete de pleurer en 20 minutes." }
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
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Vous Venez de Vous Bruler ?</h2>
            <p className="text-xl text-orange-100 mb-8">Agissez vite ! Plus l'intervention du coupeur de feu est rapide, plus l'efficacite est grande.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-orange-600 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Demander une intervention urgente
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-orange-200 text-sm">Reponse sous 2h en moyenne • Don libre apres resultat</p>
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
