import { Suspense } from 'react'
import { LoggedInMenu } from '@/app/components/Menu/LoggedInMenu'
import { ProjectsTable } from '@/app/components/Projects/ProjectsTable'
import { Toaster } from '@/app/components/ui/sonner'

export default async function DashBoard() {

  return (
    <div className="w-full px-4 pt-20 ">
      <LoggedInMenu />

      <section className="w-full bg-zinc-900 p-10  rounded-md flex flex-col gap-4">
        <h4 className="text-center font-bold text-zinc-100 font-sans uppercase">
          tabela de projetos
        </h4>

        <Suspense fallback={
          <div className="absolute inset-0 m-auto flex items-center justify-center">
            <p className="text-white text-2xl animate-pulse">Loading...</p>
          </div>
        }>
          <ProjectsTable />
        </Suspense>
        
      </section>
      <Toaster />
    </div>


  )
}