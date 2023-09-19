'use client'

import { ProjectCards } from '../../Projects/ProjectCards'
import { SectionTitle } from '../../SectionTitle';

import { projectsData } from '@/app/data';
import { SearchProject } from '../../SearchProject';
import { useState } from 'react';

export const Section = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const handleCategoryChange = (category:string) => {
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
                        github_url={project.github}
                        project_url={project.url}
                        category={project.categories}
                      />
                    </li>
                  ) : <></>
                )
              })
            }
          </ul>

        </div>{/* end cards*/}

      </div >

    </section >
  )
}