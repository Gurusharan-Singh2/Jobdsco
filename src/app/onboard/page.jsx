import Onboard from "@/components/Onboard";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { GetProfileAction } from "@/actions";
import { redirect } from "next/navigation";
const OnBoardPage = async () => {
  const user = await currentUser();

  const x = await GetProfileAction(user.id);

  if (x?.data?.userId && x?.data?.isPremiumUser === "false") {
    redirect("/membership");
  } else if (x?.data?.userId && x?.data?.isPremiumUser === "true") {
    redirect("/");
  } else {
    return <Onboard></Onboard>;
  }
};

export default OnBoardPage;
