"use client"

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useQuery } from "@tanstack/react-query";
import { getHeaders, getFooter } from "@/providers"


export default function Container({ children }: any) {
  const {data: headers, isPending} = useQuery({
    queryKey: ["headers"],
  });

  const {data: footers} = useQuery({
    queryKey: ["footers"],
  });
  
  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full overflow-hidden bg-gradient-to-t from-zinc-50 to-gray-50">
        <Navbar data={headers} />
        <div className="drawer-content flex flex-col">
          <div>{children}</div>
        </div>
        <Footer data={footers} />
      </div>
    </>
  );
};
