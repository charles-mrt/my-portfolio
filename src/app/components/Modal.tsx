import { ListSocialMediaIcon } from "./SocialIcons/ListSocialMediaIcon"

import { XCircle } from 'lucide-react';

export const Modal = () => {

  return (

    <div id="teste2" className="w-4/5 h-1/2 flex flex-col justify-around bg-zinc-800 border-2 border-green-400 rounded-lg p-10 fixed top-0 bottom-0 right-0 left-0 m-auto z-[9999]">

      <XCircle className="text-zinc-50 absolute top-0 right-0 mt-2 mr-2 :hover cursor-pointer" />

      <p className="text-center font-semibold text-2xl text-zinc-50">
        Acesse minhas redes sociais e entre em contato, será um prazer lhe receber
      </p>

      <div className="flex center gap-6 justify-center text-zinc-50">
        <ListSocialMediaIcon iconSize={40} selector="border-2 border-green-400 rounded-lg p-6" />
      </div>
    </div>

  )
}