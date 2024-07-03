import Image from 'next/image'
import React from 'react'
import Work from '../../components/PortfolioWork/Work'
import { client } from "../../../sanity/lib/client";
import { portfolioWork } from '@/lib/interface';



async function getData() {
    const query = `
    *[_type == 'portfolio']{
        headingText
        }`;
    const data = await client.fetch(query);
    return data[0];
  }



async function Portfolio() {
    const data: portfolioWork = await getData();

  return (
  
    <div>  
    {/* // wrapper for sample section */}
    <div id='Work' className='w-5/6 h-auto mx-auto  '>

        {/* quote title text */}
        <div className='w-full h-auto  max-w-7xl mx-auto lg:pl-10 xl:pl-12'>
        <h1 className=" text-6xl md:text-7xl xl:text-8xl my-6 capitalize break-words font-semibold">
         {data.headingText}
       </h1>
        </div>
        
       <Work/>


    </div>

    </div>
  )
}

export default Portfolio