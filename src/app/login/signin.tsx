import React, { useState } from "react";
import { SignIn, useSignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";


const Signin = ({data}: any) => {
  const loginContentData = data;
  const { isLoaded, signIn } = useSignIn();
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordType, setIsShowPasswordType] = useState("password");
  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const handleClickShowPassword = () => {
  //   if (!isShowPassword) {
  //     setIsShowPassword(true);
  //     setIsShowPasswordType("text");
  //     return;
  //   }

  //   setIsShowPassword(false);
  //   setIsShowPasswordType("password");
  // };

  // const handleSignIn = async (e: any) => {
  //   e.preventDefault();
  //   if (!isLoaded) {
  //   return null;
  //   }

  //   try {
  //     await signIn.create({
  //       identifier: formData.email,
  //       password: formData.password,
  //     });

  //     router.push("/dashboard");
  //   } catch (error) {
  //     console.error("Sign in failed: ", error);
  //   }
  // };

  // const handleSignInWithGoogle = async (e: any) => {
  //   e.preventDefault();
  //   if (!isLoaded) {
  //   return null;
  //   }
    
  //   try {
  //     await signIn.create({
  //       strategy: "oauth_google",
  //       redirectUrl: "https://viable-roughy-92.clerk.accounts.dev/v1/oauth_callback"
  //     });

  //     router.push("/dashboard");
  //   } catch (error) {
  //     console.error("Sign in failed: ", error);
  //   }
    
  // };

  // const onChangeSignIn = (value: any) => {
  //   setErrorMessage({ error: false, message: "" });
  //   setFormData({...formData, ...value});
  // };
  
  return (
    // <Card className="animate-fade-up w-full p-12 bg-white rounded-2xl shadow-2xl lg:max-w-xl">
    // <div className="text-4xl font-medium text-center text-gray-700">
    //   {loginContentData.data.companyName}
    // </div>
    // <form  onSubmit={handleSignIn} className="mt-6">
    //   <div className="mb-4">
    //     <label
    //       htmlFor="email"
    //       className="block text-sm font-semibold text-gray-800"
    //     >
    //       Email
    //     </label>
    //     <Input
    //       onChange={(e) => 
    //         onChangeSignIn({...formData, email: e.target.value })
    //       }
    //       type="email"
    //       placeholder="Enter email..."
    //       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //     />
    //   </div>
    //   <div className="mb-2">
    //     <label
    //       htmlFor="password"
    //       className="block text-sm font-semibold text-gray-800"
    //     >
    //       Password
    //     </label>
    //     <div className="relative h-10 w-full">
    //     {!isShowPassword ? 
    //       <EyeOpenIcon onClick={handleClickShowPassword} className="absolute w-5 h-5 text-gray-500 top-2 right-3" />
    //     : <EyeClosedIcon onClick={handleClickShowPassword} className="absolute w-5 h-5 text-gray-500 top-2 right-3" />}
    //     <Input
    //       onChange={(e) => 
    //         onChangeSignIn({...formData, password: e.target.value })
    //       }
    //       type={isShowPasswordType}
    //       placeholder="Enter password..."
    //       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //     /> 
    //     </div>
    //   </div>
    //   <Link
    //     href="/forget"
    //     className="text-xs text-black-600 font-bold hover:underline"
    //   >
    //     Forget Password?
    //   </Link>
    //   <div className="mt-2">
    //     <Button
    //     type="submit"
    //     className="flex items-center justify-center w-full p-2 border border-gray-600 
    //     rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-300">
    //       Sign In
    //     </Button>
    //   </div>
    // </form>

    // <div className="relative flex items-center justify-center w-full mt-6 border border-t">
    // </div>
    // <div className="flex mt-4 gap-x-2">
    //   {!loginContentData.data.disableGoogleAuth &&  
    //     <Button
    //     onClick={handleSignInWithGoogle}
    //     className="flex items-center justify-center w-full p-2 border border-gray-600 
    //     rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
    //   >
    //     <img className="w-6 h-6" src={loginContentData.data.googleIconButton.url} />
    //     <span className="p-1">Google</span>
    //     </Button>}
    //   {!loginContentData.data.disableFacebookAuth &&
    //     <Button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-300">
    //     <img className="w-6 h-6" src={loginContentData.data.facebookIconButton.url} />                      
    //     <span className="p-1">Facebook</span>
    //     </Button>}
    // </div>
    // <p className="mt-4 text-sm text-center text-gray-700">
    //   Don't have an account?{" "}
    //   <span
    //     onClick={handleOnSignup}
    //     className="font-bold text-black-600 hover:underline cursor-pointer"
    //   >
    //     Sign up
    //   </span>
    // </p>
    // <p className="mt-6 text-sm text-center text-gray-700">
    //   <span
    //     onClick={() => router.push("/")}
    //     className="hover:underline cursor-pointer"
    //   >
    //     BACK TO HOME PAGE
    //   </span>
    // </p>
    // </Card>
    <div className="animate-fade-up">
      <SignIn signUpUrl="http://localhost:3000/signup" />
    </div>
  )
}

export default Signin;
