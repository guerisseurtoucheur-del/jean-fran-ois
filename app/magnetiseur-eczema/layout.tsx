import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magnetiseur Eczema et Psoriasis a Distance sur Photo | Jean-Francois',
  description:
    "Magnetiseur pour eczema, psoriasis et problemes de peau a distance sur photo. Jean-Francois apaise demangeaisons, plaques et rougeurs partout en France. Reponse sous 2h, don libre apres resultat.",
  keywords:
    'magnetiseur eczema, magnetiseur psoriasis, magnetiseur problemes de peau, soigner eczema magnetisme, magnetiseur demangeaisons, eczema a distance, psoriasis magnetiseur, dermatite atopique magnetisme',
  openGraph: {
    title: 'Magnetiseur Eczema et Psoriasis - Jean-Francois',
    description:
      'Apaisez eczema, psoriasis et demangeaisons grace au magnetisme a distance sur photo. Partout en France, don libre apres resultat.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-eczema',
  },
}

export default function MagnetiseurEczemaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
