"use client";

import React from "react";
import Navbar from "./Navbar";

export default function Container ({ children }: any) {
  return (
    <>
      <div className="grid w-full overflow-hidden">
        <Navbar />
        <div className="drawer-content flex flex-col">
          <div className="pt-16">{children}</div>
        </div>
      </div>
    </>
  );
};
