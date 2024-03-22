"use client";

import React, { useState, useEffect, use } from "react";
import Sidemenu from "@/components/Sidemenu";
import { Header } from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import { getDashboardContent, 
         getUserSurveyContent, 
         getMembersContentDetails,
         getFooter } from "@/providers";
import { Loader } from "@/components/Loader";
import DialogMessageModal from "@/components/DialogMessageModal";
import { ROUTE_USER_SURVEY, USER_PROFILE_ID } from "@/constants";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { getItem, setItem } from "@/lib/utils";

const MainLayout = ({children}: any) => {
  const {user, isLoaded} = useUser();  
  const [openMenu, setOpenMenu] = useState('absolute');
  const [isUserProfile, setIsUserProfile] = useState(false);
  const [verticalScroll, setVerticalScroll] = useState(0);
  const { data: dashboardContent, isLoading: isLoadingDashboard } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashboardContent()
  });
  const { data: userContentSurvey, isLoading: isUserContentSurvey } = useQuery({
    queryKey: ["userSurvey"],
    queryFn: () => getUserSurveyContent()
  });
  const {data: footers, isLoading: isLoadingFooter } = useQuery({
    queryKey: ["footers"],
    queryFn: () => getFooter()
  });

  const router = useRouter();

  const handleSrollVertical = () => {
    setVerticalScroll(window.scrollY);
  };

  useEffect(() => {
    const _userId = getItem(USER_PROFILE_ID);
    if (isLoaded && !_userId) {
      setItem(USER_PROFILE_ID, user?.id);
    }

    window.addEventListener('scroll', handleSrollVertical);
    return () => {
      if (verticalScroll > 0) {
        setOpenMenu('hidden');
      }
      window.removeEventListener('scroll', handleSrollVertical);
    };

  }, [verticalScroll, user, isLoaded]);

  const handleSetOpenMenu = () => {
    setOpenMenu(openMenu === 'hidden' ? 
    'absolute animate-fade-right animate-duration-150 animate-once animate-ease-in' : 
    'hidden');
  };

  const handleCloseModal = () => {
    setIsUserProfile(false);
  };

  const handleSubmitButtonModal = () => {
   router.push(`${ROUTE_USER_SURVEY}/1`);
  };
  
  if (isLoadingDashboard || 
      isLoadingFooter) {
    return <Loader />;
  }

  return (
    <div className="grid bg-gray-100">
      <div className="flex max-h-screen">
        <DialogMessageModal 
         data={userContentSurvey} 
         open={isUserProfile} 
         handleSubmitButtonModal={handleSubmitButtonModal} 
         handleCloseModal={handleCloseModal} />
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
