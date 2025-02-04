import React  from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
const ProjectNameList = ({ Portfolio_Data }) => {
      const navigate = useNavigate();
  return (
    <div>
      <ul className="">
        <li>
          <h1 className="text-lg border-b font-bold py-2  px-4">Projects</h1>
        </li>
        {Portfolio_Data.map((port, index) => (
          <li
          onClick={() =>
            navigate(
              `/portfolio/${encodeURIComponent(
                port.name.replace(/\s+/g, "-").toLowerCase()
              )}`,
              {
                state: { port: port },
              }
            )
          }
          className="flex items-center border-b cursor-pointer border-gray-300 hover:bg-white p-2 gap-x-1">
            <span className="">
              <IoMdArrowDropright className="text-2xl text-green-500" />
              
            </span>
            <p className="">
              <span className="text-md">{port.name}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectNameList;
