'use client'

import { projectsData } from '@/app/data';
import { useState } from 'react';
import { ProjectCards } from '../../Projects/ProjectCards';
import { SearchProject } from '@/components/SearchProject';
import { NextProjectCard } from './NextProjectcard';

export const ProjectList = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");


  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category.trim());
  };
  return (
    <>
      <SearchProject onCategoryChange={handleCategoryChange} />
      <ul className="grid justify-items-center gap-4 sm:grid-cols-2 laptop:grid-cols-3 mt-4">
        {projectsData.map((project, index) => {
          return (
            project.is_public && project.categories.includes(selectedCategory) && (
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
            )
          )
        })
        }
        <NextProjectCard />
      </ul>
    </>
  )

}

