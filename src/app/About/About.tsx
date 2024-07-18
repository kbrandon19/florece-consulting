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
    <div id="Bio" className="w-full h-auto bg-charcoal -mt-18 py-20">
      <Reveal>
        <div className="w-5/6 h-auto mx-auto grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-20 ">
          <div className="w-full h-auto my-2 flex flex-col gap-y-5">
            <h1 className="text-seaSalt text-6xl lg:text-7xl">{data.title}</h1>
            <Image
              height={300}
              width={500}
              src={urlForImage(data.image)}
              alt="image"
              className="lg:hidden drop-shadow-green"
            />
            <p className="text-seaSalt text-lg mt-5">
              {data.bodyTextOne} <br />
              <br /> {data.bodyTextTwo}
            </p>
          </div>

          <div className="w-full h-auto lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-3 my-2 grid ju">
            <Image
              height={400}
              width={500}
              src={urlForImage(data.image)}
              alt="image"
              className="hidden lg:block"
              // style={{display:hidden lg:block}}
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default About;