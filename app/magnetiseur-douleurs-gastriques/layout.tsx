import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magnetiseur Douleurs Gastriques | Soulager Estomac et Digestif',
  description: 'Jean-Francois, magnetiseur expert, soulage les douleurs gastriques et troubles digestifs a distance sur photo. Maux estomac, crampes, reflux, ballonnements.',
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-douleurs-gastriques',
  },
  openGraph: {
    title: 'Magnetiseur Douleurs Gastriques | Soulager Estomac et Digestif',
    description: 'Soin energetique a distance pour apaiser vos troubles digestifs naturellement.',
    url: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-douleurs-gastriques',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
