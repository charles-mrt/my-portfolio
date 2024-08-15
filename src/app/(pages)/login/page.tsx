'use client'
import Image from 'next/image'
import Link from 'next/link'
import google_plus from '/public/assets/google-plus.svg'
import avatar from '/public/assets/avatar.webp'


import { useSearchParams } from 'next/navigation'
export default function Login() {

  const loginAPIurl = process.env.API_URL_LOGIN

  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const errorMessage = error === 'authentication_failed'
    ? 'Não foi possível realizar o login. Verifique suas credenciais e tente novamente.'
    : ''

  return (
    <section className="flex justify-center items-center w-full h-full p-10">

      <div className={`relative bg-zinc-950  w-96 h-80 rounded-md border ${errorMessage ? 'border-red-500 shadow-red-500' : 'border-green-400 shadow-green-400'} border-t-0  shadow-custom  text-zinc-300 p-6 `}>
       
        <div className="absolute z-0 top-0 left-0 right-0 m-auto w-44 h-20 bg-zinc-950"/>
          <div className="absolute top-0 left-0 right-0 m-auto -translate-y-2/3  w-44 h-44 my-5 ">
            <div className="absolute z-10 inset-0 m-auto rounded-full w-36 h-36 border-r-4 border-b-4 border-dotted border-green-400 animate-spinClockwise" />
            <div className="absolute -z-0 inset-0 m-auto rounded-full w-32 h-32 bg-gradient-to-r from-zinc-900 via-violet-700 to-green-500 animate-spinCounterclockwise" />
            <div className="absolute z-20 inset-0 m-auto rounded-full w-40 h-40 border-r-4 border-b-4 border-dotted border-zinc-400 animate-spinCounterclockwise" />
            <Image
              className="absolute z-10 inset-0 m-auto rounded-full w-36 h-36 border-b-2 border-purple-600"
              src={avatar}
              alt="imagem do Charles"
            />
          </div>
        {/* </div> */}

        <div className="mt-14 text-center flex flex-col items-center gap-6">
          <h1 className="font-bold">Bem vindo ao portfolio de Charles Martins</h1>
          <span>Realize seu login</span>

          <Link
            href={loginAPIurl!}
            className="max-w-max flex items-center gap-2 rounded-full bg-zinc-500 px-4 py-2 font-semibold text-base hover:opacity-90 transition-opacity"
          >
            <Image src={google_plus} alt="google plus icon" width={30} height={30} />
            Login com Google
          </Link>
        </div>
        {errorMessage && <p className="text-red-500 mt-5 text-center">{errorMessage}</p>}
      </div>
    </section>
  )
}