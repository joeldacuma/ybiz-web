"use client";

import React, { useState } from "react";
import { getLoginContent } from "@/providers";
import { Loader } from "@/components/Loader";
import { ROUTE_HOME } from "@/constants";
import { useRouter } from "next/navigation";
import Signin from "@/app/login/signin";
import Signup from "@/app/login/signup";
import { CaretLeftIcon } from "@radix-ui/react-icons";

import { useQuery } from "@tanstack/react-query";

const Login = () => {
  const router = useRouter();
  const { data: loginContent, isPending: isPendingLoginContent } = useQuery({
    queryKey: ["loginContent"],
    queryFn: () => getLoginContent(),
  });
  const loginContentData: any = loginContent?.loginContent || null;
  const [isShowSignup, setIsShowSignup] = useState(false);

  if (isPendingLoginContent) {
    return <Loader />;
  }

  const handleOnSignup = () => {
    if (!isShowSignup) {
      setIsShowSignup(true);
      return;
    }

    setIsShowSignup(false);
  };

  const handleBack = () => {
    router.push(ROUTE_HOME);
  };

  return (
    <div className="w-full overflow-auto scrollbar-hide bg-gradient-to-t from-slate-300 to-stone-80">
      {/* <div className="p-5 flex flex-row text-center items-center hover:underline cursor-pointer">
        <div>
          <CaretLeftIcon height={30} width={30} />
        </div>
        <h4 className="text-black-600 font-bold" onClick={handleBack}>
          HOME
        </h4>
      </div> */}
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
        {!isShowSignup ? (
          <Signin data={loginContentData} handleOnSignup={handleOnSignup} />
        ) : (
          <Signup data={loginContentData} handleOnSignup={handleOnSignup} />
        )}
      </div>
    </div>
  );
};

export default Login;
