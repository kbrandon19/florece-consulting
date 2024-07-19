import React from "react";
import { Button } from "@/components/ui/button";
import { client } from "../../../sanity/lib/client";
import { Navigation } from "@/lib/interface";
import LinkColor from "@/transitions/linkColorChange";
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
            <p className="uppercase tracking-wide transition-colors">
              {link.linkname}
            </p>
          </Link>
        </div>
      ))}
      <LinkColor>
        <Button className="w-24 tracking-wide font-normal rounded-none hover:rounded-lg border-2 uppercase bg-transparent border-purple hover:drop-shadow-lg hover:bg-purple hover:text-white transition-all">
          <Link href="#Contact">{data.contactBtn}</Link>
        </Button>
      </LinkColor>
    </div>
  );
}

export default MenuLinks;
