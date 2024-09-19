
import Image from 'next/image'
import avatar from '/public/assets/avatar.webp'

import { SectionTitle } from '../../SectionTitle'
import { ScrollDownIndicator } from '../../ScrollDownIndicator'

import { WaveDivider } from '../../WaveDivider'

export const Section = () => {

  return (

    <section
      className="bg-zinc-900 relative h-screen max-h-[1080px]  flex flex-end justify-center sm-device:mt-10 laptop:bg-section-1 laptop:bg-no-repeat laptop:bg-cover laptop:bg-center laptop:bg-fixed"
    >

      <div className="h-full w-full max-w-7xl  grid grid-cols-1 items-center justify-items-center relative overflow-hidden laptop:grid-cols-2
      ">

        {/* left */}
        <div className="flex flex-col gap-2 items-center">

          <div className="text-zinc-50 flex flex-col gap-2 items-center">

            <h1 className="font-semibold uppercase text-base text-center sm:text-xl">
              <span className="text-xl sm:text-2xl">olá</span>,
              seja bem vindo ao meu portfólio
            </h1>
          
            <div className="relative laptop:hidden w-44 h-44 my-5">
              <div className="absolute z-10 inset-0 m-auto rounded-full w-40 h-40 border-r-4 border-b-4 border-dotted border-green-400 animate-spinClockwise" />
              <div className="absolute -z-0 inset-0 m-auto rounded-full w-36 h-36 bg-gradient-to-r from-zinc-900 via-violet-700 to-green-500 animate-spinCounterclockwise" />
              <div className="absolute z-20 inset-0 m-auto rounded-full w-44 h-44 border-r-4 border-b-4 border-dotted border-zinc-400 animate-spinCounterclockwise" />
              <Image
                className="absolute z-10 inset-0 m-auto rounded-full w-44 h-44 border-b-2 border-purple-600 "
                src={avatar}
                alt="imagem do Charles"
              />
            </div>

            <p className="text-xl font-semibold tracking-[1px] text-center sm:text-2xl">
              Me chamo
              <strong className="capitalize"> charles martins </strong>
              sou,
            </p>

            <SectionTitle titleName1="front End," titleName2="Developer" fontSize="sm:text-4xl xl:text-5xl 2xl:text-6xl" />
            <ScrollDownIndicator idName="about-me" />
          </div>
        </div>

        {/* right */}        
        <div className="relative  hidden laptop:block h-[600px] w-[600px]">
          <div className="absolute z-10 inset-0 m-auto rounded-full h-[520px] w-[520px] border-r-4 border-b-4 border-dotted border-green-400 animate-spinClockwise" />
          <div className="absolute -z-0 inset-0 m-auto rounded-full h-[460px] w-[460px] bg-gradient-to-r from-zinc-900 via-violet-700 to-green-500 animate-spinCounterclockwise" />
          <div className="absolute z-20 inset-0 m-auto rounded-full h-[580px] w-[580px] border-r-4 border-b-4 border-dotted border-zinc-400 animate-spinCounterclockwise" />
          <Image
            className="absolute z-0 inset-0 m-auto rounded-full h-[520px] w-[520px] border-b-2 border-purple-600"
            src={avatar}
            alt="imagem do Charles"
            priority={true} 
          />
        </div>
      </div>

      <div className="hidden laptop:block laptop:absolute laptop:z-40 laptop:bottom-0 laptop:w-full">
        <WaveDivider bgTextColor="text-zinc-800" />
      </div>

    </section>
  )
}