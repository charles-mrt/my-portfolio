import { ContactForm } from './ContactForm';
import { ListSocialMediaIcon } from './SocialIcons/ListSocialMediaIcon'
import { XCircle } from 'lucide-react'

interface ModalProps {
  display: string;
  onClose: () => void;
}

export const Modal = ({ display, onClose }: ModalProps) => {

  return (

    <div className={`w-full h-full bg-black bg-opacity-90 ${display} top-0 bottom-0 right-0 left-0 m-auto z-[9999] flex items-center justify-center`}>

      <div className="relative max-w-lg  bg-zinc-800 border-2 border-green-400 rounded-lg p-2 laptop:p-10">
        <header>
          <a onClick={onClose}>
            <XCircle className="text-zinc-50 absolute top-0 right-0 mt-2 mr-2 :hover cursor-pointer" />
          </a>
          <p className="mb-1 mt-4 text-base text-center text-slate-50  laptop:text-xl laptop:mb-6 laptop:mt-0">Envie-me uma mensagem</p>
        </header>

        <div className="w-full pb-6">
          <ContactForm />
        </div>

        <footer className='bg-zinc-900 p-2 rounded-md'>
          <p className="hidden laptop:block text-sm text-center text-zinc-50 p-2 laptop:text-xl">
            <strong>Ou</strong><br></br> fique à vontade para me contatar pelas redes sociais,<br></br> será um prazer receber sua mensagem!
          </p>

          <div className="text-zinc-50 flex gap-2 justify-center laptop:flex laptop:justify-between">
            <ListSocialMediaIcon iconSize={30} selector="border-2 border-green-400 rounded-lg  w-12 h-12 laptop:w-auto laptop:h-auto laptop:p-6" />
          </div>
        </footer>

      </div>
    </div >

  )
}