"use client";

import React, { useState, useEffect } from "react";
import Sidemenu from "@/components/Sidemenu";
import { Header } from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import { getDashboardContent, getFooter } from "@/providers";
import { Loader } from "@/components/Loader";

const MainLayout = ({children}: any) => {
  const [openMenu, setOpenMenu] = useState('absolute');
  const { data: dashboardContent, isLoading: isLoadingDashboard } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashboardContent()
  });

  const {data: footers, isLoading: isLoadingFooter } = useQuery({
    queryKey: ["footers"],
    queryFn: () => getFooter()
  });

  const handleSetOpenMenu = () => {
    setOpenMenu(openMenu === 'hidden' ? 
    'absolute animate-fade-right animate-duration-150 animate-once animate-ease-in' : 
    'hidden');
  };

  if (isLoadingDashboard || 
      isLoadingFooter) {
    return <Loader />;
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
        <Sidemenu handleSetOpenMenu={handleSetOpenMenu} openMenu={openMenu} footerData={footers} data={dashboardContent} />
        <div className="flex flex-col text-center w-full">
          <Header openMenu={openMenu} handleSetOpenMenu={handleSetOpenMenu} data={dashboardContent} />
          {children}
        </div>
    </div>
  );
};

export default MainLayout;
