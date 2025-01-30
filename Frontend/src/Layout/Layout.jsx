import React, { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import Header from "../Components/Navbar/Header";
import Navbar from "../Components/Navbar/Navbar";
import { IoMdArrowRoundUp } from "react-icons/io";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener when the component is mounted
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative ">
      <div className=" ">
        <Header />
        <Navbar />
      </div>
      <div className="mt-[75px] lg:mt-2">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
      {isScrolled && (
        <div className="fixed bottom-10 right-10">
          <button
            onClick={scrollToTop}
            className="bg-[#02DB81] hover:bg-[#2d9469]  p-3 rounded-full shadow-lg  transition duration-300"
          >
            <IoMdArrowRoundUp size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
