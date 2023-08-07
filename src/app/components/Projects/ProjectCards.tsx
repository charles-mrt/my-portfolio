
import Image from 'next/image'

import { Button } from '../Button';

import {
  FileCode2,
  MonitorSmartphone
} from 'lucide-react';


interface projectCardsProps {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
  technologiesListImage: string[];
}

export const ProjectCards = ({ imageUrl, alt, title, technologiesListImage, description }: projectCardsProps) => {
  return (
  <div className="h-[31.2rem] w-80 sm-device:w-72 sm:w-[19rem] md:w-[22rem] lg:w-[19.5rem] xl:w-96 2xl:h-[40.6rem] 
    bg-zinc-900 border-2 border-zinc-700 rounded-[5px]
    position:block
    z-0
    hover:z-10
    hover:border-green-400 
    hover:scale-105 
    hover:shadow-custom 
    hover:shadow-green-400 
    transition-transform duration-200 ease-linear
    transform-gpu will-change-transform 
    will-change-box-shadow"
    >
      <header
        className="w-full h-1/2  overflow-hidden"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)' }}
      >
        <Image src={imageUrl} width={500} height={500} alt={alt} className="w-full object-cover" />
      </header>

      <div className="w-full  p-3 h-1/2 flex flex-col justify-between">

        <h3 className="text-base font-bold text-green-400 text-center uppercase leading-none">
          {title}
        </h3>

        <p className="text-base text-zinc-100 font-normal tracking-[1px] text-center text-ellipsis overflow-hidden line-clamp-3">
          {description}
        </p>

        <div className="flex flex-col items-center laptop:items-start ">
          <div className="flex gap-2 mb-1">

            {technologiesListImage.map((techImageUrl, index) => (
              <div key={index} className="w-10 h-10 p-1 border-[1px] rounded-[5px] border-zinc-700 flex items-center justify-center">
                <Image
                  src={techImageUrl}
                  alt="logo"
                  className="w-7 h-7"
                />
              </div>
            ))}

          </div>

          <span className="text-zinc-200">tecnologias utilizadas</span>
        </div>


        <footer className="flex gap-2 ">
          <Button
            link=""
            title="acessar app"
            fontSize="text-xs"
            size="w-60 h-14"
            bgColor="bg-transparent"
            borderColor="border-green-400 "
            icon={<MonitorSmartphone />}
          />

          <Button
            link=""
            title="acessar código"
            fontSize="text-xs"
            size="w-60 h-14"
            bgColor="bg-transparent"
            borderColor="border-green-400 "
            icon={<FileCode2 />}
          />
        </footer>

      </div>


    </div>
  )
}