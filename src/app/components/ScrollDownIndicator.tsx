
import {
  Mouse,
  Triangle,
} from 'lucide-react';

interface ScrollDownIndicatorProps {
  idName?: string;
}

export const ScrollDownIndicator = ({ idName }: ScrollDownIndicatorProps) => {

  return (

    <a href={`#${idName}`}
      className="text-green-700 mt-8 items-center flex flex-col py-4 ease-linear duration-300 hover:text-green-400"
    >
      <Mouse size={31} className="text-green-400" />
      <Triangle size={28} className="transform rotate-180 mt-2 opacity-90" />
      <Triangle size={26} className="transform rotate-180 -mt-3.5 opacity-80" />
      <Triangle size={24} className="transform rotate-180 -mt-3 opacity-75" />
    </a>
    
  )
}