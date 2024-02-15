"use client"

import React from "react";
import Container  from "@/components/Container";
import HeroBanner from "@/app/home/hero";
import Features from "@/app/home/feature";

import { useQuery } from "@tanstack/react-query";


const Home = () => {
  const {data: banners} = useQuery({
    queryKey: ["banners"]
  });

  const {data: features} = useQuery({
    queryKey: ["features"]
  });
  
  return (
   <>
     <Container>
      <div>
        <HeroBanner data={banners} />
      </div>
      <div className="flex text-center justify-center">
        <Features data={features} />
      </div>
     </Container>
   </>
  );
};

export default Home;
