

import Image from 'next/image'
import charlesLogo from '/public/assets/logo.png';

import { SocialMediaIcons } from './SocialMediaIcons';

import {
  ArrowBigUpDash
} from 'lucide-react';


interface FooterInfoProps {
  imageUrl: string,
}

export const FooterInfo = ({imageUrl}:FooterInfoProps) => {
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
        <div className="border-[1px] border-green-400 rounded-[5px] w-10 h-10 flex items-center justify-center text-green-400 ">
          <a href="#anchor-top"><ArrowBigUpDash /></a>
        </div>
      </div>
    </>
  )
}