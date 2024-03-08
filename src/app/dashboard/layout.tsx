"use client";

import React, { useState, useEffect } from "react";
import Sidemenu from "@/components/Sidemenu";
import { Header } from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import { getDashboardContent, getFooter } from "@/providers";
import { Loader } from "@/components/Loader";

const MainLayout = ({children}: any) => {
  const [openMenu, setOpenMenu] = useState('absolute');
  const [verticalScroll, setVerticalScroll] = useState(0);
  const { data: dashboardContent, isLoading: isLoadingDashboard } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashboardContent()
  });

  const {data: footers, isLoading: isLoadingFooter } = useQuery({
    queryKey: ["footers"],
    queryFn: () => getFooter()
  });

  const handleSrollVertical = () => {
    setVerticalScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleSrollVertical);
    return () => {
      if (verticalScroll > 0) {
        setOpenMenu('hidden');
      }
      window.removeEventListener('scroll', handleSrollVertical);
    };

  }, [verticalScroll]);

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
    <div className="grid bg-gray-100">
      <div className="flex min-h-screen">
        <Sidemenu footerData={footers} openMenu={openMenu} handleSetOpenMenu={handleSetOpenMenu} data={dashboardContent} />
        <div className="h-full w-full">
          <Header openMenu={openMenu} handleSetOpenMenu={handleSetOpenMenu} data={dashboardContent} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
