import Script from 'next/script'

import {
  Mail,
  MailCheck,
  MailWarning,
  PencilLine,
  RotateCw,
  Send,
  User
} from 'lucide-react'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail } from '../../../utils/sendEmail'
import { useState } from 'react'

declare interface Grecaptcha {
  ready: (cb: () => void) => void
  execute: (secret: string | undefined, config: any) => Promise<string>
}
declare const grecaptcha: Grecaptcha
const recaptchaSiteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_PUBLIC_KEY

export type FormData = {
  name: string
  email: string
  message: string
  recaptchaToken:string
}

const nameRegex = /^[a-zA-ZÀ-ú\s]+$/

const formSchema = z.object({
  name: z.string().min(7, 'Este campo é obrigatório, minímo 7 caracteres')
    .regex(nameRegex, 'Nome e Sobrenome sem números e símbolos')
    .max(40, `Máximo ${40} caracteres`)
    .refine(value => value.trim().split(' ').length >= 2, {
      message: 'Por favor, insira um nome completo.'
    }),
  email: z.string()
    .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, {
      message: 'O email deve ser válido'
    }),
  message: z.string()
    .min(10, { message: 'campo obrigatório' })
    .max(400, { message: 'máximo 1000 caractreres' })
})


export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      recaptchaToken:'',
    },
  })

  const [isSending, setIsSending] = useState(false)
  const [isMessageSucess, setIsMessageSucess] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const clearFormFields = () => {
    setValue('name', '')
    setValue('email', '')
    setValue('message', '')
  }

  const HandleFormMessage = () => {
    return (
      <>
        {isMessageSucess ? (
          <div className="bg-gradient-to-l from-zinc-600 rounded-md border-2 border-green-400">
            <span className="text-zinc-100 flex gap-2 items-center p-2  ">
              <MailCheck className="text-green-400" />
              Menssagem enviada com sucesso!
            </span>
          </div>
        ) : (
          <div className="bg-gradient-to-l from-zinc-600 rounded-md border-2 border-red-400">
            <span className="text-zinc-100 flex gap-2 items-center p-2 border-green-400 ">
              <MailWarning className="text-red-400" />
              Erro interno, tente novamente!
            </span>
          </div>
        )}
      </>
    )
  }

  const handleMessageDisplay = (sucess: boolean, show: boolean, time: number) => {
    setIsMessageSucess(sucess)
    setShowMessage(show)
    setTimeout(() => setShowMessage(false), time)
  }


  const onSubmit = async (data: FormData) => {
    setIsSending(true)
    try {
      const token = await grecaptcha.execute(recaptchaSiteKey, { action: 'submit' })
      data.recaptchaToken = token 
      const response = await sendEmail(data)
  
      if (response.status === 200) {
        clearFormFields()
        handleMessageDisplay(true, true, 4000)
      } else {
        handleMessageDisplay(false, true, 4000)
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error)
      handleMessageDisplay(false, true, 4000)
    } finally {
      setIsSending(false)
    }
  }
  
  
  return (
    <div className="">
      {isSending && (
        <div className="absolute flex flex-col items-center justify-center  top-0 right-0 w-full h-full z-50  bg-black/80 rounded-md text-zinc-100">
          <RotateCw className="animate-spin" />
          <span className="animate-pulse">Aguarde enviando...</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">

        <div className="flex gap-2 items-center p-1 rounded-md border-2 border-green-400 bg-zinc-900 relative">

          <label
            className="text-zinc-400"
            htmlFor='name'
          >
            <User />
          </label>

          <input
            className="w-full p-2  bg-zinc-900 outline-none text-zinc-50"
            type="text"
            placeholder="Nome completo"
            {...register('name')}
          />

          {errors.name &&
            <span className="text-red-400 absolute -bottom-6 text-xs">
              {errors.name.message}
            </span>
          }

        </div>

        <div className="flex gap-2 items-center p-1 rounded-md border-2 border-green-400 bg-zinc-900 relative">
          <label
            className="text-zinc-400"
            htmlFor='email'
          >
            <Mail />
          </label>

          <input
            className="w-full p-2  bg-zinc-900 outline-none text-zinc-50"
            type="email"
            placeholder="Seu melhor email"
            {...register('email')}
          />

          {errors.email &&
            <span className="text-red-400 absolute -bottom-6 text-xs">
              {errors.email.message}
            </span>
          }

        </div>

        <div className="flex gap-2 items-center p-1 rounded-md border-2 border-green-400 bg-zinc-900 relative">

          <label
            className="text-zinc-400"
            htmlFor='message'
          >
            <PencilLine />
          </label>

          <textarea
            placeholder="Digite sua mensagem aqui..."
            className="w-full p-2  bg-zinc-900 outline-none text-zinc-50 max-h-48 overflow-y-auto"
            {...register('message')}
          >
          </textarea>

          {errors.message &&
            <span className="text-red-400 absolute -bottom-6 text-xs">
              {errors.message.message}
            </span>
          }

        </div>

        <button type="submit" className="text-zinc-50 text-center font-semibold uppercase tracking-[1px] border-2 border-green-400 rounded-md p-3 flex items-center justify-center gap-2 ease-linear duration-300 cursor-pointer bg-green-400 hover:bg-zinc-700 hover:border-green-400">
          <Send /> enviar
        </button>
        {showMessage && (
          <HandleFormMessage />
        )}
      </form>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`} />
    </div>
  )
}