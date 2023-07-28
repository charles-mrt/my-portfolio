import type { Icon } from 'lucide-react';

interface SocialMediaIconProps {
  url: string;
  title: string;
  icon: Icon;
  size?: number;
  extraSelectors?: string;
}

export const SocialMediaIcon = ({ url, title, icon: Icon, size, extraSelectors}: SocialMediaIconProps) => {

  return (

    <a 
      href={url} 
      title={title} 
      target="_blank " 
      rel="noreferrer noopener"
      className={`ease-linear duration-200 hover:scale-125 ${extraSelectors}`}
    >
      <Icon size={size} />
    </a>

  )
}