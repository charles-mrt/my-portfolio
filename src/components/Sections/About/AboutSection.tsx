import { ScrollDownIndicator } from '../../ScrollDownIndicator'
import { SectionTitle } from '../../SectionTitle'
import { DescriptionWrapper } from './DescriptionWrapper'
import { ActionButtons } from './ActionButtons'
import { TechnologyCards } from '@/components/TechnologiesSkills/TechnologyCards'

export const AboutSection = () => {

  return (
    <section
      id="about-me"
      className="w-full h-full  flex justify-center py-10"
    >

      <div className=" h-full w-full max-w-7xl  px-4 grid grid-cols-1 gap-8 laptop:grid-cols-2">

        {/* left */}
        <div className="w-full flex flex-col gap-4 items-center mb-6 laptop:mb-0 lg:items-start">
          <header>
            <SectionTitle title="sobre" highlightedTitle="mim." />
          </header>

          <DescriptionWrapper />
          <ActionButtons />

          <div className="hidden m-auto laptop:block">
            < ScrollDownIndicator idName="project" />
          </div>
        </div>

        {/* right */}
        <div className="w-full flex flex-col gap-4 text-center">
          <header>
            <SectionTitle title="tecnologias que" highlightedTitle="utilizo." />
          </header>
          <TechnologyCards />
        </div>

      </div>

    </section>
  )
}