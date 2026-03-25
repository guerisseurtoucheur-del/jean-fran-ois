import Link from 'next/link'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

export const metadata = {
  title: 'Blog Magnetisme et Guerisseur | Jean-Francois Magnetiseur',
  description: 'Articles sur le magnetisme, le zona, les brulures, l\'eczema et les soins energetiques a distance. Conseils et informations par Jean-Francois, magnetiseur guerisseur.',
}

const articles = [
  {
    slug: 'magnetisme-migraines-soulager-naturellement',
    title: 'Magnetisme et Migraines : Comment Soulager Naturellement',
    excerpt: 'Decouvrez comment le magnetisme peut aider a reduire la frequence et l\'intensite des migraines sans medicaments.',
    date: '2026-03-13',
    readTime: '6 min',
    category: 'Migraines'
  },
  {
    slug: 'magnetisme-arthrose-retrouver-mobilite',
    title: 'Magnetisme et Arthrose : Retrouver sa Mobilite',
    excerpt: 'Comment le magnetisme peut aider a soulager les douleurs articulaires et ameliorer la qualite de vie des personnes atteintes d\'arthrose.',
    date: '2026-03-13',
    readTime: '7 min',
    category: 'Arthrose'
  },
  {
    slug: 'magnetisme-zona-traitement-naturel',
    title: 'Magnetisme et Zona : Un Traitement Naturel Efficace',
    excerpt: 'Decouvrez comment le magnetisme peut soulager rapidement les douleurs du zona et accelerer la guerison. Temoignages et explications.',
    date: '2024-02-15',
    readTime: '5 min',
    category: 'Zona'
  },
  {
    slug: 'coupeur-de-feu-brulures-tradition',
    title: 'Coupeur de Feu : Une Tradition Ancestrale Contre les Brulures',
    excerpt: 'Qu\'est-ce qu\'un coupeur de feu ? Comment cette pratique ancestrale soulage-t-elle instantanement la douleur des brulures ?',
    date: '2024-02-10',
    readTime: '6 min',
    category: 'Brulures'
  },
  {
    slug: 'soin-energetique-distance-photo-comment-ca-marche',
    title: 'Soin Energetique a Distance sur Photo : Comment Ca Marche ?',
    excerpt: 'Le magnetisme a distance est-il vraiment efficace ? Explication du fonctionnement des soins sur photo et pourquoi la distance n\'est pas un obstacle.',
    date: '2024-02-05',
    readTime: '7 min',
    category: 'Magnetisme'
  },
  {
    slug: 'eczema-magnetisme-solution-naturelle',
    title: 'Eczema et Magnetisme : Une Solution Naturelle',
    excerpt: 'L\'eczema peut etre soulage par le magnetisme. Decouvrez comment les soins energetiques aident a calmer les demangeaisons et reduire les poussees.',
    date: '2024-01-28',
    readTime: '5 min',
    category: 'Eczema'
  },
  {
    slug: 'douleurs-chroniques-magnetiseur-aide',
    title: 'Douleurs Chroniques : Comment un Magnetiseur Peut Vous Aider',
    excerpt: 'Mal de dos, douleurs articulaires, fibromyalgie... Le magnetisme offre un soulagement naturel pour de nombreuses douleurs chroniques.',
    date: '2024-01-20',
    readTime: '6 min',
    category: 'Douleurs'
  },
  {
    slug: 'difference-magnetiseur-guerisseur-rebouteux',
    title: 'Magnetiseur, Guerisseur, Rebouteux : Quelles Differences ?',
    excerpt: 'Comprendre les differences entre ces praticiens de medecine alternative et savoir vers qui se tourner selon vos besoins.',
    date: '2024-01-15',
    readTime: '4 min',
    category: 'Magnetisme'
  }
]

export default function BlogPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-stone-50">
        {/* Header */}
        <section className="py-16 bg-white border-b border-stone-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4 block">Blog</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              Articles sur le Magnetisme
            </h1>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Conseils, explications et informations sur le magnetisme, les soins energetiques et les differentes pathologies traitees.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link 
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="p-6 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <h2 className="text-xl font-serif font-bold text-stone-900 group-hover:text-indigo-600 transition-colors leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-stone-500 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                      <div className="flex items-center gap-4 text-xs text-stone-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {article.readTime}
                        </span>
                      </div>
                      <ArrowRight size={16} className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Besoin d'un soin ?</h2>
            <p className="text-indigo-200 mb-8">Jean-Francois peut vous aider a distance, ou que vous soyez en France.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:shadow-xl transition-all">
              Demander un soin
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
