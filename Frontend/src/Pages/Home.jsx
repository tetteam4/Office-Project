import React from 'react';

import Hero_Home from '../Components/HeroPage/Hero_Home';
import Tet_Detials from '../Components/Home/Tet_Detials';
import BeCreative from '../Components/Home/BeCreative';
import BlogCard from '../Components/Blog/BlogCard';
import PortfolioHome from '../Components/Portfolio/PortfolioHome';

import RecentlyHomeBlog from '../Components/Home/RecentlyHomeBlog';
import ProjectStats from '../Components/Home/ProjectStats';



const HomePage = () => {
 
  return (
    <div className="font-sans ">
    <Hero_Home /> 
    {/* TET */}
    <Tet_Detials />
    {/* Be Creative section */}
    <BeCreative />
    <ProjectStats />
   <PortfolioHome />
   <RecentlyHomeBlog />
    </div>
  );
};

export default HomePage;
