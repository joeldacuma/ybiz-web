"use client"

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROUTE_HOME } from "@/constants";

export default async function App({children}: any) {
  const router = useRouter();

  useEffect(() => {
    router.push(ROUTE_HOME);
  });

  return (
    <>
      {children}
    </>
  );
}
