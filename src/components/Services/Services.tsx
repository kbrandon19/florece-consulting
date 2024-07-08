import React from "react";
import { client } from "../../../sanity/lib/client";
import { Consulting } from "@/lib/interface";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { Button } from "../ui/button";

// Icons made by Kiranshastry from Flat Icon at https://www.flaticon.com/authors/kiranshastry


async function getData() {
  const query = `
    *[_type == 'business']{
    serviceHeadline,
          servicesInfo[]{serviceTitle,serviceDescription,serviceIcon}
        }`;
  const data = await client.fetch(query);
  return data[0];
}

async function Services() {
  const data: Consulting = await getData();
  return (
    <div
      id="Services"
      className="services w-full h-100vh"
    >
      <p className="text-xl md:text-2xl text-center px-5 mb-10 max-w-4xl mx-auto font-light">
        {data.serviceHeadline}
      </p>
      <hr className="w-96 h-2 align-center mx-auto my-16" />

      
      {/* services list */}


      <div className="w-full h-auto xl:px-5 flex flex-wrap gap-5 items-center justify-center  mx-auto ">
        {data.servicesInfo.map((service: any, idx: any) => (
          <div key={idx} className="h-80 w-80 bg-cambridgeBlue flex justify-center lg:justify-start flex-col py-4 lg:py-10 px-5 hover:bg-purple transition-colors gap-5 relative">

            <div className="w-auto h-auto flex justify-center">
            <Image
              height={30}
              width={30}
              src={urlForImage(service.serviceIcon)}
              alt="image"
             
            />
            </div>


            <p className="text-2xl text-center ">{service.serviceTitle}</p>
            <p className="text-base font-light text-center ">
              {service.serviceDescription}
            </p>

              
          </div>
        ))}
      </div>

    </div>
  );
}

export default Services;
