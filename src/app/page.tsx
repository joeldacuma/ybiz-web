import React, { use, useEffect } from "react";
import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query";
import { getHeaders } from "@/providers/index";

import Home from "@/app/home/page";

export default async function App({children}: any) {
  const queryClient = new QueryClient();
  
  await queryClient.prefetchQuery({
    queryKey: ["headers"],
    queryFn: () => getHeaders(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
