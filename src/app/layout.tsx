import './globals.css'
import { Nunito } from 'next/font/google'
import Head from './head'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito'
})

export const metadata = {
  title: {
    default: 'Charles Portfólio',
    template: '%s | Charles Martins'
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'Bem-vindo ao meu portfólio de desenvolvimento front-end! Aqui você encontrará uma coleção dos meus projetos e trabalhos recentes, demonstrando minhas habilidades e paixão pela criação de experiências web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head />
      <body
        className={
          `${nunito.variable}
          font-sans
          bg-zinc-800
          laptop:bg-background            
          laptop:bg-no-repeat 
          laptop:bg-cover 
          laptop:bg-center 
          laptop:bg-fixed 
          w-full 
          h-screen`
        }
       
      >
        {children}
      </body>
    </html>
  )
}
