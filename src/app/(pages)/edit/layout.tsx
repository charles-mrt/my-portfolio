import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'editar',
    template: '%s | editar projeto'
  },
  description: 'editar projeto',
}

export default function EditProjectLayout({
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