export interface ProjectProps {
  id?: string
  is_public: boolean
  image: string
  alt: string
  title: string
  technologies: string[]
  categories: string[]
  description: string
  url: string
  github: string
  created_at?: Date
  updated_at?: Date
}