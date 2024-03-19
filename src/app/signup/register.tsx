"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { useSignUp } from "@clerk/nextjs";
import { UserProps } from "@/interfaces";
import { ERROR_SIGNUP_PASSWORD_DONT_MATCH,
         VERIFICATION_CODE_PENDING, 
         RESEND_VERIFICATION_CODE_TEXT,
         RESEND_VERIFICATION_CODE,
         EMAIL_CODE,
         COMPLETE,
         ROUTE_DASHBOARD,
         ERROR_LOGIN_VERIFICATION_MESSAGE,
         ROUTE_LOGIN } from "@/constants";
import { useRouter } from "next/navigation";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

const Register = ({ data }: any) => {
  const router = useRouter();
  const { toast } = useToast();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordType, setIsShowPasswordType] = useState("password");
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isShowConfirmPasswordType, setIsShowConfirmPasswordType] = useState("password");
  const [pendingVerification, setPendingVerication] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: "",
  });
  const [code, setCode] = useState('');
  const [formData, setFormData] = useState<UserProps>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    isNotified: false,
    confirmPassword: "",
  });

  const handleClickShowPassword = () => {
    if (!isShowPassword) { 
    setIsShowPassword(true);
    setIsShowPasswordType("text");
    
    return;
    }
    
    setIsShowPassword(false);
    setIsShowPasswordType("password");
  };

  const handleClickShowConfirmPassword = () => {
    if (!isShowConfirmPassword) { 
    setIsShowConfirmPassword(true);
    setIsShowConfirmPasswordType("text");
    
    return;
    }
    
    setIsShowConfirmPassword(false);
    setIsShowConfirmPasswordType("password");
  };
    

  const handleSubmit = async (e: any) => {
    setCode('');
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage({
        error: true,
        message: ERROR_SIGNUP_PASSWORD_DONT_MATCH,
      });
      return;
    }

    try {
      await signUp.create({
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailAddress: formData.email,
        password: formData.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: EMAIL_CODE });
      setErrorMessage({ error: false, message: "" });
      setPendingVerication(true);
    } catch (err: any) {
      setErrorMessage({ error: true, message: err.errors[0].long_message });
    }
  };

  const handleOnVerify = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== COMPLETE) {
        setErrorMessage({ error: true, message: ERROR_LOGIN_VERIFICATION_MESSAGE });
      }

      if (completeSignUp.status === COMPLETE) {
        await setActive({ session: completeSignUp.createdSessionId });

        toast({
          title: "Account created successfully!",
           description: "Redirecting to dashboard...",  
       });

        router.push(ROUTE_DASHBOARD);
      }
    } catch(err: any) {
      setErrorMessage({ error: true, message: err.errors[0].long_message });
    }
  };

  const handleBacktoLogin = () => {
    router.push(ROUTE_LOGIN);
  }

  const onChangeSubmit = (value: any) => {
    setErrorMessage({ error: false, message: "" });
    setFormData({ ...formData, ...value});
  };

  const onChangeCode = (value: string) => {
    setErrorMessage({ error: false, message: "" });
    setCode(value);
  }

  return (
    <Card className="animate-fade-up m-4 md:px-24 px-10 py-12 bg-white rounded-2xl shadow-2xl lg:max-w-xl">
      {!pendingVerification ? (
        <div>
          <div className="text-2xl pb-2 font-medium text-center text-gray-700">
            Create your Account
          </div>
          <div className="text-sm text-center text-gray-400">
            We come together to plan and work towards a brighter future for our
            business and community!
          </div>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800"
              >
                Email
              </label>
              <Input
                onChange={(e) =>
                  onChangeSubmit({ ...formData, email: e.target.value })
                }
                type="email"
                placeholder="Email..."
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md 
              focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="firstname"
                className="block text-sm text-gray-800"
              >
                First name
              </label>
              <Input
                onChange={(e) =>
                  onChangeSubmit({ ...formData, firstName: e.target.value })
                }
                type="text"
                placeholder="First name..."
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md 
                focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="lastname"
                className="block text-sm text-gray-800"
              >
                Last name
              </label>
              <Input
                onChange={(e) =>
                  onChangeSubmit({ ...formData, lastName: e.target.value })
                }
                type="text"
                placeholder="Last name..."
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md 
                focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800"
              >
                Password
              </label>
              <div className="relative h-10 w-full">
              {!isShowPassword ?
                <EyeOpenIcon onClick={handleClickShowPassword} className="absolute w-5 h-5 text-gray-500 top-2 right-3" />
                : <EyeClosedIcon onClick={handleClickShowPassword} className="absolute w-5 h-5 text-gray-500 top-2 right-3" />
               }
                <Input
                  onChange={(e) =>
                    onChangeSubmit({ ...formData, password: e.target.value })
                  }
                  type={isShowPasswordType}
                  placeholder="Enter password..."
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md 
                focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmpassword"
                className="block text-sm text-gray-800"
              >
                Confirm Password
              </label>
              <div className="relative h-10 w-full">
              {!isShowConfirmPassword ?
                <EyeOpenIcon onClick={handleClickShowConfirmPassword} className="absolute w-5 h-5 text-gray-500 top-2 right-3" />
                : <EyeClosedIcon onClick={handleClickShowConfirmPassword} className="absolute w-5 h-5 text-gray-500 top-2 right-3" />
               }
                <Input
                  onChange={(e) =>
                    onChangeSubmit({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  type={isShowConfirmPasswordType}
                  placeholder="Confirm password..."
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md 
                focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mb-4">
              <span className="text-sm text-red-400">
                {errorMessage.error && errorMessage.message}
              </span>
            </div>
            <div className="mb-6">
              <Checkbox onCheckedChange={(e) => onChangeSubmit({...formData, isNotified: e})} id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-sm text-gray-300 ml-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Get emails from YBIZ about product updates, industry news, and
                events. You can unsubscribe at any time.
              </label>
            </div>
            <div className="mb-6">
              <Button
                type="submit"
                className="flex items-center justify-center w-full border border-gray-600 
                rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
              >
                <span className="text-xs">REGISTER</span>
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="text-2xl pb-2 font-medium text-center text-gray-700">
            Verify your Email
          </div>
          <div className="text-sm text-center text-gray-400">
            We have sent a verification code to your email. Please enter the
            code below.
          </div>
          <form onSubmit={handleOnVerify} className="mt-6">
            <div className="mb-6">
              <label
                htmlFor="code"
                className="block text-sm text-gray-800"
              >
                Verification Code
              </label>
              <Input
                onChange={(e) =>
                  onChangeCode(e.target.value)
                }
                maxLength={6}
                placeholder="Enter code..."
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md 
              focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              {errorMessage.error ?
                <span className="text-sm text-red-400">
                  {errorMessage.message}
                </span> :
                <div>
                  <p className="text-sm text-gray-800">
                    {VERIFICATION_CODE_PENDING}
                  </p>
                  <p className="text-sm text-gray-800">
                    {RESEND_VERIFICATION_CODE_TEXT}
                    <span onClick={handleSubmit} 
                    className="text-sm text-blue-600 m-1 hover:underline hover:cursor-pointer">
                      {RESEND_VERIFICATION_CODE}
                    </span> 
                  </p>
                </div>
              }
            </div>
            <div className="mb-6">
              <Button
                disabled={!code}
                type="submit"
                className="flex items-center justify-center w-full border border-gray-600 
                rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
              >
                <span className="text-xs">SUBMIT</span>
              </Button>
            </div>
          </form>
        </div>
      )}
      <p className="mt-4 text-xs text-center text-gray-700">
        Have an account?{" "}
        <span
          onClick={handleBacktoLogin}
          className="text-blue-700 hover:underline cursor-pointer"
        >
          Login
        </span>
      </p>
    </Card>
  );
};

export default Register;
