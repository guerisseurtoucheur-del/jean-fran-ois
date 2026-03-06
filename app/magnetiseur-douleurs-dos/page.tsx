"use client"

import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import { Activity, CheckCircle, Clock, Phone, Star, ArrowRight, Shield, Heart, Zap } from 'lucide-react'

export default function MagnetiseurDouleursPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6">Liberation des Douleurs</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Magnetiseur Douleurs Dos et Articulations</h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">Jean-Francois soulage les douleurs chroniques du dos, des articulations et musculaires grace au magnetisme a distance. Retrouvez votre mobilite.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demande-soin" className="px-8 py-4 bg-white text-emerald-600 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Activity size={20} />
                  Demander un soin pour mes douleurs
                </Link>
                <a href="tel:0955554462" className="px-8 py-4 bg-white/10 border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} />
                  09 55 55 44 62
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Types de douleurs */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Douleurs Traitees par le Magnetisme</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Mal de Dos", desc: "Lombalgies, dorsalgies, cervicalgies, lumbago" },
                { title: "Sciatique", desc: "Douleur irradiant dans la jambe, nerf sciatique" },
                { title: "Arthrose", desc: "Douleurs articulaires liees a l'usure du cartilage" },
                { title: "Tendinites", desc: "Inflammation des tendons, epaule, coude, poignet" },
                { title: "Fibromyalgie", desc: "Douleurs diffuses et fatigue chronique" },
                { title: "Migraines", desc: "Maux de tete recurrents et intenses" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-stone-200 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comment ca marche */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Comment le Magnetisme Soulage la Douleur ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Relance l'Energie", desc: "Le magnetisme reactive la circulation energetique dans les zones douloureuses, debloquant les tensions accumulees." },
                { icon: Shield, title: "Reduit l'Inflammation", desc: "L'energie transmise aide a diminuer l'inflammation responsable de nombreuses douleurs chroniques." },
                { icon: Heart, title: "Detend les Muscles", desc: "Le magnetisme favorise la relaxation musculaire profonde, liberant les contractures et les noeuds." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-emerald-50 rounded-3xl text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon size={28} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Temoignages */}
        <section className="py-20 bg-emerald-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Temoignages Douleurs</h2>
            <div className="space-y-6">
              {[
                { name: "Michel, 58 ans", city: "Lille", text: "Sciatique depuis 6 mois, impossible de marcher correctement. Apres 2 seances avec Jean-Francois, la douleur a diminue de 80%. Je remarche normalement." },
                { name: "Christine, 63 ans", city: "Montpellier", text: "Arthrose aux genoux, je souffrais a chaque pas. Le magnetisme m'a apporte un soulagement que je n'esperais plus. Merci Jean-Francois !" },
                { name: "Laurent, 45 ans", city: "Grenoble", text: "Mal de dos chronique depuis 10 ans. Osteopathes, kines, rien ne marchait durablement. Le magnetisme a ete une revelation." }
              ].map((t, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl shadow-sm">
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
        <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">La Douleur N'est Pas Une Fatalite</h2>
            <p className="text-xl text-emerald-100 mb-8">Le magnetisme peut vous aider la ou d'autres methodes ont echoue. Essayez sans engagement.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-emerald-600 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Demander un soin maintenant
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-emerald-200 text-sm">Reponse sous 2h en moyenne • Don libre apres resultat</p>
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
