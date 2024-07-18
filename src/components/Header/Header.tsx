import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { Navigation } from "@/lib/interface";
import MenuLinks from "./MenuLinks";
import { urlForImage } from "../../../sanity/lib/image";

import Transition from "@/transitions/tranHeader";

async function getData() {
  const query = `
  *[_type == 'header']{
    name,
    title,
    logo,
            }`;

  const data = await client.fetch(query);
  return data[0];
}

async function Header() {
  const data: Navigation = await getData();

  return (
    <Transition>
      <div className=" py-5 px-5 md:px-16 flex justify-between content-center ">
        <div className="h-auto flex flex-row lowercase tracking-widest items-center justify-center gap-3 ">
          <Link href="/">
            <Image
              height={35}
              width={35}
              src={urlForImage(data.logo)}
              alt="Florece Logo"
            />
          </Link>

          <div className="w-auto h-auto mt-2">
            <Link href="/">{data.name}</Link>
          </div>
        </div>
        <MenuLinks />
      </div>
    </Transition>
  );
}

export default Header;
