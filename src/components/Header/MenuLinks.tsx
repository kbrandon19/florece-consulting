import React from "react";
import { Button } from "@/components/ui/button";
import { client } from "../../../sanity/lib/client";
import { Navigation } from "@/lib/interface";

import Link from "next/link";

async function getData() {
  const query = `
  *[_type == 'header']{
    navlinks[]{linkname},
    contactBtn
            }`;

  const data = await client.fetch(query);
  return data[0];
}

async function MenuLinks() {
  const data: Navigation = await getData();

  return (
    <div className="md:flex flex-row items-center gap-6">
      {data.navlinks.map((link: any, idx: any) => (
        <div key={idx} className=" hidden md:flex  text-sm ">
          <Link href={`#${link.linkname}`}>
            <p className="uppercase tracking-wide">{link.linkname}</p>
          </Link>
        </div>
      ))}
      <Button className=" w-24 border-2 hover:border-0 border-cambridgeBlue tracking-wide uppercase text-lavender hover:bg-cambridgeBlue hover:text-black">
        <Link href="#Contact">{data.contactBtn}</Link>
      </Button>
    </div>
  );
}

export default MenuLinks;
