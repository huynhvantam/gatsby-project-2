import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div
        className="bg-green-100 h-[1000px]
      sm:bg-green-200
      md:bg-green-300
      lg:bg-blue-100
      xl:bg-green-500
      2xl:bg-green-600 
      "
      >
        {/* menu */}
        {/* <div className="fixed top-0 right-0 ">
                    <div className=" ">
                      {
                        isOpen && (
  
                          <div>
                            <div className="">
                              <div className=" bg-red-500  opacity-10 t-0 l-0  h-full absolute" onClick={() => setIsOpen(!isOpen)}>1111111111111111111111111111111111</div>
                            </div>
                            <div className="bg-red-300  w-[480px] p-12 ">
                              <div className=" bg-red-100 h-screen ">
                                <div className="flex justify-between">
                                  <img src="https://ordainit.com/Sorex/sorex/assets/img/logo/footer-logo.png" alt="" />
                                  <button onClick={() => setIsOpen(!isOpen)} ><GrClose className="" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }
                    </div>
                  </div> */}
      </div>
    </>
  );
};

export default HeroSection;
