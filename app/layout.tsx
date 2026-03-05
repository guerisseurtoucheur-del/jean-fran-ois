import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jean-francois-magnetiseur-guerisseur.com'),
  title: {
    default: 'Jean-Francois | Magnetiseur Guerisseur a Distance sur Photo - France Entiere',
    template: '%s | Jean-Francois Magnetiseur',
  },
  description: 'Soin energetique a distance par Jean-Francois, magnetiseur expert. Action immediate sur photo partout en France pour zona, eczema, brulures et douleurs. Cabinet a Alencon.',
  keywords: ['magnetiseur a distance', 'guerisseur sur photo', 'soin energetique france', 'coupeur de feu a distance', 'magnetisme zona photo', 'jean-francois magnetiseur', 'magnetiseur alencon'],
  authors: [{ name: 'Jean-Francois Magnetiseur Guerisseur' }],
  creator: 'Jean-Francois',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.jean-francois-magnetiseur-guerisseur.com',
    siteName: 'Jean-Francois Magnetiseur Guerisseur',
    title: 'Jean-Francois | Magnetiseur Guerisseur a Distance sur Photo',
    description: 'Magnetiseur expert a Alencon. Soins energetiques sur photo a distance pour zona, eczema, brulures partout en France.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Jean-Francois Magnetiseur - Energie a distance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jean-Francois | Magnetiseur Guerisseur a Distance',
    description: 'Soins energetiques sur photo a distance partout en France. Magnetiseur expert a Alencon.',
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'],
  },
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Jean-Francois" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jean-Francois - Magnetiseur Guerisseur",
              "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
              "url": "https://www.jean-francois-magnetiseur-guerisseur.com",
              "telephone": "+33955554462",
              "description": "Expert en magnetisme et soins energetiques sur photo a distance dans toute la France. Specialiste zona, eczema et douleurs chroniques.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Centre ville",
                "addressLocality": "Alencon",
                "postalCode": "61000",
                "addressRegion": "Normandie",
                "addressCountry": "FR"
              },
              "areaServed": {
                "@type": "Country",
                "name": "France"
              },
              "priceRange": "Don libre",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "20:00"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
