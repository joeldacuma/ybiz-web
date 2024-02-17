import React, { use, useEffect } from "react";
import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query";
import { getHeaders, 
         getBanners, 
         getFeatures, 
         getPrograms,
         getGalleries,
         getTestimonials,
         getFooter,
         getAbout } from "@/providers/index";

import Home from "@/app/home/page";

export default async function App({children}: any) {
  const queryClient = new QueryClient();
  
  await queryClient.prefetchQuery({
    queryKey: ["headers"],
    queryFn: () => getHeaders(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["banners"],
    queryFn: () => getBanners(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["features"],
    queryFn: () => getFeatures(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["programs"],
    queryFn: () => getPrograms(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["galleries"],
    queryFn: () => getGalleries(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["testimonials"],
    queryFn: () => getTestimonials(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["footers"],
    queryFn: () => getFooter(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["informations"],
    queryFn: () => getAbout(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
