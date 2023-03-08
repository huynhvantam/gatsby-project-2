import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-600  grid grid-cols-12 px-[30px] 2xl:px-[100px]">
        {/* ----------===logo===---------- */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <div
          className="col-start-1 col-span-6  lg:col-start-1 lg:col-span-3 xl:col-start-1 xl:col-span-3
        bg-blue-200 px-[15px] py-[20px]
        "
        >
          <img
            src="https://ordainit.com/Sorex/sorex/assets/img/logo/logo-1.png"
            alt=""
          />
        </div>
        {/* ----------===nav===---------- */}
        <div className="hidden lg:block xl:bg-red-200  xl:col-start-4 xl:col-span-6 lg:col-start-4 lg:col-span-7">
          <nav
            className=" col-start-4 col-span-6
           bg-red-200  xl:px-[15px] flex justify-center font-semibold "
          >
            <ul className=" bg-red-100 flex lg:justify-center xl:justify-end items-center w-full text-[17px]">
              <li className="lg:px-[14px] xl:pl-[16px] py-[35px] bg-red-200 ">
                <a href="/" className="">
                  Home&nbsp;
                </a>
                <i className=" fas fa-angle-double-down "></i>
                <ul className="hidden">
                  <li className="lg:px-[14px] xl:pl-[16px] bg-red-200">
                    <a href="">Home 1</a>
                  </li>
                  <li className="lg:px-[14px] xl:pl-[16px] bg-red-200">
                    <a href="">Home 1</a>
                  </li>
                  <li className="lg:px-[14px] xl:pl-[16px]  bg-red-200">
                    <a href="">Home 1</a>
                  </li>
                </ul>
              </li>
              <li className="lg:px-[14px] xl:pl-[16px] py-[35px]  bg-red-200">
                <a href="/about">About&nbsp;</a>
                <i className="  fas fa-angle-double-down"></i>
              </li>
              <li className="lg:px-[14px] xl:pl-[16px] py-[35px] bg-red-200">
                <a href="/services">Services&nbsp;</a>
                <i className="  fas fa-angle-double-down"></i>
              </li>
              <li className="lg:px-[14px] xl:pl-[16px] py-[35px] bg-red-200">
                <a href="/contact">Page&nbsp;</a>
                <i className=" fas fa-angle-double-down"></i>
              </li>
              <li className="lg:px-[14px] xl:pl-[16px] py-[35px] bg-red-200">
                Blog&nbsp;<i className=" fas fa-angle-double-down"></i>
              </li>
              <li className="lg:px-[14px] xl:pl-[16px] py-[35px] bg-red-200">
                Contact
              </li>
            </ul>
          </nav>
        </div>
        {/* ----------===menu===---------- */}
        <div
          className="col-start-7 col-span-6 xl:col-start-10 xl:col-span-3 lg:col-start-11 lg:col-span-2
          relative bg-red-300  px-[15px] flex justify-between items-center"
        >
          <button
            className=" hidden xl:inline-block 
            absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]
           bg-yellow-300 rounded-3xl font-semibold h-[52px] w-[135px] text-gray-900   "
          >
            Get A Quote
          </button>
          <button
            className="absolute top-2/4 left-full translate-x-[-125%] translate-y-[-50%]
           bg-gray-700 h-[52px] w-[52px]  "
          >
            <i className="fas fa-bars text-yellow-500 border-[12px] border-gray-700 rounded "></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
