import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const HeroBanner = ({data}: any) => {
  const [banners] = useState(data.banners || null);

  return (
  <div className="container mx-auto flex px-12 py-16 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="animate-fade-up title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{banners.data.bannerTitle}</h1>
      <p className="animate-fade-up mb-8 leading-relaxed text-gray-500">{banners.data.bannerDescription}</p>
      <div className="flex animate-fade animate-ease-in w-full md:justify-start justify-center items-end">
        <Button className="inline-flex text-white bg-black rounded-md border-0 py-2 px-6 focus:ring-2 text-lg">
          {banners.data.bannerButtonText}
        </Button>
      </div>
    </div>
    <div className="animate-fade-up lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={banners.data.bannerImage.url} />
    </div>
  </div>
  );
};

export default HeroBanner;