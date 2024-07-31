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
    // Version One
    // <div className="w-full h-auto  text-white bg-charcoal">
    //   <Reveal>
    //     <div
    //     id="Founder"
    //     className="w-5/6 h-auto mx-auto flex flex-col lg:flex-row  justify-between lg:pt-10 2xl:pt-24"
    //   >

    //       <div className="hidden lg:flex lg:items-start content-start">
    //         <Image
    //         height={600}
    //           width={600}
    //           // height={0}
    //           // width={0}
    //           src={urlForImage(data.image)}
    //           alt="image"
    //           priority
    //           // sizes="100vh"
    //           // style={{ width: "auto", height: "auto" }}
    //         />
    //       </div>

    //       <div className="flex flex-col w-full gap-y-10 lg:gap-y-26 justify-center lg:basis-3/5 mx-auto p-5 lg:px-10">
    //         <h1 className="text-6xl lg:text-7xl">{data.title}</h1>

    //         <div className="flex lg:hidden">
    //           <Image
    //             height={0}
    //             width={0}
    //             src={urlForImage(data.image)}
    //             alt="image"
    //             priority
    //             sizes="100vh"
    //             style={{ width: "100%", height: "auto" }}
    //           />
    //         </div>
    //         <PortableText
    //           value={data.blockText}
    //           components={RichTextComponents}
    //         />
    //       </div>

    //   </div></Reveal>
    // </div>

    // Version Two
    // <div id="Founder" className="w-full h-auto bg-charcoal text-white pb-20 pt-28">
    //   <Reveal>
    //     <div

    //     className=" w-5/6 mx-auto h-auto flex flex-col lg:flex-row  justify-between 2xl:items-center"
    //   >
    //     {/* Desktop Image */}
    //       <div className="hidden lg:flex lg:items-start justify-center content-start lg:basis-1/2  2xl:pt-0">
    //         <Image
    //         height={500}
    //           width={500}
    //           // height={0}
    //           // width={0}
    //           src={urlForImage(data.image)}
    //           alt="image"
    //           priority
    //           // sizes="100vh"
    //           // style={{ width: "100%", height: "auto" }}
    //         />
    //       </div>

    //       <div className="flex flex-col  w-full gap-y-5  justify-center lg:basis-1/2 mx-auto p-5 pt-0">

    //         <h1 className="text-6xl lg:text-7xl">{data.title}</h1>

    //         <div className="flex lg:hidden">
    //           <Image
    //             height={0}
    //             width={0}
    //             src={urlForImage(data.image)}
    //             alt="image"
    //             priority
    //             sizes="100vh"
    //             style={{ width: "100%", height: "auto" }}
    //           />
    //         </div>

    //         <PortableText
    //           value={data.blockText}
    //           components={RichTextComponents}
    //         />
    //       </div>

    //   </div></Reveal>
    // </div>

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
