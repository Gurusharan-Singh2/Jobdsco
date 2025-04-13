import { FetchApplicationCandidate, FetchJobForCandidateAction } from '@/actions';
import CandidateActivity from '@/components/CandidateActivity';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const activityPage = async() => {
  const user = await currentUser();
  const getJobApplicationList =await FetchApplicationCandidate(user?.id);

  const Jobs= await FetchJobForCandidateAction();
  


  return (
    <CandidateActivity getJobApplicationList={getJobApplicationList} Jobs={Jobs.data}></CandidateActivity>
  )
}

export default activityPage