"use client" 

import { Suspense } from "react";
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
  const {data: banners, isPending: isPendingBanners} = useQuery({
    queryKey: ["banners"]
  });

  const {data: features, isPending: isPendingFeatures} = useQuery({
    queryKey: ["features"]
  });

  const {data: programs, isPending: isPendingPrograms} = useQuery({
    queryKey: ["programs"]
  });

  const {data: galleries, isPending: isPendingGalleries} = useQuery({
    queryKey: ["galleries"]
  });

  const {data: testimonials, isPending: isPendingTestimonials} = useQuery({
    queryKey: ["testimonials"]
  });

  const {data: informations, isPending: isPendingInformations} = useQuery({
    queryKey: ["informations"]
  });

  if (isPendingBanners || 
      isPendingFeatures || 
      isPendingPrograms || 
      isPendingGalleries || 
      isPendingTestimonials || 
      isPendingInformations) {
    return <div>Loading...</div>;
  }
  
  return (
   <>
   <Suspense fallback={<div>Loading...</div>} />
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
