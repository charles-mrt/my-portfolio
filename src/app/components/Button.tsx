
import { ReactElement } from 'react';

interface ButtonProps {
  link?: string;
  title: string;
  fontSize: string;
  icon?: ReactElement;
  size?: string;
  bgColor: string;
  borderColor: string;
  onClickHandle?: () => void;
  openNewTab?:boolean
}

export const Button = ({ link, title, fontSize, icon, size, bgColor, borderColor, onClickHandle, openNewTab }: ButtonProps) => {
 
  return (
    <a
      href={link}
      title={title}
      className={`${size} ${fontSize} ${bgColor} ${borderColor}
        text-zinc-50 
        text-center
        font-semibold 
        uppercase 
        tracking-[1px] 
        border-2 
        rounded-[5px] 
        px-2
        flex 
        items-center 
        justify-center 
        gap-2        
        ease-linear 
        duration-300
        cursor-pointer
      hover:bg-zinc-700
       hover:border-green-400`}
      onClick={onClickHandle}
      target={openNewTab ? '_blank' : '_self'}
      rel="noreferrer noopener"
    >
      {icon}
      {title}
    </a>
  )
}