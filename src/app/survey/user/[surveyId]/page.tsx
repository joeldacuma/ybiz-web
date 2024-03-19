"use client";

import React, { useContext, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { DataContext } from "@/providers/ContextProvider";
import { SurveyInput } from "@/components/SurveyInput";
import { useRouter } from "next/navigation";
import SurveyHeader from "@/components/SurveyHeader";
import { INPUT_SURVEY_EMPTY_MESSAGE, ROUTE_USER_SURVEY } from "@/constants";
import { setSessionItem, getSessionItem } from "@/lib/utils";

const UserSurvey = ({ params }: { params: { surveyId: number, value: string } }) => {
  const router = useRouter();
  const data = useContext(DataContext);
  const [userSurveyData] = useState<any>(data);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [surveyId] = useState<any>(params.surveyId);
  const { userSurveyContent } = userSurveyData;
  const questions = userSurveyContent.data.Questions.filter(
    (item: any) => item.isDisabled === false
  );

  useEffect(() => {
    fetchUserSurveyData();
  },[]);

  const handleSubmitSurvey = (value: any) => {
    const questionsArray = userSurveyContent.data.Questions;

    if (!value) {
      setErrorMessage(INPUT_SURVEY_EMPTY_MESSAGE);
      return;
    }

    if (parseInt(surveyId) === questionsArray.length) {
      router.push(`${ROUTE_USER_SURVEY}/preview`);
      return;
    }

    const surveyValue = setSessionItem(`survey-input${surveyId}`, value);
    const nextSurveyId = parseInt(surveyId) + 1;
    router.push(`${ROUTE_USER_SURVEY}/${nextSurveyId}`);
  };

  const fetchUserSurveyData = () => {
    const surveyItem = questions[surveyId - 1];
    return surveyItem ? surveyItem : notFound();
  };

  return (
    <>
      <SurveyHeader surveyId={surveyId} />
      <div className="grid h-screen place-items-center text-center">
        <div className="flex w-80 md:w-full flex-col justify-center text-center items-center gap-4 md:p-4">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center">
            <span className="text-2xl">{surveyId}</span>
          </div>
          <h1 className="text-3xl md:text-5xl">
            {fetchUserSurveyData()?.Question}
          </h1>
          <div>
            <SurveyInput
              surveyId={surveyId}
              setErrorMessage={setErrorMessage}
              isOnlyBoolean={fetchUserSurveyData()?.onlyBoolean}
              inputs={fetchUserSurveyData()?.select}
              handleSubmitSurvey={handleSubmitSurvey}
            />
            <span className="text-red-500">{errorMessage}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSurvey;
