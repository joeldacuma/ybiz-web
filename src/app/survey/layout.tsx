"use client";

import React from "react";
import { Loader } from "@/components/Loader";
import { getUserSurveyContent } from "@/providers";
import ContextProvider from "@/providers/ContextProvider";
import { useQuery } from "@tanstack/react-query";


const  SurveyLayout = ({children}: any) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userSurvey"],
    queryFn: () => getUserSurveyContent()
  });

  return (
    <>
      {isPending ? (
        <Loader />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
       <ContextProvider data={data}>
        <div className="overflow-hidden">
          {children}
        </div>
       </ContextProvider>
      )}
    </>
  );    
};

export default SurveyLayout;