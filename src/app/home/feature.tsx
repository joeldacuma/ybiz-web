import React, { useState } from "react";

const HomeFeatures = ({ data }: any) => {
  const [features] = useState(data.features || null);

  return (
    <div className="bg-white px-12">
      <div className="container mx-auto p-12">
        <h1 className="text-3xl sm:text-4xl font-medium text-center">
          {features.data.featureTitle}
        </h1>
      </div>
      <div className="inline-flex py-12">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {features.data.startups.map((item: any) => (
            <li key={item.id} className="p-4 md:w-1/3 flex">
              <div>
                <img className="w-20 h-20" src={item.startupImage.url} />
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {features.data.startups.map((item: any) => (
            <li key={item.id} className="p-4 md:w-1/3 flex">
              <div>
                <img className="w-20 h-20" src={item.startupImage.url} />
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden={true}>
          {features.data.startups.map((item: any) => (
            <li key={item.id} className="p-4 md:w-1/3 flex">
              <div>
                <img className="w-20 h-20" src={item.startupImage.url} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeFeatures;
