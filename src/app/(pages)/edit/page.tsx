'use client'

import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'


import { ProjectProps } from '@/app/interfaces/project.interface'
import { getProjectById, updatedProject } from '@/app/services/projects'
import { CATEGORIES, TECHNOLOGIES } from '../../../../utils/projectAttributes'

import { Switch } from '@/app/components/ui/switch'
import { toast } from 'sonner'
import { Toaster } from '@/app/components/ui/sonner'
import { LoggedInMenu } from '@/app/components/Menu/LoggedInMenu'

import {
  Code,
  FileCheck2,
  Github,
  Group,
  ImageIcon,
  ImageOff,
  LinkIcon,
  LucideImagePlus,
  NotepadText,
  Save,
  Type
} from 'lucide-react'


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
  is_public: z.boolean(),
})

export default function EditProject() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const projectId = searchParams.get('id')

  const [imageUrl, setImageUrl] = useState('')
  const [isPublic, setIsPublic] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)


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
      id: '',
      title: '',
      image: '',
      alt: '',
      technologies: [''],
      categories: [''],
      description: '',
      url: '',
      github: '',
      is_public: false,
    },
  })


  const getProject = async () => {
    const data: ProjectProps = await getProjectById({ id: projectId || "" })

    if (data === null) {
      setIsError(true)
      return false
    }

    setIsPublic(data?.is_public)

    reset({
      id: data?.id,
      title: data?.title,
      image: data?.image,
      alt: data?.alt,
      technologies: data?.technologies,
      categories: data?.categories,
      description: data?.description,
      url: data?.url,
      github: data?.github,
      is_public: data?.is_public,
    })

  }

  useEffect(() => {
    getProject()
  }, [])

  const imageSrc = imageUrl === '' ? getValues().image : imageUrl
  const handleChangeImageUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value)
  }

  const handlePublicToggle = () => {
    setIsPublic((prev) => !prev)
    setValue('is_public', !isPublic)
  }

  const performActions = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsUpdating(false)
    router.push('/dashboard')
    router.refresh()
  }

  const onSubmit = handleSubmit(async (data) => {
    setIsUpdating(true)
    try {
      const response = await updatedProject(projectId || '', data)
      if (response) {
        toast.success("Dados alterados com sucesso")
        performActions()
      }
    }
    catch (error) {
      toast.error("Erro ao alterar os dados. Tente novamente")
      setTimeout(() => setIsUpdating(false), 2000)
    }
  })

  const Errorloading = () => {
    return (
      <>
        {isError && (
          <div className="fixed z-50 w-full h-full bg-zinc-900 flex justify-center items-center">
            <p className=" text-zinc-100 flex flex-col justify-center items-center gap-2">
              nenhum projeto encontrado com id: {projectId}
              <Link href={'/dashboard'} className="w-40 border-2 border-green-400 p-2 text-center  rounded-md text-zinc-100">
                dashboard
              </Link>
            </p>

          </div>
        )}
      </>
    )
  }

  const Loading = () => {
    return (
      <>
        {isUpdating && (
          <div className="fixed z-50 w-full h-full bg-black/90 flex justify-center items-center">
            <p className="animate-pulse text-zinc-100 flex flex-col">
              <span className="text-2xl">atualizando...</span>
              <span className="text-xs">aguarde</span>
            </p>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <Loading />
      <Errorloading />

      <div className="h-full w-full px-4 pt-20 bg-zinc-950">
        <LoggedInMenu />

        <section className="w-full h-auto bg-zinc-900 p-10  rounded-md flex flex-col items-center gap-4">
          <h4 className="text-center font-bold text-zinc-100 font-sans uppercase">
            Editar projeto
          </h4>
          <form onSubmit={onSubmit} className="flex flex-col gap-8 max-w-xl w-full">

            {/* TITLE */}
            <div className="flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">
              <label
                className="text-zinc-400"
                htmlFor='title'
              >
                <span title="título do projeto" className="cursor-pointer hover:text-green-500">
                  <Type />
                </span>
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

            {/* IMAGE */}
            <div className="flex items-end gap-2 ">

              <div className="w-full flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">
                <label
                  className="text-zinc-400"
                  htmlFor='title'
                >
                  <span title='url da imagem' className="cursor-pointer hover:text-green-500">
                    <ImageIcon />
                  </span>
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

              <div className="w-38 h-24 flex flex-col items-center justify-center text-center text-xs text-zinc-500 p-1 rounded-md border border-green-400 bg-zinc-900 relative">
                {imageSrc ? (
                  <img src={imageSrc} alt="Imagem" className="w-full h-full" />
                ) : (
                  <>
                    <ImageOff strokeWidth={1} className="w-24 h-24 text-gray-500" />
                    <span>sem imagem</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">

              <label
                className="text-zinc-400"
                htmlFor='alt'
              >
                <span title='alt da imagem' className="cursor-pointer hover:text-green-500">
                  <LucideImagePlus />
                </span>
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

            {/* DESCRIPTION */}
            <div className="flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">

              <label
                className="text-zinc-400"
                htmlFor='description'
              >
                <span title='descrição do projeto' className="cursor-pointer hover:text-green-500">
                  <NotepadText />
                </span>
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

            {/* GITHUB */}
            <div className="flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">

              <label
                className="text-zinc-400"
                htmlFor='github'
              >
                <span title='url do projeto no github' className="cursor-pointer hover:text-green-500">
                  <Github />
                </span>
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

            {/* URL */}
            <div className="flex gap-2 items-center p-1 rounded-md border border-green-400 bg-zinc-900 relative">

              <label
                className="text-zinc-400"
                htmlFor='url'
              >
                <span title='url do projeto publicado' className="cursor-pointer hover:text-green-500">
                  <LinkIcon />
                </span>

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

            {/* TECHNOLOGIES */}
            <div className=" p-1 rounded-md border border-green-400 bg-zinc-900 ">
              <span className="text-zinc-400 flex items-center gap-4 text-base mb-3 mt-2">
                <Code /> tecnologias utilizadas
              </span>

              <div className="flex flex-wrap gap-2">

                {TECHNOLOGIES.map((tech) => (
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

            {/* CATEGORIES */}
            <div className=" p-1 rounded-md border border-green-400 bg-zinc-900 ">
              <span className="text-zinc-400 flex items-center gap-4 text-base mb-3 mt-2">
                <Group /> Categorias
              </span>

              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <label key={category} className="flex text-zinc-400 gap-1">
                    <input
                      className="appearance-none w-4 h-4 border border-zinc-500 rounded-sm bg-transparent mt-1 shrink-0 checked:bg-green-500 checked:border-0"
                      type="checkbox"
                      value={category}
                      defaultChecked={isDirty && getValues().categories.includes(category)}
                      {...register('categories')}
                    />
                    {category}
                  </label>

                ))}
              </div>
            </div>

            {/* PUBLISH */}
            <div className="flex items-center space-x-2 p-1 rounded-md border border-green-400 bg-zinc-900 ">
              <span className="text-zinc-400 flex items-center gap-4 text-base mb-3 mt-2">
                <FileCheck2 /> publicar? não
              </span>
              <Switch
                className="data-[state=checked]:bg-green-400 data-[state=unchecked]:bg-slate-700"
                checked={isPublic}
                onCheckedChange={handlePublicToggle}
                {...register('is_public')}
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
      <Toaster />
    </>

  )
}