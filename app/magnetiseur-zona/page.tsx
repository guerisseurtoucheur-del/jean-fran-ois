"use client"

import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import { Zap, CheckCircle, Clock, Phone, Star, ArrowRight, Shield, Heart } from 'lucide-react'

export default function MagnetiseurZonaPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-300 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6">Specialiste du Zona</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Magnetiseur Zona : Soulagement Rapide a Distance</h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">Jean-Francois, magnetiseur guerisseur experimente, soulage les douleurs du zona a distance grace au magnetisme. Resultats souvent ressentis des la premiere seance.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demande-soin" className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Zap size={20} />
                  Demander un soin pour mon zona
                </Link>
                <a href="tel:0955554462" className="px-8 py-4 bg-white/10 border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} />
                  09 55 55 44 62
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Qu'est-ce que le zona */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Qu'est-ce que le Zona ?</h2>
            <div className="prose prose-lg max-w-none text-stone-600">
              <p>Le zona est une maladie virale causee par la reactivation du virus de la varicelle (virus varicelle-zona). Il se manifeste par une eruption cutanee douloureuse, souvent sous forme de bande ou de ceinture, accompagnee de douleurs intenses, de brulures et de demangeaisons.</p>
              <p className="mt-4">Les douleurs du zona peuvent persister pendant des semaines, voire des mois (nevralgies post-zosteriennes), affectant considerablement la qualite de vie. C'est la ou le magnetisme peut apporter un soulagement significatif.</p>
            </div>
          </div>
        </section>

        {/* Pourquoi le magnetisme */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Pourquoi le Magnetisme pour le Zona ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Action Rapide", desc: "Le magnetisme agit directement sur les douleurs nerveuses. Beaucoup de patients ressentent un soulagement des la premiere seance." },
                { icon: Shield, title: "Sans Effets Secondaires", desc: "Contrairement aux medicaments, le magnetisme n'a aucun effet secondaire. Il complement parfaitement le traitement medical." },
                { icon: Heart, title: "Soin a Distance", desc: "Pas besoin de vous deplacer quand vous souffrez. Le soin se fait sur photo, ou que vous soyez en France." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-stone-50 rounded-3xl text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon size={28} className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Temoignages */}
        <section className="py-20 bg-indigo-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Temoignages Zona</h2>
            <div className="space-y-6">
              {[
                { name: "Marie-Claude, 67 ans", city: "Lyon", text: "Mon zona me faisait souffrir depuis 3 semaines malgre les medicaments. Apres le soin de Jean-Francois, la douleur a diminue de moitie en 24h. Une semaine plus tard, je n'avais plus mal." },
                { name: "Bernard, 72 ans", city: "Paris", text: "Sceptique au debut, j'ai tente le magnetisme en desespoir de cause. Le soulagement a ete quasi immediat. Je recommande vivement Jean-Francois." },
                { name: "Sylvie, 55 ans", city: "Marseille", text: "Les nevralgies post-zona me rendaient la vie impossible. En 2 seances, Jean-Francois a reussi la ou les medicaments avaient echoue." }
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

        {/* Comment ca marche */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Comment se Deroule le Soin Zona a Distance ?</h2>
            <div className="space-y-8">
              {[
                { step: "1", title: "Envoyez votre demande", desc: "Remplissez le formulaire avec une photo recente de votre visage et decrivez votre zona (localisation, depuis quand, intensite de la douleur)." },
                { step: "2", title: "Jean-Francois realise le soin", desc: "Dans les 24h, Jean-Francois se connecte a votre energie via votre photo et effectue le soin de magnetisme specifique au zona." },
                { step: "3", title: "Ressentez le soulagement", desc: "La plupart des patients ressentent une diminution des douleurs dans les heures suivant le soin. Parfois, un second soin est necessaire." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                    <p className="text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Vous Souffrez d'un Zona ?</h2>
            <p className="text-xl text-indigo-100 mb-8">N'attendez pas que la douleur s'installe. Le magnetisme est d'autant plus efficace qu'il est pratique tot.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Demander un soin maintenant
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-indigo-200 text-sm">Reponse sous 2h en moyenne • Don libre apres resultat</p>
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
