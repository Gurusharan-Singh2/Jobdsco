import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'

const CandidateForm = ({CandidateData,setCandidateData}) => {
  return (
    <>
  <div className="mt-3 flex gap-2 border-b"> 
    <h3 className="mt-6 mr-2">Resume</h3>
    <Input
      type="file"
      className="px-5 py-6 text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      name="resume"
      onChange={(e) => setCandidateData({ ...CandidateData, resume: e.target.files[0] })}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your name"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CName: e.target.value })}
      value={CandidateData.CName}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your current company"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CCurrentCompany: e.target.value })}
      value={CandidateData.CCurrentCompany}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your current job location"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CCurrentJobLocation: e.target.value })}
      value={CandidateData.CCurrentJobLocation}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your preferred job location"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CPreferedJobLocation: e.target.value })}
      value={CandidateData.CPreferedJobLocation}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your current salary"
      type="number"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CCurrentSalary: e.target.value })}
      value={CandidateData.CCurrentSalary}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your notice period"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CNoticePeriod: e.target.value })}
      value={CandidateData.CNoticePeriod}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your skills"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CSkills: e.target.value })}
      value={CandidateData.CSkills}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your previous companies"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CPreviousCompany: e.target.value })}
      value={CandidateData.CPreviousCompany}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your total experience"
      type="number"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CExperience: e.target.value })}
      value={CandidateData.CExperience}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your college"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CCollege: e.target.value })}
      value={CandidateData.CCollege}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your college location"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CCollegeLocation: e.target.value })}
      value={CandidateData.CCollegeLocation}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Label className="mb-4 text-xl text-gray-500">Enter your graduation year</Label>
    <Input
      type="date"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CGraduatedYear: e.target.value })}
      value={CandidateData.CGraduatedYear}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your LinkedIn profile"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CLinkedinProfile: e.target.value })}
      value={CandidateData.CLinkedinProfile}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your GitHub profile"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      onChange={(e) => setCandidateData({ ...CandidateData, CGithubProfile: e.target.value })}
      value={CandidateData.CGithubProfile}
      required
    />
  </div>
</>

  )
}

export default CandidateForm