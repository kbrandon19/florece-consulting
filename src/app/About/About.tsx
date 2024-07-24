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
      bodyTextOne,
      bodyTextTwo,
      'image':image.asset->url
    }`;

  const data = await client.fetch(query);
  return data;
}

async function About() {
  const data: aboutSection = await getData();

  return (
    <div
      id="Founder's Bio"
      className="w-full h-screen bg-charcoal py-10 flex items-center"
    >
      <Reveal>
        {/* current version */}
        {/* <div id="Contact" className="w-full h-auto flex flex-col lg:flex-row gap-4 justify-between text-seaSalt">
          <div className="flex flex-col w-full mt-20 gap-y-10 lg:gap-y-26 justify-center lg:basis-3/5 mx-auto lg:pl-32 " >
            <h1 className="text-6xl lg:text-7xl">{data.title}</h1>
            <PortableText
              value={data.blockText}
              components={RichTextComponents}
            />
          </div>

          <div className="hidden lg:flex lg:items-center">
            <Image
              height={0}
              width={0}
              src={urlForImage(data.image)}
              alt="image"
              priority
              sizes="100vh"
              style={{ width: "auto", height: "100%" }}
            />
          </div>
        </div> */}

        {/* new version */}
        <div className="w-full h-fit bg-charcoal text-seaSalt ">
          <div
            className="w-full h-auto flex flex-col lg:flex-row gap-4 justify-between "
          >
            
            <div className=" w-full h-auto hidden lg:flex lg:items-center">
            <Image
              height={0}
              width={0}
              src={urlForImage(data.image)}
              alt="image"
              priority
              sizes="100vh"
              style={{ width: "auto", height: "100%" }}
            />
            </div>

            <div className="flex flex-col w-full mt-10 gap-y-10 lg:gap-y-26 justify-center lg:basis-3/5 mx-auto p-5 lg:px-10">
            <h1 className="text-6xl lg:text-7xl">{data.title}</h1>
            <PortableText
              value={data.blockText}
              components={RichTextComponents}
            />
            </div>


            
            

          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default About;
