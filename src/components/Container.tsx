"use client"

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useQuery } from "@tanstack/react-query";


export default function Container({ children }: any) {
  const {data} = useQuery({
    queryKey: ["headers"],
  });
  
  return (
    <>
      <div className="w-full overflow-hidden bg-gradient-to-t from-zinc-50 to-gray-50">
        <Navbar data={data} />
        <div className="drawer-content flex flex-col">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
