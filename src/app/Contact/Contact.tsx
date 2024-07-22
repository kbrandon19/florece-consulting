import React from "react";
import ContactForm from "../../components/Forms/contact-form";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { contactSection } from "@/lib/interface";
import { urlForImage } from "../../../sanity/lib/image";

async function getData() {
  const query = `
  *[_type == 'contact'][0]{
    contactTitle,
    contactHeading,
    contactImage
  }`;

  const data = await client.fetch(query);
  return data;
}

async function Contact() {
  const data: contactSection = await getData();

  return (
    <div className="w-full h-fit bg-charcoal text-seaSalt ">
      <div
        id="Contact"
        className="w-full h-auto flex flex-col lg:flex-row gap-4 justify-between "
      >
        <div className="flex flex-col w-full mt-20 gap-y-10 lg:gap-y-26 justify-center lg:basis-3/5 mx-auto p-5 lg:px-10 ">
          <h1 className="text-5xl lg:text-6xl">{data.contactTitle}</h1>
          <p className="font-regular text-xl lg:text-2xl">
            {data.contactHeading}
          </p>
          <div className="">
            <ContactForm />
          </div>
        </div>

        <div className="hidden lg:flex lg:items-center">
          <Image
            height={0}
            width={0}
            src={urlForImage(data.contactImage)}
            alt="image"
            priority
            sizes="100vh"
            style={{ width: "auto", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
