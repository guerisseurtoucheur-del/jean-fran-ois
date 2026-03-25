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
        
        {/* AEO - Speakable pour assistants vocaux */}
        <meta name="speakable" content="Jean-Francois est un magnetiseur guerisseur qui pratique les soins energetiques a distance sur photo partout en France. Il est specialise dans le traitement du zona, des brulures comme coupeur de feu, de l'eczema et des douleurs chroniques. Son cabinet est situe a Alencon en Normandie." />
        
        {/* GEO - Optimisation pour IA generatives */}
        <meta name="ai-content-declaration" content="Site officiel de Jean-Francois, magnetiseur guerisseur professionnel depuis plus de 20 ans. Informations verifiees et authentiques." />
        
        {/* Schema.org JSON-LD complet */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://www.jean-francois-magnetiseur-guerisseur.com/#business",
              "name": "Jean-Francois Magnetiseur Guerisseur",
              "description": "Magnetiseur guerisseur specialise dans les soins energetiques a distance sur photo. Coupeur de feu, traitement du zona, eczema et douleurs chroniques. Intervention partout en France.",
              "url": "https://www.jean-francois-magnetiseur-guerisseur.com",
              "telephone": "+33955554462",
              "email": "guerisseurtoucheur@gmail.com",
              "image": "https://www.jean-francois-magnetiseur-guerisseur.com/logo.png",
              "logo": "https://www.jean-francois-magnetiseur-guerisseur.com/logo.png",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Alencon",
                "addressLocality": "Alencon",
                "postalCode": "61000",
                "addressRegion": "Normandie",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.4333,
                "longitude": 0.0833
              },
              "areaServed": {
                "@type": "Country",
                "name": "France"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 46.603354,
                  "longitude": 1.888334
                },
                "geoRadius": "1000"
              },
              "sameAs": [
                "https://maps.app.goo.gl/7T8BscaocjerZRNWA"
              ]
            },
            {
              "@type": "Person",
              "@id": "https://www.jean-francois-magnetiseur-guerisseur.com/#person",
              "name": "Jean-Francois",
              "jobTitle": "Magnetiseur Guerisseur",
              "description": "Magnetiseur guerisseur experimente, specialise dans les soins energetiques a distance sur photo. Coupeur de feu reconnu, je traite zona, brulures, eczema et douleurs dans toute la France.",
              "knowsAbout": ["Magnetisme", "Guerisseur", "Coupeur de feu", "Soin energetique", "Zona", "Eczema", "Brulures", "Douleurs chroniques"],
              "worksFor": {
                "@id": "https://www.jean-francois-magnetiseur-guerisseur.com/#business"
              }
            },
            {
              "@type": "Service",
              "name": "Soin energetique a distance sur photo",
              "description": "Soin de magnetisme realise a distance grace a l'envoi d'une photo. Efficace pour zona, brulures, eczema, douleurs. Resultat souvent ressenti dans l'heure.",
              "provider": {
                "@id": "https://www.jean-francois-magnetiseur-guerisseur.com/#business"
              },
              "areaServed": "France",
              "serviceType": "Magnetisme a distance"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Comment fonctionne le soin a distance sur photo ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vous envoyez une photo recente de votre visage via le formulaire. Jean-Francois se connecte a votre energie et realise le soin. L'effet est souvent ressenti dans l'heure, quelle que soit la distance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Qu'est-ce qu'un coupeur de feu ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un coupeur de feu est un guerisseur capable de soulager instantanement la douleur des brulures par imposition des mains ou a distance. Jean-Francois pratique cette technique reconnue meme dans certains hopitaux."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Le magnetisme peut-il soulager un zona ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, le magnetisme est particulierement efficace sur le zona. Jean-Francois traite de nombreux cas de zona a distance avec des resultats rapides sur la douleur et l'evolution des lesions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Combien coute un soin energetique a distance ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jean-Francois pratique le don libre. Vous donnez selon vos moyens et votre satisfaction apres le soin via PayPal."
                  }
                }
              ]
            },
            {
              "@type": "WebSite",
              "url": "https://www.jean-francois-magnetiseur-guerisseur.com",
              "name": "Jean-Francois Magnetiseur Guerisseur",
              "description": "Site officiel du magnetiseur guerisseur Jean-Francois. Soins energetiques a distance sur photo partout en France.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.jean-francois-magnetiseur-guerisseur.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "VideoObject",
              "@id": "https://www.jean-francois-magnetiseur-guerisseur.com/#video",
              "name": "Jean-Francois Magnetiseur Guerisseur - Presentation",
              "description": "Decouvrez Jean-Francois, magnetiseur guerisseur specialise dans les soins energetiques a distance sur photo. Coupeur de feu, traitement du zona, eczema et douleurs chroniques partout en France.",
              "thumbnailUrl": "https://www.jean-francois-magnetiseur-guerisseur.com/logo.png",
              "uploadDate": "2024-01-01",
              "contentUrl": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean-francois-magnetiseur-guerisseur_video-NLOPDOs77bOl491U2cfIJSUXAeijtj.MP4",
              "embedUrl": "https://www.jean-francois-magnetiseur-guerisseur.com/presentation",
              "duration": "PT30S",
              "publisher": {
                "@type": "Organization",
                "name": "Jean-Francois Magnetiseur Guerisseur",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.jean-francois-magnetiseur-guerisseur.com/logo.png"
                }
              }
            }
          ]
        })}} />
      </head>
      <body className="bg-white text-stone-900">
        {children}
        <ChatWrapper />
      </body>
    </html>
  )
}
