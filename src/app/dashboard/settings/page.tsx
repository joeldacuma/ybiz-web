import React from "react";
import { Card, 
         CardHeader,  
         CardTitle,
         CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="max-h-screen">
      <div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 mb-5">
            <h1 className="text-3xl font-bold mb-10">Settings</h1>

            <hr className="my-10" />

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl text-left font-bold mb-4">Membership</h2>
                <div className="space-y-4">
                  <Card className="w-full bg-white border rounded-xl text-gray-800 space-y-2">
                    {/* <div className="flex justify-between">
                      <div className="text-gray-400 text-xs">You are in Premium Plan</div>
                    </div>
                    <a
                      className="font-bold hover:text-yellow-800 hover:underline"
                    >
                      200 PHP/Month
                    </a> */}
                    <CardHeader className="flex justify-between">
                      <span className="text-gray-400 text-xs">You are in Premium Plan</span>
                      <CardTitle>200 PHP/Monthly</CardTitle>  
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full">
                        Change Plan
                      </Button>
                    </CardFooter>                    
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl text-left font-bold mb-4">Payment Method</h2>
                <div className="space-y-4">
                <Card className="w-full bg-white border rounded-xl text-gray-800 space-y-2">
                    {/* <div className="flex justify-between">
                      <div className="text-gray-400 text-xs">You are in Premium Plan</div>
                    </div>
                    <a
                      className="font-bold hover:text-yellow-800 hover:underline"
                    >
                      200 PHP/Month
                    </a> */}
                    <CardHeader className="flex justify-between">
                      <span className="text-gray-400 text-xs">Your next payment: 04/01/2024</span>
                      <CardTitle>Credit Card</CardTitle>  
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full">
                        Cancel
                      </Button>
                    </CardFooter>                    
                  </Card>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-white rounded-3xl p-12 mb-5">
            <h1 className="text-3xl font-bold mb-10">Settings</h1>

            <hr className="my-10" />

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">

            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Settings;