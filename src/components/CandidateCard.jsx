"use client";
import React, { useState } from "react";
import JobIcon from "@/public/JobIcon.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Image from "next/image";

import { createJobApplicatiob } from "@/actions";
import { Button } from "./ui/button";

const CandidateCard = ({ JobList, UserProfile,JobApplicationList }) => {
  const [drawerOpen, setdrawerOpen] = useState(false);
 
  const handleApplication = async () => {
    const formData = {
      recruiterId: JobList.recruiterId,
      name: UserProfile?.candidateInfo?.CName,
      email: UserProfile?.email,
      candidateUserId: UserProfile.userId,
      status: "Applied",
      jobID: JobList._id,
      jobApplicationDate: new Date().toLocaleDateString(),
    };

    await createJobApplicatiob(formData, "/jobs");
    setdrawerOpen(false);
  };

  return (
    <>
      <Drawer open={drawerOpen} onOpenChange={() => setdrawerOpen(false)}>
        <Card className="w-[250px] mx-auto  md:w-[300px] lg:w-[350px] h-auto lg:h-[250px] bg-yellow-100 shadow-none hover:shadow-lg hover:border-4 hover:border-blue-950 transition-shadow duration-300 ease-in-out">
          <CardHeader>
            <Image src={JobIcon} alt="Job Icon" width={40} height={40} />
          </CardHeader>
          <CardContent>
            <CardDescription>
              <h1 className="text-2xl font-bold text-blue-950 pt-2">
                {JobList.jobTitle}
              </h1>
              <p className="mt-3 text-lg">{JobList.companyName}</p>
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => setdrawerOpen(true)}
              className="text-white bg-blue-950 "
            >
              View Details
            </Button>
          </CardFooter>
        </Card>
        <DrawerContent className="px-5">
          <DrawerHeader>
            <div className="w-full flex justify-between">
              <DrawerTitle className=" text-2xl lg:text-4xl font-extrabold text-slate-900">
                {JobList.jobTitle}
              </DrawerTitle>
              <div className="flex gap-5">
                <Button className="bg-slate-900 disabled:bg-slate-400 " onClick={handleApplication}  disabled={JobApplicationList.find((e)=>e.jobID===JobList._id?true :false)}>  
                  {JobApplicationList.find((e)=>e.jobID===JobList._id )? 'Applied' :'Apply'}
                </Button>
                <Button
                  className="bg-slate-900 "
                  onClick={() => setdrawerOpen(false)}
                >
                  Cancel
                </Button>
              </div>
              
              
            </div>
          </DrawerHeader>
          <DrawerDescription className="text-xl font-semibold ml-[13px] pb-3">
            {JobList.jobLocation}
          </DrawerDescription>
          <div className="w-[150px] flex justify-center items-center h-[32px] bg-black text-white rounded-[5px] my-2 mx-3 text-lg font-semibold">
            {JobList.jobType}
          </div>
          <h2 className="text-xl mx-3 lg:mx-4 my-2 font-bold ">
            Experience : {JobList.jobExperience} year
          </h2>

          <div className="w-screen flex gap-3">
            {JobList.skills.split(",").map((skiItem, i) => (
              <div
                key={i}
                className="w-[100px] flex justify-center items-center h-[30px] bg-black text-white rounded-[5px] my-2 mx-3  font-semibold"
              >
                {skiItem}
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>


    </>
  );
};

export default CandidateCard;
