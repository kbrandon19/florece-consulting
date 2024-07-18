import React from "react";
import { Banner } from "@/lib/interface";
import { client } from "../../../sanity/lib/client";
import { BannerReveal } from "@/transitions/bannerReveal";

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
     <div className="w-full h-auto px-5 py-20 ">
      <BannerReveal>
        <p className="sm:text-3xl md:text-5xl text-center px-5 max-w-7xl mx-auto font-light italic">
          {data.text}
        </p>
      </BannerReveal
      ></div>
    
  );
}

export default banner;
