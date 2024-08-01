"use server";

import { z } from "zod";
import { FormDataSchema } from "@/lib/emailSchema";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/contact-form-email";

type Inputs = z.infer<typeof FormDataSchema>;

export async function addEntry(data: Inputs) {
  const result = FormDataSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

type ContactFormInputs = z.infer<typeof FormDataSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = FormDataSchema.safeParse(data);

  if (result.success) {
    const { firstname, lastname, email, services, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "email@florececonsulting.com",
        to: ["florececonsulting@gmail.com"],
        subject: "New Form Submission Received",
        text: `Name:${firstname}\nName:${lastname}\nEmail:${email}\nServices:${services}\nMessage:${message}`,
        react: ContactFormEmail({
          firstname,
          lastname,
          email,
          services,
          message,
        }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return {
      success: false,
      error: result.error.format(),
    };
  }
}
