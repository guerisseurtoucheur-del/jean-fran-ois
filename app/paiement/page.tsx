'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PaiementPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/demande-soin')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-stone-500">Redirection en cours...</p>
    </div>
  )
}
