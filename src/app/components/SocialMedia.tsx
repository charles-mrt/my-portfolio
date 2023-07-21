import type { Icon } from 'lucide-react';

interface SocialMediaIconProps {
  url: string;
  title: string;
  icon: Icon;
}

export const SocialMediaIcon = ({ url, title, icon: Icon }: SocialMediaIconProps) => {

  return (

    <a 
      href={url} 
      title={title} 
      target="_blank " 
      rel="noreferrer noopener"
      className="ease-linear duration-200 hover:scale-125"
    >
      <Icon />
    </a>

  )
}