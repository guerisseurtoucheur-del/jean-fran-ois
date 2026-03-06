import Link from 'next/link'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react'

export const metadata = {
  title: 'Coupeur de Feu : Tradition Ancestrale Contre les Brulures | Jean-Francois',
  description: 'Qu\'est-ce qu\'un coupeur de feu ? Decouvrez cette pratique ancestrale qui soulage instantanement la douleur des brulures, reconnue meme dans certains hopitaux.',
  keywords: 'coupeur de feu, brulure magnetiseur, guerisseur brulure, soulager brulure, barreur de feu'
}

export default function ArticleCoupeurFeu() {
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
              Brulures
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-4 mb-6 leading-tight">
              Coupeur de Feu : Une Tradition Ancestrale Contre les Brulures
            </h1>
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <span className="flex items-center gap-2">
                <User size={16} />
                Jean-Francois
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                10 fevrier 2024
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
          <div className="max-w-3xl mx-auto px-6 prose prose-stone prose-lg">
            <p className="lead text-xl text-stone-600 leading-relaxed">
              Depuis des siecles, des hommes et des femmes possedent le don de "couper le feu", soulageant instantanement la douleur des brulures. Cette pratique, longtemps cantonnee aux campagnes, est aujourd'hui reconnue dans certains services hospitaliers. Decouvrez ce qu'est un coupeur de feu et comment il peut vous aider.
            </p>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Qu'est-ce qu'un coupeur de feu ?</h2>
            <p className="text-stone-600 leading-relaxed">
              Un coupeur de feu (ou barreur de feu, tireur de feu) est une personne capable de soulager la douleur des brulures par imposition des mains ou a distance, accompagnee d'une priere ou formule transmise de generation en generation.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Cette pratique fait partie de la tradition des guerisseurs. Le don se transmet generalement au sein d'une famille, souvent de grand-parent a petit-enfant, ou de maitre a eleve. La formule utilisee reste souvent secrete.
            </p>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Comment ca fonctionne ?</h2>
            <p className="text-stone-600 leading-relaxed">
              Le mecanisme exact reste inexplique par la science, mais les resultats sont observables :
            </p>
            <ul className="text-stone-600 space-y-3">
              <li><strong>Soulagement immediat</strong> : La douleur diminue souvent en quelques minutes, parfois instantanement.</li>
              <li><strong>Reduction de l'inflammation</strong> : Les rougeurs s'attenuent plus rapidement.</li>
              <li><strong>Cicatrisation acceleree</strong> : Les brulures guerissent souvent sans laisser de traces.</li>
              <li><strong>Prevention des cloques</strong> : Si l'intervention est rapide, les cloques peuvent ne pas apparaitre.</li>
            </ul>
            <p className="text-stone-600 leading-relaxed">
              Le coupeur de feu agit sur tous types de brulures : thermiques (flamme, eau bouillante, huile), chimiques, coups de soleil, et meme les brulures liees a la radiotherapie.
            </p>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Reconnaissance hospitaliere</h2>
            <p className="text-stone-600 leading-relaxed">
              Fait remarquable : plusieurs centres hospitaliers francais, notamment des services de grands brules et de radiotherapie, collaborent avec des coupeurs de feu. Le CHU de Grenoble, le Centre Leon Berard a Lyon, et d'autres etablissements ont integre cette pratique dans leur prise en charge.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Les soignants, d'abord sceptiques, ont constate des resultats trop frequents pour etre ignores. Ils orientent regulierement leurs patients vers des coupeurs de feu, particulierement pour les brulures liees aux traitements contre le cancer.
            </p>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Couper le feu a distance</h2>
            <p className="text-stone-600 leading-relaxed">
              Contrairement a ce qu'on pourrait penser, le coupeur de feu n'a pas besoin d'etre physiquement present. Le soin a distance fonctionne tout aussi bien, ce qui permet d'intervenir rapidement apres une brulure, meme a des centaines de kilometres.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Jean-Francois pratique le "coupage de feu" a distance depuis de nombreuses annees. Un simple appel ou l'envoi d'une photo permet d'intervenir immediatement.
            </p>

            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-12 mb-4">Que faire en cas de brulure ?</h2>
            <ol className="text-stone-600 space-y-3">
              <li><strong>Refroidir immediatement</strong> : Passez la brulure sous l'eau froide (pas glacee) pendant 10-15 minutes.</li>
              <li><strong>Evaluer la gravite</strong> : En cas de brulure grave ou etendue, appelez le 15 ou rendez-vous aux urgences.</li>
              <li><strong>Contacter un coupeur de feu</strong> : Plus l'intervention est rapide, meilleurs sont les resultats.</li>
              <li><strong>Ne pas percer les cloques</strong> : Elles protegent la peau en cours de cicatrisation.</li>
            </ol>

            <blockquote className="border-l-4 border-indigo-600 pl-6 italic text-stone-600 my-8">
              "Je me suis renverse de l'huile bouillante sur la main. La douleur etait insupportable. J'ai appele Jean-Francois en urgence. En 10 minutes, la douleur avait diminue de 80%. Le lendemain, presque plus rien. Incroyable."
              <footer className="mt-2 text-stone-500 not-italic">— Sophie, 42 ans, Nantes</footer>
            </blockquote>

            <div className="bg-indigo-50 rounded-3xl p-8 mt-12">
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Brulure ? Intervention rapide a distance</h3>
              <p className="text-stone-600 mb-6">
                Jean-Francois peut "couper le feu" a distance, ou que vous soyez. En cas de brulure, contactez-le rapidement pour un soulagement immediat.
              </p>
              <Link href="/demande-soin" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all">
                Demander un soin urgent
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </LayoutWrapper>
  )
}
