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
  const data = await client.fetch(query);
  return data;
}

export default async function Footer() {
  const data: FooterSec = await getData();

  return (
    <div className="h-auto w-full bg-lavender pt-12">
      <div className="w-5/6 h-auto mx-auto py-5 text-black flex flex-wrap flex-col md:grid-cols-3 xl:flex-row  justify-center lg:gap-x-16 xl:gap-x-36 xlg:justify-evenly gap-y-8 xl:gap-y-0">
        <div className="min-w-52 max-w-lg uppercase italic lg:text-lg">
          <p className="uppercase">{data.footerquote}</p>
          <p className="uppercase">{data.quoteAuth}</p>
        </div>
        <div>
          <p className="uppercase tracking-wider font-semibold mb-2">
            {data.tag}
          </p>
          <Link
            href={`mailto:${data.email}`}
            className="hover:text-purple transition-colors"
          >
            {data.email}
          </Link>
        </div>
        <div>
          <p className="uppercase tracking-wider font-semibold mb-2">
            {data.socialMediaText}
          </p>
          <FooterLinks />
        </div>
      </div>

      <div className="w-5/6 h-auto mx-auto py-5 xl:text-center text-black">
        <p className="text-xs">
          2024 Copyright All Rights Reserved. <br className="md:hidden" />
          <Link href="https://www.dfcreativestudio.com">Website by DFCS</Link>
        </p>
      </div>
    </div>
  );
}
