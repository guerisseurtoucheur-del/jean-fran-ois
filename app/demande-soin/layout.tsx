import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demande de Soin | Jean-Francois Magnetiseur Guerisseur',
  description: 'Demandez un soin energetique a distance sur photo avec Jean-Francois. Paiement securise PayPal ou CB. Soin Ponctuel 35EUR, Soin Complet 55EUR, Forfait 120EUR.',
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/demande-soin',
  },
  openGraph: {
    title: 'Demande de Soin | Jean-Francois Magnetiseur Guerisseur',
    description: 'Reservez votre soin energetique a distance. Paiement securise et resultats rapides.',
    url: 'https://www.jean-francois-magnetiseur-guerisseur.com/demande-soin',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
