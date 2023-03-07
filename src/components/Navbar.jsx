import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-600  grid grid-cols-12 px-[30px] xl:px-[100px]">
        {/* ----------===logo===---------- */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <div className="bg-blue-200 col-start-1 col-span-6 xl:col-start-1 xl:col-span-3 px-[15px] py-[20px]">
          <img
            src="https://ordainit.com/Sorex/sorex/assets/img/logo/logo-1.png"
            alt=""
          />
        </div>
        {/* ----------===nav===---------- */}
        <div className="hidden xl:block xl:bg-red-200  xl:col-start-4 xl:col-span-6">
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
        </div>
        {/* ----------===menu===---------- */}
        <div className=" col-start-10 col-span-3 bg-red-300  relative px-[15px]">
          <button className=" bg-yellow-300 rounded-3xl font-semibold h-[52px] w-[135px] text-gray-900 absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] ">
            Get A Quote
          </button>
          <button className="bg-gray-700 h-[52px] w-[52px] absolute top-2/4 left-full translate-x-[-100%] translate-y-[-50%] ">
            <i className=" fas fa-bars  text-yellow-500 border-[12px] border-gray-700 rounded "></i>
          </button>
        </div>
        {/* <div className="flex bg-blue-300  col-start-7 col-span-6 xl:col-start-10 xl:col-span-3 relative text-center  justify-end items-center p-[15px]">
          <button className="bg-gray-700 h-[52px] w-[52px] absolute  ">
            <i className=" fas fa-bars  text-yellow-500 border-[12px] border-gray-700 rounded "></i>
          </button>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
