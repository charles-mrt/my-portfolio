import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'criar',
    template: '%s | criar novo projeto'
  },
  description: 'criar novo projeto',
}

export default function EditProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="w-screen h-screen overflow-x-hidden">
        {children}
      </body >
    </html>
  )
}