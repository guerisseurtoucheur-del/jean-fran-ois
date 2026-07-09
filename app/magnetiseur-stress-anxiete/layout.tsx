import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magnetiseur Stress, Anxiete et Sommeil a Distance sur Photo | Jean-Francois',
  description:
    "Magnetiseur pour stress, anxiete, angoisses et troubles du sommeil a distance sur photo. Jean-Francois vous aide a retrouver calme et serenite partout en France. Reponse sous 2h, don libre apres resultat.",
  keywords:
    'magnetiseur stress, magnetiseur anxiete, magnetiseur angoisse, magnetiseur sommeil, magnetiseur insomnie, magnetiseur burn-out, magnetisme stress a distance, retrouver serenite magnetisme',
  openGraph: {
    title: 'Magnetiseur Stress et Anxiete - Jean-Francois',
    description:
      'Retrouvez calme, serenite et sommeil grace au magnetisme a distance sur photo. Partout en France, don libre apres resultat.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-stress-anxiete',
  },
}

export default function MagnetiseurStressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
