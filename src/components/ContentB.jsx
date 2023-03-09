import React from "react";
import { useState } from "react";
import { BiMenu } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
const ContentB = () => {
  const [isOpen, setIsOpen] = useState(true);
  return <>
    <div className="bg-red-100 h-[1000px] flex justify-end relative ">
      <BiMenu className=" bg-gray-700 text-yellow-500   rounded " onClick={() => setIsOpen(!isOpen)} />
      <div className=" ">
        {
          isOpen && (
            <div className="bg-red-300  w-[480px] p-12 ">
              <div className=" bg-red-100 h-screen ">
                <div className="flex justify-between">
                  <img src="https://ordainit.com/Sorex/sorex/assets/img/logo/footer-logo.png" alt="" />
                  <button onClick={() => setIsOpen(!isOpen)} ><GrClose className="" />
                  </button>
                </div>

              </div>

            </div>
          )
        }
      </div>


    </div >;

  </>
};

export default ContentB;
