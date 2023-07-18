
import {
  Mouse,
  Triangle,
} from 'lucide-react';


export const ScrollDownIndicator = () => {
  return (
    < div className="text-green-400 mt-8 items-center flex flex-col " >
      <Mouse size={31} />
      <Triangle size={28} className="transform rotate-180 mt-2 opacity-60" />
      <Triangle size={26} className="transform rotate-180 -mt-3.5 opacity-60" />
      <Triangle size={24} className="transform rotate-180 -mt-3 opacity-60" />
    </div >
  )
}