import { Metadata } from 'next'
import { citiesData } from '@/data/cities'
import CityPageContent from '@/components/CityPageContent'

const city = citiesData.monaco

export const metadata: Metadata = {
  title: `Magnetiseur ${city.name} | Guerisseur & Coupeur de Feu a Distance - Jean-Francois`,
  description: `Magnetiseur guerisseur a ${city.name} et Monte-Carlo. Jean-Francois, specialiste du soin energetique a distance sur photo. Stress, surmenage, insomnies, zona, douleurs.`,
  keywords: `magnetiseur ${city.name}, guerisseur ${city.name}, magnetiseur Monte-Carlo, coupeur de feu Monaco, seance de magnetisme ${city.name}`,
  openGraph: {
    title: `Magnetiseur a ${city.name} - Jean-Francois Guerisseur`,
    description: `Soin energetique a distance pour les habitants de ${city.name} et de la Principaute.`,
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: `https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-${city.slug}`,
  },
}

export default function Page() {
  return <CityPageContent city={city} />
}
