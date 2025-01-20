import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Navbar/Header";
import Navbar from "../Navbar/navbar";

const Layout = () => {
  return (
    <div className="">
      <div className=" ">
        <Header />
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
