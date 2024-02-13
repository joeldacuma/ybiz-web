import React from  "react";
import Navbar from "@/components/Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
  <>
    <div className="grid w-full overflow-hidden">
     <div className="drawer-content flex flex-col">
        <Navbar />
       <div className="pt-16">
         {children}
       </div>
     </div>
    </div>
  </>
  )
};

export default Layout;
