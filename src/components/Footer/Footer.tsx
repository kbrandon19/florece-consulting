export const revalidate =0;

import React from "react";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { FooterSec } from "@/lib/interface";
import FooterLinks from "./footerLinks";

async function getData() {
  const query = `
  *[_type == 'footer'][0]{
    footerquote,quoteAuth,tag,email,socialMediaText
  }`;
  const data = await client.fetch(query,{
    revalidate: new Date().getSeconds(),
  });
  return data;
}

export default async function Footer() {
  const data: FooterSec = await getData();

  return (
    <div className="h-auto w-full bg-lavender pt-12">
      <div className="w-full pl-5 md:w-5/6 md:pl-0 h-auto mx-auto py-5 text-black flex flex-col xl:flex-row  justify-center lg:gap-x-16 xl:gap-x-36 gap-y-8 xl:gap-y-0 ">
        {/* Quote */}
        <div className="w-96 italic text-base md:text-lg ">
          <p className="">{data.footerquote}</p>
          <p className="font-semibold">- {data.quoteAuth}</p>
        </div>

        {/* Email */}
        <div className="p-2 text-base">
          <p className="uppercase tracking-wider font-semibold ">
            {data.tag}
          </p>
          <Link
            href={`mailto:${data.email}`}
            className="hover:text-plum transition-colors font-light"
          >
            {data.email}
          </Link>
        </div>

        {/* social media sec */}
        <div className="p-2">
          <p className="min-w-52 uppercase tracking-wider font-semibold">
            {data.socialMediaText}
          </p>
          <FooterLinks />
        </div>
      </div>

      {/* Copyright stuff */}
      <div className="w-full pl-5 md:w-5/6 md:pl-0 h-auto mx-auto py-5 xl:text-center text-black">
        <p className="text-xs">
          2024 Copyright All Rights Reserved. <br className="md:hidden" />
          <Link href="https://www.dfcreativestudio.com">Designed & Developed by DFCS</Link>
        </p>
      </div>
    </div>
  );
}
