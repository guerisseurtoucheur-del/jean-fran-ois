import type { Metadata } from 'next'
import './globals.css'
import ChatWrapper from '@/components/ChatWrapper'

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-white text-stone-900">
        {children}
        <ChatWrapper />
      </body>
    </html>
  )
}
