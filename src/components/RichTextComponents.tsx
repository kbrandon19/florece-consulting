import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from "../../sanity/lib/image";

import PortableText from "react-portable-text"

export const RichTextComponents = {
    block:{
        normal:({children}:any) => (
            <p className="text-base xl:text-lg">{children}</p>
        )
    }
}