import { SectionTitle } from '../../SectionTitle';
import { ProjectList } from './ProjectList';

export const ProjectsSection = () => {

  return (
    <section
      id="project"
      className="w-full h-auto bg-zinc-900 py-10 laptop:bg-opacity-90"
    >
      <div className="w-full max-w-7xl m-auto">
        <header className="text-center mt-10 mb-5">
          <SectionTitle title="projetos" highlightedTitle="realizados." />
        </header>
        <ProjectList />
      </div >
    </section>
  )
}