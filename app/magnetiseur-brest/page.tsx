import { Metadata } from 'next'
import { citiesData } from '@/data/cities'
import CityPageContent from '@/components/CityPageContent'

const city = citiesData.brest

export const metadata: Metadata = {
  title: `Magnetiseur ${city.name} (${city.departmentCode}) | Guerisseur & Coupeur de Feu - Jean-Francois`,
  description: `Magnetiseur guerisseur a ${city.name} et ses environs. Jean-Francois, specialiste du soin energetique a distance sur photo. Zona, eczema, brulures, douleurs.`,
  keywords: `magnetiseur ${city.name}, guerisseur ${city.name}, coupeur de feu ${city.departmentCode}, magnetisme ${city.region}`,
  openGraph: {
    title: `Magnetiseur a ${city.name} - Jean-Francois Guerisseur`,
    description: `Soin energetique a distance pour les habitants de ${city.name} et ${city.region}.`,
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
