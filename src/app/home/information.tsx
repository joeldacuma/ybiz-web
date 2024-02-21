import React, { useState, useRef } from "react";
import { IntersectObserver } from "@/components/IntersectObserver";

const HomeInformation = ({data} : any) => {
  const informationRef = useRef(null);
  const informationIntersect = IntersectObserver(informationRef);
  const [informations] = useState(data.informations || null);

  console.log(IntersectObserver(informationRef));

  return (
  <div className="container bg-gray-100 px-5 py-24 mx-auto">
    <div ref={informationRef} className={`text-center mb-20 ${informationIntersect ? "visible animate-fade-up animate-once animate-ease-in" : "invisible"}`}>
      <h1 className="sm:text-3xl md:text-4xl font-medium title-font text-gray-900 mb-4">{informations.data.title}</h1>
      <p className="text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
        {informations.data.description}
      </p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap px-12 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      {
        informations.data.section.map((item: any) => (
          <div ref={informationRef} key={item.id} className={`p-4 md:w-1/2 flex flex-col text-center items-center ${informationIntersect ? "animate-fade-down animate-once animate-ease-linear visible" : "invisible"}`}>
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
              <img className="w-5 h-5" src={item.iconLogo.url} alt={item.title} />            
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-3">{item.title}</h2>
              <p className="leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  </div>
  );
};

export default HomeInformation;