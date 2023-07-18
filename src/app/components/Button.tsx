
import { ReactElement } from 'react';

interface ButtonProps {
  link: string,
  title: string,
  fontSize:string,
  icon?: ReactElement,
  size?: string,
  bgColor: string;
  borderColor: string;

}

export const Button = ({ link, title, fontSize, icon, size, bgColor, borderColor }: ButtonProps) => {

  return (
      <a
        href={link}
        title={title}
        className={`${size} ${fontSize} ${bgColor} ${borderColor} text-zinc-50 font-semibold uppercase tracking-[1px] border-2 rounded-[5px] flex items-center justify-center gap-2`}
      >
        {icon}
        {title}
      </a>
  )
}