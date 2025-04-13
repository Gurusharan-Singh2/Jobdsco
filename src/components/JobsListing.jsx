"use client";
import React, { useEffect, useState } from "react";
import Post_New_Job from "./Post_New_Job";
import CandidateCard from "./CandidateCard";
import RecruiterCard from "./RecruiterCard";

const JobsListing = ({ UserProfile, JobList , JobApplicationList}) => {
 

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline justify-between border-b pb-3 px-2 border-gray-200">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-900">
          {UserProfile?.data?.role === "candidate"
            ? "Explore All Jobs"
            : "Jobs Dashboard"}
        </h1>
        <div className="flex items-center">
          {UserProfile?.data?.role === "candidate" ? (
            <p>filter</p>
          ) : (
            <Post_New_Job UserProfile={UserProfile}></Post_New_Job>
          )}
        </div>
      </div>
      <div className="pt-6 pb-24 mt-2">
        <div className="grid sm:grid-cols-1 md:grid-cols-2   gap-x-8 gap-y-10 lg:grid-cols-3">
          {JobList &&
            JobList.length > 0 &&
            JobList.map((job, index) =>
              UserProfile.data?.role === "candidate" ? (
                <CandidateCard key={index} JobList={job} UserProfile={UserProfile?.data} JobApplicationList={JobApplicationList} />
              ) : (
                <RecruiterCard key={index} JobList={job} JobApplicationList={JobApplicationList} />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default JobsListing;
