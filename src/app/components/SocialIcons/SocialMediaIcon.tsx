
interface SocialMediaIconProps {
  url: string;
  title: string;
  icon: React.ComponentType<any>;
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
      className={`ease-linear duration-200 hover:scale-125 ${extraSelectors} flex items-center justify-center`}
    >
      <Icon size={size} />
    </a>

  )
}