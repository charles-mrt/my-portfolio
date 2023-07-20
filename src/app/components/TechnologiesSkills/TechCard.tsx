import { BarLevel } from "./BarLevel"

import Image from 'next/image'

interface CardProps {
  title: string;
  subTitle?: string;
  imageUrl: string;
  barLevel: number;
}


export const TechCard = ({ title, subTitle, imageUrl, barLevel }: CardProps) => {

  return (
    <div className="bg-zinc-900 w-50 h-auto rounded-md shadow-xl shadow-zinc-900 flex flex-col items-center justify-between gap-3 p-3
      hover:z-10
      hover:border-green-400 
      hover:rotate-2
      hover:scale-105 
      hover:shadow-custom 
      hover:shadow-green-400 
      transition-transform duration-400 ease-in-out 
      transform-gpu will-change-transform 
      will-change-box-shadow"
    >
      <header className="text-green-400 text-2xl leading-none uppercase tracking-[1px]">
        <strong>
          {title}
          <span className="text-zinc-50 text-xl">
            {subTitle}
          </span>
        </strong>


      </header>
      <div className="border-4 border-zinc-700 rounded-md p-4">
        <Image src={imageUrl} alt={`logo ${title}`} className="w-12 h-12" />
      </div>

      <footer className="text-zinc-400 text-xs uppercase tracking-[1px]">
        skill
        <BarLevel level={barLevel} />
      </footer>
    </div>

  )
}