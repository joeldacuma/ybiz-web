"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar({ data, signedIn }: any) {
  const [headers] = useState(data.headers || null);
  const router = useRouter();

  return (
    <div>
      {signedIn && 
       <div
        className="mb-3 hidden w-full items-center rounded-lg bg-gray-200 
        px-6 py-5 text-base text-warning-800 data-[te-alert-show]:inline-flex"
        role="alert"
        data-te-alert-init
        data-te-alert-show
       >
        <span className="italic text-sm">{headers.data.topHeaderDescription}</span>
        <Button
          onClick={() => router.push(headers.data.topHeaderButtonLink)}
          className="w-20 h-auto ml-auto box-content"
        >
          <span>{headers.data.topHeaderButtonText}</span>
        </Button>
      </div>}
      <div className="flex flex-wrap p-1 md:px-12 py-12 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={headers.data.logo.url} alt="logo" className="w-10 h-10" />

          <span className="ml-3 text-4xl">{headers.data.logoTitle}</span>
        </a>

        <ul className="md:ml-auto md:flex flex-wrap items-center text-base justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap gap-1">
              {headers.data.menu.map((item: any) => (
                <NavigationMenuItem key={item.id}>
                  <Link href={"#" + item.url} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </ul>
      </div>
    </div>
  );
}
