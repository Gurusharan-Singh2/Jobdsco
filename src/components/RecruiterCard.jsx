import React from 'react'
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

const RecruiterCard = ({JobList}) => {
  console.log(JobList);
  
  
  return (
   <>
   <Card className="w-[250px] mx-auto  md:w-[300px] lg:w-[350px] h-auto lg:h-[250px] border-2 bg-white shadow-none hover:shadow-lg transition-shadow duration-300 ease-in-out">
  <CardHeader>
   
  <Image src={JobIcon} alt="Job Icon" width={40} height={40} />
    
   
  </CardHeader>
  <CardContent>
  <CardDescription><h1 className='text-2xl font-bold text-blue-950 pt-2'>{JobList.jobTitle}</h1></CardDescription>
  </CardContent>
  <CardFooter><Button className='text-white bg-blue-950 '>{`${JobList.applicants.length} Applicants`}</Button>
  </CardFooter>
</Card>
</>
  )
}

export default RecruiterCard