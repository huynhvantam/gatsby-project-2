import React from "react";

const Header = () => {
  return (
    <header className="bg-red-100  grid grid-cols-12 max-w-[1447px] mx-auto top-0 ">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />
      {/* ----------===logo===---------- */}
      <div className="bg-red-300 flex  px-[15px] items-center col-start-1 col-span-3">
        <div className="bg-red-500">
          <img
            src="https://ordainit.com/Sorex/sorex/assets/img/logo/logo-1.png"
            alt=""
          />
        </div>
      </div>
      {/* ----------===nav===---------- */}
      <nav className=" bg-red-200  col-start-4 col-span-6 px-[15px] flex justify-center font-semibold ">
        <ul className=" bg-red-100 flex justify-end items-center w-full text-[17px]">
          <li className="pl-[26px] py-[35px] bg-red-200 ">
            <a href="/" className="">
              Home
            </a>
            <i className="ml-[10px] fas fa-angle-double-down "></i>
            <ul className="hidden">
              <li className="pl-[26px] bg-red-200">
                <a href="">Home 1</a>
              </li>
              <li className="pl-[26px] bg-red-200">
                <a href="">Home 1</a>
              </li>
              <li className="pl-[26px]  bg-red-200">
                <a href="">Home 1</a>
              </li>
            </ul>
          </li>
          <li className="pl-[26px] py-[35px]  bg-red-200">
            <a href="/about">About</a>
            <i className="ml-[10px]  fas fa-angle-double-down"></i>
          </li>
          <li className="pl-[26px] py-[35px] bg-red-200">
            <a href="/services">Services</a>
            <i className="ml-[10px]  fas fa-angle-double-down"></i>
          </li>
          <li className="pl-[26px] py-[35px] bg-red-200">
            <a href="/contact">Page</a>
            <i className="ml-[10px] fas fa-angle-double-down"></i>
          </li>
          <li className="pl-[26px] py-[35px] bg-red-200">
            Blog<i className="ml-[10px] fas fa-angle-double-down"></i>
          </li>
          <li className="pl-[26px] py-[35px] bg-red-200">Contact</li>
        </ul>
      </nav>
      {/* ----------===menu===---------- */}
      <div className="px-[15px] col-start-10 col-span-3 bg-red-300 flex items-center justify-around relative ">
        <button className=" bg-yellow-300 rounded-3xl font-semibold h-[52px] w-[135px] text-gray-900  ">
          Get A Quote
        </button>
        <button className="bg-gray-700 h-[52px] w-[52px] absolute bottom-0 right-0 translate-y-[-50%] ">
          <i className=" fas fa-bars  text-yellow-500 border-[12px] border-gray-700 rounded "></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
