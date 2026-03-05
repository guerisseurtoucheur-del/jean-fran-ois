import Link from 'next/link'
import SiteShell from './components/SiteShell'

export default function NotFound() {
  return (
    <SiteShell>
      <div className="pt-32 md:pt-40 pb-24 min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-8 max-w-lg mx-auto px-6">
          <div className="text-8xl font-serif font-bold text-stone-200">404</div>
          <h1 className="text-3xl font-serif font-bold text-stone-900">Page introuvable</h1>
          <p className="text-stone-500 leading-relaxed">
            {"L'energie circule, mais cette page n'existe pas. Revenez vers un chemin connu."}
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg"
          >
            {"Retour a l'accueil"}
          </Link>
        </div>
      </div>
    </SiteShell>
  )
}
