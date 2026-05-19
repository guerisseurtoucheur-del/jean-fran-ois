import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magnetiseur Coliques Bebe | Soulager les Coliques du Nourrisson',
  description: 'Jean-Francois, magnetiseur expert, soulage les coliques du nourrisson a distance sur photo. Soin energetique doux et naturel pour apaiser votre bebe.',
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-coliques-bebe',
  },
  openGraph: {
    title: 'Magnetiseur Coliques Bebe | Soulager les Coliques du Nourrisson',
    description: 'Soin energetique a distance pour apaiser les coliques de votre bebe naturellement.',
    url: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-coliques-bebe',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
