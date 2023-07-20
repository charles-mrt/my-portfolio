
interface MenuLinkProps {
  linkText: string;
  textAnchor:string;
}

export const MenuLink = ({ linkText, textAnchor }: MenuLinkProps) => {
  return (
    <a
     className="text-zinc-50 text-base font-bold uppercase border-b-4 border-transparent ease-linear duration-300 hover:border-green-400" 
     href={`#${textAnchor}`} 
    >
      {linkText}
    </a>
  )
}