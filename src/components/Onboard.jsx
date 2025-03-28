"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import CandidateForm from "./CandidateForm";
import RecruiterForm from "./RecruiterForm";

const Onboard = () => {
  const [currentTab, setCurrentTab] = useState("candidate");
  function handleTab(state) {
    setCurrentTab(state);
  }

  const [RecruiterData,setRecuiterData]=useState({
    RName:"",
    RCompany:"",
    RRole:""

  })

  const [CandidateData,setCandidateData]=useState({
    resume:null,
    CName:"",
    CCurrentCompany:"",
    CCurrentJobLocation:"",
    CPreferedJobLocation:"",
    CCurrentSalary:"",
    CNoticePeriod:"",
    CSkills:"",
    CPreviousCompany:"",
    CExperience:"",
    CCollege:"",
    CCollegeLocation:"",
    CGradautedYear:"",
    CLinkedinProfile:"",
    CGithbProfile:"",

  })

  console.log(CandidateData);
  
 
  
  return (
    <div className="bg-white px-10">
      <Tabs value={currentTab} onValueChange={handleTab}>
        <div className="w-full mt-10">
          <div className="flex items-baseline justify-between border-b pb-6 px-10 ">
            <h1 className="sm:text-xl md:text-2xl lg:text-4xl  font-bold tracking-tight text-gray-900">
              Welcome to onboarding
            </h1>
            <TabsList>
              <TabsTrigger value="candidate" className='sm:text-lg md:text-xl '>Candidate</TabsTrigger>
              <TabsTrigger value="recruiter" className='sm:text-lg md:text-xl '>Recruiter</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="candidate">
          <form className="mt-5 px-5">
            <CandidateForm CandidateData={CandidateData} setCandidateData={setCandidateData} ></CandidateForm>
              <Button type='submit' className="my-5 ">Onboard as Candidate</Button>
            </form>
          </TabsContent>
          <TabsContent value="recruiter">
            <form className="mt-5 px-5">
              <RecruiterForm RecruiterData={RecruiterData} setRecuiterData={setRecuiterData}></RecruiterForm>
              <Button type='submit' className="mt-5 ">Onboard as Recruiter</Button>
            </form>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Onboard;
