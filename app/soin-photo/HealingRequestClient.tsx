'use client'

import Link from 'next/link'
import { Heart, CreditCard, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export default function HealingRequestClient() {
  const TALLY_URL = "https://tally.so/embed/jaPN0Q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <div className="bg-white rounded-[3rem] md:rounded-[4rem] border border-stone-100 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="p-8 md:p-12 text-center space-y-4 relative z-10 border-b border-stone-50">
          <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto text-indigo-600">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl font-serif font-bold text-stone-900 leading-tight">Demande de Soin</h1>
          <p className="text-stone-500 max-w-lg mx-auto italic">
            Remplissez ce formulaire securise pour m{"'"}envoyer votre photo et vos informations.
            Je traiterai votre demande dans les plus brefs delais.
          </p>
        </div>

        <div className="relative min-h-[600px] bg-stone-50/30">
          <iframe
            src={TALLY_URL}
            width="100%"
            height="800"
            frameBorder="0"
            title="Formulaire Jean-Francois Magnetiseur"
            className="w-full h-[800px]"
          ></iframe>
        </div>

        <div className="p-8 md:p-12 bg-indigo-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Sparkles size={18} className="text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Etape suivante</span>
            </div>
            <p className="text-lg font-serif italic">{"Une fois votre formulaire envoye, n'oubliez pas de finaliser votre demarche."}</p>
          </div>

          <Link
            href="/reglement"
            className="px-8 py-5 bg-white text-indigo-900 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-950/20 group whitespace-nowrap"
          >
            <CreditCard size={20} />
            Acceder au reglement
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 text-stone-400">
        <div className="flex -space-x-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 flex items-center justify-center">
              <Heart size={12} fill="currentColor" />
            </div>
          ))}
        </div>
        <p className="text-xs font-medium uppercase tracking-widest">Confidentialite garantie - Transmission securisee</p>
      </div>
    </div>
  )
}
