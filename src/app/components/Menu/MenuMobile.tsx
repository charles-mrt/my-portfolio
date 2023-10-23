
import {
  MessagesSquare,
  User2,
  FileCode2,
  Menu as OpenMenuIcon,
  X as CloseMenuIcon
} from 'lucide-react';

import Image from 'next/image';

import { MenuNav } from './MenuNav';
import { ListSocialMediaIcon } from '../SocialIcons/ListSocialMediaIcon';

import { Modal } from '../Modal';
import { useModal } from '../../hooks/useModal';
import { useState } from 'react';


interface MenuMenuMobileProps {
  imageUrl: string;
}

export const MenuMobile = ({ imageUrl }: MenuMenuMobileProps) => {

  const { showModal, openModal, closeModal } = useModal();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full laptop:hidden">
      <div className="w-full px-2 flex justify-between">
        <Image src={imageUrl} alt="charles portfolio logo" className="w-20 h-auto" />

        {openMenu ? (
          <CloseMenuIcon className="text-zinc-50 absolute  -mt-1 right-4 z-50" size={30} onClick={() => setOpenMenu(false)} />
        ) : (
          <OpenMenuIcon className="text-zinc-50 mr-2" size={30} onClick={() => setOpenMenu(true)} />
        )}

      </div>

      <div className={`${openMenu ? "fixed" : "hidden"} top-0 h-screen w-screen flex flex-col items-center justify-center bg-zinc-900`}>

        <nav className="flex flex-col items-center gap-5 my-10">
          < MenuNav
            icon={<User2 size={20} strokeWidth={2} />}
            linkText="sobre mim"
            textAnchor="about-me"
            onClickHandle={() => setOpenMenu(false)}
          />
          < MenuNav
            icon={<FileCode2 size={20} strokeWidth={2} />}
            linkText="projetos"
            textAnchor="project"
            onClickHandle={() => setOpenMenu(false)}
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

      </div>

      {showModal && <Modal display="fixed" onClose={closeModal} />}

    </div>
  )
}