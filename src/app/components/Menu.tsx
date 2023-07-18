

import Image from 'next/image'
import charlesLogo from '/public/assets/logo.png';

import { SocialMediaIcons } from './SocialMediaIcons';

export const Menu = () => {
  return (
    <>
      <div className="w-[33%]">
        <Image src={charlesLogo} alt="charles portofio logo" />
      </div>

      <nav className="text-zinc-50 text-base font-medium uppercase flex justify-center gap-5 w-[33%]">
        <a href="about-m2" className="">sobre-mim</a>
        <a href="project" className="">projeto</a>
        <a href="contact" className="">contato</a>
      </nav>

      {/* <Menu className="text-zinc-50" /> */}
      <div className="w-[33%] flex justify-end gap-5 text-zinc-900">
        <SocialMediaIcons />
      </div>
    </>
  )
}