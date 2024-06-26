"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react'
import { PlusCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const DocumentsPage = () => {
  const {user} = useUser();

  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
      <Image src="/empty.png" alt="empty" height="300" width="300"/>
      <h2>Welcome to {user?.firstName} Taskstream </h2>
      <Button>
        <PlusCircle className='h-4 w-4 mr-2'/>Create a note
      </Button>
    </div>
  )
}

export default DocumentsPage