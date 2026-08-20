import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magnetiseur a Distance sur Photo - Partout en France | Jean-Francois',
  description:
    "Magnetiseur et guerisseur a distance sur simple photo, partout en France. Jean-Francois agit ou que vous soyez, sans deplacement : douleurs, stress, peau, brulures... Reponse sous 2h, don libre apres resultat.",
  keywords:
    'magnetiseur a distance, magnetiseur a distance photo, meilleur magnetiseur france a distance, guerisseur a distance, magnetiseur france, soin energetique a distance, magnetiseur sur photo',
  openGraph: {
    title: 'Magnetiseur a Distance sur Photo - Partout en France | Jean-Francois',
    description:
      "Soin de magnetisme a distance sur simple photo, partout en France. Sans deplacement, reponse sous 2h, don libre apres resultat.",
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-a-distance',
  },
}

export default function MagnetiseurADistanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
