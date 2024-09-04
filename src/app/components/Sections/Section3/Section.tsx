
'use client'
import { SectionTitle } from '../../SectionTitle'
import { Suspense, useState, startTransition} from 'react'
import { PublicProjects } from '../../Projects/PublicProjects'
import { ProjectCardSkeleton } from '../../Projects/ProjectCardSkeleton'
import { SearchProject } from '../../SearchProject'
import { ProjectProps } from '@/app/interfaces/project.interface'

interface SectionProps {
  projectsData: ProjectProps[]
}

export const Section =  ({ projectsData }: SectionProps) => {

  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleCategoryChange = (category: string) => {
    startTransition(() => {
      setSelectedCategory(category.trim())
    })
  }
  return (

    <section id="project" className="w-full h-auto bg-zinc-900 py-10 laptop:bg-opacity-90">
      <div className="w-full max-w-7xl m-auto">
        
        <header className="text-center mt-10 mb-5">
          <SectionTitle titleName1="projetos" titleName2="realizados." />
        </header>

        <div className="w-full">
          <SearchProject onCategoryChange={handleCategoryChange} />
          <Suspense fallback={ 
            <ProjectCardSkeleton totalCards={3} />
          }>
              <PublicProjects category={selectedCategory} projectsData={projectsData} />
          </Suspense>
        </div>

      </div>
    </section>
  )
}