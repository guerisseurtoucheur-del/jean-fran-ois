import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Qui est Jean-François ? Magnétiseur Guérisseur depuis plus de 20 ans',
  description: "Découvrez le parcours de Jean-François, magnétiseur guérisseur et toucheur dans l'Orne. Plus de 20 ans d'expérience au service du soulagement par le magnétisme, à distance sur photo.",
  keywords: ['jean-françois magnétiseur', 'qui est jean-françois guérisseur', 'magnétiseur orne parcours', 'guérisseur toucheur normandie', 'don magnétisme'],
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/qui-suis-je',
  },
  openGraph: {
    title: 'Qui est Jean-François ? Magnétiseur Guérisseur depuis plus de 20 ans',
    description: "Découvrez le parcours de Jean-François, magnétiseur guérisseur et toucheur dans l'Orne, au service du soulagement par le magnétisme.",
    url: 'https://www.jean-francois-magnetiseur-guerisseur.com/qui-suis-je',
    type: 'profile',
  },
}

export default function QuiSuisJeLayout({ children }: { children: React.ReactNode }) {
  return children
}
