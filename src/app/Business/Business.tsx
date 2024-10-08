export const revalidate = 0;

import React from "react";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Consulting } from "@/lib/interface";
import { Button } from "@/components/ui/button";
import { Reveal } from "../../transitions/reveal";
import { RevealR } from "../../transitions/revealR";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { TranFlorece } from "../../transitions/tranFlorece";

async function getData() {
  const query = `
    *[_type == 'business'][0]{
        tagline,
        headline,
        blockText,
        'image':image.asset->url,
        }`;
  const data = await client.fetch(query,{
    revalidate: new Date().getSeconds(),
  });
  return data;
}

async function Business() {
  const data: Consulting = await getData();

  return (
    <TranFlorece>
      <div id="About" className="w-full h-auto bg-lavender py-28">
        <div className="w-5/6  h-auto mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-10">
          <Reveal>
            <div className="w-full h-auto my-2 flex flex-col gap-y-5">
              <h1 className="text-6xl lg:text-7xl">{data.headline}</h1>

              <div className=" w-full h-auto  md:hidden md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 my-2">
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

              <div className="w-64 h-auto my-5">
                <Button className="border-2 border-charcoal text-charcoal rounded-none hover:rounded-lg hover:border-plum uppercase tracking-wide hover:drop-shadow-lg hover:text-white hover:bg-plum transition-all">
                  <Link href="/Symbolism">More about Florece</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <RevealR>
            {/* desktop image */}
            <div className=" w-full h-auto hidden md:block md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 my-2">
              <Image
                height={0}
                width={0}
                src={urlForImage(data.image)}
                alt="image"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </RevealR>
        </div>
      </div>
    </TranFlorece>
  );
}

export default Business;
