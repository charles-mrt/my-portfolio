'use client'

import { useModal } from "@/app/hooks/useModal"
import { Button } from "@/components/Button"
import { Modal } from "@/components/Modal"
import { FileCode2, MessagesSquare } from "lucide-react"

export const ActionButtons = () => {
  const { showModal, openModal, closeModal } = useModal()
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          link="#contato"
          title="contato"
          fontSize="text-base"
          size="w-52 h-16"
          bgColor="bg-green-400"
          borderColor="border-green-400"
          icon={<MessagesSquare />}
          onClickHandle={openModal}
        />
        <Button
          link="#project"
          title="projetos"
          fontSize="text-base"
          size="w-52 h-16"
          bgColor="bg-zinc-700"
          borderColor="border-zinc-700"
          icon={<FileCode2 />}
        />
      </div>
      {showModal && <Modal display="fixed" onClose={closeModal} />}
    </>
  )
}