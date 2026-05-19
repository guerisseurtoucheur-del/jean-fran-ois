import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magnetiseur Dents Bebe | Soulager les Poussees Dentaires',
  description: 'Jean-Francois, magnetiseur expert, soulage les douleurs de poussees dentaires de votre bebe a distance sur photo. Soin energetique doux et naturel.',
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-dents-bebe',
  },
  openGraph: {
    title: 'Magnetiseur Dents Bebe | Soulager les Poussees Dentaires',
    description: 'Soin energetique a distance pour apaiser les poussees dentaires de votre bebe naturellement.',
    url: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-dents-bebe',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
