
"use client"

import {
  MessagesSquare,
  FileCode2,
  ChevronUp,
  ChevronRight,
} from 'lucide-react';

import htmlTec from '/public/assets/technologies/html.svg';
import cssTec from '/public/assets/technologies/css.svg';
import tailwindTec from '/public/assets/technologies/tailwind.svg';
import nextJsTec from '/public/assets/technologies/nextjs.svg';

import wordpressTec from '/public/assets/technologies/wordpress.svg';
import figmaTec from '/public/assets/technologies/figma.svg';

import reactJsTec from '/public/assets/technologies/reactjs.svg';
import typescriptTec from '/public/assets/technologies/typescript.svg';
import javascriptTec from '/public/assets/technologies/javascript.svg';

import { ScrollDownIndicator } from '../../ScrollDownIndicator';

import { TechCard } from '../../TechnologiesSkills/TechCard';
import { SectionTitle } from '../../SectionTitle';
import { Button } from '../../Button';

import { Modal } from '../../Modal';
import { useModal } from '../../../hooks/useModal';
import { useState } from 'react';

export const Section = () => {

  const { showModal, openModal, closeModal } = useModal();
  const [isToogle, setIsToogle] = useState(Boolean);

  const handleToogle = () => {
    setIsToogle(!isToogle)
  }


  return (
    <section
      id="about-me"
      className="w-full h-full  flex justify-center py-10"
    >

      <div className=" h-full w-full max-w-7xl  px-4 grid grid-cols-1 gap-8 laptop:grid-cols-2">
        {/* left */}
        <div className="w-full flex flex-col gap-4 items-center mb-6 laptop:mb-0 lg:items-start">
          <header>
            <SectionTitle titleName1="sobre" titleName2="mim." />
          </header>

          <div className={` ${!isToogle ? 'text-clip overflow-hidden transition-about-close ' : 'overflow-clip transition-about-open '
            } font-normal text-lg text-center tracking-[1px] text-zinc-50 laptop:text-left indent-8`}>

            <p>Iniciei minha jornada na programação guiado pela curiosidade de compreender o funcionamento por trás das interfaces de computadores. Desde então, tenho dedicado tempo e esforço ao aprimoramento das minhas habilidades em desenvolvimento de software.</p>
            <p>Embora já tenha trabalhado com tecnologias backend, como Java EE, minha atenção atual está focada principalmente no desenvolvimento frontend.</p>
            <p>Minha abordagem no desenvolvimento web está centrada na usabilidade, no design e na performance. Meu objetivo é criar interfaces amigáveis e acessíveis, proporcionando uma excelente experiência ao usuário em diversos dispositivos.</p>
            <p>Estou constantemente em busca de novos desafios e oportunidades para ampliar meu conhecimento e habilidades como desenvolvedor frontend. Minha paixão pela programação e meu compromisso com a aprendizagem contínua me motivam a criar soluções web eficazes e inovadoras.</p>
            <p>Além disso, tenho um genuíno interesse em compartilhar conhecimento com a comunidade. Planejo criar conteúdo educativo, como vídeo aulas, para ajudar outros aspirantes a desenvolvedores a aprimorar suas habilidades e crescer na área.</p>

          </div>
          
          <button
            className="text-green-400"
            onClick={() => handleToogle()}
          >

            {!isToogle ? (
              <span className="transition-about-close flex items-center gap-1">
                <ChevronRight />
                continuar lendo...
              </span>
            ) : (
              <span className="transition-about-open flex items-center gap-1">
                <ChevronUp />
                recuar!
              </span>
            )}

          </button>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              link="#contato"
              title="contato"
              fontSize="text-base"
              size="w-52 h-16"
              bgColor="bg-green-400"
              borderColor="border-green-400"
              icon={<MessagesSquare />}
              onClickHandle={openModal}
            />
            <Button
              link="#project"
              title="projetos"
              fontSize="text-base"
              size="w-52 h-16"
              bgColor="bg-zinc-700"
              borderColor="border-zinc-700"
              icon={<FileCode2 />}
            />
          </div>
          {showModal && <Modal display="fixed" onClose={closeModal} />}

          <div className="hidden m-auto laptop:block">
            < ScrollDownIndicator idName="project" />
          </div>

        </div>

        {/* right */}
        <div className="w-full flex flex-col gap-4 text-center">

          <header>
            <SectionTitle titleName1="tecnologias que" titleName2="utilizo." />
          </header>

          {/* cards */}
          <div className="grid grid-cols-2 gap-3 mx-auto sm:grid-cols-3 sm:gap-5">

            <TechCard title="html" imageUrl={htmlTec} barLevel={9} />
            <TechCard title="css" imageUrl={cssTec} barLevel={9} />
            <TechCard title="tailwind" imageUrl={tailwindTec} barLevel={5} />
            <TechCard title="javascript" imageUrl={javascriptTec} barLevel={8} />
            <TechCard title="react" subTitle=".js" imageUrl={reactJsTec} barLevel={5} />
            <TechCard title="next" subTitle=".js" imageUrl={nextJsTec} barLevel={5} />
            <TechCard title="typescript" imageUrl={typescriptTec} barLevel={5} />
            <TechCard title="wordpress" imageUrl={wordpressTec} barLevel={8} />
            <TechCard title="figma" imageUrl={figmaTec} barLevel={7} />
          </div>

        </div>

      </div>

    </section>
  )
}