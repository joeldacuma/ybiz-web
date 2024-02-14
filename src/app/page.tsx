"use client";

import { useQuery, useIsFetching, HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query";
import { getHeaders } from "@/providers/index";

export default async function Home() {
  const queryClient = new QueryClient();
  
  await queryClient.prefetchQuery({
    queryKey: ["headers"],
    queryFn: () => getHeaders(),
  });


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </HydrationBoundary>
  );
}
