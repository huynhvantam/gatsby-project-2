import React from "react";
import { Link } from "gatsby";
import creativeAgency from "../pages/home/creativeAgency"
import { useState } from "react";
import NavLi from "./navbar/NavLi";
import { BiMenu } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { BsPlusSquare } from 'react-icons/bs';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isHiddenMenu1, setIsHiddenMenu1] = useState(false);
  const [isHiddenMenu2, setIsHiddenMenu2] = useState(false);
  const [isHiddenMenu3, setIsHiddenMenu3] = useState(false);
  const [isHiddenMenu4, setIsHiddenMenu4] = useState(false);
  const [isHiddenMenu5, setIsHiddenMenu5] = useState(false);


  return (

    <div className="container">

      {/*=== ----------=== toggleMenu === ---------- ===*/}
      <div className="">
        {
          isOpen && (
            <div className="flex h-screen fixed  w-screen z-20 ">
              {/* --- === container menu === --- */}
              <div className="flex-1 opacity-80 bg-gray-600" onClick={() => setIsOpen(!isOpen)}></div>
              <div className="w-full  max-w-[480px] bg-black  overflow-y-auto p-12 ">

                {/* --- === logo, close === --- */}
                <div className="flex justify-between pb-12 items-center">
                  <img src="https://ordainit.com/Sorex/sorex/assets/img/logo/footer-logo.png" alt="" />
                  <AiOutlineClose className="text-gray-600 cursor-pointer  text-3xl" onClick={() => setIsOpen(!isOpen)} ></AiOutlineClose>
                </div>

                <div className=" lg:hidden">
                  {/* ----=== side bar menu 1 ===--- */}
                  <div className="">
                    {/* --- menu list --- */}
                    <div className=" flex justify-between items-center py-4 border-b border-gray-600 ">
                      <div className="  font-bold  text-sm cursor-pointer w-full text-white hover:text-yellow-400 ">HOME</div>
                      {isHiddenMenu1 ?
                        <AiOutlineClose className="text-gray-600  font-bold text-3xl border border-gray-600 cursor-pointer" onClick={() => setIsHiddenMenu1(!isHiddenMenu1)} />
                        :
                        <AiOutlinePlus className="text-white hover:text-yellow-400 font-bold text-3xl border border-gray-600 cursor-pointer" onClick={() => setIsHiddenMenu1(!isHiddenMenu1)} />
                      }

                    </div>
                    {/* --- menu list item ---  */}
                    <div>
                      {
                        isHiddenMenu1 && (
                          <div>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              CREATIVE AGENCY</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              PERSONAL PORTFOLIO</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              STARTUP BUSINESS</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              DIGITAL AGENCYIT</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              SERVICE AGENCY</Link>
                          </div>
                        )
                      }
                    </div>
                  </div>

                  {/* ----=== side bar menu 2 ===--- */}
                  <div className="">
                    {/* --- menu list --- */}
                    <div className=" flex justify-between items-center py-4 border-b border-gray-600 ">
                      <div className="  font-bold  text-sm cursor-pointer w-full text-white hover:text-yellow-400 ">SERVICE</div>
                      {isHiddenMenu2 ?
                        <AiOutlineClose className="text-gray-600  font-bold text-3xl border border-gray-600 cursor-pointer" onClick={() => setIsHiddenMenu2(!isHiddenMenu2)} />
                        :
                        <AiOutlinePlus className="text-white hover:text-yellow-400 font-bold text-3xl border border-gray-600 cursor-pointer" onClick={() => setIsHiddenMenu2(!isHiddenMenu2)} />
                      }
                    </div>
                    {/* --- menu list item ---  */}
                    <div>
                      {
                        isHiddenMenu2 && (
                          <div>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              CREATIVE AGENCY</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              PERSONAL PORTFOLIO</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              STARTUP BUSINESS</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              DIGITAL AGENCYIT</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              SERVICE AGENCY</Link>
                          </div>
                        )
                      }
                    </div>
                  </div>

                  {/* ----=== side bar menu 3===--- */}
                  <div className="">
                    {/* --- menu list --- */}
                    <div className=" flex justify-between items-center py-4 border-b border-gray-600 ">
                      <div className="  font-bold  text-sm cursor-pointer w-full text-white hover:text-yellow-400 ">PAGE</div>
                      {isHiddenMenu3 ?
                        <AiOutlineClose className="text-gray-600  font-bold text-3xl border border-gray-600 cursor-pointer" onClick={() => setIsHiddenMenu3(!isHiddenMenu3)} />
                        :
                        <AiOutlinePlus className="text-white hover:text-yellow-400 font-bold text-3xl border border-gray-600 cursor-pointer" onClick={() => setIsHiddenMenu3(!isHiddenMenu3)} />
                      }
                    </div>
                    {/* --- menu list item ---  */}
                    <div>
                      {
                        isHiddenMenu3 && (
                          <div>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              CREATIVE AGENCY</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              PERSONAL PORTFOLIO</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              STARTUP BUSINESS</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              DIGITAL AGENCYIT</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              SERVICE AGENCY</Link>
                          </div>
                        )
                      }
                    </div>
                  </div>

                  {/* ----=== side bar menu 4 ===--- */}
                  <div className="">
                    {/* --- menu list --- */}
                    <div className=" flex justify-between items-center py-4 border-b border-gray-600 ">
                      <div className="  font-bold  text-sm cursor-pointer w-full text-white hover:text-yellow-400 ">BLOG</div>
                      {isHiddenMenu4 ?
                        <AiOutlineClose className="text-gray-600  font-bold text-3xl border border-gray-600 cursor-pointer" onClick={() => setIsHiddenMenu4(!isHiddenMenu4)} />
                        :
                        <AiOutlinePlus className="text-white hover:text-yellow-400 font-bold text-3xl border border-gray-600 cursor-pointer" onClick={() => setIsHiddenMenu4(!isHiddenMenu4)} />
                      }
                    </div>
                    {/* --- menu list item ---  */}
                    <div>
                      {
                        isHiddenMenu4 && (
                          <div>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              CREATIVE AGENCY</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              PERSONAL PORTFOLIO</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              STARTUP BUSINESS</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              DIGITAL AGENCYIT</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              SERVICE AGENCY</Link>
                          </div>
                        )
                      }
                    </div>
                  </div>

                  {/* ----=== side bar menu 5===--- */}
                  <div className="">
                    {/* --- menu list --- */}
                    <div className=" flex justify-between items-center py-4 border-b border-gray-600 ">
                      <div className="  font-bold  text-sm cursor-pointer w-full text-white hover:text-yellow-400 ">ABOUT</div>
                      {isHiddenMenu5 ?
                        <AiOutlineClose className="text-gray-600  font-bold text-3xl border border-gray-600 cursor-pointer" onClick={() => setIsHiddenMenu5(!isHiddenMenu5)} />
                        :
                        <AiOutlinePlus className="text-white hover:text-yellow-400 font-bold text-3xl border border-gray-600 cursor-pointer" onClick={() => setIsHiddenMenu5(!isHiddenMenu5)} />
                      }
                    </div>
                    {/* --- menu list item ---  */}
                    <div>
                      {
                        isHiddenMenu5 && (
                          <div>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              CREATIVE AGENCY</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              PERSONAL PORTFOLIO</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              STARTUP BUSINESS</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              DIGITAL AGENCYIT</Link>
                            <Link to="/home/creativeAgency" className="font-bold text-sm pl-9 flex justify-between items-center border-b border-gray-600 py-3  text-white hover:text-yellow-400">
                              SERVICE AGENCY</Link>
                          </div>
                        )
                      }
                    </div>
                  </div>

                  {/* ---- === side bar menu 6 === --- */}
                  <div className=" flex justify-between items-center py-4 border-b border-gray-600 ">
                    <div className="  font-bold  text-sm cursor-pointer w-full text-white hover:text-yellow-400 ">CONTACT</div>

                  </div>
                </div>
              </div>
            </div>

          )
        }
      </div>
      <div className="fixed w-screen">

        <nav className=" bg-blue-100 px-[30px] 2xl:px-[100px]  grid grid-cols-12 "  >
          {/* ----------===logo===---------- */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          />
          <div
            className="bg-red-100 col-start-1 col-span-6  lg:col-start-1 lg:col-span-3 xl:col-start-1 xl:col-span-3
         px-[15px] py-[20px]
        "
          >
            <img
              src="https://ordainit.com/Sorex/sorex/assets/img/logo/logo-1.png"
              alt=""
            />
          </div>
          {/* ----------===nav===---------- */}
          <div className="hidden bg-red-300 lg:block xl:  xl:col-start-4 xl:col-span-6 lg:col-start-4 lg:col-span-7">
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
          relative  bg-green-200 px-[15px] flex justify-between items-center"
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
           bg-gray-700 h-[52px] w-[52px] flex justify-center items-center  "
            >
              <BiMenu className=" text-yellow-500  text-4xl" onClick={() => setIsOpen(!isOpen)} />
            </button>

          </div>
        </nav >
      </div>
    </div>
  );
};


export default Navbar;
