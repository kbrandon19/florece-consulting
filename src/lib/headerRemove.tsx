'use client'

import React from 'react'
import Header from '@/components/Header/Header'
import { usePathname } from 'next/navigation';

function HeaderRemove() {
    const pathname = usePathname(); // Updated to use usePathname
    const hideHeaderRoutes = ['/Symbolism']; // Define routes where header should be hidden
    const shouldHideHeader = hideHeaderRoutes.includes(pathname);

  return (
    <>
    {!shouldHideHeader &&  <Header/> }
</>
  )
}

export default HeaderRemove 