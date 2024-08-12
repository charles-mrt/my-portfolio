import { getAllPublicProjects } from '@/app/services/projects'
import { SearchCode, TerminalSquare } from 'lucide-react'
import { ListSocialMediaIcon } from '../SocialIcons/ListSocialMediaIcon'
import { ProjectCards } from './ProjectCards'


export const PublicProjects = async () => {

  let projectsData = await getAllPublicProjects()

  if (!Array.isArray(projectsData)) {
    projectsData = []
  }

  return (
    <ul className="grid justify-items-center gap-4 sm:grid-cols-2 laptop:grid-cols-3">
      {
        projectsData.map((project) => {
          return (
            // project.is_public && project.categories.includes(selectedCategory) ? (
            <li key={project.id}>
              <ProjectCards
                imageUrl={project.image}
                alt={project.alt}
                title={project.title}
                // technologiesListImage={project.tecnologies}
                description={project.description}
                // tec_description={project.tec_description}
                github_url={project.github}
                project_url={project.url}
                category={project.categories}
              />
            </li>
            // ) : <></>
          )
        })
      }
      <li className="h-[31.2rem] w-80 sm-device:w-72 sm:w-[19rem] md:w-[22rem] lg:w-[19.5rem] xl:w-96 2xl:h-[40.6rem] 
bg-zinc-900 p-10 border-2 border-dashed border-green-400 rounded-[5px] flex flex-col justify-around items-center">

        <header className="text-2xl text-center text-zinc-50">
          Curioso para saber qual será o próximo
          <span className="text-green-400 ml-2 mr-1">
            projeto
          </span>
          ?
        </header>
        <div className="relative w-28 h-28 bg-zinc-800 rounded-md flex items-center justify-center">
          <TerminalSquare className="text-green-300" strokeWidth={1} size={100} />
          <SearchCode className="absolute element-to-move text-zinc-500 " size={100} />
        </div>
        <p className="text-zinc-50 text-center text-lg font-bold w-4/5">
          Então, me acompanhe nas redes sociais e não perca nenhuma novidade!
        </p>
        <div className="flex justify-end gap-5 text-zinc-50">
          <ListSocialMediaIcon iconSize={25} />
        </div>
      </li>
    </ul>
  )
}