"use client";

import React, { useState, useEffect, useContext } from "react";
import { Header } from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import { getDashboardContent } from "@/providers";
import { Loader } from "@/components/Loader";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getSessionItem } from "@/lib/utils";
import { DataContext } from "@/providers/ContextProvider";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { ROUTE_DASHBOARD } from "@/constants";

const SurveyPreview = () => {
  const router = useRouter();
  const data:any = useContext(DataContext);
  const { data: dashboardContent, isLoading: isLoadingDashboard } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashboardContent(),
  });
  const [surveyData, setSurveyData] = useState(data.userSurveyContent.data);

  const getSurveyAnswer = (index: number) => {
    const surveyValue = getSessionItem(`survey-input${index}`);
    return surveyValue;
  };

  const handleEditUserSurvey = () => {
    router.push("/survey/user/1");
  };

  const handleCancelUserSurvey = () => {

  };

  const handleSubmitSurvey = () => {
    router.push(ROUTE_DASHBOARD);
  };

  if (isLoadingDashboard) {
    return <Loader />;
  }

  return (
    <>
      <Header menuDisabled={true} data={dashboardContent} />
      <div className="lg:max-h-screen">
        <div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 mb-5">
              <h1 className="text-3xl font-bold mb-10">
                {surveyData.title}
              </h1>

              <hr className="my-10" />

              <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-10">
                <div>
                  <h2 className="text-xl text-left font-bold mb-4">
                    {surveyData.description}
                  </h2>
                  <div className="space-y-4">
                    <Card className="w-full bg-white border rounded-xl text-gray-800 space-y-2">
                      <div className="flex justify-end items-end p-4">
                        <Pencil2Icon onClick={handleEditUserSurvey} className="w-6 h-6 hover:cursor-pointer" />
                      </div>
                      <CardHeader className="flex justify-between">
                      {surveyData.Questions.map((survey: any, index: number) => (
                        <div>
                          <CardTitle className="py-4">{survey.Question}</CardTitle>
                            <span className="text-gray-400 text-md">
                              {getSurveyAnswer(index + 1)}
                            </span>
                        </div>
                      ))}
                      </CardHeader>
                      <CardFooter className="flex-col gap-4">
                        <Button className="w-1/2 bg-red-600">CANCEL</Button>
                        <Button onClick={handleSubmitSurvey} className="w-1/2">SUBMIT</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurveyPreview;
