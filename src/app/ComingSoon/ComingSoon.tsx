import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { IntroComingSoon } from "@/lib/interface";

import { urlForImage } from "../../../sanity/lib/image";

import Transition from "@/transitions/transition";

async function getData() {
  const query = `
  *[_type == 'comingsoon']{
    title,
    headline,
    logo,
}`;

  const data = await client.fetch(query);
  return data[0];
}

async function ComingSoon() {
  const data: IntroComingSoon = await getData();

  return (
    <div className="w-full h-screen bg-charcoal flex flex-col gap-y-6 items-center content-center justify-center align-center">
      <Transition>
        <div className="w-26 flex justify-center items-center">
          <Image
            height={100}
            width={300}
            src={urlForImage(data.logo)}
            alt="Florece Logo"
          />
        </div>

        <div className="align-center w-auto">
          <p className=" w-26 text-seaSalt text-2xl md:text-5xl lg:text-7xl flex justify-center content-center font-medium uppercase drop-shadow-lg tracking-wider">
            {data.title}
          </p>
        </div>

        <div className="w-5/6 h-auto mx-auto text-center mt-16">
          <p className="text-md text-seaSalt lg:text-2xl drop-shadow-lg font-semi lowercase tracking-wide">
            {data.headline}
          </p>
        </div>
      </Transition>
    </div>
  );
}

export default ComingSoon;
