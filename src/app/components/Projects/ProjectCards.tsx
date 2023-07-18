
import Image from 'next/image'

import cssModuleTec from '/public/assets/technologies/cssmodule.svg';

import reactJsTec from '/public/assets/technologies/reactjs.svg';

import typescriptTec from '/public/assets/technologies/typescript.svg';

import walkProject from '/public/assets/projects/walk.jpg';

import { Button } from '../Button';

import {
  FileCode2,
  MonitorSmartphone

} from 'lucide-react';


export function ProjectCards() {
  return (
    <div className="
    
    max-lg:w-[350px] 
    max-lg:h-[500px]
    
    lg:w-[350px] 
    lg:h-[500px]

    2xl:w-[400px] 
    2xl:h-[650px]
    
    bg-zinc-900 border-2 border-zinc-700 rounded-[5px]
    position:block
    z-0
    hover:z-10
    hover:border-green-400 
    hover:scale-105 
    hover:shadow-custom 
    hover:shadow-green-400 
    transition-transform duration-200 ease-in-out 
    transform-gpu will-change-transform 
    will-change-box-shadow"
    >

      <header
        className="w-full h-1/2  overflow-hidden"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)' }}
      >

        <Image src={walkProject} alt="walk landing page" className="w-full object-cover" />
      </header>

      <div className="w-full  p-3 h-1/2 flex flex-col justify-between">

        <h3 className="text-base font-bold text-green-400 text-center uppercase leading-none">walk</h3>

        <p className="text-base text-zinc-100 font-normal tracking-[1px] text-center text-ellipsis overflow-hidden line-clamp-3">
          WALK é um projeto de landing page para venda de tênis.
          O foco da página é direcionar o usuário a aquisição do produto,
          através de uma página atraente, onde os modelos de tênis são exibidos em slide.
          Entre as transições dos modelos ocorre a alteração da cor de fundo baseado nas cores do tênis.
        </p>

        <div>
          <div className="flex gap-2 mb-1">
            <div className="w-10 h-10 p-1 border-[1px] rounded-[5px] border-zinc-700 flex items-center justify-center">
              <Image src={reactJsTec} alt="logo react" className="w-7 h-7" />
            </div>
            <div className="w-10 h-10 p-1 border-[1px] rounded-[5px] border-zinc-700 flex items-center justify-center">
              <Image src={cssModuleTec} alt="logo react" className="w-7 h-7" />
            </div>
            <div className="w-10 h-10 p-1 border-[1px] rounded-[5px] border-zinc-700 flex items-center justify-center">
              <Image src={typescriptTec} alt="logo react" className="w-7 h-7" />
            </div>
          </div>
          <span className="text-zinc-200">tecnologias utilizadas</span>
        </div>


        <footer className="flex gap-2 ">
          <Button
            link={""}
            title={"acessar app"}
            fontSize={"text-xs"}
            size={"w-60 h-14"}
            bgColor={"bg-transparent"}
            borderColor={"border-green-400 "}
            icon={<MonitorSmartphone />}
          />

          <Button
            link={""}
            title={" acessar código"}
            fontSize={"text-xs"}
            size={"w-60 h-14"}
            bgColor={"bg-transparent"}
            borderColor={"border-green-400 "}
            icon={<FileCode2 />}
          />
        </footer>

      </div>


    </div>
  )
}