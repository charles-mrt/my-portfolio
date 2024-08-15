'use client'
import { deleteProject } from '../../services/projects'
import { toast } from 'sonner'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface DeleteButtonProps {
  id: string
  title: string
}

export const DeleteButton = ({ id, title }: DeleteButtonProps) => {

  const router = useRouter()

  const handleDeleteProject = async () => {

    const confirmDelete = window.confirm(`Você tem certeza que deseja deletar o projeto "${title}"? Esta ação não pode ser desfeita.`)
    if (!confirmDelete) return

    const response = await deleteProject(id)
    if (response) {
      toast.success(`Projeto ${title} excluído com sucesso`)
      router.refresh()
    } else {
      toast.error(`Error ao excluir ${title}, tente novamente`)
    }
  }


  return (
    <button
      onClick={handleDeleteProject}
      className="bg-zinc-800 text-red-500 rounded-md p-2 hover:opacity-70 flex items-center justify-center"
    >
      <Trash2 />
    </button>
  )
}