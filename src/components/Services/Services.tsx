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
      className="services w-full h-100vh -px-5 py-20"
    >
      <p className="text-xl md:text-2xl text-center px-5 mb-10 max-w-4xl mx-auto font-light">
        {data.serviceHeadline}
      </p>
      <hr className="w-96 h-2 align-center mx-auto my-16" />

      
      {/* services list */}


      <div className="w-5/6 h-auto xl:px-5 flex flex-col gap-7 lg:flex-row items-center justify-evenly  mx-auto ">
        {data.servicesInfo.map((service: any, idx: any) => (
          <div key={idx} className=" h-96 w-80 bg-cambridgeBlue flex justify-end flex-col py-10 px-5 hover:bg-purple transition-colors gap-5 relative">
            {/* <div className="w-auto h-auto my-5 flex justify-center lg:justify-start">
            <Image
              height={40}
              width={40}
              src={urlForImage(service.serviceIcon)}
              alt="image"
             
            />
            </div> */}


            <p className="text-2xl text-center lg:text-left">{service.serviceTitle}</p>
            <p className="text-base mt-4 font-light text-center lg:text-left ">
              {service.serviceDescription}
            </p>

              
          </div>
        ))}
      </div>

    </div>
  );
}

export default Services;
