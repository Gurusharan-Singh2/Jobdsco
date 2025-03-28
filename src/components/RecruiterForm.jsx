import React from 'react'
import { Input } from './ui/input'


const RecruiterForm = ({RecruiterData,setRecuiterData}) => {
  return (
    <>
  <div className="mt-3 border-b">
    <Input
      placeholder="Enter your name"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      name="RName"
      onChange={(e) => setRecuiterData({ ...RecruiterData, RName: e.target.value })}
      value={RecruiterData.RName}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your company name"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      name="RCompany"
      onChange={(e) => setRecuiterData({ ...RecruiterData, RCompany: e.target.value })}
      value={RecruiterData.RCompany}
      required
    />
  </div>

  <div className="mt-14 border-b">
    <Input
      placeholder="Enter your company role"
      type="text"
      className="px-5 py-6 text-xl placeholder:text-xl border-none border-gray-500 focus:border-black focus:outline-none"
      name="RRole"
      onChange={(e) => setRecuiterData({ ...RecruiterData, RRole: e.target.value })}
      value={RecruiterData.RRole}
      required
    />
  </div>
</>

  )
}

export default RecruiterForm