import { z } from 'zod'

export const FormDataSchema = z.object({
  firstname: z.string().min(1,{message:'Name is required.'}),
  lastname: z.string().min(1,{message:'Last Name is required.'}),
  email: z.string().min(1,{message:'Email is required'}).email('Invalid email.'),
  services: z.string({ required_error: "Please select a service to display." }),
  message: z
    .string()
    .min(1,{message:'Message is required.'})
    .min(6, { message: 'Message must be at least 6 characters.' })
})

export const ContactFormSchema = z.object({
    firstname: z.string().min(1,{message:'Name is required.'}),
    lastname: z.string().min(1,{message:'Last Name is required.'}),
    email: z.string().min(1,{message:'Email is required'}).email('Invalid email.'),
    services: z.string({ required_error: "Please select a service to display." }),
    message: z
      .string()
      .min(1,{message:'Message is required.'})
      .min(6, { message: 'Message must be at least 6 characters.' })
  })