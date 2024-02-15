import React, { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar({ data }: any) {
  const [headers] = useState(data.headers || null);

  return (
    <div className="container mx-auto flex flex-wrap p-12 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src={headers.data.logo.url} alt="logo" className="w-20 h-20" />
        <span className="ml-3 text-4xl">{headers.data.logoTitle}</span>
      </a>
      <ul className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {
                headers.data.menu.map((item: any) => (
                <NavigationMenuItem key={item.id}>
                  <Link href={item.url} legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={navigationMenuTriggerStyle()}
                    >
                     {item.title} 
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                )
              )}
              <NavigationMenuItem>
                <Link href="/login" legacyBehavior passHref>
                  <NavigationMenuLink
                  className="bg-black 
                  text-white px-3 py-2 rounded-md text-sm font-medium hover:shadow-2xl
                  focus:outline-none focus:ring-2 transition duration-150 ease-in-out">
                    Login
                  </NavigationMenuLink>
                </Link>
               </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
      </ul>
    </div>
  );
}
