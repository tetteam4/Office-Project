import React from "react";
import { Portfolio_Data } from "../Components/Portfolio/portfiliodata";
import CategoryList from "../Components/Portfolio/CategoryList";
import PortfolioCard from "../Components/Portfolio/PortfolioCard";
const Portfolio = () => {
  return (
    <section className=" mx-auto max-w-6xl px-5">
      <div className="py-4 ">
        <h1 className="text-2xl font-bold ">Our Works</h1>
      </div>
      <div className="grid grid-cols-3 h-full items-center gap-x-5">
        <aside className="col-span-1 border h-full bg-green-100/95 rounded-md">
          <CategoryList Portfolio_Data={Portfolio_Data} />
        </aside>
        <div className="col-span-2 border h-full rounded-md"></div>
      </div>
      <div className="grid grid-cols-2 max-w-6xl gap-5 mt-10 mx-auto">
        {
          Portfolio_Data.map((port, index) => (
            <PortfolioCard
              key={index}
              port={port}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Portfolio;
