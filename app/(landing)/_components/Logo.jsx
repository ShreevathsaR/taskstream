import React from 'react'
import { cn } from "@/lib/utils"
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const font = Poppins({
    subsets:["latin"],
    weight:["400","700"]
})

const Logo = () => {
  return (
    <div className='hidden md:flex items-center gap-x-2'>
        <Image src="/logo.png"alt="logo" width="48" height="40"></Image>
        <p className={cn("font-bold", font.className)}>Taskstream</p>
    </div>
  )
}

export default Logo