import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { INPUT_SURVEY_FALSE, INPUT_SURVEY_TRUE } from "@/constants";
import { getSessionItem } from "@/lib/utils";

export const SurveyInput = ({ isOnlyBoolean,
                              surveyId, 
                              inputs, 
                              handleSubmitSurvey,
                              setErrorMessage }: any) => {
  const getValue = getSessionItem(`survey-input${surveyId}`);
  const [inputValue, setInputValue] = useState(getValue || "");
  const handleChangeInput = (value: any) => {
    if (inputValue) {
      setErrorMessage("");
    }
    setInputValue(value);
  };

  return (
    <div>
      {isOnlyBoolean ? ( 
        <div className="flex justify-center items-center py-12 gap-6">
          <Button onClick={() => handleSubmitSurvey(INPUT_SURVEY_TRUE)} 
           className={`${getValue == INPUT_SURVEY_TRUE && 'bg-red-500'} w-20 rounded-full`} size="lg">
            <span className="text-sm md:text-2xl p-4">{INPUT_SURVEY_TRUE}</span>
          </Button>
          <Button onClick={() => handleSubmitSurvey(INPUT_SURVEY_FALSE)} 
           className={`${getValue == INPUT_SURVEY_FALSE && 'bg-red-500'} w-20 rounded-full`} size="lg">
            <span className="text-sm md:text-2xl py-4">{INPUT_SURVEY_FALSE}</span>
          </Button>
        </div>
        ) : (
        inputs?.length === 0 ? 
        <div className="flex justify-center items-center py-12 gap-6">
          <Input onChange={e => handleChangeInput(e.target.value)} value={inputValue} placeholder="Enter your answer..." />
          <Button onClick={() => handleSubmitSurvey(inputValue)} className="rounded-full" type="submit">NEXT</Button>
        </div>
        : 
        <div className="flex flex-col justify-center items-center py-12 gap-4">
          {
            inputs.map((item: any) => (
              <Button onClick={() => handleSubmitSurvey(item.input)} key={item.id} 
               className={`${getValue == item.input && 'bg-red-500'} w-30 rounded-full`} size="lg">
                <span className="text-md md:text-2xl">{item.input}</span>
              </Button>
            ))
          }
        </div>
        ) 
       }
    </div>
  );
};
