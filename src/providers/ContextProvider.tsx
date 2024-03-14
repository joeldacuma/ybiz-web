"use client";

import React, { createContext } from "react"; 

export const DataContext = createContext({});

const ContextProvider = ({ children, data }: any) => {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );                 
};

export default ContextProvider;
