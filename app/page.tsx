import type { Metadata } from 'next'
import SiteShell from './components/SiteShell'
import HomeContent from './components/HomeContent'

export const metadata: Metadata = {
  title: 'Jean-Francois | Magnetiseur Guerisseur a Distance - France Entiere',
  description: 'Magnetiseur expert a Alencon. Soins energetiques sur photo a distance pour zona, eczema, brulures partout en France. Action immediate.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <SiteShell>
      <HomeContent />
    </SiteShell>
  )
}
