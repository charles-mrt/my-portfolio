
import {
  MessagesSquare,
  User2,
  FileCode2
} from 'lucide-react';


import { MenuNav } from './MenuNav';
import { ListSocialMediaIcon } from '../SocialIcons/ListSocialMediaIcon';

import { Modal } from '../Modal';
import { useModal } from '../../hooks/useModal';

export const MenuMobile = () => {

  const { showModal, openModal, closeModal } = useModal();

  return (
    <div className=" fixed h-screen w-screen flex flex-col items-center justify-center bg-black bg-opacity-95 laptop:hidden">

      <nav className="flex flex-col items-center gap-5 my-10">
        < MenuNav
          icon={<User2 size={20} strokeWidth={2} />}
          linkText="sobre mim"
          textAnchor="about-me"
        />
        < MenuNav
          icon={<FileCode2 size={20} strokeWidth={2} />}
          linkText="projetos"
          textAnchor="project"
        />
        < MenuNav
          icon={<MessagesSquare size={20} strokeWidth={2} />}
          linkText="contato"
          textAnchor="contato"
          onClickHandle={openModal}
        />
      </nav>

      <div className="flex text-zinc-50 gap-6">
        <ListSocialMediaIcon iconSize={25} />
      </div>

      {showModal && <Modal display="fixed" onClose={closeModal} />}

    </div>
  )
}