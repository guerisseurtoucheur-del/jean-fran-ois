import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Toucheur en Normandie (Orne, Sarthe) - Jean-Francois, Toucheur Guerisseur a Distance',
  description:
    "Jean-Francois, toucheur guerisseur dans l'Orne et la Sarthe. Le toucheur soulage douleurs, brulures, eczema, zona et stress par imposition des mains ou a distance sur photo. Reponse sous 2h, don libre.",
  keywords:
    'toucheur, toucheur Orne, toucheur Sarthe, toucheur Alencon, toucheur magnetiseur, toucheur guerisseur, toucheur a distance, imposition des mains, toucheur Normandie',
  openGraph: {
    title: 'Toucheur Guerisseur en Normandie - Jean-Francois',
    description:
      "Toucheur guerisseur dans l'Orne et la Sarthe. Soulagement des douleurs par imposition des mains ou a distance sur photo.",
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/toucheur',
  },
}

export default function ToucheurLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
