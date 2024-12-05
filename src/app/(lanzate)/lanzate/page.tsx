export const revalidate = 0;

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

function page() {
  return (
    <div className='w-full mx-auto h-full bg-charcoal pt-28 pb-0'> 

    {/* <div className='mb-10 text-white w-auto text-center'>
      <h1 className='text-4xl md:text-6xl text-center px-5 max-w-7xl mx-auto font-light italic '>floreceComms Newsletter</h1>
    </div> */}
        <div className='w-auto '>
        
        <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdrGBPGvcNoNV4hkWUTGI28dPQPXM7RrgSuYsq92qZ0GwjYTg/viewform?"
              loading="lazy"
              allowFullScreen={false}
              width="100%"
              height="800"
            ></iframe>
        
        </div>
        {/* <div className="w-full h-auto my-10 flex justify-center">
        <Button className="border-2 border-lavender bg-lavender text-charcoal rounded-none hover:rounded-lg hover:border-lavender uppercase tracking-wide hover:drop-shadow-lg hover:text-white hover:bg-charcoal transition-all">
          <Link href="/">Back</Link>
        </Button>
      </div> */}
        </div>
   
  )
}

export default page