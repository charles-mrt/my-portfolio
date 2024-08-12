

import { ProjectCards } from '../../Projects/ProjectCards'
import { SectionTitle } from '../../SectionTitle'

import { projectsData } from '@/app/data'
import { SearchProject } from '../../SearchProject'
import { Suspense, useState } from 'react'
import { SearchCode, TerminalSquare } from 'lucide-react'
import { ListSocialMediaIcon } from '../../SocialIcons/ListSocialMediaIcon'
import { PublicProjects } from '../../Projects/PublicProjects'
import { ProjectCardSkeleton } from '../../Projects/ProjectCardSkeleton'

export const Section = () => {
  // const [selectedCategory, setSelectedCategory] = useState("todas")

  // const handleCategoryChange = (category: string) => {
  //   setSelectedCategory(category.trim())
  // }


  return (

    < section
      id="project"
      className="w-full h-auto bg-zinc-900 py-10 laptop:bg-opacity-90"
    >
      <div className="w-full max-w-7xl m-auto">

        <header className="text-center mt-10 mb-5">
          <SectionTitle titleName1="projetos" titleName2="realizados." />
        </header>

        <div className="w-full">
          <Suspense fallback={ 
            <ProjectCardSkeleton totalCards={3} />
          }>
            <PublicProjects />
          </Suspense>

        </div>

      </div >

    </section >
  )
}