import Link from 'next/link'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react'

export const metadata = {
  title: 'Eczema et Magnetisme : Une Solution Naturelle | Jean-Francois Magnetiseur',
  description: 'Decouvrez comment le magnetisme peut soulager l\'eczema naturellement. Temoignages et explications par Jean-Francois, magnetiseur guerisseur.',
}

export default function ArticleEczema() {
  return (
    <LayoutWrapper>
      <article className="min-h-screen bg-white">
        {/* Header */}
        <header className="py-16 bg-gradient-to-b from-teal-50 to-white border-b border-stone-100">
          <div className="max-w-3xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 text-sm font-medium">
              <ArrowLeft size={16} />
              Retour au blog
            </Link>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
              Eczema
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-6 mb-6 leading-tight">
              Eczema et Magnetisme : Une Solution Naturelle
            </h1>
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <span className="flex items-center gap-2">
                <User size={16} />
                Jean-Francois
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                28 Janvier 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                5 min de lecture
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="py-16">
          <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-stone">
            <p className="lead text-xl text-stone-600 mb-8">
              L'eczema touche des millions de personnes et peut considerablement affecter la qualite de vie. Le magnetisme offre une approche complementaire naturelle pour soulager les symptomes et espacer les poussees.
            </p>

            <h2>Qu'est-ce que l'eczema ?</h2>
            <p>
              L'eczema, ou dermatite atopique, est une maladie inflammatoire chronique de la peau caracterisee par des demangeaisons intenses, des rougeurs, des plaques seches et parfois des suintements. Cette affection peut apparaitre des l'enfance et persister a l'age adulte.
            </p>
            <p>
              Les causes sont multiples : genetique, allergies, stress, facteurs environnementaux. Les traitements conventionnels (cremes corticoides, antihistaminiques) soulagent les symptomes mais ne traitent pas la cause profonde.
            </p>

            <h2>Comment le magnetisme agit sur l'eczema</h2>
            <p>
              Le magnetisme travaille sur plusieurs niveaux pour soulager l'eczema :
            </p>
            <ul>
              <li><strong>Apaisement des demangeaisons</strong> - L'energie transmise calme les terminaisons nerveuses irritees</li>
              <li><strong>Reduction de l'inflammation</strong> - Le magnetisme favorise la circulation energetique et sanguine</li>
              <li><strong>Gestion du stress</strong> - Le stress etant un declencheur majeur, la relaxation profonde aide a prevenir les poussees</li>
              <li><strong>Reequilibrage energetique</strong> - L'eczema est souvent lie a un desequilibre que le magnetisme peut corriger</li>
            </ul>

            <h2>Temoignage : Sophie, 34 ans</h2>
            <blockquote className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl not-italic">
              <p className="text-stone-700 mb-4">
                "Je souffrais d'eczema aux mains depuis 10 ans. Les cremes ne faisaient plus effet. Apres 3 seances avec Jean-Francois, mes mains ont retrouve un aspect presque normal. Je n'ai plus de poussees depuis 6 mois."
              </p>
              <footer className="text-teal-600 font-medium">Sophie, institutrice</footer>
            </blockquote>

            <h2>Le soin a distance fonctionne-t-il pour l'eczema ?</h2>
            <p>
              Oui, le magnetisme a distance est tout aussi efficace pour l'eczema. L'energie ne connait pas les frontieres physiques. En envoyant une photo, Jean-Francois peut se connecter a votre energie et travailler sur les causes profondes de votre eczema.
            </p>
            <p>
              Beaucoup de patients constatent une amelioration des la premiere seance : moins de demangeaisons, peau moins irritee, meilleur sommeil.
            </p>

            <h2>Combien de seances pour l'eczema ?</h2>
            <p>
              Le nombre de seances depend de l'anciennete et de la severite de l'eczema :
            </p>
            <ul>
              <li><strong>Eczema recent</strong> - 1 a 2 seances peuvent suffire</li>
              <li><strong>Eczema chronique</strong> - 3 a 5 seances espacees de quelques semaines</li>
              <li><strong>Entretien</strong> - Une seance occasionnelle pour prevenir les rechutes</li>
            </ul>

            <h2>Conseils complementaires</h2>
            <p>
              En plus du magnetisme, quelques habitudes peuvent aider :
            </p>
            <ul>
              <li>Hydrater la peau quotidiennement avec des produits naturels</li>
              <li>Eviter les douches trop chaudes et les savons agressifs</li>
              <li>Gerer le stress par la relaxation ou la meditation</li>
              <li>Identifier et eviter les allergenes declencheurs</li>
            </ul>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-8">
              <p className="text-stone-600 text-sm">
                <strong>Important :</strong> Le magnetisme est une pratique complementaire qui ne remplace pas un suivi medical. Continuez a consulter votre dermatologue et suivez ses recommandations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="py-16 bg-teal-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Vous souffrez d'eczema ?</h2>
            <p className="text-teal-100 mb-8">Jean-Francois peut vous aider a soulager vos symptomes naturellement.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-full font-bold hover:shadow-xl transition-all">
              Demander un soin
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </article>
    </LayoutWrapper>
  )
}
