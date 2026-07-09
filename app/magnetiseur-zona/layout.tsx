import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magnetiseur Zona a Distance : Soulager les Douleurs sur Photo | Jean-Francois',
  description:
    "Magnetiseur specialiste du zona a distance sur photo. Jean-Francois soulage les douleurs du zona et les nevralgies post-zosteriennes, souvent des la premiere seance. Partout en France, reponse sous 2h, don libre.",
  keywords:
    'magnetiseur zona, soulager zona, zona a distance, guerisseur zona, magnetiseur douleurs zona, nevralgie post-zona, couper le zona, zona sur photo',
  openGraph: {
    title: 'Magnetiseur Zona a Distance - Jean-Francois',
    description:
      'Soulagement des douleurs du zona a distance sur photo, souvent des la premiere seance. Partout en France, don libre apres resultat.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-zona',
  },
}

export default function MagnetiseurZonaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
