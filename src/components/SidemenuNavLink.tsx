"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const SidemenuNavLink = ({ href, children}: any) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  console.log(pathname, isActive);

  return (
    <Link
      href={href}
      className={`flex w-full text-sm text-gray-900 py-3 px-4 p-2 rounded-xl hover:bg-gray-100 ${
        isActive ? 
        'text-black focus:bg-gray-100 focus:ring-2 focus:ring-gray-400 items-center font-bold' : 
        'text-gray-500'
      }`}
    >
      {children}
    </Link>
  )
}

export default SidemenuNavLink;