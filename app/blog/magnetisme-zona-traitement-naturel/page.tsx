import Link from 'next/link'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react'

export const metadata = {
  title: 'Magnetisme et Zona : Un Traitement Naturel Efficace | Jean-Francois',
  description: 'Decouvrez comment le magnetisme peut soulager rapidement les douleurs du zona et accelerer la guerison. Explication par Jean-Francois, magnetiseur guerisseur.',
  keywords: 'zona magnetisme, traitement zona naturel, guerisseur zona, magnetiseur zona, soulager zona'
}

export default function ArticleZona() {
  return (
    <LayoutWrapper>
      <article className="min-h-screen bg-white">
        {/* Header */}
        <header className="py-16 bg-stone-50 border-b border-stone-100">
          <div className="max-w-3xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8 text-sm font-medium">
              <ArrowLeft size={16} />
              Retour au blog
            </Link>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              Zona
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-4 mb-6 leading-tight">
              Magnetisme et Zona : Un Traitement Naturel Efficace
            </h1>
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <span className="flex items-center gap-2">
                <User size={16} />
                Jean-Francois
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                15 fevrier 2024
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
          <div className="max-w-3xl mx-auto px-6 prose prose-stone prose-lg">
            <p className="lead text-xl text-stone-600 leading-relaxed">
              Le zona est une affection douloureuse causee par la reactivation du virus de la varicelle. Si les traitements medicaux existent, de plus en plus de personnes se tournent vers le magnetisme pour soulager rapidement leurs douleurs. Decouvrez comment cette approche naturelle peut vous aider.
            </p>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Qu'est-ce que le zona ?</h2>
            <p className="text-stone-600 leading-relaxed">
              Le zona, aussi appele herpes zoster, se manifeste par une eruption cutanee douloureuse, generalement sur un cote du corps. Il touche principalement les personnes ayant eu la varicelle, le virus restant dormant dans les nerfs pendant des annees avant de se reactiver.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Les symptomes incluent des douleurs intenses, des sensations de brulure, des demangeaisons et l'apparition de vesicules. La douleur peut persister pendant des semaines, voire des mois apres la disparition des lesions (nevralgie post-zosterienne).
            </p>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Comment le magnetisme agit sur le zona ?</h2>
            <p className="text-stone-600 leading-relaxed">
              Le magnetisme est une pratique ancestrale qui consiste a canaliser et transmettre l'energie pour soulager les maux. Dans le cas du zona, le magnetiseur travaille sur plusieurs plans :
            </p>
            <ul className="text-stone-600 space-y-3">
              <li><strong>Soulagement de la douleur</strong> : L'energie transmise aide a calmer les nerfs enflammes et reduit significativement la sensation de brulure.</li>
              <li><strong>Acceleration de la cicatrisation</strong> : Les vesicules sechent souvent plus rapidement apres une seance de magnetisme.</li>
              <li><strong>Prevention des nevralgies</strong> : En intervenant tot, le magnetisme peut limiter les douleurs persistantes.</li>
              <li><strong>Apaisement general</strong> : Le stress aggrave le zona ; le magnetisme procure une relaxation profonde benefique.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Le magnetisme a distance pour le zona</h2>
            <p className="text-stone-600 leading-relaxed">
              Bonne nouvelle : il n'est pas necessaire de se deplacer pour beneficier d'un soin de magnetisme. Le soin a distance sur photo est tout aussi efficace. Comment ca fonctionne ?
            </p>
            <ol className="text-stone-600 space-y-3">
              <li>Vous envoyez une photo recente de votre visage via le formulaire.</li>
              <li>Jean-Francois se connecte a votre energie grace a cette photo.</li>
              <li>Il realise le soin a distance, comme s'il etait present.</li>
              <li>Les effets sont souvent ressentis dans l'heure qui suit.</li>
            </ol>
            <p className="text-stone-600 leading-relaxed">
              Cette methode est particulierement adaptee aux personnes souffrant de zona, car elle evite le deplacement souvent penible quand on souffre.
            </p>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Temoignages</h2>
            <blockquote className="border-l-4 border-indigo-600 pl-6 italic text-stone-600 my-8">
              "J'avais un zona depuis 10 jours, les medicaments ne faisaient pas assez effet. Apres le soin de Jean-Francois, j'ai senti un soulagement dans les 2 heures. Les douleurs ont diminue de moitie en 24h."
              <footer className="mt-2 text-stone-500 not-italic">— Marie, 58 ans, Lyon</footer>
            </blockquote>
            <blockquote className="border-l-4 border-indigo-600 pl-6 italic text-stone-600 my-8">
              "Sceptique au debut, j'ai essaye le magnetisme en dernier recours. Le zona sur mon flanc me faisait souffrir jour et nuit. Apres une seance a distance, la douleur a commence a s'attenuer. Je recommande vivement."
              <footer className="mt-2 text-stone-500 not-italic">— Pierre, 65 ans, Paris</footer>
            </blockquote>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Magnetisme et medecine : complementaires</h2>
            <p className="text-stone-600 leading-relaxed">
              Le magnetisme ne remplace pas la medecine conventionnelle. Il est conseille de consulter un medecin pour un diagnostic et un traitement adapte. Le magnetisme intervient en complement pour soulager la douleur et accelerer la guerison.
            </p>
            <p className="text-stone-600 leading-relaxed">
              De nombreux medecins reconnaissent aujourd'hui les bienfaits des approches complementaires comme le magnetisme, notamment pour la gestion de la douleur.
            </p>

            <div className="bg-indigo-50 rounded-3xl p-8 mt-12">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Vous souffrez d'un zona ?</h3>
              <p className="text-stone-600 mb-6">
                Jean-Francois peut vous soulager a distance, ou que vous soyez en France. Envoyez simplement votre photo et decrivez vos symptomes.
              </p>
              <Link href="/demande-soin" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all">
                Demander un soin
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </LayoutWrapper>
  )
}
