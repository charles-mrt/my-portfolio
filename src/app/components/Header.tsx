
"use client";
import { Menu } from './Menu/Menu';
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
      className={`${bgColor ? "bg-zinc-800 border-b-[1px]" : "bg-transparent"}  border-green-400 h-10 w-screen py-2 px-6 flex justify-between items-center fixed z-50`}
    >
      <Menu imageUrl={charlesLogo} color={`${bgColor ? "text-zinc-50" : "text-zinc-900"}`} />
    </header>
  )
}