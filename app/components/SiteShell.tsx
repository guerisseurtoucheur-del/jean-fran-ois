'use client'

import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import MobileBottomNav from './MobileBottomNav'
import FloatingChat from './FloatingChat'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 transition-all duration-500">
        {children}
      </main>
      <SiteFooter />
      <MobileBottomNav />
      <FloatingChat />
    </div>
  )
}
