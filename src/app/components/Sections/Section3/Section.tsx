'use client'

import { ProjectCards } from '../../Projects/ProjectCards'
import { SectionTitle } from '../../SectionTitle';

import { projectsData } from '@/app/data';
import { SearchProject } from '../../SearchProject';
import { useState } from 'react';
import { SearchCode } from 'lucide-react';
import { ListSocialMediaIcon } from '../../SocialIcons/ListSocialMediaIcon';

export const Section = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category.trim());
    console.log("selectedCategory " + selectedCategory)
  };
  return (

    < section
      id="project"
      className="w-full h-auto bg-zinc-900 py-10 laptop:bg-opacity-90"
    >
      <div className="w-full max-w-7xl m-auto">

        <header className="text-center mt-10 mb-5">
          <SectionTitle titleName1="projetos" titleName2="realizados." />
        </header>

        <SearchProject onCategoryChange={handleCategoryChange} />

        {/*cards */}
        <div className="w-full">

          <ul className="grid justify-items-center gap-4 sm:grid-cols-2 laptop:grid-cols-3">
            {
              projectsData.map((project, index) => {
                return (
                  project.is_public && project.categories.includes(selectedCategory) ? (
                    <li key={index}>
                      <ProjectCards
                        imageUrl={project.image}
                        alt={project.alt}
                        title={project.title}
                        technologiesListImage={project.tecnologies}
                        description={project.description}
                        tec_description={project.tec_description}
                        github_url={project.github}
                        project_url={project.url}
                        category={project.categories}
                      />
                    </li>
                  ) : <></>
                )
              })
            }

            <li className="relative h-[31.2rem] w-80 sm-device:w-72 sm:w-[19rem] md:w-[22rem] lg:w-[19.5rem] xl:w-96 2xl:h-[40.6rem] 
            bg-zinc-900 p-10 border-2 border-dashed border-green-400 rounded-[5px] flex flex-col justify-around items-center">

              <header className="text-4xl text-center text-zinc-50">
                Curioso para saber qual será o próximo
                <span className="text-green-400 mr-1">
                  projeto
                </span>
                ?
              </header>
              <SearchCode className="absolute element-to-move text-zinc-500 " size={100} />
              <p className="text-zinc-50 text-center text-lg font-bold w-4/5">
                Então, me acompanhe nas redes sociais e não perca nenhuma novidade!
              </p>
              <div className="flex justify-end gap-5 text-zinc-50">
                <ListSocialMediaIcon iconSize={25} />
              </div>
            </li>

          </ul>

        </div>{/* end cards*/}

      </div >

    </section >
  )
}