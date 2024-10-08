export const revalidate = 0;

import { Symbol } from "@/lib/interface";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Transition from "@/transitions/transition";
import { Button } from "@/components/ui/button";
import SpacerSm from "@/components/Spacer/Sm";

async function getData() {
  const query = `
  *[_type == 'symbolism']{
  title,
    text,
    image
  }`;
  const data = await client.fetch(query,{
    revalidate: new Date().getSeconds(),
  });
  return data[0];
}

async function Symbolism() {
  const data: Symbol = await getData();

  return (
    <div className="w-full h-auto bg-charcoal py-5">
      <SpacerSm />
      <div className="w-26 flex justify-center items-center">
        <Image
          height={200}
          width={300}
          src={urlForImage(data.image)}
          alt="Florece Logo"
          priority
        />
      </div>
      <div className="w-auto mt-8">
        <h1 className=" w-26 text-white text-5xl lg:text-6xl  text-center font-medium lowercase align-center drop-shadow-lg tracking-wider">
          {data.title}
        </h1>

        <p className="text-white max-w-screen-lg mx-auto mt-8 p-5">
          {data.text}
        </p>
      </div>

      <div className="w-full h-auto my-5 flex justify-center">
        <Button className="border-2 border-lavender bg-lavender text-charcoal rounded-none hover:rounded-lg hover:border-lavender uppercase tracking-wide hover:drop-shadow-lg hover:text-white hover:bg-charcoal transition-all">
          <Link href="/">Back</Link>
        </Button>
      </div>
    </div>
  );
}

export default Symbolism;
