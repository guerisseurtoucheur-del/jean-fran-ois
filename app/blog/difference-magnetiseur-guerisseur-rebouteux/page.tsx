import Link from 'next/link'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react'

export const metadata = {
  title: 'Magnetiseur, Guerisseur, Rebouteux : Quelles Differences ? | Jean-Francois',
  description: 'Comprendre les differences entre magnetiseur, guerisseur et rebouteux. Vers qui se tourner selon vos besoins ? Explications.',
}

export default function ArticleDifferences() {
  return (
    <LayoutWrapper>
      <article className="min-h-screen bg-white">
        {/* Header */}
        <header className="py-16 bg-gradient-to-b from-indigo-50 to-white border-b border-stone-100">
          <div className="max-w-3xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8 text-sm font-medium">
              <ArrowLeft size={16} />
              Retour au blog
            </Link>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
              Magnetisme
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-6 mb-6 leading-tight">
              Magnetiseur, Guerisseur, Rebouteux : Quelles Differences ?
            </h1>
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <span className="flex items-center gap-2">
                <User size={16} />
                Jean-Francois
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                15 Janvier 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                4 min de lecture
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="py-16">
          <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-stone">
            <p className="lead text-xl text-stone-600 mb-8">
              Magnetiseur, guerisseur, rebouteux... Ces termes sont souvent confondus. Pourtant, chaque praticien a ses specificites. Decouvrez leurs differences pour savoir vers qui vous tourner.
            </p>

            <h2>Le Magnetiseur</h2>
            <p>
              Le magnetiseur utilise l'energie vitale (le "magnetisme") pour soulager les maux physiques et emotionnels. Il travaille par imposition des mains, a distance ou sur photo.
            </p>
            <p>
              <strong>Specialites :</strong>
            </p>
            <ul>
              <li>Zona, brulures (coupeur de feu)</li>
              <li>Douleurs chroniques et inflammations</li>
              <li>Problemes de peau (eczema, psoriasis)</li>
              <li>Stress, anxiete, troubles du sommeil</li>
              <li>Accompagnement des traitements medicaux</li>
            </ul>
            <p>
              Le magnetiseur peut travailler a distance car l'energie n'est pas limitee par l'espace physique.
            </p>

            <h2>Le Guerisseur</h2>
            <p>
              Le terme "guerisseur" est plus large et englobe differentes pratiques traditionnelles. Un guerisseur peut utiliser le magnetisme, les prieres, les plantes, ou des rituels transmis de generation en generation.
            </p>
            <p>
              <strong>Caracteristiques :</strong>
            </p>
            <ul>
              <li>Approche souvent spirituelle ou religieuse</li>
              <li>Transmission familiale du don</li>
              <li>Utilisation de formules ou prieres secretes</li>
              <li>Parfois associe aux plantes medicinales</li>
            </ul>
            <p>
              Jean-Francois est a la fois magnetiseur et guerisseur : il utilise le magnetisme et possede le don de coupeur de feu transmis dans sa famille.
            </p>

            <h2>Le Rebouteux</h2>
            <p>
              Le rebouteux est un praticien manuel qui travaille sur les os, les articulations et les muscles. Son approche est physique et mecanique, proche de l'osteopathie traditionnelle.
            </p>
            <p>
              <strong>Specialites :</strong>
            </p>
            <ul>
              <li>Remise en place des articulations</li>
              <li>Entorses, luxations, foulures</li>
              <li>Tensions musculaires</li>
              <li>Nevralgies d'origine mecanique</li>
            </ul>
            <p>
              Contrairement au magnetiseur, le rebouteux doit toucher physiquement le patient et ne peut pas travailler a distance.
            </p>

            <h2>Tableau comparatif</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="p-3 text-left">Critere</th>
                    <th className="p-3 text-left">Magnetiseur</th>
                    <th className="p-3 text-left">Guerisseur</th>
                    <th className="p-3 text-left">Rebouteux</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Methode</td>
                    <td className="p-3">Energie / Magnetisme</td>
                    <td className="p-3">Variable (energie, prieres...)</td>
                    <td className="p-3">Manipulation physique</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">A distance</td>
                    <td className="p-3">Oui</td>
                    <td className="p-3">Souvent oui</td>
                    <td className="p-3">Non</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Contact physique</td>
                    <td className="p-3">Optionnel</td>
                    <td className="p-3">Optionnel</td>
                    <td className="p-3">Obligatoire</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Specialite</td>
                    <td className="p-3">Zona, brulures, douleurs</td>
                    <td className="p-3">Variable</td>
                    <td className="p-3">Os, articulations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Vers qui se tourner ?</h2>
            <ul>
              <li><strong>Brulure, zona, eczema, stress</strong> → Magnetiseur</li>
              <li><strong>Entorse, luxation, blocage articulaire</strong> → Rebouteux</li>
              <li><strong>Mal-etre general, accompagnement global</strong> → Guerisseur</li>
              <li><strong>Douleurs chroniques, inflammations</strong> → Magnetiseur</li>
            </ul>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-8">
              <p className="text-stone-600 text-sm">
                <strong>Rappel :</strong> Ces pratiques sont complementaires a la medecine conventionnelle. Consultez toujours votre medecin en priorite pour etablir un diagnostic.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="py-16 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Besoin d'un magnetiseur ?</h2>
            <p className="text-indigo-100 mb-8">Jean-Francois peut vous aider a distance, ou que vous soyez en France.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:shadow-xl transition-all">
              Demander un soin
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </article>
    </LayoutWrapper>
  )
}
