import React from "react";
import { client } from "../../../sanity/lib/client";
import { Consulting } from "@/lib/interface";

// Icons made by Kiranshastry from Flat Icon at https://www.flaticon.com/authors/kiranshastry


async function getData() {
  const query = `
    *[_type == 'business']{
    serviceHeadline,
          servicesInfo[]{serviceTitle,serviceDescription}
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
          <div key={idx} className=" w-auto h-auto lg:h-72 xl:p-5 ">
            <p className="text-2xl">{service.serviceTitle}</p>
            <p className="text-base mt-4 font-light">
              {service.serviceDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
