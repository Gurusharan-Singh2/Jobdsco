'use client'
import React, { useState } from 'react'
import JobIcon from "@/public/JobIcon.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from 'next/image';


const CandidateActivity = ({getJobApplicationList,Jobs}) => {
  const [currentTab, setCurrentTab] = useState("Applied");
  const appliedJobIds = getJobApplicationList.map(item => item.jobID);
  const MyJobs = Jobs.filter(job => appliedJobIds.includes(job._id));
 
  const SelectedJobIds = getJobApplicationList
  .filter(item => item.status === 'Selected')
  .map(item => item.jobID);

const SelectedJobs = Jobs.filter(job => SelectedJobIds.includes(job._id));

const RejectedJobIds = getJobApplicationList
  .filter(item => item.status === 'Rejected')
  .map(item => item.jobID);

const RejectedJobs = Jobs.filter(job => RejectedJobIds.includes(job._id));

  
  // console.log(getJobApplicationList);
  console.log(SelectedJobIds);
  console.log(RejectedJobIds);
  
  
  
  
  return (
    <div className="bg-white px-10">
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <div className="w-full mt-10">
          <div className="flex items-baseline justify-between border-b pb-6 px-10 mb-5">
            <h1 className="sm:text-xl md:text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
             Your Activity
            </h1>
            <TabsList>
              <TabsTrigger value="Applied" className="sm:text-lg md:text-xl">
                Applied
              </TabsTrigger>
              {
            SelectedJobIds.length>0 && <TabsTrigger value="Selected" className="sm:text-lg md:text-xl">
            Selected
          </TabsTrigger>
          }
              {
            RejectedJobIds.length>0 && <TabsTrigger value="Rejected" className="sm:text-lg md:text-xl">
            Rejected
          </TabsTrigger>
          }
              
              
            </TabsList>
          </div>

       
          <TabsContent value="Applied">
            <div className='w-full h-auto flex flex-col gap-5'>

            
            {MyJobs.map((item,i)=>(
              <div key={i} className='w-full bg-gray-200  rounded-2xl px-12 py-5  flex flex-col'>
                 <Image src={JobIcon} alt="Job Icon" width={40} height={40} />
                 <h1 className='text-2xl font-bold text-blue-950 py-5'>{item.jobTitle}</h1>
                 <p className='text-gray-500'>{item.companyName}</p>
              </div>
            ))}
            </div>
          </TabsContent>
          <TabsContent value="Selected">
            <div className='w-full h-auto flex flex-col gap-5'>

            
            {SelectedJobs.map((item,i)=>(
              <div key={i} className='w-full bg-gray-200  rounded-2xl px-12 py-5  flex flex-col'>
                 <Image src={JobIcon} alt="Job Icon" width={40} height={40} />
                 <h1 className='text-2xl font-bold text-blue-950 py-5'>{item.jobTitle}</h1>
                 <p className='text-gray-500'>{item.companyName}</p>
              </div>
            ))}
            </div>
          </TabsContent>
          <TabsContent value="Rejected">
            <div className='w-full h-auto flex flex-col gap-5'>

            
            {RejectedJobs.map((item,i)=>(
              <div key={i} className='w-full bg-gray-200  rounded-2xl px-12 py-5  flex flex-col'>
                 <Image src={JobIcon} alt="Job Icon" width={40} height={40} />
                 <h1 className='text-2xl font-bold text-blue-950 py-5'>{item.jobTitle}</h1>
                 <p className='text-gray-500'>{item.companyName}</p>
              </div>
            ))}
            </div>
          </TabsContent>
         
         
          
        </div>
      </Tabs>
    </div>
  )
}

export default CandidateActivity