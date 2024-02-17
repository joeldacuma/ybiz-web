import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HeroBanner = ({data}: any) => {
  const [banners] = useState(data.banners || null);

  return (
  <div className="container mx-auto flex px-12 py-16 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{banners.data.bannerTitle}</h1>
      <p className="mb-8 leading-relaxed text-gray-500">{banners.data.bannerDescription}</p>
      {/* <div className="flex w-full md:justify-start justify-center items-end">
        <Button className="inline-flex text-white bg-black rounded-md border-0 py-2 px-6 focus:ring-2 text-lg">
          {banners.data.bannerButtonText}
        </Button>
      </div> */}
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
          <Input type="text" id="hero-field" name="hero-field" 
            placeholder="Enter your email"
            className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-gray-200 
            focus:bg-transparent focus:border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <Button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Join Our Community</Button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={banners.data.bannerImage.url} />
    </div>
  </div>
  );
};

export default HeroBanner;