"use client";

import React from "react";
import { getLoginContent, getFooter } from "@/providers";
import { Loader } from "@/components/Loader";
import { ROUTE_HOME } from "@/constants";
import { useRouter } from "next/navigation";
import Register from "@/app/signup/register";

import { useQuery } from "@tanstack/react-query";

const SignUp = () => {
    const router = useRouter();

    const { data: loginContent, isPending: isPendingLoginContent } = useQuery({
      queryKey: ["loginContent"],
      queryFn: () => getLoginContent(),
    });
  
    const {data: footers, isPending: isPendingFooters} = useQuery({
      queryKey: ["footers"],
      queryFn: () => getFooter(),
    });
  
    const loginContentData: any = loginContent?.loginContent || null;
    const footersData: any = footers?.footers || null;
  
    if (isPendingLoginContent || isPendingFooters) {
      return <Loader />;
    }

  return (
    <div className="w-full overflow-auto scrollbar-hide bg-gradient-to-t from-slate-300 to-stone-80">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div>
          <img
            className="p-4 cursor-pointer"
            src={loginContentData.data.companyLogo.url}
            width={100}
            height={100}
            alt="company logo"
            onClick={() => router.push(ROUTE_HOME)}
          />
        </div>
          <Register data={loginContentData} />
        <div className="m-10">
          <p className="text-sm">
            Powered by:
          </p>
          <a target="_blank" href={footersData.data.poweredByLink}>
            <img className="w-20 h-20 pt-2" src={loginContentData.data.poweredByLogo.url} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default SignUp;
