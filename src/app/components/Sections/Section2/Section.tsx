
"use client"

import {
  MessagesSquare,
  FileCode2,
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


export const Section = () => {

  const { showModal, openModal, closeModal } = useModal();

  return (
    <section
      id="about-me"
      className="w-full h-full  flex justify-center py-10"
    >

      {/* <div className="h-full w-full max-w-7xl grid grid-cols-2 items-start"> */}
      <div className="
      h-full 
      w-full 
      max-w-7xl 
      px-4
      grid 
      grid-cols-1
      gap-8 
      
     
      laptop:grid-cols-2
      "
      >
        {/* left */}
        <div className="w-full flex flex-col gap-4 items-center lg:items-start">
          <header>
            <SectionTitle titleName1="sobre" titleName2="mim." />
          </header>

          <p className="font-normal text-lg tracking-[1px] text-zinc-50">
            Sempre tive uma paixão pela criação e inovação, buscando soluções para desafios e necessidades. Essa habilidade me proporcionou uma mentalidade empreendedora e focada em soluções.Atualmente, estou direcionando meus estudos em tecnologias front-end, como JS, ReactJS e TypeScript. Além disso, sou criador do Espaço Conecta, uma plataforma focada na divulgação de cursos e ferramentas para aprimoramento profissional e pessoal. Sou responsável pelo desenvolvimento, manutenção e direcionamento tecnológico da plataforma, bem como pela criação de determinados conteúdos.Meu desejo de ensinar o que aprendi sempre foi uma constante em minha vida e, em breve, pretendo criar vídeo aulas focadas em desenvolvimento web e disponibilizá-las no Youtube para contribuir com a comunidade. Combinando minha paixão por soluções inovadoras e aperfeiçoamento profissional, estou animado para continuar crescendo como profissional e contribuir para o avanço da comunidade tecnológica.
          </p>

          <div className="flex  gap-3 sm:gap-3">
            <Button
              link="#contato"
              title="contato"
              fontSize="text-base"
              size="w-44 sm:w-52 h-16"
              bgColor="bg-green-400"
              borderColor="border-green-400"
              icon={<MessagesSquare />}
              onClickHandle={openModal}
            />
            <Button
              link="#project"
              title="projetos"
              fontSize="text-base"
              size="w-44 sm:w-52 h-16"
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
          {/* <div className="grid grid-cols-3 gap-5 mx-auto"> */}
          <div className="grid grid-cols-2 gap-3 mx-auto sm:grid-cols-3 sm:gap-5">

            <TechCard title="html" imageUrl={htmlTec} barLevel={9} />
            <TechCard title="css" imageUrl={cssTec} barLevel={9} />
            <TechCard title="tailwind" imageUrl={tailwindTec} barLevel={5} />
            <TechCard title="javascript" imageUrl={javascriptTec} barLevel={8} />
            <TechCard title="react" subTitle=".js" imageUrl={reactJsTec} barLevel={5} />
            <TechCard title="netx" subTitle=".js" imageUrl={nextJsTec} barLevel={5} />
            <TechCard title="typescript" imageUrl={typescriptTec} barLevel={5} />
            <TechCard title="wordpress" imageUrl={wordpressTec} barLevel={8} />
            <TechCard title="figma" imageUrl={figmaTec} barLevel={7} />
          </div>

        </div>

      </div>

    </section>
  )
}