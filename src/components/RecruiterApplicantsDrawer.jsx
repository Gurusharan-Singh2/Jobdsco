"use client";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import { GetProfileAction, UpdateApplication } from "@/actions";
import { createClient } from "@supabase/supabase-js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Define the fetcher function

const RecruiterApplicantsDrawer = ({
  JobDrawer,
  setJobDrawer,
  JobApplication,
}) => {
  const [candiateShowModel, setcandiateShowModel] = useState(false);
  const [candiate, setcandiate] = useState(null);
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const [candidateApplication,setcandiateAppliction]=useState(null);


  const handleChange=async(s)=>{
  

   await UpdateApplication(candidateApplication,s,'/jobs');
   setcandiateShowModel(false);
   
  }
 
  
  const Fetch = async (id) => {
    const res = await GetProfileAction(id);
    if (res) {
      setcandiate(res.data);
      setcandiateShowModel(true);
    }
    const application = JobApplication.find((item) => item.candidateUserId === id);
    setcandiateAppliction(application);
  };

  const handleResume=()=>{
    const {data}=supabase.storage.from("jbp").getPublicUrl(candiate?.candidateInfo?.resume)

    window.open(data?.publicUrl,"_blank"    )
    
    
  }
  
  console.log(candidateApplication);
  


  return (
    <>
      <Drawer open={JobDrawer} onOpenChange={setJobDrawer}>
        <DrawerContent>
          <DrawerTitle>
            <ScrollArea className="h-auto overflow-y-auto p-4">
              {JobApplication && JobApplication.length > 0 && (
                <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 py-5">
                  {JobApplication.map((i, key) => (
                    <div
                      className="h-[80px] min-w-[25%] rounded-lg shadow-xl  mx-4 py-2 px-10 flex justify-between items-center"
                      key={key}
                    >
                      <h2 className="text-2xl font-extrabold ">{i.name}</h2>

                      <Button
                        onClick={() => {
                          Fetch(i?.candidateUserId);
                        }}
                      >
                        View Profile
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </DrawerTitle>
        </DrawerContent>
      </Drawer>

      <Dialog
        open={candiateShowModel}
        onOpenChange={() => setcandiateShowModel(false)}
      >
        <DialogContent>

          <DialogHeader>
            <DialogTitle>
              {candiate?.candidateInfo?.CName} ,{candiate?.email}
            </DialogTitle>
          </DialogHeader>

          <p>{candiate?.candidateInfo?.CCurrentCompany}</p>
          <p>{candiate?.candidateInfo?.CCurrentJobLocation}</p>
          <p>Total Experience : {candiate?.candidateInfo?.CExperience} Years</p>
          <p>Salary : {candiate?.candidateInfo?.CCurrentSalary} {" "} LPA</p>
          <p>{candiate?.candidateInfo?.CCurrentJobLocation}</p>
          <div className="w-full flex-wrap flex gap-3"> Skills :
            {candiate?.candidateInfo?.CSkills.split(",").map((skiItem, i) => (
              <div
                key={i}
                className="w-[100px]  flex  justify-center items-center h-[30px] bg-black text-white rounded-[5px] my-2 mx-3  font-semibold"
              >
                {skiItem}
              </div>
            ))}
          </div>
          <div className="w-full flex flex-wrap gap-3"> Previous Company :
            {candiate?.candidateInfo?.CPreviousCompany.split(",").map((skiItem, i) => (
              <div
                key={i}
                className="w-[100px] flex justify-center items-center h-[30px] bg-black text-white rounded-[5px] my-2 mx-3  font-semibold"
              >
                {skiItem}
              </div>
            ))}
          </div>


          
          <div className='flex gap-3'>
            <Button onClick={handleResume} className='text-white bg-blue-950 ' >Resume</Button>
            <Button className='text-white bg-green-500 disabled:opacity-55 ' disabled={candidateApplication?.status=='Selected'} onClick={()=>handleChange('Selected')}>{candidateApplication?.status=='Selected'?'Selected':'Select'}</Button>
            <Button className={`text-white bg-red-500   disabled:opacity-55`} disabled={candidateApplication?.status=='Rejected'} onClick={()=>handleChange('Rejected')}>Reject</Button>
          </div>
        
          
        </DialogContent>
       
      </Dialog>
    </>
  );
};

export default RecruiterApplicantsDrawer;
