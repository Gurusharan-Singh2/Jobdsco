import { GetProfileAction } from '@/actions';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";

export default async function Home() {
  const user=await currentUser();
  if(!user){
    redirect('/onboard')
  }
  const x=await GetProfileAction(user.id);
  
  if(!x?.data?.userId ){
    redirect("/onboard");
  }
  else
  return(
    <h1>Home</h1>
  )
}
