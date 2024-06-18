import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'dashboard',
    template: '%s | gerenciar projetos'
  },
  description: 'gerenciar projetos',
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className = "w-screen h-screen bg-zinc-900 ">
      { children }
    </body >
  )
}