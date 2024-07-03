import React from "react";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { Consulting } from "@/lib/interface";

// import {Reveal} from '../../transitions/reveal'

async function getData() {
  const query = `
    *[_type == 'business'][0]{
        tagline,
        headline,
        bodyTextOne,
        bodyTextTwo,
        'image':image.asset->url,
      
        }`;
  const data = await client.fetch(query);
  return data;
}

async function Business() {
  const data: Consulting = await getData();

  

  return (
    <div id="services" className="w-full h-100  px-5">
      {/* grid wrapper for bio*/}
      
      <div className="w-5/6  h-auto mx-auto px-5 grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-10">
         <div className="w-full h-auto my-2 flex flex-col gap-y-5">
       
          <h1 className="text-5xl">{data.headline}</h1> 
      
          <h2 className="text-2xl">{data.tagline}</h2>
          <p className="text-lg mt-5">{data.bodyTextOne}</p>
          <p className="hidden xl:block text-lg mt-5 ">{data.bodyTextTwo}</p>
        </div>
       

       
        <div className=" w-full h-auto md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 my-2">
          <Image
            height={700}
            width={500}
            src={urlForImage(data.image)}
            alt="image"
            // style={{height:'auto',width:'100%'}}
          />
        </div>
        
        
       
        <div className="md:col-span-2 md:col-start-1 xl:hidden">
        <p className="text-lg mt-5 ">{data.bodyTextTwo}</p>
        </div>
        
      </div>
     
    </div>
  );
}

export default Business;
