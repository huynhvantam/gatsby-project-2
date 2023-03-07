import React from "react";

const Header = () => {
  return (
    <header className="bg-red-100 h-[92px] grid grid-cols-12 ">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />
      <div className="bg-red-300 flex  px-[15px] items-center col-start-1 col-span-3">
        <div className="bg-red-500">
          <img
            src="https://ordainit.com/Sorex/sorex/assets/img/logo/logo-1.png"
            alt=""
          />
        </div>
      </div>
      <nav className=" bg-red-200  col-start-4 col-span-6 px-[15px] flex justify-center ">
        <ul className=" bg-red-100 flex justify-center items-center w-full ">
          <li className="px-[15px] bg-red-200">
            <a href="/" className="">
              Home
            </a>
            &nbsp;<i className="fas fa-angle-double-down"></i>
            <ul className="hidden">
              <li className="px-[15px] bg-red-200">
                <a href="">Home 1</a>
              </li>
              <li className="px-[15px] bg-red-200">
                <a href="">Home 1</a>
              </li>
              <li className="px-[15px] bg-red-200">
                <a href="">Home 1</a>
              </li>
            </ul>
          </li>
          <li className="px-[15px] bg-red-200">
            <a href="/about">About</a>
            &nbsp;<i className="fas fa-angle-double-down"></i>
          </li>
          <li className="px-[15px] bg-red-200">
            <a href="/services">Services</a>
            &nbsp;<i className="fas fa-angle-double-down"></i>
          </li>
          <li className="px-[15px] bg-red-200">
            <a href="/contact">Page</a>
            &nbsp;<i className="fas fa-angle-double-down"></i>
          </li>
          <li className="px-[15px] bg-red-200">
            Blog &nbsp;<i className="fas fa-angle-double-down"></i>
          </li>
          <li className="px-[15px] bg-red-200">Contact</li>
        </ul>
      </nav>
      <div className="px-[15px] col-start-10 col-span-3 bg-red-300 flex items-center justify-around">
        <button className=" bg-yellow-300 rounded-3xl font-semibold h-[52px] w-[135px] text-gray-900 ">
          Get A Quote
        </button>
        <button>
          <i className="fas fa-bars bg-gray-700 text-yellow-500 border-[12px] border-gray-700 rounded"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
