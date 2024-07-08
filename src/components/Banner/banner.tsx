import React from 'react'
import { Banner } from "@/lib/interface";
import { client } from "../../../sanity/lib/client";
import {Reveal} from "@/transitions/reveal";

async function getData() {
    const query = `
 *[_type == 'banner']{
    text
  
  }`;
    const data = await client.fetch(query);
    return data[0];
  }

async function banner() {
    const data: Banner = await getData();
  return (
    <div
    className="w-full h-auto px-5 py-20"
  >
    <Reveal>
      <p className="text-xl md:text-2xl text-center px-5 max-w-4xl mx-auto font-light">
        {data.text}
      </p>
    </Reveal>
    </div>
  )
}

export default banner