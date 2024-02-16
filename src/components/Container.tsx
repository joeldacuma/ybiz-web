"use client"

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useQuery } from "@tanstack/react-query";


export default function Container({ children }: any) {
  const {data: headers} = useQuery({
    queryKey: ["headers"],
  });

  const {data: footers} = useQuery({
    queryKey: ["footers"],
  });
  
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
