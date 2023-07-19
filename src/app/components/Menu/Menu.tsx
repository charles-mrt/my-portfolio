
import Image from 'next/image'
import { MenuLink } from './MenuNav';
import { SocialMediaIcons } from '../SocialMediaIcons';

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
        < MenuLink linkText="sobre mim" textAnchor="about-me" />
        < MenuLink linkText="projetos" textAnchor="project" />
        < MenuLink linkText="contato" textAnchor="contact" />
      </nav>

      <div className={`w-[33%] flex justify-end gap-5 ${color}`}>
        <SocialMediaIcons />
      </div>
    </>
  )
}