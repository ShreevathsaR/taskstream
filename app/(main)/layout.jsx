"use client"

import Spinner from '@/components/Spinner';
import { useConvexAuth } from 'convex/react';
import { redirect } from 'next/navigation';
import React from 'react'

const MainLayout = ({children}) => {

    const {isAuthenticated, isLoading} = useConvexAuth();

    if(isLoading){
      return(
      <div lang='h-full flex items-center justify-center'>
        <Spinner size="lg"/>
      </div>
    )}
  
    if(!isAuthenticated){
      return redirect("/");
    }

  return (
    <div className='h-full flex'>
        <main>{children}</main>
    </div>
  )
}

export default MainLayout