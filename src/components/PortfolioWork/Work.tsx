import React from "react";
import { client } from "../../../sanity/lib/client";
import { portfolioWork } from "@/lib/interface";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function getData() {
  const query = `
    *[_type == 'portfolio']{
       workInfo[]{workTitle,publishDate,workDescription,workLink}
      }`;
  const data = await client.fetch(query);
  return data[0];
}

async function Work() {
  const data: portfolioWork = await getData();

  return (
    <div className="pt-5 pb-5">
      {/* Work samples */}
      <div className="my-20 h-auto flex flex-wrap justify-center gap-y-5 lg:gap-x-5 ">
        <hr />

        {/* card wrapper */}
        {data.workInfo.map((work: any, idx: any) => (
        <div key={idx} className="h-60 w-full max-w-96">
          <Card className="border-2 hover:border-0 hover:drop-shadow-xl hover:bg-lavender transition">
            <CardHeader>
              <CardTitle>{work.workTitle}</CardTitle>
              <CardDescription className="italic">{work.publishDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{work.workDescription}</p>
            </CardContent>
            <CardFooter>
            <Button className="h-9 rounded-md px-3 border-2 tracking-wide uppercase hover:drop-shadow-md hover:bg-white bg-lavender ">
              <a href={work.workLink} target="_blank">See More</a>
            </Button>
            </CardFooter>
            
          </Card>
        </div>
          ))} 

        {/* {data.workInfo.map((work: any, idx: any) => (
          <div
            key={idx}
            className="flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center justify-evenly my-10"
          >
            <div className="w-32">
              <h3 className="text-lg capitalize">{work.workTitle}</h3>
              <p className="text-sm">{work.publishDate}</p>
            </div>
            <div className="max-w-xl w-96 lg:text-center">
              <p>{work.workDescription}</p>
            </div>

            <Button className="border-2 tracking-wide uppercase hover:bg-purple hover:text-white">
              <a href={work.workLink}>See More</a>
            </Button>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Work;
