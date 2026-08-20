import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magnetiseur Douleurs Gastriques et RGO | Reflux, Estomac, Digestion',
  description: 'Jean-Francois, magnetiseur expert, soulage les douleurs gastriques, le reflux (RGO) et les troubles digestifs a distance sur photo. Maux estomac, crampes, remontees acides, ballonnements.',
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-douleurs-gastriques',
  },
  openGraph: {
    title: 'Magnetiseur Douleurs Gastriques et RGO | Reflux, Estomac, Digestion',
    description: 'Soin energetique a distance pour apaiser vos troubles digestifs et le reflux (RGO) naturellement.',
    url: 'https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-douleurs-gastriques',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
