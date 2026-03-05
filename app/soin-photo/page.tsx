import type { Metadata } from 'next'
import SiteShell from '../components/SiteShell'
import HealingRequestClient from './HealingRequestClient'

export const metadata: Metadata = {
  title: 'Soin sur Photo a Distance | France Entiere',
  description: 'Envoyez votre photo pour un soin energetique a distance par Jean-Francois, magnetiseur expert. Traitement securise, resultat sous 24h partout en France.',
  alternates: {
    canonical: '/soin-photo',
  },
  openGraph: {
    title: 'Soin sur Photo a Distance | Jean-Francois Magnetiseur',
    description: 'Demandez un soin energetique a distance. Envoyez votre photo de maniere securisee et recevez un soin personnalise sous 24h.',
  },
}

export default function SoinPhotoPage() {
  return (
    <SiteShell>
      <div className="pt-32 md:pt-40 pb-12">
        <HealingRequestClient />
      </div>
    </SiteShell>
  )
}
