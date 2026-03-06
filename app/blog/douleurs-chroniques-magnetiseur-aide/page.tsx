import Link from 'next/link'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react'

export const metadata = {
  title: 'Douleurs Chroniques : Comment un Magnetiseur Peut Vous Aider | Jean-Francois',
  description: 'Mal de dos, douleurs articulaires, fibromyalgie... Decouvrez comment le magnetisme soulage naturellement les douleurs chroniques.',
}

export default function ArticleDouleurs() {
  return (
    <LayoutWrapper>
      <article className="min-h-screen bg-white">
        {/* Header */}
        <header className="py-16 bg-gradient-to-b from-orange-50 to-white border-b border-stone-100">
          <div className="max-w-3xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 text-sm font-medium">
              <ArrowLeft size={16} />
              Retour au blog
            </Link>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Douleurs
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-6 mb-6 leading-tight">
              Douleurs Chroniques : Comment un Magnetiseur Peut Vous Aider
            </h1>
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <span className="flex items-center gap-2">
                <User size={16} />
                Jean-Francois
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                20 Janvier 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                6 min de lecture
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="py-16">
          <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-stone">
            <p className="lead text-xl text-stone-600 mb-8">
              Les douleurs chroniques touchent 20% de la population francaise. Quand les traitements classiques ne suffisent plus, le magnetisme offre une alternative naturelle et efficace pour retrouver une meilleure qualite de vie.
            </p>

            <h2>Quelles douleurs le magnetisme peut-il soulager ?</h2>
            <p>
              Le magnetisme est particulierement efficace sur :
            </p>
            <ul>
              <li><strong>Mal de dos</strong> - Lombalgies, lumbagos, hernies discales</li>
              <li><strong>Douleurs articulaires</strong> - Arthrose, arthrite, rhumatismes</li>
              <li><strong>Douleurs nerveuses</strong> - Sciatique, nevralgie, cruralgie</li>
              <li><strong>Tendinites</strong> - Epaule, coude, poignet, genou</li>
              <li><strong>Fibromyalgie</strong> - Douleurs diffuses et fatigue chronique</li>
              <li><strong>Migraines</strong> - Cephalees de tension, migraines chroniques</li>
            </ul>

            <h2>Comment le magnetisme agit sur la douleur</h2>
            <p>
              Le magnetisme travaille sur plusieurs mecanismes :
            </p>
            <ul>
              <li><strong>Liberation des tensions</strong> - L'energie dissout les blocages musculaires et articulaires</li>
              <li><strong>Stimulation de la circulation</strong> - Meilleur apport sanguin pour la regeneration des tissus</li>
              <li><strong>Action anti-inflammatoire</strong> - Reduction naturelle de l'inflammation</li>
              <li><strong>Relaxation profonde</strong> - Le stress amplifie la douleur, la detente la diminue</li>
            </ul>

            <h2>Temoignage : Michel, 58 ans</h2>
            <blockquote className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl not-italic">
              <p className="text-stone-700 mb-4">
                "Apres 15 ans de mal de dos chronique et des dizaines de seances de kine, j'ai essaye le magnetisme en dernier recours. Des la premiere seance a distance, j'ai ressenti un soulagement. Aujourd'hui, je peux enfin jardiner sans souffrir."
              </p>
              <footer className="text-orange-600 font-medium">Michel, retraite</footer>
            </blockquote>

            <h2>Le soin a distance est-il efficace pour les douleurs ?</h2>
            <p>
              Absolument. L'energie magnetique n'est pas limitee par la distance physique. Jean-Francois travaille quotidiennement sur des patients partout en France avec d'excellents resultats sur les douleurs chroniques.
            </p>
            <p>
              Le processus est simple : vous envoyez une photo recente et decrivez vos douleurs. Jean-Francois se connecte a votre energie et effectue le soin. Beaucoup de patients ressentent les effets dans l'heure qui suit : chaleur dans la zone douloureuse, detente musculaire, diminution de l'intensite de la douleur.
            </p>

            <h2>Combien de seances pour des resultats durables ?</h2>
            <p>
              Cela depend de l'anciennete et de l'origine de la douleur :
            </p>
            <ul>
              <li><strong>Douleur recente</strong> (moins de 3 mois) - 1 a 2 seances</li>
              <li><strong>Douleur chronique</strong> (plusieurs mois/annees) - 3 a 6 seances</li>
              <li><strong>Entretien</strong> - Une seance mensuelle pour maintenir les resultats</li>
            </ul>

            <h2>Ce que vous pouvez faire en complement</h2>
            <ul>
              <li>Maintenir une activite physique douce (marche, natation)</li>
              <li>Appliquer du chaud ou du froid selon le type de douleur</li>
              <li>Pratiquer des exercices de respiration et relaxation</li>
              <li>Veiller a une bonne posture au quotidien</li>
            </ul>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-8">
              <p className="text-stone-600 text-sm">
                <strong>Important :</strong> Le magnetisme est une pratique complementaire. Consultez toujours votre medecin pour etablir un diagnostic et ne jamais interrompre un traitement medical sans avis medical.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="py-16 bg-orange-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Vous souffrez de douleurs chroniques ?</h2>
            <p className="text-orange-100 mb-8">Jean-Francois peut vous aider a retrouver une vie sans douleur.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:shadow-xl transition-all">
              Demander un soin
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </article>
    </LayoutWrapper>
  )
}
