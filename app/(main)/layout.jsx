"use client"

import Spinner from '@/components/Spinner';
import { useConvexAuth } from 'convex/react';
import { redirect } from 'next/navigation';
import React from 'react'
import Navigation from './_components/Navigation';

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
      <Navigation/>
        <main className='flex-1 h-full overflow-y-auto'>{children}</main>
    </div>
  )
}

export default MainLayout