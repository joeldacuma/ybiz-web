"use client";

import React, { useContext, useCallback } from "react";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataContext } from "@/providers/ContextProvider";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { USER_SURVEY_MAPPING } from "@/constants";
import { setSessionItem } from "@/lib/utils";
import { useRouter } from "next/navigation";


const Settings = () => {
  const router = useRouter();
  const data: any = useContext(DataContext);
  const { surveyInfo, userContent } = data;



  const handleEditUserSurvey =  useCallback(() => {
    userContent?.userSurveyContent?.data?.Questions.map((value:any, index:number) => {
      console.log(USER_SURVEY_MAPPING[index]);
      setSessionItem(`survey-input${index + 1}`, surveyInfo.membersContentDetails[USER_SURVEY_MAPPING[index]]);
    });
    router.push(`/survey/user/1`);
  }, [userContent, surveyInfo]);

  return (
    <div className="max-h-screen">
      <div>
        <div className="max-w-4xl mx-auto p-4">
          <div className="bg-white rounded-3xl lg:px-12 px-8 py-8">
            <h1 className="text-3xl font-bold">Profile Information</h1>
            <hr className="my-10" />
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-10">
            {(data?.error) ? (<div>
                <Button className="w-full">Edit Info</Button>
              </div>) :
              (<div className="space-y-4">
                <Card className="w-full bg-white border rounded-xl text-gray-800 space-y-2">
                  <div className="flex justify-between items-center p-4">
                    <span className="text-xl font-bold">Business Details</span>
                    <Pencil2Icon
                      onClick={handleEditUserSurvey}
                      className="w-6 h-6 hover:cursor-pointer"
                    />
                  </div>
                  <CardHeader className="flex justify-between">
                    {userContent?.userSurveyContent?.data?.Questions.map((survey: any, index:number) => (
                      <div key={index}>
                        <CardTitle className="py-4">{survey.Question}</CardTitle>
                        <span className="text-gray-400 text-md">
                          {surveyInfo.membersContentDetails[USER_SURVEY_MAPPING[index]]}                               
                        </span>
                      </div>
                    ))
                    }
                  </CardHeader>
                </Card>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
