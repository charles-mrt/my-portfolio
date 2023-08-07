
import Image from 'next/image'
import avatar from '/public/assets/avatar.png';

import { SectionTitle } from '../../SectionTitle';
import { ScrollDownIndicator } from '../../ScrollDownIndicator';

import { WaveDivider } from '../../WaveDivider';

export const Section = () => {

  return (

    <section
      className="bg-zinc-900 relative h-screen max-h-[1080px]  flex flex-end justify-center sm-device:mt-10 laptop:bg-section-1 laptop:bg-no-repeat laptop:bg-cover laptop:bg-center laptop:bg-fixed"
    >

      <div className="
      h-full 
      w-full 
      max-w-7xl  
      grid 
      grid-cols-1 
      items-center 
      justify-items-center 
      relative 
      overflow-hidden
      laptop:grid-cols-2
      ">

        {/* left */}
        <div className="flex flex-col gap-2 items-center">

          <div className="text-zinc-50 flex flex-col gap-2 items-center">

            <h1 className="font-semibold uppercase text-base text-center sm:text-xl">
              <span className="text-xl sm:text-2xl">olá</span>,
              seja bem vindo ao meu portfólio
            </h1>

            <div className="w-44 h-44 my-5 overflow-hidden rounded-full border-2 border-green-400 bg-zinc-500 laptop:hidden">
              <Image
                src={avatar}
                alt="imagem do Charles"
              />
            </div>

            <p className="text-xl font-semibold tracking-[1px] text-center sm:text-2xl">
              Me chamo
              <strong className="capitalize"> charles martins </strong>
              sou,
            </p>

            <SectionTitle titleName1="front End," titleName2="Developer" fontSize="sm:text-6xl" />
            <ScrollDownIndicator idName="about-me" />
          </div>
        </div>

        {/* right */}
        <div className="hidden laptop:flex items-end max-w-md h-full">
          <Image
            id="teste"
            src={avatar}
            alt="imagem do Charles"
          />
        </div>
      </div>

      <div className="hidden  laptop:block laptop:absolute laptop:z-40 laptop:bottom-0 laptop:w-full">
        <WaveDivider bgTextColor="text-zinc-800" />
      </div>

    </section>
  )
}