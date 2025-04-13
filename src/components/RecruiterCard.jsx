'use client'
import React, { useState } from 'react'
import JobIcon from '@/public/JobIcon.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { Button } from './ui/button';
import RecruiterApplicantsDrawer from './RecruiterApplicantsDrawer';

const RecruiterCard = ({JobList,JobApplicationList}) => {
  
  
  const [JobDrawer , setJobDrawer]=useState(false);
  return (
   <>
   <Card className="  w-[250px] mx-auto  md:w-[300px] lg:w-[350px] h-auto lg:h-[250px] bg-yellow-100 shadow-none hover:shadow-lg hover:border-4 hover:border-blue-950 transition-shadow duration-300 ease-in-out">
  <CardHeader>
   
  <Image src={JobIcon} alt="Job Icon" width={40} height={40} />
    
   
  </CardHeader>
  <CardContent>
  <CardDescription><h1 className='text-2xl font-bold text-blue-950 pt-2'>{JobList.jobTitle}</h1></CardDescription>
  </CardContent>
  <CardFooter><Button className='text-white bg-blue-950 disabled:opacity-55' disabled={JobApplicationList.filter((e)=>e.jobID===JobList._id).length==0?true:false} onClick={()=>setJobDrawer(true)} >{`${JobApplicationList.filter((e)=>e.jobID===JobList._id).length} Applicants`}</Button>
  </CardFooter>
  
</Card>
<RecruiterApplicantsDrawer JobDrawer={JobDrawer} setJobDrawer={setJobDrawer} JobApplication={JobApplicationList.filter((e)=>e.jobID===JobList._id)} ></RecruiterApplicantsDrawer>

</>
  )
}

export default RecruiterCard