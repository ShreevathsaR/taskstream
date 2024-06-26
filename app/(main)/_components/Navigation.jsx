"use client"

import { cn } from '@/lib/utils'
import { ChevronsLeft, PlusCircle, Search, Settings } from 'lucide-react'
import { useParams, usePathname, useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import UserItem from './UserItem'
import Item from './Item'

const Navigation = () => {

    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");

    const isResizingRef = useRef(false);
    const sidebarRef = useRef(null);
    const navbarRef = useRef(null);

    const [isResetting,setIsResetting] = useState(false);
    const [isCollapsed,setIsCollapsed] = useState(isMobile);


  return (
    <>
        <aside ref={sidebarRef}
        className={cn(
            "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
            isResetting && "transistion-all ease-in-out duration-300",
            isMobile && "w-0"
        )}>
            <div 
                role='button'
                className={cn(
                    "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
                    isMobile && "opacity-100"
                )}>
                <ChevronsLeft/>
            </div>
            <div>
                <UserItem/>
                <Item label="Search" icon={Search} isSearch/>
                <Item label="Settings" icon={Settings} isSearch/>
                <Item label="New page" icon={PlusCircle} isSearch/>
    
            </div>
            <div className='mt-4'>
                <p>Documents</p>
            </div>
            <div className='opacity-0 group-hover/sidebar:opacity-100 transistion cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0'/>
        </aside>
    </>
  )
}

export default Navigation