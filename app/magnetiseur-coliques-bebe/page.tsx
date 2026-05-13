"use client"

import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import { Baby, CheckCircle, Clock, Phone, Star, ArrowRight, Shield, Heart, Moon, Stethoscope } from 'lucide-react'

export default function MagnetiseurColiquesBebePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Le magnetisme peut-il soulager les coliques de mon bebe ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le magnetisme est tres efficace pour apaiser les coliques du nourrisson. Jean-Francois travaille sur le reequilibrage energetique de la zone abdominale du bebe, ce qui permet de soulager les crampes et les douleurs digestives naturellement."
        }
      },
      {
        "@type": "Question",
        "name": "A partir de quel age peut-on faire un soin de magnetisme pour les coliques ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le magnetisme peut etre pratique des la naissance. Il est totalement indolore et sans danger pour les nourrissons. De nombreux parents font appel a Jean-Francois des les premieres semaines de vie de leur bebe."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de seances sont necessaires pour les coliques du nourrisson ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En general, 1 a 3 seances suffisent pour soulager les coliques. Le soin complet de 2 seances sur 48h est le plus demande par les parents car il permet un soulagement durable."
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
        <section className="relative py-20 bg-gradient-to-br from-sky-400 via-cyan-400 to-teal-500 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6">Specialiste Nourrissons</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Magnetiseur Coliques Bebe : Soulagez Votre Nourrisson</h1>
              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">Votre bebe pleure de douleurs au ventre ? Jean-Francois soulage les coliques du nourrisson naturellement grace au magnetisme, meme a distance sur photo.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demande-soin" className="px-8 py-4 bg-white text-cyan-600 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
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

        {/* Comprendre les coliques */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Coliques du Nourrisson : Comprendre la Souffrance de Bebe</h2>
            <div className="prose prose-lg max-w-none text-stone-600">
              <p>Les coliques du nourrisson touchent environ 20% des bebes, generalement entre 2 semaines et 4 mois. Elles se manifestent par des pleurs intenses, souvent en fin de journee, un ventre tendu et dur, des jambes repliees sur le ventre, et une grande agitation.</p>
              <p className="mt-4">Ces crises sont epuisantes pour les parents qui se sentent impuissants face a la douleur de leur enfant. La medecine traditionnelle propose peu de solutions efficaces.</p>
              <p className="mt-4">Le magnetisme offre une approche naturelle et douce. Jean-Francois pratique depuis plus de 20 ans et a soulage de nombreux nourrissons souffrant de coliques. En travaillant sur l&apos;energie de la zone abdominale, il aide le systeme digestif du bebe a se reequilibrer.</p>
            </div>
          </div>
        </section>

        {/* Symptomes traites */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Symptomes que le Magnetisme Peut Soulager</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Pleurs Intenses", desc: "Crises de pleurs inconsolables, souvent en soiree" },
                { title: "Ventre Tendu", desc: "Ballonnements, ventre dur et douloureux" },
                { title: "Agitation", desc: "Bebe qui se tortille, jambes repliees sur le ventre" },
                { title: "Troubles Sommeil", desc: "Difficulte a s'endormir, reveils frequents" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-cyan-50 rounded-2xl border border-cyan-100">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comment ca marche */}
        <section className="py-20 bg-cyan-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Comment Jean-Francois Soulage les Coliques</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Envoyez une Photo", desc: "Une photo recente de votre bebe (visage visible) et decrivez les symptomes : frequence des crises, horaires, intensite." },
                { step: "2", title: "Le Soin a Distance", desc: "Jean-Francois se connecte a l'energie de votre bebe et travaille sur la zone abdominale pour soulager les tensions et crampes." },
                { step: "3", title: "Soulagement Rapide", desc: "Les effets sont souvent ressentis dans les heures suivant le soin. Le ventre se detend, les crises s'espacent." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl text-center">
                  <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefices */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Pourquoi Choisir le Magnetisme pour les Coliques</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "100% Naturel", desc: "Aucun medicament, aucun effet secondaire. Le magnetisme est totalement sur pour les nourrissons des la naissance." },
                { icon: Stethoscope, title: "Complement Medical", desc: "Le magnetisme s'utilise en complement du suivi pediatrique. Consultez toujours votre medecin en cas de doute." },
                { icon: Heart, title: "Soin a Distance", desc: "Pas besoin de deplacer bebe. Le soin se fait sur photo, depuis chez vous, ou que vous soyez en France." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-stone-50 rounded-3xl text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon size={28} className="text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Temoignages */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Temoignages de Parents</h2>
            <div className="space-y-6">
              {[
                { name: "Marie, maman de Theo (6 semaines)", city: "Paris", text: "Theo hurlait chaque soir pendant des heures. On etait epuises. Apres la premiere seance avec Jean-Francois, les crises ont diminue de moitie. Apres la deuxieme, plus rien. On a retrouve notre bebe calme." },
                { name: "Julien, papa de Chloe (2 mois)", city: "Bordeaux", text: "Notre pediatre ne pouvait rien faire de plus. En dernier recours, on a essaye le magnetisme. Resultat : Chloe dort enfin et ne se tortille plus de douleur. Merci infiniment Jean-Francois." },
                { name: "Camille, maman de Maxime (3 mois)", city: "Marseille", text: "Les coliques de Maxime nous rendaient fous. Une amie m'a parle de Jean-Francois. J'ai envoye la photo et des le lendemain, son ventre etait plus souple. Je recommande a tous les parents desesperes." }
              ].map((t, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl">
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
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Tarifs Soins Coliques Bebe</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Soin Ponctuel", price: "35", desc: "1 seance - pour tester l'efficacite du magnetisme", popular: false },
                { title: "Soin Complet", price: "55", desc: "2 seances sur 48h - le plus demande par les parents", popular: true },
                { title: "Forfait Suivi", price: "120", desc: "5 seances sur 2 semaines - pour un soulagement durable", popular: false }
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-3xl text-center ${item.popular ? 'bg-cyan-600 text-white ring-4 ring-cyan-300' : 'bg-stone-50'}`}>
                  {item.popular && <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4">Le plus demande</span>}
                  <h3 className={`text-xl font-bold mb-2 ${item.popular ? 'text-white' : 'text-stone-900'}`}>{item.title}</h3>
                  <p className={`text-4xl font-bold mb-4 ${item.popular ? 'text-white' : 'text-cyan-600'}`}>{item.price}<span className="text-lg">euros</span></p>
                  <p className={`text-sm ${item.popular ? 'text-cyan-100' : 'text-stone-500'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-stone-500 mt-8">Cabinet et domicile (Alencon) : don libre selon vos moyens</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Votre Bebe Souffre de Coliques ?</h2>
            <p className="text-xl text-cyan-100 mb-8">Le magnetisme peut l&apos;apaiser naturellement. Envoyez sa photo et Jean-Francois interviendra rapidement.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-cyan-600 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Soulager mon bebe maintenant
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-cyan-200 text-sm">Reponse sous 2h en moyenne</p>
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
