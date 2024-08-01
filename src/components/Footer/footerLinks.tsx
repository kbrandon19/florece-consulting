export const revalidate = 0;

import React from "react";
import { client } from "../../../sanity/lib/client";
import { FooterSec } from "@/lib/interface";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

async function getData() {
  const query = `
  *[_type == 'footer'][0]{
    socialMedia[]{name,url,icon}
  }`;

  const data = await client.fetch(query,{
    revalidate: new Date().getSeconds(),
  });
  return data;
}

async function MenuLinks() {
  const data: FooterSec = await getData();

  return (
    <div className="flex flex-row gap-x-3">
      {data.socialMedia?.map((social: any, idx: any) => (
        <div key={idx}>
          <a href={`https://${social.url}`} target="_blank">
            <Image
              height={20}
              width={20}
              src={urlForImage(social.icon)}
              alt={social.name}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default MenuLinks;
