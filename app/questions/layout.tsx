import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Questions Fréquentes sur le Magnétisme à Distance | Jean-François',
  description: "Toutes vos questions sur le magnétisme à distance : comment ça marche, quels problèmes sont traités, prix d'une séance, envoi de la photo. Les réponses de Jean-François, magnétiseur guérisseur.",
  keywords: ['questions magnétisme', 'faq magnétiseur', 'magnétisme à distance questions', 'prix séance magnétiseur', 'comment fonctionne magnétisme'],
  alternates: {
    canonical: 'https://www.jean-francois-magnetiseur-guerisseur.com/questions',
  },
  openGraph: {
    title: 'Questions Fréquentes sur le Magnétisme à Distance | Jean-François',
    description: "Toutes vos questions sur le magnétisme à distance : fonctionnement, problèmes traités, prix, envoi de la photo.",
    url: 'https://www.jean-francois-magnetiseur-guerisseur.com/questions',
    type: 'website',
  },
}

export default function QuestionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
