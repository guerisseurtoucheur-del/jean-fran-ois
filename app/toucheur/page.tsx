"use client"

import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import { Hand, CheckCircle, Phone, Star, ArrowRight, Heart, Sparkles } from 'lucide-react'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un toucheur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un toucheur, aussi appele toucheur-guerisseur, est un guerisseur traditionnel qui soulage les maux par imposition des mains. En Normandie (Orne, Sarthe), le terme toucheur est utilise depuis des generations pour designer celui qui transmet une energie de guerison, en presence ou a distance sur photo."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la difference entre un toucheur et un magnetiseur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Toucheur et magnetiseur designent une pratique tres proche : le soulagement des maux par transmission d'energie. Toucheur est le terme traditionnel et regional, notamment en Normandie, tandis que magnetiseur est le terme plus moderne. Jean-Francois exerce les deux."
      }
    },
    {
      "@type": "Question",
      "name": "Un toucheur peut-il agir a distance ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. L'energie n'a pas de frontiere. Jean-Francois agit comme toucheur a distance grace a votre photo, avec la meme efficacite qu'en presence. C'est particulierement utile si vous n'etes pas dans l'Orne ou la Sarthe."
      }
    }
  ]
}

export default function ToucheurPage() {
  return (
    <LayoutWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-amber-600 via-amber-700 to-stone-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6">Tradition Normande</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Toucheur Guerisseur dans l&apos;Orne et la Sarthe</h1>
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">Jean-Francois est toucheur, cet art traditionnel de Normandie qui soulage les maux par imposition des mains. En cabinet a Alencon ou a distance sur photo, partout en France.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demande-soin" className="px-8 py-4 bg-white text-amber-700 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Hand size={20} />
                  Demander un soin
                </Link>
                <a href="tel:0955554462" className="px-8 py-4 bg-white/10 border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} />
                  09 55 55 44 62
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Qu'est-ce qu'un toucheur */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Qu&apos;est-ce qu&apos;un Toucheur ?</h2>
            <div className="prose prose-lg max-w-none text-stone-600">
              <p>Le toucheur, aussi appele "toucheur-guerisseur", est un guerisseur traditionnel qui soulage les douleurs et les maux par imposition des mains. En Normandie, et particulierement dans l&apos;Orne et la Sarthe, le mot "toucheur" est employe depuis des generations pour designer celui qui possede le don de transmettre une energie de guerison.</p>
              <p className="mt-4">Toucheur et magnetiseur designent une pratique tres proche. "Toucheur" est le terme traditionnel et regional, tandis que "magnetiseur" est plus moderne. Jean-Francois exerce cet art aussi bien par le toucher direct, en cabinet a Alencon, qu&apos;a distance sur simple photo, avec la meme efficacite.</p>
            </div>
          </div>
        </section>

        {/* Ce que soulage le toucheur */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Ce que Soulage le Toucheur</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Douleurs", desc: "Dos, sciatique, arthrose, articulations, migraines" },
                { title: "Brulures", desc: "Le toucheur agit aussi comme coupeur de feu sur les brulures" },
                { title: "Problemes de peau", desc: "Eczema, psoriasis, zona, verrues" },
                { title: "Stress et anxiete", desc: "Angoisses, troubles du sommeil, mal-etre" },
                { title: "Troubles digestifs", desc: "Douleurs gastriques, reflux, ballonnements" },
                { title: "Maux des bebes", desc: "Poussees dentaires, coliques, agitation" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Toucheur vs magnetiseur */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Toucheur ou Magnetiseur ?</h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">Les deux termes designent le meme don : soulager les maux par transmission d&apos;energie. Dans l&apos;Orne, la Sarthe et toute la Normandie, on parle traditionnellement de "toucheur". Ailleurs, on dit plus souvent "magnetiseur" ou "guerisseur". Jean-Francois repond a ces trois appellations car il exerce cet art sous toutes ses formes.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Toucheur Alencon", "Toucheur Orne", "Toucheur Sarthe", "Toucheur Normandie", "Toucheur a distance"].map((v, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-stone-700 shadow-sm">{v}</span>
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
                { name: "Michel, 58 ans", city: "Alencon", text: "Je cherchais un toucheur dans l'Orne pour mes douleurs de dos. Jean-Francois m'a soulage des la premiere seance. Un vrai don." },
                { name: "Nadine, 49 ans", city: "Sarthe", text: "Chez nous on a toujours consulte un toucheur. Jean-Francois perpetue cette tradition avec beaucoup de bienveillance. Mes migraines ont disparu." },
                { name: "Jerome, 41 ans", city: "Le Mans", text: "Toucheur a distance sur photo, j'etais sceptique. Le resultat sur mon eczema m'a convaincu. Je recommande." }
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

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-stone-800 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Consultez un Toucheur Guerisseur</h2>
            <p className="text-xl text-amber-100 mb-8">En cabinet a Alencon, a domicile dans l&apos;Orne et la Sarthe, ou a distance sur photo partout en France.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-amber-700 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Demander un soin
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-amber-200 text-sm">Reponse sous 2h en moyenne • Don libre apres resultat</p>
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
