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
            height={200}
            width={300}
            src={urlForImage(data.image)}
            alt="Florece Logo"
            priority
          />
        </div>
        </Transition>
        <Transition>
        <div className="align-center w-auto mt-5">
          <h1 className=" w-26 text-white text-7xl 2xl:text-9xl flex justify-center content-center font-medium lowercase drop-shadow-lg tracking-wider">
            {data.text}
          </h1>
        </div>
      </Transition>
    </div>
  );
}

export default Hero;
