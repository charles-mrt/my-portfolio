
import Image from 'next/image'
import avatar from '/public/assets/avatar.png';

import { SectionTitle } from '../../SectionTitle';
import { ScrollDownIndicator } from '../../ScrollDownIndicator';

export const Section = () => {
  return (
    <section
      className="bg-cover bg-center h-screen max-h-[1080px] flex flex-end justify-center"
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
        <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className="shape-fill fill-current text-zinc-800" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

    </section>
  )
}