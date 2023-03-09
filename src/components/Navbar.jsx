import React from "react";
import { Link } from "gatsby";
import creativeAgency from "../pages/home/creativeAgency"
import { useState } from "react";
import NavLi from "./navbar/NavLi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);

  // };
  // const dropdownClasses = `absolute z-10 bg-white ${isOpen ? "block" : "hidden"}`;
  return (
    <div className="">
      <div className=" ">
        <nav className=" px-[30px] 2xl:px-[100px]  grid grid-cols-12 ">
          {/* ----------===logo===---------- */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          />
          <div
            className="col-start-1 col-span-6  lg:col-start-1 lg:col-span-3 xl:col-start-1 xl:col-span-3
         px-[15px] py-[20px]
        "
          >
            <img
              src="https://ordainit.com/Sorex/sorex/assets/img/logo/logo-1.png"
              alt=""
            />
          </div>
          {/* ----------===nav===---------- */}
          <div className="hidden lg:block xl:  xl:col-start-4 xl:col-span-6 lg:col-start-4 lg:col-span-7">
            <nav
              className=" col-start-4 col-span-6
             xl:px-[15px] flex justify-center font-semibold "
            >
              <ul className="  flex lg:justify-center xl:justify-end items-center w-full text-[17px]">
                <li className="  
              ">
                  <button className="
                hover: lg:px-[13px] xl:pl-[16px] py-[35px]
                relative flex justify-center items-center  focus:outline-none    group">
                    <Link to="/" className="">Home&nbsp; </Link>
                    <i className=" fas fa-angle-double-down "></i>
                    <div className="absolute hidden group-hover:block top-full min-w-full w-max  ">
                      <ul className="text-left  absolute p-10 bg-gray-900 text-gray-200 ">
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/home/creativeAgency">Home A</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Home B</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Home C</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Home D</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Home E</Link>
                        </li>
                      </ul>
                    </div>
                  </button>
                </li>
                <li className="  
              ">
                  <button className="
                hover: lg:px-[13px] xl:pl-[16px] py-[35px]
                relative flex justify-center items-center  focus:outline-none    group">
                    <Link to="/" className="">About&nbsp; </Link>
                    <i className=" fas fa-angle-double-down "></i>
                    <div className="absolute hidden group-hover:block top-full min-w-full w-max  ">
                      <ul className="text-left  absolute p-10 bg-gray-900 text-gray-200 ">
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">About Me</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">About US</Link>
                        </li>
                      </ul>
                    </div>
                  </button>
                </li>
                <li className="  
              ">
                  <button className="
                hover: lg:px-[13px] xl:pl-[16px] py-[35px]
                relative flex justify-center items-center  focus:outline-none    group">
                    <Link to="/" className="">Service&nbsp; </Link>
                    <i className=" fas fa-angle-double-down "></i>
                    <div className="absolute hidden group-hover:block top-full min-w-full w-max  ">
                      <ul className="text-left  absolute p-10 bg-gray-900 text-gray-200 ">
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Service 1</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Service 2</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Service 3</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Service Details</Link>
                        </li>
                      </ul>
                    </div>
                  </button>
                </li>
                <li className="  
              ">
                  <button className="
                hover: lg:px-[13px] xl:pl-[16px] py-[35px]
                relative flex justify-center items-center  focus:outline-none    group">
                    <Link to="/" className="">Page&nbsp; </Link>
                    <i className=" fas fa-angle-double-down "></i>
                    <div className="absolute hidden group-hover:block top-full  right-[300%] min-w-full w-full  ">
                      <ul className="text-left w-[700px] max-w-[700px] absolute p-10 bg-gray-900 text-gray-200 flex flex-wrap">
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Portfolio</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Portfolio Masonry</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">ProductDetails</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Job Details</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Cart</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Register</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Portfolio Filter 1</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Portfolio Details</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Testimonial</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Faq</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Ceckout</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">404</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Portfolio Filter 2</Link>
                        </li>

                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Product</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Job</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Price</Link>
                        </li>
                        <li className="w-1/3 top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Login</Link>
                        </li></ul>
                    </div>
                  </button>
                </li>
                <li className="  
              ">
                  <button className="
                hover: lg:px-[13px] xl:pl-[16px] py-[35px]
                relative flex justify-center items-center  focus:outline-none    group">
                    <Link to="/" className="">Home&nbsp; </Link>
                    <i className=" fas fa-angle-double-down "></i>
                    <div className="absolute hidden group-hover:block top-full min-w-full w-max  ">
                      <ul className="text-left  absolute p-10 bg-gray-900 text-gray-200 ">
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Home A</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Home B</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Home C</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Home D</Link>
                        </li>
                        <li className="
                      w-[180px] top-0  p-[5px]
                      lg:px-[13px] xl:pl-[16px]  hover:text-yellow-400 ">
                          <Link to="/creativeAgency">Home E</Link>
                        </li>
                      </ul>
                    </div>
                  </button>
                </li>
                <li className="lg:px-[13px] xl:pl-[16px] py-[35px] ">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* ----------===menu===---------- */}
          <div
            className="col-start-7 col-span-6 xl:col-start-10 xl:col-span-3 lg:col-start-11 lg:col-span-2
          relative   px-[15px] flex justify-between items-center"
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
        </nav >
      </div>
    </div>
  );
};

export default Navbar;
