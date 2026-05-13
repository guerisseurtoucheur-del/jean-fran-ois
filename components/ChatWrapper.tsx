'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

// Chargement dynamique du chatbot pour ameliorer les performances
const FloatingChat = dynamic(() => import('./FloatingChat'), {
  ssr: false,
  loading: () => null
})

export default function ChatWrapper() {
  const router = useRouter()
  
  const handleNavigate = (tab: string) => {
    if (tab === 'home') {
      router.push('/')
    } else if (tab === 'healing') {
      router.push('/demande-soin')
    } else {
      router.push(`/${tab}`)
    }
  }
  
  return <FloatingChat onNavigate={handleNavigate} />
}
