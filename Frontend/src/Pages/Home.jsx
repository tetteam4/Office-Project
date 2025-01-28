import React from 'react';

import Hero_Home from '../Components/HeroPage/Hero_Home';
import Tet_Detials from '../Components/Home/Tet_Detials';
import BeCreative from '../Components/Home/BeCreative';
import BlogCard from '../Components/Blog/BlogCard';



const HomePage = () => {
 
  return (
    <div className="font-sans ">
    <Hero_Home /> 
    {/* TET */}
    <Tet_Detials />
    {/* Be Creative section */}
    <BeCreative />
   
    </div>
  );
};

export default HomePage;
