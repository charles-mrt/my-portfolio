import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ 
  subsets: ['latin'],  
  variable:'--font-nunito'
 })

export const metadata = {
  title: 'Charles Portfólio',
  description: 'Bem-vindo ao meu portfólio de desenvolvimento front-end! Aqui você encontrará uma coleção dos meus projetos e trabalhos recentes, demonstrando minhas habilidades e paixão pela criação de experiências web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={
         `${nunito.variable} font-sans bg-transparent bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen`
        }
        style={{ backgroundImage: "url('/assets/background.jpg')" }}
      >
          {children}
      </body>
    </html>
  )
}
