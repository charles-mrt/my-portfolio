
import {
  MessagesSquare,
  User2,
  FileCode2
} from 'lucide-react';

import Image from 'next/image'
import { MenuNav } from './MenuNav';
import { ListSocialMediaIcon } from '../SocialIcons/ListSocialMediaIcon';

import { Modal } from '../Modal';
import {useModal} from '../../hooks/useModal';


interface MenuProps {
  imageUrl: string;
  color: string;
}

export const Menu = ({ imageUrl, color}: MenuProps) => {

  const { showModal, openModal, closeModal } = useModal();
 
  return (
    <>
      <div className="w-[33%]">
        <Image src={imageUrl} alt="charles portfolio logo" />
      </div>

      <nav className=" flex justify-center w-auto gap-6">
        < MenuNav icon={<User2  size={20} strokeWidth={2}/>} linkText="sobre mim" textAnchor="about-me" />
        < MenuNav icon={<FileCode2  size={20} strokeWidth={2}/>} linkText="projetos" textAnchor="project" />
        < MenuNav 
          icon={<MessagesSquare size={20} strokeWidth={2}/>} 
          linkText="contato" 
          textAnchor="contato" 
          onClickHandle={openModal} 
        />
      </nav>

      <div className={`w-[33%] flex justify-end gap-5 ${color}`}>
        <ListSocialMediaIcon />
      </div>

      {showModal && <Modal display="fixed" onClose={closeModal} />}
      
    </>
  )
}