import React from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import LightDarkProvider from "../theme/LightDarkProvider"
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <LightDarkProvider>
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 text-white">
          {children}
      </div>   
    </div>
    </LightDarkProvider>
  );
};

export default Layout;
