import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <div className='z-50 bg-background fixed top-0 flex items-center w-full px-6 pt-3 pb-3 shadow-lg'>
        <Logo/>
        <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
            <Button variant="ghost" size='sm'>Login</Button>
            <Button size="sm">Try Taskstream for free</Button>
        </div>
    </div>
  )
}

export default Navbar