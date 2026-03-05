import type { Metadata } from 'next'
import SiteShell from '../components/SiteShell'
import ChatRoomClient from './ChatRoomClient'

export const metadata: Metadata = {
  title: 'Assistant Energetique IA',
  description: 'Posez vos questions sur le magnetisme et l\'energie a Jean-Francois. Assistant intelligent base sur Google Gemini pour repondre a toutes vos questions sur les soins a distance.',
  alternates: {
    canonical: '/assistant',
  },
  openGraph: {
    title: 'Assistant Energetique IA | Jean-Francois Magnetiseur',
    description: 'Posez vos questions sur le magnetisme, les soins a distance et l\'energie. Reponses personnalisees par IA.',
  },
}

export default function AssistantPage() {
  return (
    <SiteShell>
      <div className="pt-32 md:pt-40 pb-12">
        <ChatRoomClient />
      </div>
    </SiteShell>
  )
}
