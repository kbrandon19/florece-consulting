import { HeroLanding } from "@/lib/interface";
import { client } from "../../../sanity/lib/client";

import Transition from "@/transitions/transition";

async function getData() {
  const query = `
  *[_type == 'hero']{
    text
  }`;
  const data = await client.fetch(query);
  return data[0];
}

async function Hero() {
  const data: HeroLanding = await getData();

  return (
    <div className=" w-full  h-screen bg-charcoal flex justify-center content-center ">
      <div className="w-5/6 h-auto m-auto text-center break-words font-semibold max-w-8xl">
        <Transition>
          <p className="hero-text text-lavender text-5xl sm:text-6xl lg:text-8xl 2xl:text-9xl drop-shadow-lg">
            {data.text}
          </p>
        </Transition>
      </div>
    </div>
  );
}

export default Hero;
