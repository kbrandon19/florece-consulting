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
      <div className="my-20 w-auto h-auto flex flex-wrap justify-center gap-y-5 lg:gap-x-5">
        <hr />

        {/* card wrapper */}
        {/* {data.workInfo.map((work: any, idx: any) => (
          <div key={idx} className="h-60 w-full max-w-96">
            <Card className="border-2 transition hover:drop-shadow-2xl hover:bg-charcoal hover:text-seaSalt">
              <CardHeader>
                <CardTitle>{work.workTitle}</CardTitle>
                <CardDescription className="italic">
                  {work.publishDate}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{work.workDescription}</p>
              </CardContent>
              <CardFooter>
                <Button className="h-9 rounded-md px-3 border-2 tracking-wide uppercase transition">
                  <a href={work.workLink} target="_blank">
                    See More
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))} */}
    {data.workInfo.map((work: any, idx: any) => (
        <div key={idx} className="h-80 w-80 bg-cambridgeBlue flex justify-end flex-col py-10 px-5 hover:bg-purple transition-colors gap-5"> 
        <div>
          <h1 className="text-2xl font-bold">{work.workTitle}</h1>
          <p className="text-sm">{work.publishDate}</p>
        </div>

        <div  className="h-auto w-auto">{work.workDescription}</div>

        <div className="w-full h-auto bg-accent-appricot">
          <Button>Read</Button>
        </div>
        </div>
))}
       
        {/* <div className="h-80 w-80 bg-cambridgeBlue">asdfsd</div>
        <div className="h-80 w-80 bg-cambridgeBlue">asdfsd</div> */}


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
