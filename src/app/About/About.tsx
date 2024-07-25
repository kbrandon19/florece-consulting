import React from "react";
import Image from "next/image";
import { aboutSection } from "@/lib/interface";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { Reveal } from "@/transitions/reveal";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { Readex_Pro } from "next/font/google";

async function getData() {
  const query = `*[_type == 'about'][0]{
      title,
      blockText,
      'image':image.asset->url
    }`;

  const data = await client.fetch(query);
  return data;
}

async function About() {
  const data: aboutSection = await getData();

  return (
<div className="w-full h-fit  text-white bg-charcoal">
    <div
      id=""
      className="w-full h-auto flex flex-col lg:flex-row gap-4 justify-between "
    > 
    <div className="hidden lg:flex lg:items-center">
        <Image
          height={0}
          width={0}
          src={urlForImage(data.image)}
          alt="image"
          priority
          sizes="100vh"
          style={{ width: "100%", height: "auto" }}
        />
    </div>

      <div className="flex flex-col w-full mt-10 gap-y-10 lg:gap-y-26 justify-center lg:basis-3/5 mx-auto p-5 lg:px-10">
      <h1 className="text-6xl lg:text-7xl">{data.title}</h1>

      <div className="flex lg:hidden">
      <Image
          height={0}
          width={0}
          src={urlForImage(data.image)}
          alt="image"
          priority
          sizes="100vh"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
          <PortableText
            value={data.blockText}
            components={RichTextComponents}
          />

      </div>

     
    </div>
  </div>  

  );
}

export default About;
