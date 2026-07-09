import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Espace Patient',
  robots: {
    index: false,
    follow: false,
  },
}

export default function EspacePatientLayout({ children }: { children: React.ReactNode }) {
  return children
}
