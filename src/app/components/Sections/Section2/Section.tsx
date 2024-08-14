
"use client"

import {
  MessagesSquare,
  FileCode2,
  ChevronUp,
  ChevronRight,
} from 'lucide-react'

import htmlTec from '/public/assets/technologies/html.svg'
import cssTec from '/public/assets/technologies/css.svg'
import tailwindTec from '/public/assets/technologies/tailwind.svg'
import styledcomponentTec from '/public/assets/technologies/styledcomponent.svg'
import sassTec from '/public/assets/technologies/sass.svg'
import cssModuleTec from '/public/assets/technologies/cssmodule.svg'

import wordpressTec from '/public/assets/technologies/wordpress.svg'
import figmaTec from '/public/assets/technologies/figma.svg'

import nextJsTec from '/public/assets/technologies/nextjs.svg'
import reactJsTec from '/public/assets/technologies/reactjs.svg'
import typescriptTec from '/public/assets/technologies/typescript.svg'
import javascriptTec from '/public/assets/technologies/javascript.svg'

import { ScrollDownIndicator } from '../../ScrollDownIndicator'

import { TechCard } from '../../TechnologiesSkills/TechCard'
import { SectionTitle } from '../../SectionTitle'
import { Button } from '../../Button'

import { Modal } from '../../Modal'
import { useModal } from '../../../hooks/useModal'
import { useState } from 'react'

export const Section = () => {

  const { showModal, openModal, closeModal } = useModal()
  const [isToogle, setIsToogle] = useState(Boolean)

  const handleToogle = () => setIsToogle(!isToogle)

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

          <div className={` ${!isToogle ? 'bg-gradient-to-b from-zinc-50 via-zinc-50 to-zinc-800 text-transparent bg-clip-text overflow-hidden transition-about-close ' : 'overflow-clip transition-about-open text-zinc-50'
            } font-normal text-lg text-center tracking-[1px] laptop:text-left lg:indent-8 space-y-2 `}>

            <p>Iniciei minha jornada na programação guiado pela curiosidade de compreender o funcionamento por trás das interfaces de computadores. Ao longo desse percurso, obtive minha formação em Análise e Desenvolvimento de Sistemas e também me graduei em Gestão da Tecnologia da Informação.</p>
            <p>Desde então, tenho dedicado tempo e esforço ao aprimoramento das minhas habilidades em desenvolvimento de software.</p>
            <p>Embora já tenha trabalhado com tecnologias backend, como Java EE, minha atenção atual está focada principalmente no desenvolvimento frontend.</p>
            <p>Minha abordagem no desenvolvimento web está centrada na usabilidade, no design e na performance. Meu objetivo é criar interfaces amigáveis e acessíveis, proporcionando uma excelente experiência ao usuário em diversos dispositivos.</p>
            <p>Estou constantemente em busca de novos desafios e oportunidades para ampliar meu conhecimento e habilidades como desenvolvedor frontend. Minha paixão pela programação e meu compromisso com a aprendizagem contínua me motivam a criar soluções web eficazes e inovadoras.</p>
            <p>Além disso, tenho um genuíno interesse em compartilhar conhecimento com a comunidade. Planejo criar conteúdo educativo, como vídeo aulas, para ajudar outros desenvolvedores a aprimorar suas habilidades e crescer na área.</p>
            <p className="pt-4">Sou também o criador da <strong>Sala do Café.dev</strong>,            
              uma marca dedicada a camisetas especialmente para desenvolvedores e amantes de café. A marca surgiu da minha paixão por programação e pelo café, e oferece designs únicos que combinam humor, estilo e o amor por ambas as paixões.</p>
            <p>Cada peça é criada com o objetivo de celebrar a cultura do desenvolvimento e o prazer de uma boa xícara de café, proporcionando aos nossos clientes uma forma divertida e original de expressar sua identidade.</p>
            <p>Para conferir nossas coleções e encontrar a camiseta perfeita, visite a
              <a
                href="https://reserva.ink/saladocafedev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-bold  px-2"
              >
                Sala do Café.dev
              </a></p>
          </div>

          <button
            className="text-green-400"
            onClick={() => handleToogle()}
          >

            {!isToogle ? (
              <span className="transition-about-close flex items-center gap-1 " translate='no'>
                <ChevronRight />
                continuar lendo...
              </span>
            ) : (
              <span className="transition-about-open flex items-center gap-1" translate='no'>
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
          <div className="grid grid-cols-2 gap-3 mx-auto sm:grid-cols-3 sm:gap-5" translate='no'>
            <TechCard title="javascript" imageUrl={javascriptTec} barLevel={8} />
            <TechCard title="react" subTitle=".js" imageUrl={reactJsTec} barLevel={5} />
            <TechCard title="next" subTitle=".js" imageUrl={nextJsTec} barLevel={5} />
            <TechCard title="typescript" imageUrl={typescriptTec} barLevel={5} />
            <TechCard title="html" imageUrl={htmlTec} barLevel={9} />
            <TechCard title="css" imageUrl={cssTec} barLevel={9} />
            <TechCard title="tailwind" subTitle='css' imageUrl={tailwindTec} barLevel={5} />
            <TechCard title="styled" subTitle="components" imageUrl={styledcomponentTec} barLevel={9} />
            <TechCard title="sass" imageUrl={sassTec} barLevel={9} />
            <TechCard title="css" subTitle="modules" imageUrl={cssModuleTec} barLevel={9} />
            <TechCard title="wordpress" imageUrl={wordpressTec} barLevel={8} />
            <TechCard title="figma" imageUrl={figmaTec} barLevel={7} />
          </div>

        </div>

      </div>

    </section>
  )
}