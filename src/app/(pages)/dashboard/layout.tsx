import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'dashboard',
    template: '%s | gerenciar projetos'
  },
  description: 'gerenciar projetos',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className = "w-screen h-screen overflow-x-hidden">
      { children }
    </body >
  )
}