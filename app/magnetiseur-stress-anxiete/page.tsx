"use client"

import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import { Brain, CheckCircle, Clock, Phone, Star, ArrowRight, Shield, Heart, Zap, Moon } from 'lucide-react'

export default function MagnetiseurStressPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6">Serenite Retrouvee</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Magnetiseur Stress et Anxiete</h1>
              <p className="text-xl text-violet-100 mb-8 leading-relaxed">Jean-Francois vous aide a retrouver calme et serenite grace au magnetisme. Stress, anxiete, troubles du sommeil : liberez-vous de ces fardeaux.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demande-soin" className="px-8 py-4 bg-white text-violet-600 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Brain size={20} />
                  Demander un soin anti-stress
                </Link>
                <a href="tel:0955554462" className="px-8 py-4 bg-white/10 border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} />
                  09 55 55 44 62
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comprendre le stress */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Le Stress, un Mal Moderne</h2>
            <div className="prose prose-lg max-w-none text-stone-600">
              <p>Le stress chronique et l'anxiete sont devenus des maux omnipresents dans notre societe. Ils se manifestent par des tensions physiques, des troubles du sommeil, une fatigue permanente, des difficultes de concentration, et parfois des crises d'angoisse.</p>
              <p className="mt-4">Le magnetisme agit en profondeur pour reequilibrer votre energie, apaiser votre systeme nerveux et vous aider a retrouver un etat de calme interieur. Les effets sont souvent ressentis des la premiere seance.</p>
            </div>
          </div>
        </section>

        {/* Symptomes */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Symptomes Traites</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Stress Chronique", desc: "Tension permanente, incapacite a se detendre" },
                { title: "Anxiete", desc: "Inquietude excessive, anticipation negative" },
                { title: "Insomnie", desc: "Difficultes d'endormissement, reveils nocturnes" },
                { title: "Burn-out", desc: "Epuisement professionnel, perte de sens" },
                { title: "Crises d'Angoisse", desc: "Panique, sensation d'etouffement" },
                { title: "Fatigue Chronique", desc: "Epuisement malgre le repos" },
                { title: "Tensions Musculaires", desc: "Nuque, epaules, dos contractures" },
                { title: "Troubles Digestifs", desc: "Stress somatise sur l'estomac" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-violet-50 rounded-2xl border border-violet-100">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefices */}
        <section className="py-20 bg-violet-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Les Bienfaits du Magnetisme sur le Stress</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Apaisement Immediat", desc: "Des la seance, vous ressentez une profonde relaxation. Les tensions s'evacuent, le mental se calme." },
                { icon: Moon, title: "Sommeil Ameliore", desc: "Le magnetisme favorise un sommeil reparateur. Finis les insomnies et les reveils fatigues." },
                { icon: Zap, title: "Energie Retrouvee", desc: "En liberant les blocages energetiques, le magnetisme vous redonne vitalite et envie d'avancer." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl text-center">
                  <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon size={28} className="text-violet-600" />
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
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Temoignages Stress & Anxiete</h2>
            <div className="space-y-6">
              {[
                { name: "Nathalie, 42 ans", city: "Paris", text: "Burn-out complet, je ne dormais plus, je pleurais tous les jours. Apres les seances de Jean-Francois, j'ai retrouve le sommeil et l'envie de vivre. Un vrai miracle." },
                { name: "Julien, 35 ans", city: "Lyon", text: "Crises d'angoisse depuis 2 ans. Medicaments, psy, rien ne marchait. Le magnetisme de Jean-Francois m'a libere. Je n'ai plus eu de crise depuis 6 mois." },
                { name: "Francoise, 55 ans", city: "Bordeaux", text: "Insomnie chronique depuis 10 ans. Je prenais des somniferes tous les soirs. Maintenant je dors naturellement. Jean-Francois m'a change la vie." }
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
        <section className="py-20 bg-gradient-to-r from-violet-500 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Pret a Retrouver la Serenite ?</h2>
            <p className="text-xl text-violet-100 mb-8">Le stress n'est pas une fatalite. Le magnetisme peut vous aider a reprendre le controle.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-violet-600 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Demander un soin maintenant
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-violet-200 text-sm">Reponse sous 2h en moyenne • Don libre apres resultat</p>
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
