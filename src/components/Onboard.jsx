"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { AddProfileAction } from "@/actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import RecruiterForm from "./RecruiterForm";
import { Button } from "./ui/button";
import CandidateForm from "./CandidateForm";
import { createClient } from "@supabase/supabase-js";






const Onboard = () => {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const [currentTab, setCurrentTab] = useState("candidate");

  const [RecruiterData, setRecuiterData] = useState({
    RName: "",
    RCompany: "",
    RRole: "",
  });

  const [CandidateData, setCandidateData] = useState({
    resume: "",
    CName: "",
    CCurrentCompany: "",
    CCurrentJobLocation: "",
    CPreferedJobLocation: "",
    CCurrentSalary: "",
    CNoticePeriod: "",
    CSkills: "",
    CPreviousCompany: "",
    CExperience: "",
    CCollege: "",
    CCollegeLocation: "",
    CGradautedYear: "",
    CLinkedinProfile: "",
    CGithbProfile: "",
  });

  const [File, setFile] = useState(null);

  const { user } = useUser();
 
  

  // ✅ Waits for the file to upload before submitting
  const handleFileToPdf = async () => {
    if (!File) return null;
    
    try {
      const { data, error } = await supabase.storage
        .from("jbp")
        .upload(`/public/resume/${File.name}`, File, { cacheControl: "3600", upsert: true });

      if (error) {
        console.error("File upload error:", error);
        return null;
      }

      console.log("Uploaded file:", data);
      return data?.path; // ✅ Return uploaded file path
    } catch (err) {
      console.error("Unexpected error:", err);
      return null;
    }
  };

  // ✅ Handles both candidate and recruiter submissions
  const handleRecruiter = async (e) => {
    e.preventDefault();

    let uploadedResumePath = null;
    if (currentTab === "candidate") {
      uploadedResumePath = await handleFileToPdf(); // ✅ Upload before submission
    }

    const data =
      currentTab === "candidate"
        ? {
            candidateInfo: { ...CandidateData, resume: uploadedResumePath },
            role: "candidate",
            isPremiumUser: "false",
            userId: user?.id,
            email: "A",
          }
        : {
            userId: user?.id,
            role: "recruiter",
            email: user.emailAddresses[0].emailAddress,
            isPremiumUser: "false",
            recruiterInfo: RecruiterData,
          };

    try {
      const res = await AddProfileAction(data,'/onboard');
      console.log("Profile creation response:", res);
    } catch (error) {
      console.error("Error in onboarding:", error);
    }
  };

  return (
    <div className="bg-white px-10">
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <div className="w-full mt-10">
          <div className="flex items-baseline justify-between border-b pb-6 px-10">
            <h1 className="sm:text-xl md:text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Welcome to onboarding
            </h1>
            <TabsList>
              <TabsTrigger value="candidate" className="sm:text-lg md:text-xl">
                Candidate
              </TabsTrigger>
              <TabsTrigger value="recruiter" className="sm:text-lg md:text-xl">
                Recruiter
              </TabsTrigger>
            </TabsList>
          </div>

          {/* ✅ Fix: Add onSubmit to form */}
          <TabsContent value="candidate">
            <form className="mt-5 px-5" onSubmit={handleRecruiter}>
              <CandidateForm CandidateData={CandidateData} File={File} setFile={setFile} setCandidateData={setCandidateData} />
              <Button type="submit" className="my-5">Onboard as Candidate</Button>
            </form>
          </TabsContent>

          <TabsContent value="recruiter">
            <form className="mt-5 px-5" onSubmit={handleRecruiter}> {/* ✅ Changed from action to onSubmit */}
              <RecruiterForm RecruiterData={RecruiterData} setRecuiterData={setRecuiterData} />
              <Button type="submit" className="mt-5">Onboard as Recruiter</Button>
            </form>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Onboard;

