import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const HomePrograms = ({data}: any) => {
  const [programs] = useState(data.programs || null);  

  return (
  <div className="container px-12 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <Badge variant="secondary" className="mb-4 py-2 px-8 border-black">{programs.data.badgeTitle}</Badge>
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">{programs.data.programTitle}</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        {programs.data.programSubtitle}
      </p>
    </div>
    <div className="flex flex-wrap m-4">
      {
        programs.data.cards.map((item: any) => (
          <div  key={item.id} className="xl:w-1/2 md:w-1/2 p-4">
            <Card className="border border-gray-200 p-12 rounded-lg shadow-xl">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 mb-4">
              <img className="w-6 h-6" src={item.iconLogo.url} />
            </div>
            <h2 className="text-lg text-gray-900 font-bold title-font mb-2">{item.title}</h2>
            <p className="leading-relaxed text-base">{item.description}</p>
          </Card>
        </div>
        ))
      }
    </div>
  </div>
  );
};


export default HomePrograms;