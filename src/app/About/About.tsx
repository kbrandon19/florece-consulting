import React from "react";
import Image from "next/image";
import { aboutSection } from "@/lib/interface";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { Reveal } from "@/transitions/reveal";

async function getData() {
  const query = `*[_type == 'about'][0]{
      title,
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
    <div id="Founder's Bio" className="w-full h-screen bg-charcoal py-10 flex items-center">
      <Reveal>

        {/* new version */}
        {/* <div className="w-5/6  h-auto mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-10">
          <div className="w-full h-auto my-2 flex flex-col gap-y-5">
          <h1 className="text-seaSalt text-6xl lg:text-7xl">{data.title}</h1>
            <p className="text-seaSalt text-lg mt-5">{data.bodyTextOne}</p>
            <p className="hidden xl:block text-seaSalt text-lg mt-5 ">{data.bodyTextTwo}</p>
          </div>

          <div className=" w-full h-auto md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 my-2">
            <Image
              height={900}
              width={600}
              priority
              src={urlForImage(data.image)}
              alt="image"
          
            />
          </div>

          <div className="md:col-span-2 md:col-start-1 xl:hidden">
            <p className="text-seaSalt text-lg mt-5">{data.bodyTextTwo}</p>
          </div>
        </div> */}

        {/* <div className="w-5/6  h-auto mx-auto  flex flex-col lg:flex-row justify-between items-center gap-x-10">

        <div className="h-full w-auto  hidden lg:block basis-1/2"> 
          <Image
              height={0}
              width={0}
              priority
              src={urlForImage(data.image)}
              alt="image"
              sizes="100vw"
              style={{width:'100%',height:'auto'}}
          
            />
                  <Image
            height={0}
             width={0}
            src={urlForImage(data.image)}
            alt="image"
            priority
            sizes="100vh"
              style={{width:'auto',height:'100%'}}
          />
        </div>
    
          <div className="basis-1/2">
          <h1 className="text-seaSalt text-6xl lg:text-7xl">{data.title}</h1>
            <p className="text-seaSalt text-lg mt-5">{data.bodyTextOne}</p>
            <p className="hidden xl:block text-seaSalt text-lg mt-5 ">{data.bodyTextTwo}</p>
          </div>

          <div className="h-full w-auto  lg:hidden basis-1/2"> 
          <Image
              height={900}
              width={600}
              priority
              src={urlForImage(data.image)}
              alt="image"
          
            />
            <p className="text-seaSalt text-lg mt-5">{data.bodyTextTwo}</p>
        </div>

        </div> */}

<div
        id="Contact"
        className="w-full h-auto flex flex-col lg:flex-row gap-4 justify-between "
      >
        <div className="flex flex-col w-full mt-20 gap-y-10 lg:gap-y-26 justify-center lg:basis-3/5 mx-auto p-5 lg:px-10 ">
        <h1 className="text-seaSalt text-6xl lg:text-7xl">{data.title}</h1>
            <p className="text-seaSalt text-lg mt-5">{data.bodyTextOne}</p>
            <p className="hidden xl:block text-seaSalt text-lg mt-5 ">{data.bodyTextTwo}</p>
        </div>

        <div className="hidden lg:flex lg:items-center">
        <Image
            height={0}
             width={0}
            src={urlForImage(data.image)}
            alt="image"
            priority
            sizes="100vh"
              style={{width:'auto',height:'100%'}}
          />
        </div>
      </div>

      </Reveal>
    </div>
  );
}

export default About;