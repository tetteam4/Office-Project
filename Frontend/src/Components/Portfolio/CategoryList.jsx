import React from "react";
import { MdCategory } from "react-icons/md";

const CategoryList = ({ Portfolio_Data }) => {
  return (
    <div className="h-full">
      <ul className="">
        <li>
          <h1 className="text-lg border-b font-bold py-2  px-4">Categories</h1>
        </li>
        {Portfolio_Data.map((port, index) => (
          <li className="flex items-center border-b cursor-pointer border-gray-300 hover:bg-white p-2 gap-x-2">
            <span className="">
              <MdCategory size={30} className="text-green-500" />
            </span>
            <p className="">
              <span className="text-gray-700 text-sm">Website for </span>
              <span className="font-bold text-md"> {port.category}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
