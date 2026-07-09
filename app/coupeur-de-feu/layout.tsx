import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coupeur de Feu a Distance sur Photo - Brulures, Zona, Radiotherapie | Jean-Francois',
  description:
    "Coupeur de feu a distance sur photo. Jean-Francois soulage brulures, coups de soleil et brulures de radiotherapie partout en France : Lyon, Paris, Marseille, Bordeaux... Intervention rapide, reponse sous 2h, don libre.",
  keywords:
    'coupeur de feu, coupeur de feu a distance, coupeur de feu Lyon, barreur de feu, panseur de secret, brulure radiotherapie, soulager brulure, coupeur de feu sur photo',
  openGraph: {
    title: 'Coupeur de Feu a Distance - Jean-Francois',
    description:
      'Soulagement des brulures a distance sur photo, partout en France. Intervention rapide, don libre apres resultat.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/coupeur-de-feu',
  },
}

export default function CoupeurDeFeuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
