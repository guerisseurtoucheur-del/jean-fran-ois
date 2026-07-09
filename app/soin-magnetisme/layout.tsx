import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soin de Magnétisme à Distance sur Photo | Comment ça marche ?',
  description: "Découvrez le soin de magnétisme à distance sur photo avec Jean-François. Zona, brûlures, eczéma, douleurs, stress... Un soin énergétique naturel, où que vous soyez en France.",
  keywords: ['soin magnétisme', 'magnétiseur à distance photo', 'soin énergétique distance', 'séance magnétisme', 'magnétiseur sur photo'],
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/soin-magnetisme',
  },
  openGraph: {
    title: 'Soin de Magnétisme à Distance sur Photo | Comment ça marche ?',
    description: "Le soin de magnétisme à distance sur photo avec Jean-François : un soin énergétique naturel pour zona, brûlures, eczéma, douleurs et stress.",
    url: 'https://www.jean-francois-magnetiseur-guerisseur.com/soin-magnetisme',
    type: 'website',
  },
}

export default function SoinMagnetismeLayout({ children }: { children: React.ReactNode }) {
  return children
}
