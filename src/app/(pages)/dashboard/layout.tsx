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
    <html lang="pt-br">
      <body className="w-screen min-h-screen overflow-x-hidden bg-zinc-950">
        {children}
      </body >
    </html>
  )
}