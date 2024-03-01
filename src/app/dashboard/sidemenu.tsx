import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Sidemenu = ({data}: any) => {
  const [dashboard] = useState(data.dashboardContent); 
  
  return (
    <aside className="fixed inset-y-0 left-0 bg-white shadow-md min-h-screen w-60">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <div className="flex items-center justify-center px-4 py-6 text-center border-b">
           <img className="w-10 h-10" src={dashboard.data.sideMenuLogo.url}  />
           <h1 className="text-2xl font-bold text-gray-600">{dashboard.data.sidemenuLogoTitle}</h1>
          </div>
          <div className="p-4">
            <ul className="space-y-1">
              {dashboard.data.Sidemenu.map((item: any) => (
                 <li>
                  <Button className="w-full my-2 justify-start flex hover:cursor-pointer focus:bg-gray-100 focus:ring-2 focus:ring-gray-400 hover:bg-gray-100 items-center 
                  rounded-xl font-bold text-sm text-gray-900 py-3 px-4" variant="ghost">
                    <img className="w-6 h-6" src={item.icon.url} />
                    <span className="ml-3">{item.name}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidemenu;
