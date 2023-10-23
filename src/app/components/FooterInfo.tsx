

import Image from 'next/image'

import { ListSocialMediaIcon } from '../components/SocialIcons/ListSocialMediaIcon';

import {
  ArrowBigUpDash
} from 'lucide-react';


interface FooterInfoProps {
  imageUrl: string,
  currentYear?: number,
}

export const FooterInfo = ({ imageUrl, currentYear }: FooterInfoProps) => {

  currentYear = new Date().getFullYear()

  return (
    <div className="w-full flex flex-col-reverse items-center gap-6 laptop:justify-between laptop:flex-row">

      <div className="hidden laptop:block">
        <Image src={imageUrl} alt="charles portfolio logo" className="w-36 h-auto" />
      </div>

      <p className="text-xs text-zinc-400 text-center uppercase font-medium">
        Copyright © {currentYear} charles martins. All rights reserved
      </p>

      <div className="flex items-center justify-end gap-5 text-zinc-100">
        <ListSocialMediaIcon iconSize={25} />
        <a
          href="#anchor-top"
          className="w-11 h-11 border-2 border-green-400 rounded-[5px] text-green-400 flex items-center justify-center ease-linear duration-300 hover:bg-green-400 hover:text-zinc-50"
        >
          <ArrowBigUpDash />
        </a>
      </div>

    </div>
  )
}