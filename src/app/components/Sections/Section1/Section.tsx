
import Image from 'next/image'
import avatar from '/public/assets/avatar.png';

import { SectionTitle } from '../../SectionTitle';
import { ScrollDownIndicator } from '../../ScrollDownIndicator';

import { WaveDivider } from '../../WaveDivider';

export const Section = () => {
  return (
    <section
      className="relative bg-no-repeat bg-cover bg-center bg-fixed h-screen max-h-[1080px] flex flex-end justify-center"
      style={{ backgroundImage: "url('/assets/bg-section-1.jpg')" }}
    >
      <div className="h-full w-full max-w-7xl  grid grid-cols-2 items-center justify-items-center relative overflow-hidden">

        {/* left */}
        <div className="flex flex-col gap-2 items-center">

          <div className="text-zinc-50 flex flex-col gap-2 items-center">

            <h1 className="font-semibold uppercase text-base">
              <span className="text-xl">olá</span>,
              seja bem vindo ao meu portfólio
            </h1>

            <p className="text-xl font-semibold tracking-[1px]">
              Me chamo
              <strong className="capitalize"> charles martins </strong>
              sou,
            </p>

            <SectionTitle titleName1="front End," titleName2="Developer" />
            <ScrollDownIndicator />
          </div>
        </div>

        {/* right */}
        <div className="max-w-md h-full flex items-end">
          <Image
            id="teste"
            src={avatar}
            alt="imagem do Charles"
          />
        </div>
      </div>

      <div className="absolute z-40 bottom-0 w-full">      
        <WaveDivider bgTextColor="text-zinc-800" />
      </div>
    
    </section>
  )
}