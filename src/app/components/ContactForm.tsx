
import { Mail, PencilLine, Send, User, } from 'lucide-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">

      <div className="flex gap-2 items-center p-1 rounded-md border-2 border-green-400 bg-zinc-900 relative">
        <label className="text-zinc-400"><User /></label>
        <input
          className="w-full p-2  bg-zinc-900 outline-none text-zinc-50"
          type="text"
          placeholder="nome completo"
          {...register('name')}
        />
        {errors.name && <span className="text-red-400 absolute -bottom-6 text-xs">{errors.name.message}</span>}
      </div>

      <div className="flex gap-2 items-center p-1 rounded-md border-2 border-green-400 bg-zinc-900 relative">
        <label className="text-zinc-400"><Mail /></label>
        <input
          className="w-full p-2  bg-zinc-900 outline-none text-zinc-50"
          type="email"
          placeholder="seu melhor email"
          {...register('email')}
        />
        {errors.email && <span className="text-red-400 absolute -bottom-6 text-xs">{errors.email.message}</span>}
      </div>

      <div className="flex gap-2 items-center p-1 rounded-md border-2 border-green-400 bg-zinc-900 relative">
        <label className="text-zinc-400"><PencilLine /></label>
        <textarea
          className="w-full p-2  bg-zinc-900 outline-none text-zinc-50 max-h-48 overflow-y-auto"
          {...register('message')}
        >
        </textarea>
        {errors.message && <span className="text-red-400 absolute -bottom-6 text-xs">{errors.message.message}</span>}
      </div>

      <button type="submit" className="text-zinc-50 text-center font-semibold uppercase tracking-[1px] border-2 border-green-400 rounded-md p-3 flex items-center justify-center gap-2 ease-linear duration-300 cursor-pointer bg-green-400 hover:bg-zinc-700 hover:border-green-400">
        <Send /> enviar
      </button>

    </form>
  )
}