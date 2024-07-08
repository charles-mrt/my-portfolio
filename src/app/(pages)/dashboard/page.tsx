'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { ProjectProps } from "@/app/interfaces/project.interface"
import { getAllProjects } from "@/app/services/projects"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table"

import { EditIcon, HomeIcon, ImageOff, LayoutDashboard } from "lucide-react"


export default function DashBoard() {

  const [projects, setProjects] = useState<ProjectProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getAllProjects()
      setProjects(projectsData)
    }
    fetchData()
  }, [])


  return (
    <div className="h-full w-full px-4 pt-20 bg-zinc-950">
      <header className="fixed z-50 top-0 left-0 w-full h-auto p-2 border-b-[1px] bg-zinc-800 border-green-500">
        <nav className="flex gap-2">
          <Link href={'/'} className="flex gap-2 items-center justify-center bg-zinc-700 p-2 rounded-md text-zinc-100 font-sans">
            <HomeIcon width={16} />
            Home
          </Link>
          <Link href={'/dashboard'} className="flex gap-2 items-center justify-center bg-zinc-700 p-2 rounded-md text-zinc-100 font-sans">
            <LayoutDashboard width={16} />
            Dashboard
          </Link>
        </nav>
      </header>

      <section className="w-full h-auto bg-zinc-900 p-10  rounded-md flex flex-col gap-4">
        <h4 className="text-center font-bold text-zinc-100 font-sans uppercase">
          tabela de projetos
        </h4>
        <Table className=" text-zinc-300 ">

          <TableHeader >
            <TableRow className="font-bold text-base border-zinc-800">
              <TableHead> editar </TableHead>
              <TableHead> publicado </TableHead>
              <TableHead> título </TableHead>
              <TableHead> imagem </TableHead>
              <TableHead> url da Imagem </TableHead>
              <TableHead> descrição </TableHead>
              <TableHead> tecnologias </TableHead>
              <TableHead> categorias </TableHead>
              <TableHead> url github </TableHead>
              <TableHead> url projeto </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {projects.map((project) => (
              <TableRow key={project.id} className="border-zinc-800">

                <TableCell>
                  <Link
                    href={`edit?id=${project.id}`}
                    className="bg-zinc-950 rounded-md p-2 hover:opacity-70 flex items-center gap-2"
                  >
                    <EditIcon strokeWidth={1} /> editar
                  </Link>
                </TableCell>

                <TableCell className="font-medium">
                  {project.is_public
                    ? (<span className="text-green-400"> sim </span>)
                    : (<span className="text-red-500">não </span>)
                  }
                </TableCell>

                <TableCell >
                  {project.title}
                </TableCell>

                <TableCell className="font-medium">
                  {project.image ? (
                    <Image src={project.image} width={150} height={150} alt={project.alt} className="w-36 h-20 border-2 border-zinc-700 rounded-md" />
                  ) : (
                    <span className="flex flex-col items-center text-zinc-500 text-xs border-2 border-zinc-700 rounded-md max-h-20">
                      <ImageOff width={60} height={60} strokeWidth={1} className="text-zinc-700" />
                      sem imagem
                    </span>
                  )}
                </TableCell>

                <TableCell>
                  {project.image ? (
                    <Link
                      href={project.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600"
                    >
                      acessar
                    </Link>
                  ) : (
                    <span className="text-zinc-500">
                      sem url
                    </span>
                  )}

                </TableCell>

                <TableCell className="max-w-4xl">
                  <p className="overflow-auto max-h-16">{project.description}</p>
                </TableCell>

                <TableCell> {project.technologies.join(', ')} </TableCell>

                <TableCell>
                  {project.categories.map(category => category === 'all' ? 'todas' : category).join(', ')}
                </TableCell>

                <TableCell >
                  <div className="flex flex-col gap-2">
                    {project.github ? (
                      <>
                        {project.github}
                        <Link href={project.github} className="text-violet-600" >
                          acessar
                        </Link>
                      </>
                    ) : (
                      <span className="text-zinc-500">
                        sem url
                      </span>
                    )}

                  </div>
                </TableCell>

                <TableCell >
                  <div className="flex flex-col gap-2">
                    {project.url ? (
                      <>
                        {project.url}
                        <Link href={project.url} className="text-violet-600" >
                          acessar
                        </Link>
                      </>
                    ) : (
                      <span className="text-zinc-500">
                        sem url
                      </span>
                    )}

                  </div>
                </TableCell>

              </TableRow>
            ))}

          </TableBody>
        </Table>
      </section>

    </div>


  )
}