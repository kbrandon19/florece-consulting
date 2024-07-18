import { HeroLanding } from "@/lib/interface";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import Transition from "@/transitions/transition";

async function getData() {
  const query = `
  *[_type == 'hero']{
    text,
    image
  }`;
  const data = await client.fetch(query);
  return data[0];
}

async function Hero() {
  const data: HeroLanding = await getData();

  return (
    <div className="w-full h-screen bg-charcoal flex flex-col items-center content-center justify-center align-center">
      <Transition>
        <div className="w-26 flex justify-center items-center">
          <Image
            height={100}
            width={300}
            src={urlForImage(data.image)}
            alt="Florece Logo"
          />
        </div>

        <div className="align-center w-auto mt-5">
          <p className=" w-26 text-seaSalt text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl flex justify-center content-center font-medium lowercase drop-shadow-lg tracking-wider">
            {data.text}
          </p>
        </div>
      </Transition>
    </div>
  );
}

export default Hero;
