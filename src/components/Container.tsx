"use client"

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useQuery } from "@tanstack/react-query";
import { getHeaders } from "@/providers/index";


export default function Container({ children }: any) {
  const {data} = useQuery({
    queryKey: ["headers"],
    queryFn: () => getHeaders(),
  });

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="grid w-full overflow-hidden">
        <Navbar data={data} />
        <div className="drawer-content flex flex-col">
          <div className="pt-16">{children}</div>
        </div>
      </div>
    </>
  );
};
