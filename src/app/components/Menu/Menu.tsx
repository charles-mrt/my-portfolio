
import Image from 'next/image'
import { MenuNav } from './MenuNav';
import { SocialMediaIcons } from '../ListSocialMediaIcon';


import {
  MessagesSquare,
  User2,
  FileCode2
} from 'lucide-react';

interface MenuProps {
  imageUrl: string;
  color: string;
}
export const Menu = ({ imageUrl, color}: MenuProps) => {

  return (
    <>
      <div className="w-[33%]">
        <Image src={imageUrl} alt="charles portfolio logo" />
      </div>

      <nav className=" flex justify-center w-auto gap-6">
        < MenuNav icon={<User2  size={20} strokeWidth={2}/>} linkText="sobre mim" textAnchor="about-me" />
        < MenuNav icon={<FileCode2  size={20} strokeWidth={2}/>} linkText="projetos" textAnchor="project" />
        < MenuNav icon={<MessagesSquare size={20} strokeWidth={2}/>} linkText="contato" textAnchor="contact" />
      </nav>

      <div className={`w-[33%] flex justify-end gap-5 ${color}`}>
        <SocialMediaIcons />
      </div>
    </>
  )
}