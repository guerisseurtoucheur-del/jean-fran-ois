"use client"

import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User, Phone, ArrowRight } from 'lucide-react'

export default function ArticleArthrose() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Article */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} />
            <span>Retour au blog</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Arthrose</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Douleurs articulaires</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Magnetisme et arthrose : retrouver sa mobilite
          </h1>
          
          <p className="text-xl text-teal-100 mb-8">
            Comment le magnetisme peut aider a soulager les douleurs articulaires et ameliorer la qualite de vie des personnes atteintes d&apos;arthrose.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-teal-200 text-sm">
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
              <span>7 min de lecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu Article */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg prose-stone max-w-none">
          
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">L&apos;arthrose : une maladie qui touche des millions de Francais</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            L&apos;arthrose est la maladie articulaire la plus repandue. Elle touche environ 10 millions de personnes en France, principalement apres 50 ans. Cette usure du cartilage provoque des douleurs, des raideurs et une perte progressive de mobilite qui peut serieusement impacter la vie quotidienne.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Genoux, hanches, mains, colonne vertebrale... L&apos;arthrose peut toucher toutes les articulations. Si les traitements medicaux permettent de gerer la douleur, de nombreuses personnes cherchent des approches complementaires pour ameliorer leur confort au quotidien.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl mb-8">
            <h3 className="text-xl font-bold text-teal-900 mb-2">Bon a savoir</h3>
            <p className="text-teal-800">
              L&apos;arthrose n&apos;est pas une fatalite. Si le cartilage ne se regenere pas, il est possible de ralentir son evolution et de soulager considerablement les douleurs grace a differentes approches, dont le magnetisme.
            </p>
          </div>

          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Comment le magnetisme aide face a l&apos;arthrose</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Le magnetisme ne pretend pas guerir l&apos;arthrose ni regenerer le cartilage. En revanche, il peut apporter un soulagement significatif en agissant sur plusieurs aspects :
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
              <div>
                <strong className="text-stone-900">Reduction de l&apos;inflammation</strong>
                <p className="text-stone-600">Le magnetisme aide a calmer l&apos;inflammation autour des articulations, principale source de douleur</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
              <div>
                <strong className="text-stone-900">Amelioration de la circulation</strong>
                <p className="text-stone-600">Une meilleure circulation sanguine favorise la nutrition des tissus et l&apos;evacuation des toxines</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
              <div>
                <strong className="text-stone-900">Relachement des tensions musculaires</strong>
                <p className="text-stone-600">Les muscles autour des articulations touchees sont souvent contractes, ce qui amplifie la douleur</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
              <div>
                <strong className="text-stone-900">Reequilibrage energetique</strong>
                <p className="text-stone-600">L&apos;arthrose cree des blocages energetiques que le magnetiseur peut debloquer</p>
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Temoignages</h2>
          
          <blockquote className="bg-stone-50 p-6 rounded-2xl border border-stone-100 mb-6">
            <p className="text-stone-700 italic mb-4">
              &quot;Arthrose du genou depuis 5 ans. Je ne pouvais plus monter les escaliers sans douleur. Apres 4 seances avec Jean-Francois, j&apos;ai retrouve une mobilite que je n&apos;avais plus. Je remarche normalement et les douleurs ont diminue de moitie.&quot;
            </p>
            <cite className="text-stone-500 text-sm">- Gerard, 67 ans, Nantes</cite>
          </blockquote>

          <blockquote className="bg-stone-50 p-6 rounded-2xl border border-stone-100 mb-8">
            <p className="text-stone-700 italic mb-4">
              &quot;Arthrose cervicale tres douloureuse. Les anti-inflammatoires me donnaient des brulures d&apos;estomac. Le magnetisme m&apos;a permis de reduire les medicaments et de mieux dormir. Je fais un soin a distance tous les mois en entretien.&quot;
            </p>
            <cite className="text-stone-500 text-sm">- Martine, 58 ans, Lyon</cite>
          </blockquote>

          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Le soin a distance pour l&apos;arthrose</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Le magnetisme a distance est particulierement apprecie par les personnes souffrant d&apos;arthrose. Se deplacer peut etre difficile et douloureux. Grace au soin sur photo, vous pouvez recevoir l&apos;aide de Jean-Francois depuis chez vous, confortablement installe.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Pour l&apos;arthrose, Jean-Francois recommande generalement une serie de 3 a 5 seances rapprochees, puis des seances d&apos;entretien selon les besoins. Chaque personne reagit differemment, et le nombre de seances est adapte a votre situation.
          </p>

          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Zones les plus traitees</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['Genoux', 'Hanches', 'Mains', 'Epaules', 'Cervicales', 'Lombaires', 'Pieds', 'Coudes'].map((zone) => (
              <div key={zone} className="bg-teal-50 p-4 rounded-xl text-center">
                <span className="text-teal-700 font-medium">{zone}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Conseils pour vivre mieux avec l&apos;arthrose</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-stone-600">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              Maintenez une activite physique adaptee (marche, natation, velo)
            </li>
            <li className="flex items-center gap-3 text-stone-600">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              Surveillez votre poids pour soulager les articulations
            </li>
            <li className="flex items-center gap-3 text-stone-600">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              Privilegiez une alimentation anti-inflammatoire
            </li>
            <li className="flex items-center gap-3 text-stone-600">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              Appliquez du chaud ou du froid selon les moments
            </li>
            <li className="flex items-center gap-3 text-stone-600">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              Evitez les mouvements brusques et les surcharges
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-8">
            <p className="text-amber-800 text-sm">
              <strong>Rappel :</strong> Le magnetisme est une pratique complementaire qui ne remplace pas la medecine conventionnelle. Consultez toujours votre medecin pour le suivi de votre arthrose et avant de modifier votre traitement.
            </p>
          </div>

        </div>
      </article>

      {/* CTA */}
      <section className="bg-gradient-to-br from-teal-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Vous souffrez d&apos;arthrose ?</h2>
          <p className="text-teal-100 mb-8">Jean-Francois peut vous aider a retrouver confort et mobilite grace au magnetisme a distance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demande-soin" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-full font-bold hover:bg-teal-50 transition-all">
              Demander un soin
              <ArrowRight size={20} />
            </Link>
            <a href="tel:0955554462" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-500/30 text-white rounded-full font-bold hover:bg-teal-500/50 transition-all border border-white/30">
              <Phone size={20} />
              09 55 55 44 62
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
