import React from "react";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Consulting } from "@/lib/interface";
import { Button } from "@/components/ui/button";
import { Reveal } from "../../transitions/reveal";

async function getData() {
  const query = `
    *[_type == 'business'][0]{
        tagline,
        headline,
        bodyTextOne,
        bodyTextTwo,
        'image':image.asset->url,
        }`;
  const data = await client.fetch(query);
  return data;
}

async function Business() {
  const data: Consulting = await getData();

  return (
    <div id="About" className="w-full h-100">
      <Reveal>
        <div className="w-5/6  h-auto mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-10">
          <div className="w-full h-auto my-2 flex flex-col gap-y-5">
            <h1 className="text-5xl">{data.headline}</h1>

            <h2 className="text-2xl">{data.tagline}</h2>
            <p className="text-lg mt-5">{data.bodyTextOne}</p>
            <p className="hidden xl:block text-lg mt-5 ">{data.bodyTextTwo}</p>

            <div className="hidden xl:block w-64 h-auto my-5">
              <Button className="border-2 border-charcoal text-charcoal rounded-none hover:rounded-lg hover:border-purple uppercase tracking-wide hover:drop-shadow-lg hover:text-seaSalt hover:bg-purple transition-all"><Link href='/Symbolism'>More about Florece</Link></Button>
              
            </div>
          </div>

          <div className=" w-full h-auto md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 my-2">
            <Image
              height={700}
              width={500}
              // height={0}
              // width={0}
              priority
              src={urlForImage(data.image)}
              alt="image"
              sizes="100vw"
              style={{width:'70%',height:'auto'}}
            />
          </div>

          <div className="md:col-span-2 md:col-start-1 xl:hidden">
            <p className="text-lg mt-5 ">{data.bodyTextTwo}</p>
            <div className="w-64 h-auto my-5">
              <Button className="bg-charcoal text-seaSalt uppercase tracking-wide hover:drop-shadow-lg hover:text-seaSalt hover:bg-purple transition-colors"><Link href='/Symbolism'>leearn more click here</Link></Button>
              
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Business;