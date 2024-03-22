"use client" 

import { Suspense, useEffect } from "react";
import Container  from "@/components/Container";
import HeroBanner from "@/app/home/hero";
import HomeFeatures from "@/app/home/feature";
import HomePrograms from "@/app/home/programs";
import HomeGallery from "@/app/home/gallery";
import HomeTestimonial from "./testimonial";
import HomeInformation from "./information";
import { Loader } from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import { getItem, removeItem } from "@/lib/utils";
import { USER_PROFILE_ID } from "@/constants";

import { getBanners,
         getFeatures,
         getPrograms,
         getGalleries,
         getTestimonials,
         getAbout } from "@/providers"

import { useQuery } from "@tanstack/react-query";


const Home = () => {
  const { isSignedIn } = useUser();
  const {data: banners, isPending: isPendingBanners} = useQuery({
    queryKey: ["banners"],
    queryFn: () => getBanners()
  });

  const {data: features, isPending: isPendingFeatures} = useQuery({
    queryKey: ["features"],
    queryFn: () => getFeatures()
  });

  const {data: programs, isPending: isPendingPrograms} = useQuery({
    queryKey: ["programs"],
    queryFn: () => getPrograms()
  });

  const {data: galleries, isPending: isPendingGalleries} = useQuery({
    queryKey: ["galleries"],
    queryFn: () => getGalleries()
  });

  const {data: testimonials, isPending: isPendingTestimonials} = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => getTestimonials()
  });

  const {data: informations, isPending: isPendingInformations} = useQuery({
    queryKey: ["informations"],
    queryFn: () => getAbout()
  });

  if (isPendingBanners || 
      isPendingFeatures || 
      isPendingPrograms || 
      isPendingGalleries || 
      isPendingTestimonials || 
      isPendingInformations) {
    return <Loader />
  }

  if (!isSignedIn) {
    const _userId = getItem(USER_PROFILE_ID);
    if (_userId) {
      removeItem(USER_PROFILE_ID);
    }
  }

  return (
   <>
   <Suspense fallback={
    <Loader />
   } />
     <Container>
      <div id="home">
        <HeroBanner data={banners} />
      </div>
      <div className="flex text-center justify-center">
        <HomeFeatures data={features} />
      </div>
      <div>
        <HomeInformation data={informations} />
      </div>
      <div id="about">
       <HomePrograms data={programs} />
      </div>
      <div id="events" className="bg-white">
        <HomeGallery data={galleries} />
      </div>
      <div id="testimonies">
        <HomeTestimonial data={testimonials} />
      </div>
     </Container>
   </>
  );
};

export default Home;
