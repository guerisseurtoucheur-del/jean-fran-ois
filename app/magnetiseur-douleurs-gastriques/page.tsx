"use client"

import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import { Activity, CheckCircle, Clock, Phone, Star, ArrowRight, Shield, Heart, Zap } from 'lucide-react'

export default function MagnetiseurDouleursGastriquesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Le magnetisme peut-il soulager mes douleurs gastriques ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le magnetisme est efficace pour apaiser les troubles digestifs : maux d'estomac, crampes, reflux, ballonnements. Jean-Francois travaille sur le reequilibrage energetique de la zone abdominale pour soulager les tensions."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de seances sont necessaires pour les problemes digestifs ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour les troubles digestifs ponctuels, 1 a 2 seances suffisent generalement. Pour les problemes chroniques, un forfait de 5 seances sur 2 semaines est recommande pour un travail en profondeur."
        }
      },
      {
        "@type": "Question",
        "name": "Le magnetisme remplace-t-il un traitement medical pour l'estomac ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non, le magnetisme ne remplace jamais un avis medical. Il agit en complement de vos traitements. Consultez toujours votre medecin en priorite pour tout trouble digestif persistant."
        }
      }
    ]
  }

  return (
    <LayoutWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6">Troubles Digestifs</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Magnetiseur Douleurs Gastriques : Retrouvez le Confort Digestif</h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">Maux d&apos;estomac, crampes, reflux, ballonnements ? Jean-Francois soulage les troubles digestifs grace au magnetisme, meme a distance sur photo.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demande-soin" className="px-8 py-4 bg-white text-emerald-600 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Activity size={20} />
                  Soulager mes douleurs gastriques
                </Link>
                <a href="tel:0955554462" className="px-8 py-4 bg-white/10 border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} />
                  09 55 55 44 62
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comprendre les troubles gastriques */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Troubles Digestifs : Un Mal Repandu</h2>
            <div className="prose prose-lg max-w-none text-stone-600">
              <p>Les douleurs gastriques touchent des millions de personnes. Stress, alimentation, mode de vie... Les causes sont multiples et les symptomes peuvent etre invalidants : crampes, brulures d&apos;estomac, reflux acide, ballonnements, nausees.</p>
              <p className="mt-4">Le magnetisme agit sur le reequilibrage energetique de tout le systeme digestif. En complement d&apos;un suivi medical et d&apos;une bonne hygiene de vie, il peut apporter un soulagement significatif et durable. Jean-Francois a aide de nombreuses personnes a retrouver un confort digestif.</p>
            </div>
          </div>
        </section>

        {/* Troubles traites */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Troubles Digestifs Traites</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Douleurs Gastriques", desc: "Maux d'estomac, crampes, brulures" },
                { title: "Reflux Gastrique", desc: "Remontees acides, brulures oesophagiennes" },
                { title: "Ballonnements", desc: "Ventre gonfle, gaz, inconfort" },
                { title: "Troubles Intestinaux", desc: "Colon irritable, troubles du transit" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefices */}
        <section className="py-20 bg-emerald-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Les Benefices du Magnetisme sur la Digestion</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Apaise les Crampes", desc: "Le magnetisme detend les muscles de l'estomac et des intestins, reduisant les spasmes douloureux." },
                { icon: Heart, title: "Reduit l'Inflammation", desc: "L'energie transmise aide a calmer l'inflammation des muqueuses digestives." },
                { icon: Zap, title: "Reequilibre le Systeme", desc: "Le magnetisme favorise un fonctionnement harmonieux de tout le systeme digestif." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl text-center">
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
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Temoignages Troubles Digestifs</h2>
            <div className="space-y-6">
              {[
                { name: "Laurent, 47 ans", city: "Marseille", text: "Des douleurs gastriques depuis des annees, aucun medicament ne fonctionnait vraiment. Apres 2 seances avec Jean-Francois, un soulagement incroyable. Je revis !" },
                { name: "Marie-Claire, 55 ans", city: "Bordeaux", text: "Mon colon irritable me gachait la vie. Le magnetisme m'a apporte ce que la medecine n'avait pas reussi : un vrai confort au quotidien." },
                { name: "Patrick, 62 ans", city: "Nice", text: "Problemes de digestion et crampes d'estomac chroniques. Jean-Francois m'a aide a retrouver un confort digestif que je n'avais plus depuis longtemps." }
              ].map((t, i) => (
                <div key={i} className="p-8 bg-stone-50 rounded-3xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-stone-600 italic mb-4">&quot;{t.text}&quot;</p>
                  <p className="font-bold text-stone-900">{t.name} - {t.city}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Tarifs Soins Digestifs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Soin Ponctuel", price: "35", desc: "1 seance - pour un trouble digestif passager", popular: false },
                { title: "Soin Complet", price: "55", desc: "2 seances sur 48h - le plus efficace", popular: true },
                { title: "Forfait Suivi", price: "120", desc: "5 seances sur 2 semaines - pour troubles chroniques", popular: false }
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-3xl text-center ${item.popular ? 'bg-emerald-600 text-white ring-4 ring-emerald-300' : 'bg-white'}`}>
                  {item.popular && <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4">Recommande</span>}
                  <h3 className={`text-xl font-bold mb-2 ${item.popular ? 'text-white' : 'text-stone-900'}`}>{item.title}</h3>
                  <p className={`text-4xl font-bold mb-4 ${item.popular ? 'text-white' : 'text-emerald-600'}`}>{item.price}<span className="text-lg">euros</span></p>
                  <p className={`text-sm ${item.popular ? 'text-emerald-100' : 'text-stone-500'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-stone-500 mt-8">Cabinet et domicile (Alencon) : don libre selon vos moyens</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Marre des Douleurs Digestives ?</h2>
            <p className="text-xl text-emerald-100 mb-8">Le magnetisme peut vous aider a retrouver un confort digestif. Essayez sans risque.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-emerald-600 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Demander un soin maintenant
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-emerald-200 text-sm">Reponse sous 2h en moyenne</p>
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
