export const revalidate = 0;

import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { client } from "../../../sanity/lib/client";
import { bookingCal } from "@/lib/interface";
import SpacerXs from "../Spacer/Xs";


async function getData() {
  const query = `
 *[_type == 'calendar']{
    title,
    text,
    button
  }`;

  const data = await client.fetch(query,{
    revalidate: new Date().getSeconds(),
  });
  return data[0];
}

async function booking() {
  const data: bookingCal = await getData();
  return (
    <div className="w-full h-auto bg-lavender py-20 text-center px-5">
      <SpacerXs />

      <div className="w-5/6 h-auto mx-auto flex flex-col gap-y-2 justify-center content-center font-regular drop-shadow-lg tracking-wider max-w-screen-md">
        <h2 className="font-semibold text-5xl">{data.title}</h2>

        <p className="text-2xl md:text-3xl  ">{data.text}</p>
      </div>

      <div className="w-5/6 h-auto mx-auto flex justify-center items-center mt-10">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="border-2 border-charcoal text-white rounded-none hover:rounded-lg hover:border-plum uppercase tracking-wide hover:drop-shadow-lg hover:text-white bg-charcoal hover:bg-plum transition-all">
              {data.button}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-screen-xl">
            <iframe
              src="https://calendly.com/florececonsulting/consultation-call"
              loading="lazy"
              allowFullScreen={true}
              width="100%"
              height="700"
            ></iframe>
          </DialogContent>
        </Dialog>
      </div>

      <SpacerXs />
    </div>
  );
}

export default booking;
