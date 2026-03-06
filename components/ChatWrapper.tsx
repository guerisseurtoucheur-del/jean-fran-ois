'use client'

import FloatingChat from './FloatingChat'
import { useRouter } from 'next/navigation'

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
