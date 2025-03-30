"use server"

import { revalidatePath } from "next/cache";

import ConnectDb from "@/database";
import Profile from "@/models/profile";
import Job from "@/models/jobs";



export async function AddProfileAction(Formdata, pathrevalidate) {
  try {
    await ConnectDb();
    const profile = new Profile(Formdata);
    const res = await profile.save();

    if (res) {
     revalidatePath(pathrevalidate);
      return {
        success: true,
        message: 'Profile Added',
        data: JSON.parse(JSON.stringify(res)),
      };
    } else {
      return {
        success: false,
        message: 'Failed to save profile',
      };
    }
  } catch (error) {
    console.error('Error adding profile:', error);
    return {
      success: false,
      message: 'An error occurred while adding the profile',
    };
  }
}

export async function GetProfileAction(id){
  await ConnectDb();
  
  const res=await Profile.findOne({userId:id});
  if(res){
    
    return{
      success:true,
      message:"ProfileAdded",
      data:JSON.parse(JSON.stringify(res))
    }
  }
}



// create job
export async function CreateJobAction(Formdata, pathrevalidate) {
  try {
    await ConnectDb();
    const job = new Job({
      companyName: Formdata.companyName,
      jobTitle: Formdata.jobTitle,
      jobType: Formdata.jobType,
      jobLocation: Formdata.jobLocation,
      jobExperience: Formdata.jobExperience,
      jobDescription: Formdata.jobDescription,
      skills: Formdata.skills,
      recruiterId: Formdata.recruiterId,
      applicants: Formdata.applicants,
    });
    const res = await job.save();

    if (res) {
      revalidatePath(pathrevalidate);
      return {
        success: true,
        message: 'Job Created',
      };
    } else {
      return {
        success: false,
        message: 'Failed to create job',
      };
    }
  } catch (error) {
    console.error('Error creating job:', error);
    return {
      success: false,
      message: 'An error occurred while creating the job',
    };
  }
}



// fetch job

// for recruiter
export async function FetchJobForRecruiterAction(id) {
  await ConnectDb();
  const res = await Job.find({ recruiterId: id });
  if (res) {
    return {
      success: true,
      message: "Jobs fetched",
      data: JSON.parse(JSON.stringify(res)),
    };
  } else {
    return {
      success: false,
      message: "Failed to fetch jobs",
    };
  }
}

// for applicant
export async function FetchJobForCandidateAction() {
  await ConnectDb();
  const res = await Job.find();
  if (res) {
    return {
      success: true,
      message: "Jobs fetched",
      data: JSON.parse(JSON.stringify(res)),
    };
  } else {
    return {
      success: false,
      message: "Failed to fetch jobs",
    };
  }
}
