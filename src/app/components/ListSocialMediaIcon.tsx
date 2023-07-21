import { SocialMediaIcon } from './SocialMedia';

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


export const SocialMediaIcons = () => {
  return (
    <>
      <SocialMediaIcon url={socialLinks.isntagram} title="instagram charles" icon={Instagram} />
      <SocialMediaIcon url={socialLinks.facebook} title="facebook charles" icon={Facebook} />
      <SocialMediaIcon url={socialLinks.linkedin} title="linkedin charles" icon={Linkedin} />
      <SocialMediaIcon url={socialLinks.github} title="github charles" icon={Github} />
    </>
  )
}