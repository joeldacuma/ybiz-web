import React, { use, useEffect } from "react";
import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query";
import { getHeaders, getBanners, getFeatures } from "@/providers/index";

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

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
