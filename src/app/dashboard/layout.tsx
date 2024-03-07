"use client";

import React, { useState, useEffect } from "react";
import Sidemenu from "@/components/Sidemenu";
import { Header } from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import { getDashboardContent, getFooter } from "@/providers";
import { Loader } from "@/components/Loader";

const MainLayout = ({children}: any) => {
  const { data: dashboardContent, isLoading: isLoadingDashboard } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashboardContent()
  });

  const {data: footers, isLoading: isLoadingFooter } = useQuery({
    queryKey: ["footers"],
    queryFn: () => getFooter()
  });

  if (isLoadingDashboard || 
      isLoadingFooter) {
    return <Loader />;
  }

  return (
    <div className="flex bg-gray-100 h-screen overflow-hidden">
        <Sidemenu footerData={footers} data={dashboardContent} />
        <div>
          <Header data={dashboardContent} />
          {children}
        </div>
    </div>
  );
};

export default MainLayout;
