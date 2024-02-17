"use client"

import React from "react";
import Container  from "@/components/Container";
import HeroBanner from "@/app/home/hero";
import HomeFeatures from "@/app/home/feature";
import HomePrograms from "@/app/home/programs";
import HomeGallery from "@/app/home/gallery";
import HomeContact from "@/app/home/contact";
import HomeTestimonial from "./testimonial";
import HomeInformation from "./information";

import { useQuery } from "@tanstack/react-query";


const Home = () => {
  const {data: banners} = useQuery({
    queryKey: ["banners"]
  });

  const {data: features} = useQuery({
    queryKey: ["features"]
  });

  const {data: programs} = useQuery({
    queryKey: ["programs"]
  });

  const {data: galleries} = useQuery({
    queryKey: ["galleries"]
  });

  const {data: testimonials} = useQuery({
    queryKey: ["testimonials"]
  });

  const {data: informations} = useQuery({
    queryKey: ["informations"]
  });
  
  return (
   <>
     <Container>
      <div>
        <HeroBanner data={banners} />
      </div>
      <div className="flex text-center justify-center">
        <HomeFeatures data={features} />
      </div>
      <div>
        <HomeInformation data={informations} />
      </div>
      <div>
       <HomePrograms data={programs} />
      </div>
      <div className="bg-white">
        <HomeGallery data={galleries} />
      </div>
      <div>
        <HomeTestimonial data={testimonials} />
      </div>
     </Container>
   </>
  );
};

export default Home;
