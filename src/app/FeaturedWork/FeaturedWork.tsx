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
    // Option 1

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
                priority={true}
                alt={media.mediaName}
                style={{ height: "auto", width: "25" }}
                className=""
              />
            </div>
          ))}
      </div>
    </div>

    // Option 2
  //   <div className="h-full w-full flex flex-col lg:flex-row justify-center content-center bg-primary-payneGray">

  //     <div className=" h-auto w-auto basis-1/2 flex text-center items-center mb-14 sm:mb-8 md:mb-0 p-5">

  //       <h1 className=" font-medium italic text-6xl md:text-7xl my-6 text-white capitalize break-words ">
  //         {data.headlineText}
  //       </h1>
  //     </div>
  //     <div className=" h-full w-auto flex md:basis-1/2 p-5 ">
  //       <div className=" flex-wrap flex flex-row justify-evenly gap-5 items-center content-center">
  //         {data.mediaSource.map((media: any, idx: any) => (
  //           <div key={idx} className="h-auto w-auto p-2 content-center">
  //             <Image
  //               src={urlForImage(media.mediaImage)}
  //               width={100}
  //               height={0}
  //               quality={80}
  //               priority={true}
  //               alt={media.mediaName}
  //               style={{ height: "auto", width: "50" }}
  //               className=""
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  );
}

export default FeaturedWork;
