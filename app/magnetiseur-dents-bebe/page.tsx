"use client"

import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import { Baby, CheckCircle, Clock, Phone, Star, ArrowRight, Shield, Heart, Moon } from 'lucide-react'

export default function MagnetiseurDentsBebePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Le magnetisme peut-il soulager les douleurs de dentition de mon bebe ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le magnetisme est tres efficace pour apaiser les douleurs liees aux poussees dentaires. Jean-Francois travaille sur photo et les resultats sont souvent ressentis rapidement, permettant au bebe de retrouver son calme et un sommeil paisible."
        }
      },
      {
        "@type": "Question",
        "name": "Comment se passe un soin a distance pour un bebe ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vous envoyez simplement une photo recente de votre bebe avec une description des symptomes. Jean-Francois effectue le soin a distance en se connectant a l'energie de l'enfant. C'est totalement indolore et sans danger."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de seances sont necessaires pour les dents de bebe ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En general, 1 a 2 seances suffisent pour soulager une poussee dentaire. Pour les bebes qui font plusieurs dents, un forfait de suivi peut etre recommande."
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
        <section className="relative py-20 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6">Specialiste Bebes</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Magnetiseur Dents de Bebe : Apaisez les Poussees Dentaires</h1>
              <p className="text-xl text-pink-100 mb-8 leading-relaxed">Votre bebe souffre de ses poussees dentaires ? Jean-Francois soulage les douleurs de dentition naturellement grace au magnetisme, meme a distance sur photo.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demande-soin" className="px-8 py-4 bg-white text-pink-600 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Baby size={20} />
                  Soulager mon bebe
                </Link>
                <a href="tel:0955554462" className="px-8 py-4 bg-white/10 border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} />
                  09 55 55 44 62
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comprendre les poussees dentaires */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Poussees Dentaires : Une Epreuve pour Bebe et Parents</h2>
            <div className="prose prose-lg max-w-none text-stone-600">
              <p>Les premieres dents de bebe apparaissent generalement entre 4 et 7 mois. Cette periode peut etre tres douloureuse : gencives gonflees, irritabilite, pleurs, troubles du sommeil, fievre legere... Les parents se sentent souvent impuissants face a la souffrance de leur enfant.</p>
              <p className="mt-4">Le magnetisme offre une solution naturelle et douce pour apaiser ces douleurs. Jean-Francois pratique depuis plus de 20 ans et a soulage de nombreux bebes souffrant de poussees dentaires. Les resultats sont souvent spectaculaires : le bebe retrouve son calme en quelques heures.</p>
            </div>
          </div>
        </section>

        {/* Symptomes traites */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Symptomes que le Magnetisme Peut Soulager</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Douleurs Gencives", desc: "Gencives rouges, gonflees et douloureuses" },
                { title: "Troubles du Sommeil", desc: "Reveils nocturnes, difficulte a s'endormir" },
                { title: "Irritabilite", desc: "Pleurs, agitation, bebe inconsolable" },
                { title: "Coliques Associees", desc: "Troubles digestifs lies a la dentition" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-pink-50 rounded-2xl border border-pink-100">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefices */}
        <section className="py-20 bg-pink-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Pourquoi Choisir le Magnetisme pour Votre Bebe</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "100% Naturel", desc: "Aucun medicament, aucun effet secondaire. Le magnetisme utilise uniquement l'energie naturelle pour apaiser." },
                { icon: Moon, title: "Nuits Paisibles", desc: "Les bebes retrouvent souvent un sommeil calme des la premiere seance. Les parents aussi !" },
                { icon: Heart, title: "Soin a Distance", desc: "Pas besoin de deplacer bebe. Le soin se fait sur photo, depuis chez vous, ou que vous soyez en France." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon size={28} className="text-pink-600" />
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
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Temoignages de Parents</h2>
            <div className="space-y-6">
              {[
                { name: "Emilie, maman de Lucas (8 mois)", city: "Rennes", text: "Lucas hurlait toutes les nuits a cause de ses dents. J'ai envoye sa photo a Jean-Francois et le soir meme, il dormait paisiblement. Un miracle pour nous parents epuises !" },
                { name: "Stephanie, maman de Lea (6 mois)", city: "Nantes", text: "Ma petite fille faisait ses premieres dents et refusait de manger. Apres une seance de magnetisme, elle a retrouve l'appetit et le sourire. Merci infiniment." },
                { name: "Antoine, papa de Noah (10 mois)", city: "Lyon", text: "Sceptique au debut, j'ai tente le magnetisme en dernier recours. Les 4 dents de devant sont sorties sans que Noah ne souffre. Je recommande a tous les parents." }
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
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Tarifs Soins Bebes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Soin Ponctuel", price: "35", desc: "1 seance - ideal pour une poussee dentaire isolee", popular: false },
                { title: "Soin Complet", price: "55", desc: "2 seances sur 48h - le plus demande par les parents", popular: true },
                { title: "Forfait Suivi", price: "120", desc: "5 seances sur 2 semaines - pour accompagner plusieurs poussees", popular: false }
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-3xl text-center ${item.popular ? 'bg-pink-600 text-white ring-4 ring-pink-300' : 'bg-white'}`}>
                  {item.popular && <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4">Le plus demande</span>}
                  <h3 className={`text-xl font-bold mb-2 ${item.popular ? 'text-white' : 'text-stone-900'}`}>{item.title}</h3>
                  <p className={`text-4xl font-bold mb-4 ${item.popular ? 'text-white' : 'text-pink-600'}`}>{item.price}<span className="text-lg">euros</span></p>
                  <p className={`text-sm ${item.popular ? 'text-pink-100' : 'text-stone-500'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-stone-500 mt-8">Cabinet et domicile (Alencon) : don libre selon vos moyens</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Votre Bebe Souffre de ses Dents ?</h2>
            <p className="text-xl text-pink-100 mb-8">Le magnetisme peut l&apos;apaiser naturellement. Envoyez sa photo et Jean-Francois interviendra rapidement.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-pink-600 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Soulager mon bebe maintenant
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-pink-200 text-sm">Reponse sous 2h en moyenne</p>
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
