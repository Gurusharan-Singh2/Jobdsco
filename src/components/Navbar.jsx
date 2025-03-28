'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'
import { FaGripLines } from "react-icons/fa";
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

import { useAuth } from '@clerk/nextjs';


const Navbar = () => {
  const user=useUser();
  console.log(user);
  
  const pathItem=[
    {
      title:"Home",
      path:"/",
      show:true
    },
    {
      title:"Login",
      path:"/sign-in",
      show:!user.isSignedIn
    },
    {
      title:"Register",
      path:"/sign-up",
      show:!user.isSignedIn
    },
    {
      title:"Activity",
      path:"/activity",
      show:user.isSignedIn
    },
    {
      title:"Membership",
      path:"/membership",
      show:user.isSignedIn
    },
    {
      title:"Account",
      path:"/account",
      show:user.isSignedIn
    },
  ]
  return (
    <div className='w-full my-4'>
      <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"  className='text-2xl m-2  flex lg:hidden'><FaGripLines className='text-5xl' /></Button>
      </SheetTrigger>
      <SheetContent side='left'>
      <SheetTitle aria-hidden="true" className="sr-only">
            Navigation Menu
          </SheetTitle>
          <div className='w-full min-h-screen flex justify-center mt-20'>
          <ul className="list-none">
                {pathItem
                  .filter((item) => item.show) // ✅ Filter items before mapping
                  .map((item, i) => (
                    <li key={i} className="my-10 text-xl text-gray-700">
                      <Link href={item.path}>{item.title}</Link>
                    </li>
                  ))}
                  <UserButton afterSignOutUrl='/'></UserButton>
              </ul>
           
            
          </div>
        
      
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    <nav className='w-full hidden lg:flex justify-between mt-4 px-5'>
      <div className='flex  items-center '>

      <Link href={'/'}><h1>JOBSCO</h1></Link>
      </div>
      
      <div className='flex gap-10 items-center  list-none'>

      
    {pathItem
                  .filter((item) => item.show) // ✅ Filter items before mapping
                  .map((item, i) => (
                    <li key={i} className=" text-lg text-gray-700">
                      <Link href={item.path}>{item.title}</Link>
                    </li>
                  ))}
                  <UserButton afterSignOutUrl='/'></UserButton>
    </div>              

    </nav>
     

    </div>
  )
}

export default Navbar