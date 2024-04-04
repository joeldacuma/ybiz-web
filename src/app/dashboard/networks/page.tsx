"use client";

import React, { useMemo, useContext, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DataContext } from "@/providers/ContextProvider";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "@radix-ui/react-icons";
import { NO_DESCRIPTION_MESSAGE } from "@/constants";
import Paginator from "@/components/Paginator";

const Networks = () => {
  const data: any = useContext(DataContext);
  const [industries] = useState<any>(data.industries);

  const industrySection = useMemo(() => {
    industries?.categories?.data
    .sort((a: any, b: any) =>  a.uid > b.uid ? 1 : -1);

    return (
      <>
        {industries?.categories?.data.length > 0 && 
        industries?.categories?.data.map((item: any, index: number) => (
          <div key={index} className="bg-white rounded-3xl p-8 mb-5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-xl">
             <img 
               src={(item.industryImage?.url) ? item.industryImage.url : "/photo.png"} 
               className="h-10 w-19" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <div className="flex items-center gap-2">
               <GlobeIcon className="h-5 w-5" />
               <span>public</span>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="grid grid-cols-1 gap-x-20 py-4">
            <span className="text-gray-600">
              {(item.description) ? item.description : NO_DESCRIPTION_MESSAGE}
            </span>
          </div>
          <Button>Join</Button>
          </div>
        ))}
      </>
    );
  }, [industries]);

  return (
    <div className="flex flex-col justify-center px-12 py-6">
     <div className="py-4">
        <Paginator />
      </div>
      <ScrollArea className="h-[84vh] hidden lg:block w-[60vw] rounded">
        {industrySection}
      </ScrollArea>
      <div className="block lg:hidden">
        {industrySection}
      </div>
    </div>
  );
};

export default Networks;
