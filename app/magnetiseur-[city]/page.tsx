import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { citiesData, getCityBySlug, citySlugList } from '@/data/cities'
import CityPageClient from './CityPageClient'

// Genere toutes les pages statiquement pour le SEO
export function generateStaticParams() {
  return citySlugList.map((city) => ({
    city: city,
  }))
}

// Metadata dynamique pour chaque ville
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)
  
  if (!city) {
    return {
      title: 'Page non trouvee',
    }
  }

  return {
    title: `Magnetiseur ${city.name} (${city.departmentCode}) | Guerisseur & Coupeur de Feu - Jean-Francois`,
    description: `Magnetiseur guerisseur a ${city.name} et ses environs (${city.nearbyAreas.slice(0, 3).join(', ')}). Jean-Francois, specialiste du soin energetique a distance sur photo. Zona, eczema, brulures, douleurs. Action immediate.`,
    keywords: `magnetiseur ${city.name}, guerisseur ${city.name}, coupeur de feu ${city.departmentCode}, magnetisme ${city.region}, soin energetique ${city.name}`,
    openGraph: {
      title: `Magnetiseur a ${city.name} - Jean-Francois Guerisseur`,
      description: `Soin energetique a distance pour les habitants de ${city.name} et ${city.region}. Specialiste zona, eczema, brulures.`,
      type: 'website',
      locale: 'fr_FR',
    },
    alternates: {
      canonical: `https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-${city.slug}`,
    },
  }
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)
  
  if (!city) {
    notFound()
  }

  // Schema.org JSON-LD pour la page ville
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Jean-Francois - Magnetiseur Guerisseur a ${city.name}`,
    description: `Magnetiseur guerisseur intervenant a ${city.name} et dans tout le departement ${city.department} (${city.departmentCode}). Soins energetiques a distance sur photo.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Alencon',
      addressRegion: 'Normandie',
      postalCode: '61000',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: city.region,
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.coordinates.lat,
      longitude: city.coordinates.lng,
    },
    telephone: '+33955554462',
    url: `https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-${city.slug}`,
    sameAs: ['https://maps.app.goo.gl/7T8BscaocjerZRNWA'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '3',
      bestRating: '5',
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Comment fonctionne le magnetisme a distance pour ${city.name} ?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Jean-Francois intervient a distance pour les habitants de ${city.name} et du ${city.department} grace a l'envoi d'une simple photo. L'energie ne connait pas de frontiere, et les resultats sont souvent ressentis dans l'heure qui suit le soin.`,
        },
      },
      {
        '@type': 'Question',
        name: `Quels problemes peut traiter le magnetiseur a ${city.name} ?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Jean-Francois traite notamment : ${city.specificConditions.join(', ')}. Il est egalement specialiste pour couper le feu (brulures, zona) a distance.`,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CityPageClient city={city} />
    </>
  )
}
