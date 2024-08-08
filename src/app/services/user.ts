import { cookies } from 'next/headers'

export  const isSessionValid = async () => {
  const sessionCookie = cookies().get('ch_session')
  if (sessionCookie?.value) return true
  
  return false
}