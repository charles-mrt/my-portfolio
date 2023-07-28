import {
  MessagesSquare,
  User2,
  FileCode2
} from 'lucide-react';

import Image from 'next/image'
import { MenuNav } from './MenuNav';
import { ListSocialMediaIcon } from '../SocialIcons/ListSocialMediaIcon';

import { Modal } from '../Modal';
import { useModal } from '../../hooks/useModal';


interface MenuDesktopProps {
  imageUrl: string;
  color: string;
}

export const MenuDesktop = ({ imageUrl, color }: MenuDesktopProps) => {

  const { showModal, openModal, closeModal } = useModal();

  return (

    <div className="hidden laptop:flex justify-between items-center w-full  py-2 px-6">

      <div className="w-[33%]">
        <Image src={imageUrl} alt="charles portfolio logo" className="w-36 h-auto" />
      </div>

      <nav className=" flex justify-center w-auto gap-6">
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

      <div className={`w-[33%] flex justify-end gap-5 ${color}`}>
        <ListSocialMediaIcon iconSize={25} />
      </div>

      {showModal && <Modal display="fixed" onClose={closeModal} />}

    </div>
  )
}