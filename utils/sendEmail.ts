import { FormData } from '@/app/components/ContactForm'

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email'

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',    
      body: JSON.stringify(data),
    })
    return response
    
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return { status: 'error', message: 'Erro ao enviar e-mail' }
  }
}