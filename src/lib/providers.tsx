'use client'

import { Toaster } from 'sonner'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster position='bottom-left' richColors expand closeButton />
    </>
  )
}