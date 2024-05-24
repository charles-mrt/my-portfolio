import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

const recaptchaSecret = process.env.GOOGLE_RECAPTCHA_SECRET_KEY

export async function POST(request: NextRequest) {
  const { name, email, message, recaptchaToken} = await request.json()

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify',{
  method:'POST',
  headers: {
    'Content-Type':'application/x-www-form-urlencoded'
  },
  body:`secret=${recaptchaSecret}&response=${recaptchaToken}`
  })
  const jsonRes = await response.json()
   
  if (jsonRes.success && jsonRes.score >= 0.7) {
    
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.NODEMAILER_PASS,
      },
    })

    const mailOptions: Mail.Options = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      // cc: email, (uncomment this line if send a copy to the sender)
      subject: `Message from ${name} (${email})`,
      text: message,
    }

    const sendMailPromise = () => {
      return new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Email sent')
          } else {
            reject(err.message)
          }
        })
      })
    }
  
    try {
      await sendMailPromise()
      return NextResponse.json({ message: 'Email sent' }, { status: 200 })
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 })
    }
  } 
  
}

