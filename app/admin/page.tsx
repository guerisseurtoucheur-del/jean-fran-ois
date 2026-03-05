import type { Metadata } from 'next'
import SiteShell from '../components/SiteShell'
import AdminDashboardClient from './AdminDashboardClient'

export const metadata: Metadata = {
  title: 'Gestion des Soins | Acces Prive',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return (
    <SiteShell>
      <div className="pt-32 md:pt-40 pb-12">
        <AdminDashboardClient />
      </div>
    </SiteShell>
  )
}
