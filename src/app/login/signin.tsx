import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";


const Signin = ({data, handleOnSignup}: any) => {
  const loginContentData = data;
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordType, setIsShowPasswordType] = useState("password");

  const handleClickShowPassword = () => {
    if (!isShowPassword) {
      setIsShowPassword(true);
      setIsShowPasswordType("text");
      return;
    }

    setIsShowPassword(false);
    setIsShowPasswordType("password");
  };
  
  return (
    <Card className="animate-fade-up w-full p-12 bg-white rounded-2xl shadow-2xl lg:max-w-xl">
    <div className="text-4xl font-medium text-center text-gray-700">
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
      {!loginContentData.data.disableGoogleAuth &&  
        <Button
        className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
      >
        <img className="w-6 h-6" src={loginContentData.data.googleIconButton.url} />
        <span className="p-1">Google</span>
        </Button>}
      {!loginContentData.data.disableFacebookAuth &&
        <Button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-300">
        <img className="w-6 h-6" src={loginContentData.data.facebookIconButton.url} />                      
        <span className="p-1">Facebook</span>
        </Button>}
    </div>
    <p className="mt-4 text-sm text-center text-gray-700">
      Don't have an account?{" "}
      <span
        onClick={handleOnSignup}
        className="font-bold text-black-600 hover:underline cursor-pointer"
      >
        Sign up
      </span>
    </p>
    </Card>
  )
}

export default Signin;
