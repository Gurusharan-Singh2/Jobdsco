import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen  flex justify-center items-center'><SignIn></SignIn></div>
    
  )
}

export default page