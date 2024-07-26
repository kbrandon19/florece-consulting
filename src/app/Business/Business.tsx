import React from "react";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Consulting } from "@/lib/interface";
import { Button } from "@/components/ui/button";
import { Reveal } from "../../transitions/reveal";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

async function getData() {
  const query = `
    *[_type == 'business'][0]{
        tagline,
        headline,
        blockText,
        'image':image.asset->url,
        }`;
  const data = await client.fetch(query);
  return data;
}

async function Business() {
  const data: Consulting = await getData();

  return (
    <div id="About" className="w-full h-auto bg-lavender py-20">
      <Reveal>
        <div className="w-5/6  h-auto mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-10">

          <div className="w-full h-auto my-2 flex flex-col gap-y-5">
            <h1 className="text-6xl">{data.headline}</h1>

            <div className=" w-full h-auto  md:hidden md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 my-2">
            <Image
              // height={700}
              // width={500}
              height={0}
              width={0}
              src={urlForImage(data.image)}
              alt="image"
              sizes="100vw"
              style={{width:'100%',height:'auto'}}
            />
          </div>

            <PortableText value={data.blockText} components={RichTextComponents}/>
      

            <div className="w-64 h-auto my-5">
              <Button className="border-2 border-charcoal text-charcoal rounded-none hover:rounded-lg hover:border-plum uppercase tracking-wide hover:drop-shadow-lg hover:text-white hover:bg-plum transition-all"><Link href='/Symbolism'>More about Florece</Link></Button>
              
            </div>
          </div>

          <div className=" w-full h-auto hidden md:block md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 my-2">
            <Image
              height={700}
              width={500}
              // height={0}
              // width={0}
              src={urlForImage(data.image)}
              alt="image"
              sizes="100vw"
              style={{width:'100%',height:'auto'}}
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Business;