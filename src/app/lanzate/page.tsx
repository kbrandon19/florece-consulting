export const revalidate = 0;

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

function page() {
  return (
    <div className='w-full mx-auto h-full bg-charcoal pt-40 pb-20'> 

    <div className='mb-10 text-white w-auto text-center'>
      <h1 className='text-4xl md:text-5xl text-center px-5 max-w-7xl mx-auto font-light italic '>Stay Connected with Florece Consulting</h1>
      <p className='max-w-screen-lg mx-auto text-center p-5'>Sign up for our email list to receive exclusive insights, resources, and updates on how we empower communities through strategy and growth. Join us in shaping a brighter future!</p>
    </div>
        <div className='w-auto '>
        
        <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeVT8WHgRoq6TSAZmGy8Lkl_SlOagzhonUrYjuXOrnRwhfsnA/viewform?embedded=true"
              loading="lazy"
              allowFullScreen={false}
              width="100%"
              height="800"
            ></iframe>
        
        </div>
        <div className="w-full h-auto my-10 flex justify-center">
        <Button className="border-2 border-lavender bg-lavender text-charcoal rounded-none hover:rounded-lg hover:border-lavender uppercase tracking-wide hover:drop-shadow-lg hover:text-white hover:bg-charcoal transition-all">
          <Link href="/">Back</Link>
        </Button>
      </div>
        </div>
   
  )
}

export default page