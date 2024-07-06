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
      {/* <div className="w-full h-auto fixed top-0"> */}
      <div className=" py-5 px-5 md:px-16 flex justify-between content-center ">
        <div className="h-auto flex uppercase tracking-widest items-center ">
          <Link href="/">
            <Image
              height={50}
              width={200}
              src={urlForImage(data.logo)}
              alt="Florece Logo"
            />
          </Link>
        </div>
        <MenuLinks />
      </div>
      {/* </div> */}
    </Transition>
  );
}

export default Header;
