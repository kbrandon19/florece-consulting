"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendEmail } from "@/app/api/_actions";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const FormDataSchema = z.object({
  firstname: z.string().min(1, { message: "First Name is required." }),
  lastname: z.string().min(1, { message: "Last Name is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email."),
  services: z.string().min(1, { message: "Please select a service." }),
  message: z
    .string()
    .min(1, { message: "Message is required." })
    .min(6, { message: "Message must be at least 6 characters." }),
});

type Inputs = z.infer<typeof FormDataSchema>;

function ContactForm() {
  const [data, setData] = useState<Inputs>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email sent!");
      reset();
      return;
    }

    // toast error
    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(processForm)}
        className="grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-5 gap-4 space-y-0"
      >
        {/* firstname */}
        <div className="md:col-start-1 md:col-end-2">
          <input
            placeholder="FIRST NAME"
            className=" indent-2.5 h-14 w-full rounded-sm bg-charcoal border-t-0 border-x-0 border-b-2 tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 "
            {...register("firstname")}
          />
          {errors.firstname?.message && (
            <p className="mt-2 text-sm text-red-400 tracking-widest">
              {errors.firstname.message}
            </p>
          )}
        </div>
        {/* lastname */}
        <div className="md:col-start-2 md:col-end-3">
          <input
            placeholder="LAST NAME"
            className="indent-2.5 h-14 w-full  bg-charcoal rounded-sm border-t-0 border-x-0 border-b-2  tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2  "
            {...register("lastname")}
          />
          {errors.lastname?.message && (
            <p className="mt-2 text-sm text-red-400 tracking-widest">
              {errors.lastname.message}
            </p>
          )}
        </div>

        {/* email */}
        <div className="md:col-span-2">
          <input
            placeholder="EMAIL"
            {...register("email")}
            className="indent-2.5 h-14 w-full rounded-sm bg-charcoal border-t-0 border-x-0 border-b-2  tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 "
          />
          {errors.email?.message && (
            <p className="mt-2 text-sm text-red-400 tracking-widest">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* services */}
        <div className="md:col-span-2 md:row-start-3">
          <select
            {...register("services")}
            className="w-full rounded-sm bg-charcoal border-t-0 border-x-0 border-b-2  tracking-widest py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 "
          >
            <option value="Service Not Selected">
              {" "}
              Please select a service...
            </option>
            <option value="Strategic Communications">
              Strategic Communications
            </option>
            <option value="Media Relations and Press Outreach">
              Media Relations and Press Outreach
            </option>
            <option value="Community Outreach and Advocacy">
              Community Outreach and Advocacy
            </option>
            <option value="Training and Workshops">
              Training and Workshops
            </option>
            <option value="Specialized NonProfit Consulting">
              Specialized NonProfit Consulting
            </option>
          </select>
          {errors.services?.message && (
            <p className="mt-2 text-sm text-red-400 tracking-widest">
              {errors.services.message}
            </p>
          )}
        </div>

        {/* message */}
        <div className="md:col-span-2 md:row-start-4">
          <Textarea
            placeholder="MESSAGE"
            className="indent-2.5 px-0 resize-none rounded-sm bg-charcoal border-t-0 border-x-0 border-b-2 tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 "
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="mt-2 text-sm text-red-400 tracking-widest">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          disabled={isSubmitting}
          className="flex justify-center content-center h-10 px-4 py-2 w-24 mt-10 max-w-44 uppercase tracking-widest disabled:cursor-not-allowed text-sm font-normal rounded-none hover:rounded-lg border-2 bg-transparent border-plum hover:drop-shadow-lg hover:bg-plum hover:text-white transition-all"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
      <div className="flex-1 rounded-lg bg-cyan-600 p-8 ">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
}

export default ContactForm;
