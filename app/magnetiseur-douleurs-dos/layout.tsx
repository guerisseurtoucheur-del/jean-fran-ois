import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magnetiseur Douleurs Dos, Sciatique et Articulations a Distance | Jean-Francois',
  description:
    "Magnetiseur pour douleurs de dos, sciatique, arthrose et douleurs articulaires a distance sur photo. Jean-Francois soulage vos douleurs chroniques partout en France. Reponse sous 2h, don libre apres resultat.",
  keywords:
    'magnetiseur douleurs dos, magnetiseur sciatique, magnetiseur arthrose, magnetiseur mal de dos, magnetiseur articulations, magnetiseur tendinite, magnetiseur fibromyalgie, douleurs a distance magnetisme',
  openGraph: {
    title: 'Magnetiseur Douleurs Dos et Articulations - Jean-Francois',
    description:
      'Soulagez mal de dos, sciatique, arthrose et douleurs articulaires grace au magnetisme a distance sur photo. Partout en France, don libre.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-douleurs-dos',
  },
}

export default function MagnetiseurDouleursDosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
