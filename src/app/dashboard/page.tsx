"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = ({children}: any) => {
  const router = useRouter();
 
  useEffect(() => {
    router.push("/dashboard/analytics");
  });

  return (
    <div>
      {children}
    </div>
  )
}

export default Dashboard;