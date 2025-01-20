import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Navbar/Header";
import Navbar from "../Navbar/navbar";

const Layout = () => {
  return (
    <div className="">
      <div className=" border">
        <Header />
        <Navbar />
      </div>
      <div className="mt-[135px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
