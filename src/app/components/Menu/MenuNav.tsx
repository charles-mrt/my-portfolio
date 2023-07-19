
interface MenuLinkProps {
  linkText: string;
  textAnchor:string;
}

export const MenuLink = ({ linkText, textAnchor }: MenuLinkProps) => {
  return (
    <a
     className="text-zinc-50 text-base font-medium uppercase" 
     href={`#${textAnchor}`} 
    >
      {linkText}
    </a>
  )
}