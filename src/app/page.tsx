
import Image from 'next/image'
import charlesLogo from '/public/assets/logo.png';
import avatar from '/public/assets/avatar.png';

import htmlTec from '/public/assets/technologies/html.svg';
import cssTec from '/public/assets/technologies/css.svg';
import tailwindTec from '/public/assets/technologies/tailwind.svg';
import styledComponentTec from '/public/assets/technologies/styledcomponent.svg';
import sassTec from '/public/assets/technologies/sass.svg';
import reactNativeTec from '/public/assets/technologies/reactnative.svg';
import nextJsTec from '/public/assets/technologies/nextjs.svg';
import nodeJsTec from '/public/assets/technologies/nodejs.svg';
import phpTec from '/public/assets/technologies/php.svg';
import wordpressTec from '/public/assets/technologies/wordpress.svg';
import figmaTec from '/public/assets/technologies/figma.svg';
import cssModuleTec from '/public/assets/technologies/cssmodule.svg';
import reactJsTec from '/public/assets/technologies/reactjs.svg';
import typescriptTec from '/public/assets/technologies/typescript.svg';
import javascriptTec from '/public/assets/technologies/javascript.svg';

import walkProject from '/public/assets/projects/walk.jpg';


import {
  Menu,
  Instagram,
  Facebook,
  Linkedin,
  Github,
  Mouse,
  Triangle,
  Circle,
  Hexagon,
  FileCode2,
  MonitorSmartphone,
  ArrowBigUpDash
} from 'lucide-react';


import { TechCard } from './components/TechnologiesSkills/TechCard';
import { ProjectCards } from './components/Projects/ProjectCards'
import { SectionTitle } from './components/SectionTitle';
import { Button } from './components/Button';

