import React from "react";

const MegaMenu = ({ subCategories = [], isVisible }) => {
  // Define a function to get the grid column class
  const getGridColsClass = () => {
    const length = subCategories.length;
    if (length === 1) return "grid-cols-1";
    if (length === 2) return "grid-cols-2";
    if (length === 3) return "grid-cols-3";
    if (length >= 4) return "grid-cols-5";
    return "";
  };

  const gridColsClass = getGridColsClass();

  return (
    <div
      className={`absolute left-0 top-full right-0 w-full ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } overflow-hidden bg-white shadow-lg z-20 transition-all duration-500`}
      style={{
        height: isVisible ? "auto" : "0",
        paddingTop: isVisible ? "1rem" : "0",
        paddingBottom: isVisible ? "1rem" : "0",
      }}
    >
      <div
        className={`grid ${gridColsClass} gap-y-10 mx-40 gap-x-6 place-items-center items-start  pb-10`}
      >
        {Array.isArray(subCategories) &&
          subCategories.map((category, index) => (
            <div key={index} className="w-full">
             <div className="space-y-4">
             <span className="text-3xl text-red-600"> {category.icon}</span>
              <h3 className="font-bold text-md mb-2 border-b-2 pb-2">
                {category.category}
              </h3>
             </div>
              <ul className="space-y-2 mt-3">
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.path}
                      className="hover:text-gray-500 cursor-pointer text-sm text-slate-800 block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MegaMenu;
