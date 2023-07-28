"use client";
import { MenuMobile } from './Menu/MenuMobile';
import { MenuDesktop } from './Menu/MenuDesktop';

import charlesLogo from '/public/assets/logo.svg';

import { useState, useEffect } from 'react';

export const Header = () => {

  const [bgColor, setBgColor] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      scrollTop !== 0 ? setBgColor(true) : setBgColor(false)
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${bgColor ? "bg-zinc-800 border-b-[1px]" : "bg-transparent"}  border-green-400 h-12 w-screen fixed z-50`}
    >
      <MenuMobile/>
      <MenuDesktop imageUrl={charlesLogo} color={`${bgColor ? "text-zinc-50" : "text-zinc-900"}`} />
    </header>
  )
}