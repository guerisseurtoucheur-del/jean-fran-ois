import React from 'react'
import { notFound } from 'next/navigation'
import { newCities } from '@/data/newCities'
import PremiumCityLanding from '@/components/PremiumCityLanding'
import type { Metadata } from 'next'

// This helps Next.js pre-render all 20 cities at build time for max SEO and performance
export async function generateStaticParams() {
  return newCities.map((city) => ({
    slug: city.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const city = newCities.find(c => c.slug === slug)

  if (!city) {
    return {}
  }

  return {
    title: city.seoTitle || `Magnétiseur ${city.nom} (${city.departement}) - Jean-François Guérisseur`,
    description: `Découvrez les soins énergétiques de Jean-François à ${city.nom}. Magnétiseur guérisseur et coupeur de feu avec plus de 20 ans d'expérience. Soins à distance très efficaces.`,
    alternates: {
      canonical: `https://www.jean-francois-magnetiseur-guerisseur.com/${slug}`,
    }
  }
}

export default async function DynamicCityPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Find the city in our database
  const city = newCities.find(c => c.slug === slug)

  // If the slug doesn't match any of our new cities, we return a 404.
  // This ensures we don't accidentally intercept invalid URLs.
  if (!city) {
    notFound()
  }

  return <PremiumCityLanding city={city} />
}
