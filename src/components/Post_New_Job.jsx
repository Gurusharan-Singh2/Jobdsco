'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from './ui/input'
import { CreateJobAction } from '@/actions'
import { useUser } from '@clerk/nextjs'


const Post_New_Job = ({UserProfile}) => {
  const {user}=useUser();

  
  const [Jobdata,setJobdata]=useState({
    companyName:UserProfile.data.recruiterInfo.RCompany
    ,
    jobTitle:"",
    jobType:"",
    jobLocation:"",
    jobExperience:"",
    jobDescription:"",
    skills:"",
});


const [OpenDialog,setOpenDialog]=useState(false);

const handleAddJob=async()=>{
  const res=await CreateJobAction({
    companyName:Jobdata.companyName,
    jobTitle:Jobdata.jobTitle,
    jobType:Jobdata.jobType,
    jobLocation:Jobdata.jobLocation,
    jobExperience:Jobdata.jobExperience,
    jobDescription:Jobdata.jobDescription,
    skills:Jobdata.skills,
    recruiterId:user.id,
    applicants:[],
  },'/recruiter/jobs')
  if(res){
    alert("Job Created")
    setOpenDialog(false);
  }
  
}
  return (
    <div>
      <Button onClick={()=>setOpenDialog(true)}>Post A Job</Button>
      <Dialog 
  open={OpenDialog} 
  onOpenChange={() => {
    setOpenDialog(false);
    setJobdata({
      companyName: UserProfile?.data?.recruiterInfo?.RCompany || "",
      jobTitle: "",
      jobType: "",
      jobLocation: "",
      jobExperience: "",
      jobDescription: "",
      skills: "",
    });
  }}
>
        <DialogContent className='sm:max-w-[600px] h-[60vh] overflow-auto'>
         <DialogHeader>
            <DialogTitle>Post New Job</DialogTitle>
            <form className='grid gap-4 py-4' action={handleAddJob}>
              <div>
                 <Input
                      placeholder={Jobdata.companyName}
                      type="text"
                      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none" disabled
                      
                      value={Jobdata.companyName}
                      required
                    />
              </div>
              <div>
                 <Input
                      placeholder="Job Title"
                      type="text"
                      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
                      onChange={(e) => setJobdata({ ...Jobdata, jobTitle: e.target.value })}
                      value={Jobdata.jobTitle}
                      required
                    />
              </div>
              <div>
                 <Input
                      placeholder="Job Type"
                      type="text"
                      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
                      onChange={(e) => setJobdata({ ...Jobdata, jobType: e.target.value })}
                      value={Jobdata.jobType}
                      required
                    />
              </div>
              <div>
                 <Input
                      placeholder="Job Location"
                      type="text"
                      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
                      onChange={(e) => setJobdata({ ...Jobdata, jobLocation: e.target.value })}
                      value={Jobdata.jobLocation}
                      required
                    />
              </div>
              <div>
                 <Input
                      placeholder="Experience"
                      type="text"
                      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
                      onChange={(e) => setJobdata({ ...Jobdata, jobExperience: e.target.value })}
                      value={Jobdata.jobExperience}
                      required
                    />
              </div>
              <div>
                 <Input
                      placeholder="Description"
                      type="text"
                      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
                      onChange={(e) => setJobdata({ ...Jobdata, jobDescription: e.target.value })}
                      value={Jobdata.jobDescription}
                      required
                    />
              </div>
              
              <div>
                 <Input
                      placeholder="Skills"
                      type="text"
                      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
                      onChange={(e) => setJobdata({ ...Jobdata, skills: e.target.value })}
                      value={Jobdata.skills}
                      required
                    />
              </div>
              <Button type='submit' className="my-5 w-[40%] ">Post Job</Button>
              
            </form>
          </DialogHeader> 
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Post_New_Job