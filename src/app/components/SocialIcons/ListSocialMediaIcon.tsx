import { SocialMediaIcon } from './SocialMediaIcon';

import {
  Instagram,
  Facebook,
  Linkedin,
  Github,
} from 'lucide-react';

const socialLinks = {
  isntagram: "https://www.instagram.com/charles__mrt/",
  facebook: "https://www.facebook.com/charles.martins.3956",
  linkedin: "https://www.linkedin.com/in/charles-martins-tecnologia-da-informacao/",
  github: "https://github.com/charles-mrt",
}

interface ListSocialMediaIconProps {
  selector?: string;
  iconSize?: number;
}

export const ListSocialMediaIcon = ({ selector, iconSize }: ListSocialMediaIconProps) => {
  return (
    <>
      <SocialMediaIcon url={socialLinks.isntagram} title="instagram charles" icon={Instagram} extraSelectors={selector} size={iconSize}/>
      <SocialMediaIcon url={socialLinks.facebook} title="facebook charles" icon={Facebook} extraSelectors={selector} size={iconSize}/>
      <SocialMediaIcon url={socialLinks.linkedin} title="linkedin charles" icon={Linkedin} extraSelectors={selector} size={iconSize}/>
      <SocialMediaIcon url={socialLinks.github} title="github charles" icon={Github} extraSelectors={selector} size={iconSize}/>
    </>
  )
}