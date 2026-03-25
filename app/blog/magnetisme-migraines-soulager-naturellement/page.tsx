"use client"

import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User, Phone, ArrowRight } from 'lucide-react'

export default function ArticleMigraines() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Article */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-purple-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} />
            <span>Retour au blog</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Migraines</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Bien-etre</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Magnetisme et migraines : comment soulager naturellement
          </h1>
          
          <p className="text-xl text-purple-100 mb-8">
            Decouvrez comment le magnetisme peut aider a reduire la frequence et l&apos;intensite des migraines sans medicaments.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-purple-200 text-sm">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Jean-Francois</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Mars 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>6 min de lecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu Article */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg prose-stone max-w-none">
          
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Comprendre les migraines</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Les migraines touchent environ 12% de la population francaise. Bien plus qu&apos;un simple mal de tete, la migraine est une maladie neurologique qui peut etre extremement handicapante. Douleur pulsatile, nausees, sensibilite a la lumiere et au bruit... Les crises peuvent durer de quelques heures a plusieurs jours.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Les traitements medicamenteux, bien qu&apos;efficaces pour certains, ne conviennent pas a tout le monde. Effets secondaires, accoutumance, contre-indications... De nombreuses personnes cherchent des alternatives naturelles pour soulager leurs migraines.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8">
            <h3 className="text-xl font-bold text-purple-900 mb-2">Le saviez-vous ?</h3>
            <p className="text-purple-800">
              Les migraines sont souvent liees a des tensions energetiques au niveau de la tete, de la nuque et des epaules. Le magnetisme agit directement sur ces blocages.
            </p>
          </div>

          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Comment le magnetisme agit sur les migraines</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Le magnetisme est une pratique ancestrale qui vise a retablir l&apos;equilibre energetique du corps. Dans le cas des migraines, le magnetiseur travaille principalement sur :
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
              <div>
                <strong className="text-stone-900">Les tensions musculaires</strong>
                <p className="text-stone-600">Relachement des muscles de la nuque et des epaules qui peuvent declencher des migraines</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
              <div>
                <strong className="text-stone-900">La circulation energetique</strong>
                <p className="text-stone-600">Deblocage des zones ou l&apos;energie stagne, notamment au niveau de la tete</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
              <div>
                <strong className="text-stone-900">Le stress et l&apos;anxiete</strong>
                <p className="text-stone-600">Apaisement du systeme nerveux, souvent implique dans le declenchement des crises</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
              <div>
                <strong className="text-stone-900">L&apos;equilibre global</strong>
                <p className="text-stone-600">Harmonisation de l&apos;ensemble du corps pour prevenir les futures crises</p>
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Temoignage : Sophie, 42 ans</h2>
          <blockquote className="bg-stone-50 p-6 rounded-2xl border border-stone-100 mb-8">
            <p className="text-stone-700 italic mb-4">
              &quot;Je souffrais de migraines depuis plus de 15 ans, avec 3 a 4 crises par mois. Les medicaments me soulageaient mais m&apos;epuisaient. Apres 3 seances avec Jean-Francois, j&apos;ai remarque une nette diminution de la frequence des crises. Aujourd&apos;hui, je n&apos;en ai plus qu&apos;une ou deux par mois, et elles sont beaucoup moins intenses.&quot;
            </p>
            <cite className="text-stone-500 text-sm">- Sophie, Paris</cite>
          </blockquote>

          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Le soin a distance : une solution pratique</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Le magnetisme a distance est particulierement adapte aux personnes souffrant de migraines. En pleine crise, se deplacer peut etre impossible. Grace au soin sur photo, Jean-Francois peut intervenir immediatement, ou que vous soyez en France.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Le processus est simple : vous envoyez une photo recente et decrivez vos symptomes. Jean-Francois se connecte a votre energie et realise le soin. De nombreuses personnes ressentent un soulagement dans les heures qui suivent.
          </p>

          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Conseils complementaires</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            En complement du magnetisme, voici quelques conseils pour mieux gerer vos migraines :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-stone-600">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Identifiez vos declencheurs (stress, alimentation, sommeil)
            </li>
            <li className="flex items-center gap-3 text-stone-600">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Maintenez un rythme de sommeil regulier
            </li>
            <li className="flex items-center gap-3 text-stone-600">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Hydratez-vous suffisamment
            </li>
            <li className="flex items-center gap-3 text-stone-600">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Pratiquez la relaxation ou la meditation
            </li>
            <li className="flex items-center gap-3 text-stone-600">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Limitez l&apos;exposition aux ecrans
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-8">
            <p className="text-amber-800 text-sm">
              <strong>Rappel :</strong> Le magnetisme est une pratique complementaire qui ne remplace pas la medecine conventionnelle. Consultez toujours votre medecin en priorite, surtout si vos migraines changent de nature ou s&apos;aggravent.
            </p>
          </div>

        </div>
      </article>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Vous souffrez de migraines ?</h2>
          <p className="text-purple-100 mb-8">Jean-Francois peut vous aider a distance, ou que vous soyez en France.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demande-soin" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-full font-bold hover:bg-purple-50 transition-all">
              Demander un soin
              <ArrowRight size={20} />
            </Link>
            <a href="tel:0955554462" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-500/30 text-white rounded-full font-bold hover:bg-purple-500/50 transition-all border border-white/30">
              <Phone size={20} />
              09 55 55 44 62
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
