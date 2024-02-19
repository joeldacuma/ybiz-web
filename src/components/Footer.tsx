"use client"

import React, { useState } from "react";

const Footer = ({data}: any) => {
  const year = new Date().getFullYear();
  const [footers] = useState(data.footers || null);

  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-24 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img className="w-10 h-10" src={footers.data.logo.url} />
          <span className="ml-3 text-xl">{footers.data.subtitle}</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {year} {footers.data.subtitle}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {
            footers.data.socialLinks.map((item: any) => (
              <a key={item.id} href={item.url} className="text-gray-500 hover:cursor-pointer">
                <img className="w-7 h-7" src={item.icon[0].url} />
              </a>
            ))
          }
        </span>
      </div>
    </footer>
  );
};

export default Footer;
