import React from "react";
import Image from "next/image";
import { aboutSection } from "@/lib/interface";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { Reveal } from "@/transitions/reveal";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";


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
    <div id="Founder" className="w-full h-auto bg-charcoal text-white py-28">
      <div className="w-5/6  h-auto mx-auto flex flex-col lg:flex-row md:gap-x-10">
        {/* desktop image */}
        <div className=" w-full h-auto hidden lg:block my-2">
          <Image
            height={0}
            width={0}
            src={urlForImage(data.image)}
            alt="image"
            sizes="100vw"
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="w-full h-auto my-2 flex flex-col gap-y-5">
          <h1 className="text-6xl lg:text-7xl">{data.title}</h1>

          <div className=" w-full h-auto  flex md:hidden md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 my-2">
            <Image
              height={0}
              width={0}
              src={urlForImage(data.image)}
              alt="image"
              sizes="100vw"
              priority
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
