'use client'
import Image from "next/image"
import Link from "next/link"
import { ChangeEvent, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ProjectProps } from "@/app/interfaces/project.interface"
import { getAllProjects, getProjectById } from "@/app/services/projects"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table"
import { Code, EditIcon, Github, Group, ImageIcon, ImageOff, Link2, LinkIcon, LucideImagePlus, Mail, NotepadText, PencilLine, Save, Send, SquareCode, Type } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { boolean, z } from "zod"
import { Switch } from "@/app/components/ui/switch"




export default function DashBoard() {
  const searchParams = useSearchParams()
  const projectId = searchParams.get('id')




  const [projects, setProjects] = useState<ProjectProps[]>([])





  const formSchema = z.object({
    title: z.string().min(3, 'Este campo é obrigatório, minímo 3 caracteres')
      .max(40, `Máximo ${40} caracteres`),

    image: z.string().url('A url deve ser válida'),

    alt: z.string().min(3, 'Este campo é obrigatório, minímo 3 caracteres')
      .max(40, `Máximo ${40} caracteres`),


    description: z.string().min(100, 'Este campo é obrigatório, minímo 100 caracteres')
      .max(1000, `Máximo ${1000} caracteres`),
    url: z.string().url('A url deve ser válida'),

    github: z.string().url('A url deve ser válida'),
    technologies: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
  })
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      image: '',
      alt: '',
      technologies: [''],
      categories: [''],
      description: '',
      url: '',
      github: '',
      is_public: boolean,
    },
  })

  const array_technologies = [
    'javascript', 'react-js', 'react-native', 'next-js', 'node-js',
    'typescript', 'php', 'socketio', 'wordpress', 'css',
    'css-module', 'sass', 'styled-component', 'tailwind', 'html',
    'figma', 'mongodb', 'fastify'
  ]
  const array_categories = [
    "all",
    "javascript",
    "react-js",
    "react-native",
    "next-js",
    "node-js",
    "typescript",
    "php",
    "wordpress",
    "css",
    "css-modules",
    "sass",
    "tailwind",
    "html",
    "game",
    "figma",
    "code-art",
  ]

  const getProject = async () => {
    const data: ProjectProps = await getProjectById({ id: projectId || "" })
    console.log("DATA " + data.categories)

    reset({
      title: data.title,
      image: data.image,
      alt: data.alt,
      technologies: data.technologies,
      categories: data.categories,
      description: data.description,
      url: data.url,
      github: data.github,
      is_public: data.is_public,
    })
  }

  useEffect(() => {
    getProject()
  }, [])

  const [imageUrl, setImageUrl] = useState('');

  const handleChangeImageUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value)
  }
  return (
    <div className="h-full w-full px-4 pt-20 bg-zinc-950">
      <header className="fixed z-50 top-0 left-0 w-full h-auto p-2 border-b-[1px] bg-zinc-800 border-green-500">
        <nav className="flex">
          <Link href={'/'} className="bg-zinc-700 p-2 rounded-md text-zinc-100 font-sans">Preview</Link>
        </nav>
      </header>

      <section className="w-full h-auto bg-zinc-900 p-10  rounded-md flex flex-col items-center gap-4">
        <h4 className="text-center font-bold text-zinc-100 font-sans uppercase">
          Editar projeto
        </h4>
        <form className="flex flex-col gap-8 max-w-xl w-full">

          <div className="flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">
            <label
              className="text-zinc-400"
              htmlFor='title'
            >
              <Type />
            </label>

            <input
              className="w-full p-2  bg-zinc-900 outline-none text-zinc-50"
              type="text"
              placeholder="Título"
              {...register('title')}
            />

            {errors.title &&
              <span className="text-red-400 absolute -bottom-6 text-xs">
                {errors.title.message}
              </span>
            }
          </div>

          <div className="flex items-end gap-2 ">
            
            <div className="w-full flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">
              <label
                className="text-zinc-400"
                htmlFor='title'
              >
                <ImageIcon />
              </label>

              <input
                className="w-full p-2  bg-zinc-900 outline-none text-zinc-50"
                type="text"
                placeholder="Url da Imagem"
                {...register('image', {
                  onChange: handleChangeImageUrl
                })}
              />

              {errors.image &&
                <span className="text-red-400 absolute -bottom-6 text-xs">
                  {errors.image.message}
                </span>
              }
            </div>
            <div className="flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">
              <img src={imageUrl === '' ? getValues().image : imageUrl } alt={'sem imagem'} className="w-auto h-24"/>
            </div>
          </div>

          <div className="flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">

            <label
              className="text-zinc-400"
              htmlFor='alt'
            >
              <LucideImagePlus />
            </label>

            <input
              className="w-full p-2  bg-zinc-900 outline-none text-zinc-50"
              type="text"
              placeholder="Alt da Imagem"
              {...register('alt')}
            />

            {errors.alt &&
              <span className="text-red-400 absolute -bottom-6 text-xs">
                {errors.alt.message}
              </span>
            }
          </div>

          <div className="flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">

            <label
              className="text-zinc-400"
              htmlFor='description'
            >
              <NotepadText />
            </label>

            <textarea
              className="w-full p-2  bg-zinc-900 outline-none text-zinc-50 min-h-40"
              placeholder="descrição"
              {...register('description')}
            />

            {errors.description &&
              <span className="text-red-400 absolute -bottom-6 text-xs">
                {errors.description.message}
              </span>
            }
          </div>

          <div className="flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">

            <label
              className="text-zinc-400"
              htmlFor='github'
            >
              <Github />
            </label>

            <input
              className="w-full p-2  bg-zinc-900 outline-none text-zinc-50"
              type="text"
              placeholder="Url do github"
              {...register('github')}
            />

            {errors.github &&
              <span className="text-red-400 absolute -bottom-6 text-xs">
                {errors.github.message}
              </span>
            }
          </div>


          <div className="flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">

            <label
              className="text-zinc-400"
              htmlFor='url'
            >
              <LinkIcon />
            </label>

            <input
              className="w-full p-2  bg-zinc-900 outline-none text-zinc-50"
              type="text"
              placeholder="Url do projeto"
              {...register('url')}
            />

            {errors.url &&
              <span className="text-red-400 absolute -bottom-6 text-xs">
                {errors.url.message}
              </span>
            }
          </div>

          <div className=" p-1 rounded-md border border-green-400 bg-zinc-900 ">
            <span className="text-zinc-400 flex items-center gap-4 text-base mb-3 mt-2">
              <Code /> tecnologias utilizadas
            </span>

            <div className="flex flex-wrap gap-2">

              {array_technologies.map((tech) => (
                <label key={tech} className="flex text-zinc-400 gap-1">
                  <input
                    className="appearance-none w-4 h-4 border border-zinc-500 rounded-sm bg-transparent mt-1 shrink-0 checked:bg-green-500 checked:border-0"
                    type="checkbox"
                    value={tech}
                    defaultChecked={isDirty && getValues().technologies.includes(tech)}
                    {...register('technologies')}
                  />
                  {tech}
                </label>

              ))}
            </div>
          </div>
          <div className=" p-1 rounded-md border border-green-400 bg-zinc-900 ">
            <span className="text-zinc-400 flex items-center gap-4 text-base mb-3 mt-2">
              <Group /> Categorias
            </span>

            <div className="flex flex-wrap gap-2">
              {array_categories.map((category) => (
                <label key={category} className="flex text-zinc-400 gap-1">
                  <input
                    className="appearance-none w-4 h-4 border border-zinc-500 rounded-sm bg-transparent mt-1 shrink-0 checked:bg-green-500 checked:border-0"
                    type="checkbox"
                    value={category}
                    defaultChecked={isDirty && getValues().categories.includes(category)}
                    {...register('categories')}
                  // checked={}
                  // onChange={}
                  />
                  {category}
                </label>

              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2 p-1 rounded-md border border-green-400 bg-zinc-900 ">
            <span className="text-zinc-400 flex items-center gap-4 text-base mb-3 mt-2">
              <Group /> publicar? não
            </span>
            <Switch

              className="data-[state=checked]:bg-green-400 data-[state=unchecked]:bg-slate-700"
            />
            <span className="text-zinc-400  text-base mb-3 mt-2">
              sim
            </span>
          </div>
          <button type="submit" className="text-zinc-50 text-center font-semibold uppercase tracking-[1px] border border-green-400 rounded-md p-3 flex items-center justify-center gap-2 ease-linear duration-300 cursor-pointer bg-green-400 hover:bg-zinc-700 hover:border-green-400">
            <Save /> salvar
          </button>

        </form>
      </section>

    </div>


  )
}