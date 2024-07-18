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
    <div className="w-full h-auto -mt-10 ">
      <div
        id="Contact"
        className="w-5/6 h-auto mx-auto py-5 flex flex-col lg:flex-row gap-4 justify-between "
      >
        <div className="flex item-center flex-col gap-y-10 lg:gap-y-26 w-full  justify-center content-center lg:basis-3/5 mx-auto p-5 lg:px-10 ">
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
            height={1000}
            width={500}
            src={urlForImage(data.contactImage)}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
