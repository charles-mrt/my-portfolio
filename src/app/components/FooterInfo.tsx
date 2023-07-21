

import Image from 'next/image'
import charlesLogo from '/public/assets/logo.png';

import { SocialMediaIcons } from './ListSocialMediaIcon';

import {
  ArrowBigUpDash
} from 'lucide-react';


interface FooterInfoProps {
  imageUrl: string,
}

export const FooterInfo = ({ imageUrl }: FooterInfoProps) => {
  return (
    <>
      <div className="w-[33%]">
        <Image src={imageUrl} alt="charles portfolio logo" />
      </div>

      <p className="text-xs text-zinc-400 uppercase font-medium">
        Copyright © 2023 charles martins. All rights reserved
      </p>

      <div className="w-[33%] flex items-end justify-end gap-5 text-zinc-100 mb-5">
        <SocialMediaIcons />    
          <a
            href="#anchor-top"
            className="w-10 h-10 border-[1px] border-green-400 rounded-[5px] text-green-400 flex items-center justify-center ease-linear duration-300 hover:bg-green-400 hover:text-zinc-50"
          >
            <ArrowBigUpDash />
          </a>       
      </div>
    </>
  )
}