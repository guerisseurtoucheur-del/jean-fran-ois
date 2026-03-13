import type { Metadata } from 'next'
import Link from 'next/link'
import { Play, ArrowRight, Phone, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Presentation Video - Jean-Francois Magnetiseur Guerisseur',
  description: 'Decouvrez Jean-Francois, magnetiseur guerisseur specialise dans les soins energetiques a distance sur photo. Coupeur de feu, traitement du zona, eczema et douleurs chroniques.',
  openGraph: {
    title: 'Presentation Video - Jean-Francois Magnetiseur Guerisseur',
    description: 'Decouvrez Jean-Francois, magnetiseur guerisseur specialise dans les soins energetiques a distance sur photo.',
    type: 'video.other',
    videos: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean-francois-magnetiseur-guerisseur_video-NLOPDOs77bOl491U2cfIJSUXAeijtj.MP4',
        width: 1080,
        height: 1920,
        type: 'video/mp4',
      }
    ],
  },
}

export default function PresentationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Video Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Play size={14} />
              Video de presentation
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              Decouvrez Jean-Francois
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Magnetiseur guerisseur depuis plus de 20 ans, specialise dans les soins energetiques a distance sur photo.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative max-w-2xl mx-auto">
            <div className="aspect-[9/16] md:aspect-[4/5] bg-stone-900 rounded-3xl overflow-hidden shadow-2xl">
              <video 
                controls
                autoPlay
                loop
                muted
                playsInline
                poster="/logo.png"
                className="w-full h-full object-cover"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean-francois-magnetiseur-guerisseur_video-NLOPDOs77bOl491U2cfIJSUXAeijtj.MP4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de videos.
              </video>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-10 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
              Le magnetisme a distance, comment ca marche ?
            </h2>
            <p className="text-stone-600 mb-6">
              Dans cette video, Jean-Francois vous explique sa pratique du magnetisme et des soins energetiques. 
              Grace a l&apos;envoi d&apos;une simple photo, il peut vous aider a soulager vos douleurs, 
              votre zona, vos brulures ou votre eczema, ou que vous soyez en France.
            </p>
            <p className="text-stone-600 mb-8">
              &quot;La distance n&apos;est qu&apos;une illusion. L&apos;energie n&apos;a pas de frontiere.&quot;
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              href="/demande-soin"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Heart size={18} />
              Demander un soin
              <ArrowRight size={18} />
            </Link>
            <Link 
              href="tel:0955554462"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-900 rounded-full font-bold hover:bg-stone-100 transition-all border border-stone-200"
            >
              <Phone size={18} />
              09 55 55 44 62
            </Link>
          </div>
        </div>
      </section>

      {/* Specialites */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-stone-900 text-center mb-10">
            Mes specialites
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Zona', desc: 'Soulagement rapide des douleurs et lesions' },
              { title: 'Coupeur de feu', desc: 'Brulures, coups de soleil, radiotherapie' },
              { title: 'Eczema', desc: 'Problemes de peau, psoriasis, allergies' },
              { title: 'Douleurs', desc: 'Dos, articulations, sciatique, arthrose' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-amber-600 text-sm font-medium mb-4">
            Le magnetisme est une pratique complementaire qui ne remplace pas la medecine conventionnelle.
          </p>
          <Link 
            href="/"
            className="text-indigo-600 font-bold hover:underline"
          >
            Retour a l&apos;accueil
          </Link>
        </div>
      </section>
    </main>
  )
}
