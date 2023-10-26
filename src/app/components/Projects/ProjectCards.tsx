
import Image, { StaticImageData } from 'next/image'

import { Button } from '../Button';

import {
  FileCode2,
  IterationCcw,
  MonitorSmartphone
} from 'lucide-react';

import { useState } from 'react';

interface projectCardsProps {
  imageUrl: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
  tec_description?: string;
  technologiesListImage: string[];
  project_url: string;
  github_url: string;
  category: string[];
}

export const ProjectCards = ({ imageUrl, alt, title, technologiesListImage, description, tec_description, project_url, github_url, category }: projectCardsProps) => {

  let imageUrlString = "";

  if (typeof imageUrl === 'string') {
    imageUrlString = imageUrl;
  } else if (typeof imageUrl === 'object') {
    imageUrlString = imageUrl.src;
  }

  const isJpg = imageUrlString.toLowerCase().endsWith('.jpg') || imageUrlString.toLowerCase().endsWith('.jpeg');
  const isGif = imageUrlString.toLowerCase().endsWith('.gif');

  const [readMore, isReadMore] = useState(false)

  const handleReaMoreButton = (isActived: boolean) => {
    isReadMore(isActived)
  }

  return (

    <div className="custom-fade-animation h-[40rem] w-80 sm-device:w-72 sm:w-[19rem] md:w-[22rem] lg:w-[19.5rem] xl:w-96 2xl:h-[40.6rem] 
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
      data-category={category}
      id={`${readMore ? "flip-card" : ""}`}
    >
      {!readMore ? (
        <>
          <header className="w-full h-[40%]  overflow-hidden flex items-center bg-zinc-800">

            {isJpg && (
              <Image src={imageUrl} alt={alt} className="w-full h-full object-cover" />
            )}
            {isGif && (
              <img src={imageUrl as string} alt={alt} className="w-full h-full object-cover" />
            )}

          </header>

          <div className="w-full h-[60%] p-3 flex flex-col justify-between">

            <h3 className="text-base font-bold text-green-400 text-center uppercase leading-none">
              {title}
            </h3>

            <p className="text-base text-zinc-100 font-normal tracking-[1px] text-center text-ellipsis overflow-hidden line-clamp-3">
              {description}
            </p>

            <a
              className="uppercase text-zinc-100 font-semibold text-right cursor-pointer italic hover:text-green-500"
              onClick={() => handleReaMoreButton(true)}
            >
              ler mais
            </a>

            <div className="flex flex-col items-centerlaptop:items-start">
              <div className="flex flex-wrap gap-2 mb-1">

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
                link={project_url}
                title="acessar app"
                fontSize="text-xs"
                size="w-60 h-14"
                bgColor="bg-transparent"
                borderColor="border-green-400"
                icon={<MonitorSmartphone />}
                openNewTab={true}
              />

              <Button
                link={github_url}
                title="acessar código"
                fontSize="text-xs"
                size="w-60 h-14"
                bgColor="bg-transparent"
                borderColor="border-green-400 "
                icon={<FileCode2 />}
                openNewTab={true}
              />
            </footer>

          </div>
        </>

      ) : (

        <div id="flip-card" className="p-10  h-full flex flex-col items-center gap-8 overflow-y-auto">

          <h4 className="text-base font-bold text-green-400 text-center uppercase leading-none">
            {title}
          </h4>

          <p className="text-base text-zinc-100 font-normal tracking-[1px] text-center">
            {description}
          </p>

          <div className="text-basetracking-[1px] text-center">
            <p className=" font-bold text-zinc-100">tecnologias utilizadas: </p>
            <span className="font-normal italic capitalize text-green-300">{tec_description}</span>
          </div>

          <div>
            <Button
              title='voltar'
              icon={<IterationCcw />}
              fontSize=''
              size="w-60 h-14"
              bgColor="bg-transparent"
              borderColor="border-green-400"
              onClickHandle={() => handleReaMoreButton(false)}
            />
          </div>

        </div>
      )}


    </div >
  )
}