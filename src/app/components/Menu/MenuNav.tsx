import { ReactElement } from "react";

interface MenuNavProps {
  icon?: ReactElement;
  linkText: string;
  textAnchor: string;
  onClickHandle?: () => void;
}

export const MenuNav = ({ linkText, icon, textAnchor, onClickHandle  }: MenuNavProps) => {
  return (
    <a
      className="text-zinc-50 text-base font-bold uppercase flex items-center gap-2 border-b-4 border-transparent ease-linear duration-300 hover:border-green-400"
      href={`#${textAnchor}`}
      onClick={onClickHandle}
    >
      {icon}{linkText}
    </a>
  )
}