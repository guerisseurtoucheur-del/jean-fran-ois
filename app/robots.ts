import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/mon-espace', '/admin'],
      },
    ],
    sitemap: 'https://www.jean-francois-magnetiseur-guerisseur.com/sitemap.xml',
  }
}