export default function Home() {

  return (


    <div className="min-h-screen flex flex-col">

      {/* MENU */}
      <header className="h-10 w-screen p-2 flex justify-between items-center bg-transparent fixed z-50">

        <div className="w-[33%]">
          <Image src={charlesLogo} alt="charles portofio logo" />
        </div>

        <nav className="text-zinc-50 text-base font-medium uppercase flex justify-center gap-5 w-[33%]">
          <a href="about-m2" className="">sobre-mim</a>
          <a href="project" className="">projeto</a>
          <a href="contact" className="">contato</a>
        </nav>

        {/* <Menu className="text-zinc-50" /> */}
        <div className="w-[33%] flex justify-end gap-5 text-zinc-900 ">
          <a href="" title="instagram Charles"><Instagram /></a>
          <a href="" title="facebook Charles"><Facebook /></a>
          <a href="" title="linkedin Charles"><Linkedin /></a>
          <a href="" title="github Charles"><Github /></a>
        </div>

      </header>
      <main className="flex-grow h-full mb-60">
        {/* SECTION 1 */}
        <section
          className="bg-cover bg-center h-screen max-h-[1080px] flex flex-end justify-center"
          style={{ backgroundImage: "url('/assets/bg-section-1.jpg')" }}
        >

          {/* wrapper 2 */}
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

                {/*scroll down indicator */}
                <div className="text-green-400 mt-8 items-center flex flex-col ">
                  <Mouse size={31} />
                  <Triangle size={28} className="transform rotate-180 mt-2 opacity-60" />
                  <Triangle size={26} className="transform rotate-180 -mt-3.5 opacity-60" />
                  <Triangle size={24} className="transform rotate-180 -mt-3 opacity-60" />
                </div>
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


          </div>{/* end wrapper 1 */}

          {/*divider */}
          <div className="absolute z-40 bottom-0 w-full">
            <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path className="shape-fill fill-current text-zinc-800" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
          </div>

        </section>




        {/* SECTION 2 */}

        <section
          className="bg-cover bg-center h-full max-h-[1080px] w-full flex justify-center"
          style={{ backgroundImage: "url('/assets/bg-section-2.jpg')" }}
        >
          {/* wrapper 2 */}
          <div className="h-full w-full max-w-7xl grid grid-cols-2 items-start">


            {/* left */}
            <div className="w-[29rem]  flex flex-col gap-11">
              <header>
                <SectionTitle titleName1="sobre" titleName2="mim." />
              </header>


              <p className="font-normal text-base tracking-[1px] text-zinc-50">
                Sempre tive uma paixão pela criação e inovação, buscando soluções para desafios e necessidades. Essa habilidade me proporcionou uma mentalidade empreendedora e focada em soluções.Atualmente, estou direcionando meus estudos em tecnologias front-end, como JS, ReactJS e TypeScript. Além disso, sou criador do Espaço Conecta, uma plataforma focada na divulgação de cursos e ferramentas para aprimoramento profissional e pessoal. Sou responsável pelo desenvolvimento, manutenção e direcionamento tecnológico da plataforma, bem como pela criação de determinados conteúdos.Meu desejo de ensinar o que aprendi sempre foi uma constante em minha vida e, em breve, pretendo criar vídeo aulas focadas em desenvolvimento web e disponibilizá-las no Youtube para contribuir com a comunidade. Combinando minha paixão por soluções inovadoras e aperfeiçoamento profissional, estou animado para continuar crescendo como profissional e contribuir para o avanço da comunidade tecnológica.
              </p>


              <div className="flex gap-6 ">
                <Button
                  link=""
                  title="contato"
                  fontSize="text-base"
                  size="w-52 h-16"
                  bgColor="bg-green-400"
                  borderColor="border-green-400"
                />
                <Button
                  link=""
                  title="projetos"
                  fontSize="text-base"
                  size="w-52 h-16"
                  bgColor="bg-zinc-700"
                  borderColor="border-zinc-700"
                  icon={<FileCode2 />}
                />
              </div>

              {/*scroll down indicator */}
              <div className="text-green-400 mt-2 items-center flex flex-col ">
                <Mouse size={31} />
                <Triangle size={28} className="transform rotate-180 mt-2 opacity-60" />
                <Triangle size={26} className="transform rotate-180 -mt-3.5 opacity-60" />
                <Triangle size={24} className="transform rotate-180 -mt-3 opacity-60" />
              </div>
            </div>




            {/* right */}
            <div className="w-full flex flex-col gap-11 ">

              <header>
                <SectionTitle titleName1="tecnologias que" titleName2="utilizo." />
              </header>


              {/* cards */}
              <div className="grid grid-cols-3 gap-3">
                {/* card 1 */}
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

          </div>  {/* end wrapper 2 */}


        </section>

        {/* SECTION 3 */}
        <section className="bg-cover bg-center h-screen max-h-[1080px]"
          style={{ backgroundImage: "url('/assets/bg-section-3.jpg')" }}>

          {/*wrapper 3*/}
          <div className=" h-full w-full max-w-7xl m-auto">


            <header className="text-center my-10">
              <SectionTitle titleName1="projetos" titleName2="realizados." />
            </header>

            {/*cards */}
            <div className="
              w-full 
              grid 
              lg:grid-cols-[repeat(2,400px)] 
              xl:grid-cols-[repeat(3,400px)]               
              justify-center gap-4"
            >
              <ProjectCards
                imageUrl={walkProject.src}
                alt="walk landing page"
                title="walk"
                technologiesListImage={[reactJsTec, styledComponentTec, typescriptTec]}                
                description="WALK é um projeto de landing page para venda de tênis.
                O foco da página é direcionar o usuário a aquisição do produto,
                através de uma página atraente, onde os modelos de tênis são exibidos em slide.
                Entre as transições dos modelos ocorre a alteração da cor de fundo baseado nas cores do tênis."
              />
              <ProjectCards
                imageUrl={walkProject.src}
                alt="walk landing page"
                title="walk"
                technologiesListImage={[reactJsTec, styledComponentTec, typescriptTec]}                
                description="WALK é um projeto de landing page para venda de tênis.
                O foco da página é direcionar o usuário a aquisição do produto,
                através de uma página atraente, onde os modelos de tênis são exibidos em slide.
                Entre as transições dos modelos ocorre a alteração da cor de fundo baseado nas cores do tênis."
              />
              <ProjectCards
                imageUrl={walkProject.src}
                alt="walk landing page"
                title="walk"
                technologiesListImage={[reactJsTec, styledComponentTec, typescriptTec]}                
                description="WALK é um projeto de landing page para venda de tênis.
                O foco da página é direcionar o usuário a aquisição do produto,
                através de uma página atraente, onde os modelos de tênis são exibidos em slide.
                Entre as transições dos modelos ocorre a alteração da cor de fundo baseado nas cores do tênis."
              />

            </div>{/* end cards*/}
          </div>

          {/*end wrapper 3*/}
        </section>


      </main>

      {/*divider */}
      <div className="w-full">
        <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className="shape-fill fill-current text-zinc-700" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
      <footer className="h-10 w-full p-2 bg-zinc-700 relative  flex items-center justify-between">

        <div className="w-[33%]">
          <Image src={charlesLogo} alt="charles portofio logo" />
        </div>

        <p className="text-xs text-zinc-400 uppercase font-medium">
          Copyright © 2023 charles martins. All rights reserved
        </p>

        {/* <Menu className="text-zinc-50" /> */}
        <div className="w-[33%] flex items-end justify-end gap-5 text-zinc-100 mb-5">
          <a href="" title="instagram Charles"><Instagram /></a>
          <a href="" title="facebook Charles"><Facebook /></a>
          <a href="" title="linkedin Charles"><Linkedin /></a>
          <a href="" title="github Charles"><Github /></a>

          <div className="border-[1px] border-green-400 rounded-[5px] w-10 h-10 flex items-center justify-center text-green-400 ">
            <a href=""><ArrowBigUpDash /></a>
          </div>
        </div>
      </footer>

    </div>
  )
}
