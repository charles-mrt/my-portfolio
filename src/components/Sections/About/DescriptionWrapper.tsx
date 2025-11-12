'use client'
import { ChevronRight, ChevronUp } from "lucide-react"
import { useState } from "react"
import { DescriptionContent } from "./DescriptionContent"

export const DescriptionWrapper = () => {
  const [isToogle, setIsToogle] = useState(Boolean)

  const handleToogle = () => setIsToogle(!isToogle)

  return (
    <>
      <div className={` ${!isToogle ? 'bg-gradient-to-b from-zinc-50 via-zinc-50 to-zinc-800 text-transparent bg-clip-text overflow-hidden transition-about-close ' : 'overflow-clip transition-about-open text-zinc-50'
        } font-normal text-lg text-center tracking-[1px] laptop:text-left lg:indent-8 space-y-2`}>

        <DescriptionContent />
      </div>

      <button
        className="text-green-400"
        onClick={() => handleToogle()}
      >

        {!isToogle ? (
          <span className="transition-about-close flex items-center gap-1 " translate='no'>
            <ChevronRight />
            continuar lendo...
          </span>
        ) : (
          <span className="transition-about-open flex items-center gap-1" translate='no'>
            <ChevronUp />
            recuar!
          </span>
        )}

      </button>
    </>
  )
}