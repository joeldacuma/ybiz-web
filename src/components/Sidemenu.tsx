import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SidemenuNavLink from "@/components/SidemenuNavLink";
import { Cross1Icon } from "@radix-ui/react-icons";

const Sidemenu = ({data, openMenu, handleSetOpenMenu, footerData}: any) => {
  const [dashboard] = useState(data.dashboardContent); 
  const [footers] = useState(footerData.footers);
  
  return (
    <aside className={`${openMenu} animate-fade-left animate-duration-150 animate-once animate-ease-out bg-white shadow-md w-60`}>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="flex justify-end">
          <Cross1Icon
          onClick={handleSetOpenMenu}
          className="m-4 hover:cursor-pointer" />
        </div>
        <div className="flex-grow">
          <div className="flex items-center justify-center px-4 py-4 border-b">
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
