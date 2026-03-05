import type { Metadata } from 'next'
import SiteShell from '../components/SiteShell'
import PaymentClient from './PaymentClient'

export const metadata: Metadata = {
  title: 'Reglement Securise',
  description: 'Modalites de paiement securisees pour vos soins energetiques a distance avec Jean-Francois magnetiseur. Don libre via PayPal.',
  alternates: {
    canonical: '/reglement',
  },
  openGraph: {
    title: 'Reglement Securise | Jean-Francois Magnetiseur',
    description: 'Participez au soin via un don libre. Paiement securise par PayPal, aucun compte requis.',
  },
}

export default function ReglementPage() {
  return (
    <SiteShell>
      <div className="pt-32 md:pt-40 pb-12">
        <PaymentClient />
      </div>
    </SiteShell>
  )
}
