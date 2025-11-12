import htmlTec from '/public/assets/technologies/html.svg'
import cssTec from '/public/assets/technologies/css.svg'
import tailwindTec from '/public/assets/technologies/tailwind.svg'
import styledcomponentTec from '/public/assets/technologies/styledcomponent.svg'
import sassTec from '/public/assets/technologies/sass.svg'
import cssModuleTec from '/public/assets/technologies/cssmodule.svg'

import wordpressTec from '/public/assets/technologies/wordpress.svg'
import figmaTec from '/public/assets/technologies/figma.svg'

import nextJsTec from '/public/assets/technologies/nextjs.svg'
import reactJsTec from '/public/assets/technologies/reactjs.svg'
import typescriptTec from '/public/assets/technologies/typescript.svg'
import javascriptTec from '/public/assets/technologies/javascript.svg'

import { TechCard } from "@/components/TechnologiesSkills/TechCard"

export const technologies = [
  {
    title: 'JavaScript',
    subTitle: '',
    icon: javascriptTec
  },
  {
    title: 'React',
    subTitle: '.js',
    icon: reactJsTec
  },
  {
    title: 'Next',
    subTitle: '.js',
    icon: nextJsTec
  },
  {
    title: 'TypeScript',
    subTitle: '',
    icon: typescriptTec
  },
  {
    title: 'HTML',
    subTitle: '',
    icon: htmlTec
  },
  {
    title: 'CSS',
    subTitle: '',
    icon: cssTec
  },
  {
    title: 'Tailwind',
    subTitle: 'CSS',
    icon: tailwindTec
  },
  {
    title: 'Styled',
    subTitle: 'Components',
    icon: styledcomponentTec
  },
  {
    title: 'Sass',
    subTitle: '',
    icon: sassTec
  },
  {
    title: 'CSS',
    subTitle: 'Modules',
    icon: cssModuleTec
  },
  {
    title: 'WordPress',
    subTitle: '',
    icon: wordpressTec
  },
  {
    title: 'Figma',
    subTitle: '',
    icon: figmaTec
  },
] as const

export const TechnologyCards = () => {
  return (
    <div className="grid grid-cols-2 gap-3 mx-auto sm:grid-cols-3 sm:gap-5" translate='no'>
      {technologies.map((tech, index) =>
        <TechCard
          key={index}
          title={tech.title}
          subTitle={tech.subTitle}
          imageUrl={tech.icon}
        />
      )}
    </div>
  )
}