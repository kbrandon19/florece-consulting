import { HeroLanding } from "@/lib/interface";
import { client } from "../../../sanity/lib/client";

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
    <div className=" w-full h-100vh bg-sec-cambridgeBlue flex justify-center content-center ">
      <div className="w-5/6 h-auto  m-auto my-28 text-left break-words font-semibold max-w-7xl">
        <p className="hero-text text-seaSalt text-5xl sm:text-6xl lg:text-8xl 2xl:text-9xl drop-shadow-lg">
          {data.text}
        </p>
      </div>
    </div>
  );
}

export default Hero;
