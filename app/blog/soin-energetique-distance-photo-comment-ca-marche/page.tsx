import Link from 'next/link'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react'

export const metadata = {
  title: 'Soin Energetique a Distance sur Photo : Comment Ca Marche ? | Jean-Francois',
  description: 'Le magnetisme a distance est-il efficace ? Explication du fonctionnement des soins sur photo par Jean-Francois, magnetiseur guerisseur.',
  keywords: 'soin a distance, magnetisme photo, soin energetique distance, magnetiseur distance, guerisseur photo'
}

export default function ArticleSoinDistance() {
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
              Magnetisme
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-4 mb-6 leading-tight">
              Soin Energetique a Distance sur Photo : Comment Ca Marche ?
            </h1>
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <span className="flex items-center gap-2">
                <User size={16} />
                Jean-Francois
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                5 fevrier 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                7 min de lecture
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="py-16">
          <div className="max-w-3xl mx-auto px-6 prose prose-stone prose-lg">
            <p className="lead text-xl text-stone-600 leading-relaxed">
              "Comment pouvez-vous me soigner a distance ?" C'est la question que l'on me pose le plus souvent. La reponse tient en une phrase : la distance est une illusion. L'energie n'est pas limitee par l'espace. Laissez-moi vous expliquer comment fonctionnent les soins a distance sur photo.
            </p>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">L'energie ne connait pas la distance</h2>
            <p className="text-stone-600 leading-relaxed">
              La physique quantique nous enseigne que tout est energie et que les particules peuvent etre "intriguees" independamment de la distance qui les separe. Ce que les guerisseurs savent intuitivement depuis des siecles trouve aujourd'hui des echos dans la science moderne.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Quand je realise un soin a distance, je me connecte a votre energie grace a votre photo. Cette image porte votre empreinte energetique, comme une signature unique. Elle me permet de vous "trouver" et de vous transmettre l'energie de guerison.
            </p>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Pourquoi une photo ?</h2>
            <p className="text-stone-600 leading-relaxed">
              La photo sert de lien, de pont entre vous et moi. Elle contient :
            </p>
            <ul className="text-stone-600 space-y-3">
              <li><strong>Votre visage</strong> : Miroir de votre ame et de votre etat energetique.</li>
              <li><strong>Votre regard</strong> : Les yeux sont les fenetres de l'ame, ils revelent beaucoup.</li>
              <li><strong>Votre energie du moment</strong> : Une photo recente capture votre etat actuel.</li>
            </ul>
            <p className="text-stone-600 leading-relaxed">
              C'est pourquoi je demande toujours une photo recente, de preference prise le jour meme ou la veille, avec un visage visible et un regard direct vers l'objectif.
            </p>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Comment se deroule un soin a distance ?</h2>
            <ol className="text-stone-600 space-y-4">
              <li>
                <strong>Vous m'envoyez votre demande</strong><br />
                Photo recente + description de votre probleme via le formulaire du site.
              </li>
              <li>
                <strong>Je recois votre demande</strong><br />
                Je prends connaissance de votre situation et me prepare pour le soin.
              </li>
              <li>
                <strong>Je realise le soin</strong><br />
                En me concentrant sur votre photo, je canalise l'energie et vous la transmets. Ce moment dure entre 15 et 30 minutes.
              </li>
              <li>
                <strong>L'energie vous atteint</strong><br />
                Souvent, les personnes ressentent quelque chose au moment meme du soin : chaleur, picotements, apaisement, fatigue...
              </li>
              <li>
                <strong>Les effets se manifestent</strong><br />
                Le soulagement peut etre immediat ou progressif dans les heures et jours qui suivent.
              </li>
            </ol>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Est-ce aussi efficace qu'en presentiel ?</h2>
            <p className="text-stone-600 leading-relaxed">
              Oui. Apres des milliers de soins a distance, je peux vous assurer que les resultats sont equivalents. La distance physique n'affaiblit pas l'energie. Ce qui compte, c'est l'intention, la connexion et la receptivite.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Le soin a distance presente meme des avantages :
            </p>
            <ul className="text-stone-600 space-y-3">
              <li>Pas de deplacement quand on souffre</li>
              <li>Intervention rapide en cas d'urgence (brulure, zona...)</li>
              <li>Possibilite de recevoir le soin chez soi, dans un environnement familier</li>
              <li>Accessible partout en France et meme a l'etranger</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Que ressent-on pendant le soin ?</h2>
            <p className="text-stone-600 leading-relaxed">
              Les sensations varient d'une personne a l'autre :
            </p>
            <ul className="text-stone-600 space-y-3">
              <li>Chaleur dans certaines zones du corps</li>
              <li>Picotements ou fourmillements</li>
              <li>Sensation de legeret ou de lourdeur</li>
              <li>Profonde relaxation</li>
              <li>Envie de dormir</li>
              <li>Parfois, rien de particulier sur le moment, mais des effets visibles apres</li>
            </ul>
            <p className="text-stone-600 leading-relaxed">
              Il n'y a pas de "bonne" ou "mauvaise" reaction. Chacun recoit l'energie a sa maniere.
            </p>

            <blockquote className="border-l-4 border-indigo-600 pl-6 italic text-stone-600 my-8">
              "J'etais sceptique sur les soins a distance. Mais a 800 km du cabinet de Jean-Francois, je n'avais pas le choix. Il m'a dit l'heure du soin. A ce moment precis, j'ai ressenti une vague de chaleur sur tout le corps. Mes douleurs au dos ont diminue dans l'heure. Je suis convertie."
              <footer className="mt-2 text-stone-500 not-italic">— Isabelle, 52 ans, Marseille</footer>
            </blockquote>

            <div className="bg-indigo-50 rounded-3xl p-8 mt-12">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Pret a essayer ?</h3>
              <p className="text-stone-600 mb-6">
                Envoyez votre photo et decrivez votre probleme. Jean-Francois vous repondra rapidement pour vous aider, ou que vous soyez.
              </p>
              <Link href="/demande-soin" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all">
                Demander un soin a distance
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </LayoutWrapper>
  )
}
