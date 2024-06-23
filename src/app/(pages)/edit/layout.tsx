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
    <body className = "w-screen h-screen overflow-x-hidden">
      { children }
    </body >
  )
}