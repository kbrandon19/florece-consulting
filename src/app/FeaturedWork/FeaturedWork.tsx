import React from "react";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { featuredMediaSection } from "@/lib/interface";
import { urlForImage } from "../../../sanity/lib/image";

async function getData() {
  const query = `
    *[_type == 'featured']{
    headlineText,
        mediaSource[]{ mediaName,mediaImage,mediaLink}
    }`;

  const data = await client.fetch(query);
  return data[0];
}

async function FeaturedWork() {
  const data: featuredMediaSection = await getData();

  return (
    <div className=" w-5/6 h-auto mx-auto text-center">
      <h1 className="italic text-5xl lg:text-6xl my-6 capitalize break-words font-regular">
        {data.headlineText}
      </h1>

      <div className=" max-w-screen-lg mx-auto flex-wrap flex flex-row justify-center gap-10 items-center">
        {data.mediaSource.map((media: any, idx: any) => (
          <div key={idx} className="h-auto w-auto p-2 content-center">
            <Image
              src={urlForImage(media.mediaImage)}
              width={100}
              height={0}
              quality={80}
              priority
              alt={media.mediaName}
              style={{ height: "auto", width: "25" }}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedWork;
