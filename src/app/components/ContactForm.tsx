
import { Mail, Send, User,  } from 'lucide-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'campo obrigatório',
  }),
  email: z.string()
    .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, {
      message: 'O email deve ser válido'
    }),

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
          type="text"
          placeholder="nome completo"
          {...register('name')}
          className="w-full p-2  bg-zinc-900 outline-none text-zinc-50"
        />
        {errors.name && <span className="text-red-400 absolute -bottom-6 text-xs">{errors.name.message}</span>}
      </div>

      <div className="flex gap-2 items-center p-1 rounded-md border-2 border-green-400 bg-zinc-900 relative">
        <label className="text-zinc-400"><Mail /></label>
        <input
          type="email"
          placeholder="seu melhor email"
          {...register('email')}
          className="w-full p-2  bg-zinc-900 outline-none text-zinc-50"
        />
        {errors.email && <span className="text-red-400 absolute -bottom-6 text-xs">{errors.email.message}</span>}
      </div>

      <button type="submit" className="text-zinc-50 text-center font-semibold uppercase tracking-[1px] border-2 border-green-400 rounded-md p-3 flex items-center justify-center gap-2 ease-linear duration-300 cursor-pointer bg-green-400 hover:bg-zinc-700 hover:border-green-400">
        <Send /> enviar
      </button>

    </form>
  )
}