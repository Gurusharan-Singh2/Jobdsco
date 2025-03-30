import { FetchJobForCandidateAction, FetchJobForRecruiterAction, GetProfileAction } from '@/actions';
import JobsListing from '@/components/JobsListing'
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const Jobs = async() => {
   const user = await currentUser();
  
    const x = await GetProfileAction(user.id);
    
    

    const JobList=x.data.role==='candidate' ? await FetchJobForCandidateAction() :await FetchJobForRecruiterAction(user?.id);
   
    
   
   
    
  return (
    <><JobsListing UserProfile={JSON.parse(JSON.stringify(x))} JobList={JSON.parse(JSON.stringify(JobList.data))}></JobsListing></>
  )
}

export default Jobs