"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { getLoginContent } from "@/providers";
import { Loader } from "@/components/Loader";
import { ROUTE_DASHBOARD, ROUTE_HOME } from "@/constants";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

import { useQuery } from "@tanstack/react-query";
import { signInWithGoogle } from "@/providers";

const Login = () => {
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordType, setIsShowPasswordType] = useState("password");
  const {data: loginContent, isPending: isPendingLoginContent} = useQuery({
    queryKey: ["loginContent"],
    queryFn: () => getLoginContent()
  });
  const loginContentData:any = loginContent?.loginContent || null; 

  const handleClickShowPassword = () => {
    if (!isShowPassword) {
      setIsShowPassword(true);
      setIsShowPasswordType("text");
      return;
    }

    setIsShowPassword(false);
    setIsShowPasswordType("password");
  };

  const handleGoogleSignIn = async () => {
    const success = await signInWithGoogle();
    
    console.log(success);

    if (success) {
      router.push(ROUTE_DASHBOARD);
    }
  };

  if (isPendingLoginContent) {
    return <Loader />;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-t from-slate-300 to-stone-80">
      <div>
        <img
          className="p-4 cursor-pointer"
          src={loginContentData.data.companyLogo.url}
          width={100}
          height={100}
          alt="YBIZ logo"
          onClick={() => router.push(ROUTE_HOME)}
        />
      </div>
      <Card className="w-full p-12 bg-white rounded-2xl shadow-2xl lg:max-w-xl">
        <div className="text-4xl font-medim text-center text-gray-700">
          {loginContentData.data.companyName}
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <Input
              type="email"
              placeholder="Enter email..."
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <div className="relative h-10 w-full">
            {!isShowPassword ? 
              <EyeOpenIcon onClick={handleClickShowPassword} className="absolute w-5 h-5 text-gray-500 top-2 right-3" />
            : <EyeClosedIcon onClick={handleClickShowPassword} className="absolute w-5 h-5 text-gray-500 top-2 right-3" />}
            <Input
              type={isShowPasswordType}
              placeholder="Enter password..."
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            /> 
            </div>
          </div>
          <Link
            href="/forget"
            className="text-xs text-black-600 font-bold hover:underline"
          >
            Forget Password?
          </Link>
          <div className="mt-2">
            <Button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-300">
              Sign In
            </Button>
          </div>
        </form>

        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
        </div>
        <div className="flex mt-4 gap-x-2">
          <Button
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
          onClick={handleGoogleSignIn}
          >
            <img className="w-6 h-6" src={loginContentData.data.googleIconButton.url} />
            <span className="p-1">Google</span>
          </Button>
          <Button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-300">
            <img className="w-6 h-6" src={loginContentData.data.facebookIconButton.url} />                      
            <span className="p-1">Facebook</span>
          </Button>
        </div>
        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-bold text-black-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Login;
