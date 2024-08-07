
import Image from "next/image"
import Link from "next/link"

import { EditIcon, ImageOff } from "lucide-react"
import { getAllProjects } from "@/app/services/projects"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table"


export const Projects = async () => {

  const projects = await getAllProjects()

  return (

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
          <TableHead>criado </TableHead>
          <TableHead>alterado </TableHead>
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

            <TableCell>
              {project.created_at ? new Date(project.created_at).toLocaleDateString('pt-BR') : 'Data indisponível'}
            </TableCell>

            <TableCell>
              {project.updated_at ? new Date(project.updated_at).toLocaleDateString('pt-BR') : 'Data indisponível'}
            </TableCell>

          </TableRow>
        ))}

      </TableBody>
    </Table>
  )
}