import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Navbar/Header";
import Navbar from "../Navbar/navbar";


const Layout = () => {
  return (
    <div className="">
      <div className="border  border-black">
     <Header />
     <Navbar />
      </div>
      <div className="mt-36">
        <Outlet />
      </div>
    
    </div>
  );
};

export default Layout;
