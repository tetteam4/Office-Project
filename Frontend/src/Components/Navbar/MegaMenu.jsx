import React from "react";

const MegaMenu = ({ subCategories = [], isVisible }) => {
  // Determine the number of columns dynamically based on the number of subcategories
  const gridColsClass =
    subCategories.length <= 4
      ? `grid-cols-${subCategories.length}`
      : "grid-cols-5";

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
        className={`grid ${gridColsClass} gap-y-10 mx-40 gap-x-6 place-items-center items-start mt-10 pb-10`}
      >
        {Array.isArray(subCategories) &&
          subCategories.map((category, index) => (
            <div key={index} className="w-full">
              <h3 className="font-bold text-md mb-2 border-b-2 pb-2">{category.category}</h3>
              <ul className="space-y-2">
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
