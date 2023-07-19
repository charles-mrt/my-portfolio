
import styledComponentTec from '/public/assets/technologies/styledcomponent.svg';
import reactJsTec from '/public/assets/technologies/reactjs.svg';
import typescriptTec from '/public/assets/technologies/typescript.svg';
import walkProject from '/public/assets/projects/walk.jpg';

import { ProjectCards } from '../../Projects/ProjectCards'
import { SectionTitle } from '../../SectionTitle';

export const Section = () => {

  return (

    < section 
      className="w-full h-auto bg-zinc-900 bg-opacity-90 py-10"
    >
      <div className="w-full max-w-7xl m-auto">

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
        
      </div >

    </section >
  )
}