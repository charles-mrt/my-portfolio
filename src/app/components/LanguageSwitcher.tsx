import { useEffect, useState } from "react"
import { hasCookie, setCookie } from 'cookies-next'

import Image from "next/image"

import { Languages } from "lucide-react"
import pt from '/public/assets/flags/pt.png'
import es from '/public/assets/flags/es.png'
import en from '/public/assets/flags/en.png'


declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: any
  }
}

export const LanguageSwitcher = () => {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    const addScript = document.createElement('script')
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
    document.body.appendChild(addScript)
    window.googleTranslateElementInit = googleTranslateElementInit

    return () => {
      document.body.removeChild(addScript)
    }
  }, [])


  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
      pageLanguage: 'auto',
      autoDisplay: false,
      includedLanguages: 'pt,en,es',
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
    }, 'google_translate_element')
  }

  const langChange = (language: string) => {
    const newLanguage = decodeURI(language)

    if (hasCookie('googtrans')) {
      setCookie('googtrans', newLanguage)
    } else {
      setCookie('googtrans', newLanguage)
    }

    setSelected(newLanguage)
    window.location.reload()
  }

  const [showFlag, setShowFlags] = useState(false)
  
  const handleShowFlag = () => {
    setShowFlags(!showFlag)
  }

  return (
    <>
      <div className="flex items-center gap-2 transition-all bg-zinc-800 p-[2px] rounded-md">
        <button onClick={handleShowFlag} className="text-white hover:text-green-400" title="selecionar idioma"><Languages /></button>

        {showFlag &&
          <div className="flex items-center gap-2 transition-all bg-zinc-100 rounded-md p-[1px]">
            <button onClick={() => langChange('/auto/pt')}><Image src={pt} width={20} alt="bandeira do Brasil" title="português"/></button>
            <button onClick={() => langChange('/auto/en')}><Image src={en} width={20} alt="bandeira da Inglaterra" title="ingles"/></button>
            <button onClick={() => langChange('/auto/es')}><Image src={es} width={20} alt="bandeira da Espanha" title="espanhol"/></button>
          </div>
        }
      </div>
    </>
  )
}
