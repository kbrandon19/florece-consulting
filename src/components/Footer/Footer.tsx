import React from "react";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { FooterSec } from "@/lib/interface";
import FooterLinks from "./footerLinks";

async function getData() {
  const query = `
  *[_type == 'footer'][0]{
    footerquote,
    tag,
    email,
        socialMediaText,

  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Footer() {
  const data: FooterSec = await getData();

  return (
    <div className='h-auto w-full mt-12 bg-charcoal pt-12'>
      <div className="w-5/6 h-auto mx-auto py-5 text-seaSalt flex flex-wrap flex-col md:grid-cols-3 lg:flex-row  justify-center lg:gap-x-16 xl:gap-x-36 xlg:justify-evenly gap-y-8 lg:gap-y-0">
        <div className="min-w-64 max-w-72 uppercase lg:text-lg">
          <p className="uppercase">{data.footerquote}</p>
        </div>
        <div>
          <p className="uppercase font-bold mb-2">{data.tag}</p>
          <Link href={`mailto:${data.email}`}>{data.email}</Link>
        </div>
        <div>
          <p className="uppercase tracking-wide font-bold mb-2">
            {data.socialMediaText}
          </p>
          <FooterLinks />
        </div>
      </div>

      <div className="w-5/6 h-auto mx-auto py-5 md:text-center text-seaSalt">
        <p className="text-xs">
          2024 Copyright All Rights Reserved. <br className="md:hidden" />{" "}
          Website by <Link href="https://www.dfcreativestudio.com">DFCS</Link>
        </p>
      </div>
    </div>
  );
}
