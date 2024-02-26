import React, { use, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { useSignUp } from "@clerk/nextjs";

import { ERROR_SIGNUP_PASSWORD_DONT_MATCH, 
         EMAIL_CODE,
         COMPLETE,
         ROUTE_DASHBOARD } from "@/constants";
import { useRouter } from "next/navigation";

const Signup = ({ data, handleOnSignup }: any) => {
  const router = useRouter();
  const { toast } = useToast();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [pendingVerification, setPendingVerication] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: "",
  });
  const [code, setCode] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: any) => {
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
      setErrorMessage({ error: true, message: err.errors[0].message });
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

      }

      if (completeSignUp.status === COMPLETE) {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push(ROUTE_DASHBOARD);
      }
    } catch(err: any) {

    }
  };

  return (
    <Card className="animate-fade-up w-full md:px-24 px-12 py-12 bg-white rounded-2xl shadow-2xl lg:max-w-xl">
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
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
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
                className="block text-sm font-semibold text-gray-800"
              >
                First name
              </label>
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
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
                className="block text-sm font-semibold text-gray-800"
              >
                Last name
              </label>
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
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
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <div className="relative h-10 w-full">
                <Input
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  type="password"
                  placeholder="Enter password..."
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md 
                focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmpassword"
                className="block text-sm font-semibold text-gray-800"
              >
                Confirm Password
              </label>
              <div className="relative h-10 w-full">
                <Input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  type="password"
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
              <Checkbox id="terms" />
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
                REGISTER
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="text-2xl pb-2 font-medium text-center text-gray-700">
            Verification code
          </div>
          <div className="text-sm text-center text-gray-400">
            We have sent a verification code to your email. Please enter the
            code below.
          </div>
          <form onSubmit={handleOnVerify} className="mt-6">
            <div className="mb-6">
              <label
                htmlFor="code"
                className="block text-sm font-semibold text-gray-800"
              >
                Verification Code
              </label>
              <Input
                onChange={(e) =>
                  setCode(e.target.value)
                }
                type="text"
                placeholder="Enter code..."
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md 
              focus:border-gray-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-6">
              <Button
                type="submit"
                className="flex items-center justify-center w-full border border-gray-600 
                rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
              >
                Verify Email
              </Button>
            </div>
          </form>
        </div>
      )}
      <p className="mt-4 text-sm text-center text-gray-700">
        Have an account?{" "}
        <span
          onClick={handleOnSignup}
          className="font-bold text-black-600 hover:underline cursor-pointer"
        >
          Sign In
        </span>
      </p>
    </Card>
  );
};

export default Signup;
