import React from "react";
import { useState } from "react";
const ContentA = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };
  const dropdownClasses = `absolute z-10 bg-white ${isOpen ? "block" : "hidden"}`;
  return (
    // <div className="relative group">
    //   <button
    //     type="button"
    //     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    //     aria-expanded={isOpen}
    //     onClick={toggleMenu}
    //   >
    //     Services
    //     <svg
    //       className={`text-gray-400 ${isOpen ? "text-gray-600" : ""} ml-2 h-5 w-5`}
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 20 20"
    //       fill="currentColor"
    //       aria-hidden="true"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M6.293 8.707a1 1 0 0 0 0 1.414L10 13.414l3.707-3.707a1 1 0 1 0-1.414-1.414l-3.001 3.001-2.293-2.293a1 1 0 0 0-1.414 0z"
    //       />
    //     </svg>
    //   </button>
    //   <div className={dropdownClasses}>
    //     <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
    //       <a
    //         href="#"
    //         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //         role="menuitem"
    //       >
    //         Option 1
    //       </a>
    //       <a
    //         href="#"
    //         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //         role="menuitem"
    //       >
    //         Option 2
    //       </a>
    //       <a
    //         href="#"
    //         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //         role="menuitem"
    //       >
    //         Option 3
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div>a</div>
  );
};

export default ContentA;


