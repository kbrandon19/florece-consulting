import { Symbol } from "@/lib/interface";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import Transition from "@/transitions/transition";

async function getData() {
  const query = `
  *[_type == 'symbolism']{
  title,
    text,
    image
  }`;
  const data = await client.fetch(query);
  return data[0];
}

async function Symbolism() {
  const data: Symbol = await getData();

  return (
    <div className="w-full h-screen pt-20 bg-charcoal flex flex-col items-center content-center justify-center align-center">
      <Transition>
      <div className="w-26 flex justify-center items-center">
          <Image
            height={200}
            width={300}
            src={urlForImage(data.image)}
            alt="Florece Logo"
          />
        </div>

        <div className="w-auto mt-8">
          <h1 className=" w-26 text-seaSalt text-5xl lg:text-6xl  text-center font-medium lowercase align-center drop-shadow-lg tracking-wider">
          {data.title}

          </h1>

          <p className="text-seaSalt max-w-screen-lg mx-auto mt-8 p-5">
 
            {data.text}
        </p>
        </div>  
        

      </Transition>

    </div>
  );
}

export default Symbolism;
