import { ListSocialMediaIcon } from "./SocialIcons/ListSocialMediaIcon"

import { XCircle } from 'lucide-react'

interface ModalProps {
  display: string;
  onClose: () => void;
}

export const Modal = ({ display, onClose }: ModalProps) => {

  return (

    <div className={`w-full h-full bg-black bg-opacity-90 ${display} top-0 bottom-0 right-0 left-0 m-auto z-[9999] flex items-center justify-center`}>
      
      <div className="relative max-w-lg h-1/2 flex flex-col justify-around bg-zinc-800 border-2 border-green-400 rounded-lg p-10">
        <a onClick={onClose}>
          <XCircle className="text-zinc-50 absolute top-0 right-0 mt-2 mr-2 :hover cursor-pointer" />
        </a>

        <p className="text-center font-semibold text-2xl text-zinc-50">
          Fique à vontade para me contatar pelas redes sociais,<br></br> será um prazer receber sua mensagem!
        </p>

        <div className="flex center gap-6 justify-center text-zinc-50">
          <ListSocialMediaIcon iconSize={40} selector="border-2 border-green-400 rounded-lg p-6" />
        </div>
      </div>

    </div>

  )
}