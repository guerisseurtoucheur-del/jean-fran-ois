import type { Metadata } from 'next'
import SiteShell from '../components/SiteShell'
import DashboardClient from './DashboardClient'

export const metadata: Metadata = {
  title: 'Mon Espace Patient',
  description: 'Suivi personnel de votre soin energetique et historique avec Jean-Francois magnetiseur guerisseur.',
  alternates: {
    canonical: '/mon-espace',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function MonEspacePage() {
  return (
    <SiteShell>
      <div className="pt-32 md:pt-40 pb-12">
        <DashboardClient />
      </div>
    </SiteShell>
  )
}
