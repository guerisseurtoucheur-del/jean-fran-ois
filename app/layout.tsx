import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jean-Francois | Magnetiseur Guerisseur a Distance sur Photo - France Entiere',
  description: 'Soin energetique a distance par Jean-Francois, magnetiseur expert. Action immediate sur photo partout en France pour zona, eczema, brulures et douleurs. Cabinet a Alencon.',
  keywords: 'magnetiseur a distance, guerisseur sur photo, soin energetique france, coupeur de feu a distance, magnetisme zona photo, jean-francois magnetiseur, magnetiseur alencon, guerisseur normandie',
  authors: [{ name: 'Jean-Francois - Magnetiseur Guerisseur' }],
  openGraph: {
    type: 'website',
    url: 'https://www.jean-francois-magnetiseur-guerisseur.com/',
    title: 'Jean-Francois | Magnetiseur Guerisseur a Distance - France Entiere',
    description: 'Soin energetique a distance par Jean-Francois, magnetiseur expert. Action immediate sur photo partout en France pour zona, eczema, brulures et douleurs.',
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'],
    locale: 'fr_FR',
    siteName: 'Jean-Francois Magnetiseur',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jean-Francois | Magnetiseur Guerisseur a Distance',
    description: 'Soin energetique sur photo partout en France. Zona, eczema, brulures, douleurs. Action immediate par magnetiseur expert.',
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/',
  },
  other: {
    'geo.region': 'FR-NOR',
    'geo.placename': 'Alencon',
    'geo.position': '48.4333;0.0833',
    'ICBM': '48.4333, 0.0833',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><radialGradient id='g' cx='50%25' cy='50%25' r='50%25'><stop offset='0%25' stop-color='%236366f1'/><stop offset='100%25' stop-color='%234338ca'/></radialGradient></defs><rect width='100' height='100' rx='22' fill='url(%23g)'/><path d='M25 50 Q50 20 75 50 T110 50' stroke='white' fill='none' stroke-width='6' stroke-linecap='round' opacity='0.9'/><path d='M15 65 Q50 35 85 65' stroke='white' fill='none' stroke-width='4' stroke-linecap='round' opacity='0.6'/><circle cx='50' cy='50' r='12' fill='white' opacity='0.3'/></svg>" />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body className="bg-white text-stone-900">
        {children}
      </body>
    </html>
  )
}
