import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SidemenuNavLink from "@/components/SidemenuNavLink";

const Sidemenu = ({data, footerData}: any) => {
  const [dashboard] = useState(data.dashboardContent); 
  const [footers] = useState(footerData.footers);
  
  return (
    <aside className="min-h-screen bg-white shadow-md w-60">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <div className="flex items-center justify-center px-4 py-6 text-center border-b">
           <img className="w-10 h-10" src={dashboard.data.sideMenuLogo.url}  />
           <span className="text-3xl text-black">{dashboard.data.sidemenuLogoTitle}</span>
          </div>
          <div className="p-4">
            <ul className="space-y-1">
              {dashboard.data.Sidemenu.map((item: any) => (
                 !item.disabled && 
                 <li key={item.id}>
                  <SidemenuNavLink href={item.url}>
                    <img className="w-6 h-6" src={item.icon.url} />
                    <span className="ml-3">{item.name}</span>
                  </SidemenuNavLink>
                  {/* <Button className="w-full my-2 justify-start flex hover:cursor-pointer 
                  focus:bg-gray-100 focus:ring-2 focus:ring-gray-400 hover:bg-gray-100 items-center 
                  rounded-xl font-bold text-sm text-gray-900 py-3 px-4" variant="ghost">

                  </Button> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex py-4 justify-center items-center">
          <span className="text-sm font-bold mx-2">Powered by:</span>
          <a target="_blank" href={footers.data.poweredByLink}>
            <img className="h-12 w-12" src={footers.data.powerByLogo.url} />
          </a>
      </div>
      </div>
    </aside>
  );
}

export default Sidemenu;
