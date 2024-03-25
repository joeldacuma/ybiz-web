import React from "react";
import { ROUTE_DASHBOARD } from "@/constants";
import { clearSessionItem } from "@/lib/utils";
import { useRouter } from "next/navigation";


const SurveyHeader = ({surveyId}: any) => {
  const router = useRouter();

  const handleCancelSurvey = () => {
    clearSessionItem();
    router.push(ROUTE_DASHBOARD);
  };

  return (
    <div className="w-full absolute mx-auto inline-flex">
      <div className="flex p-2 md:p-6 justify-between w-full">
        <div>
          {surveyId <= 1 ?
          <h4 className="text-3xl md:text-3xl">YBIZ</h4> :
          <a href={`/survey/user/${surveyId - 1}`} className="hover:underline hover:cursor-pointer">
            <span className="text-lg md:text-md">Back</span>
          </a>
          }
        </div>
        <div>
          <a onClick={handleCancelSurvey} className="hover:underline hover:cursor-pointer">
            <span className="text-lg md:text-md">Do this later</span>
          </a>
        </div>
      </div>
    </div>      
  );
}

export default SurveyHeader;