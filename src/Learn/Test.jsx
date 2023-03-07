import React from "react";

const Test = () => {
  return (
    <>
      <div className="pt-12">
        <h1
          className="text-center text-black font-semibold mb-5 
        text-lg  bg-red-400
        sm:text-2xl sm:bg-yellow-400
        md:text-3xl md:bg-green-400
        lg:text-4xl  lg:bg-blue-300
        xl:text-4xl  xl:bg-fuchsia-500
        2xl:text-4xl  2xl:bg-purple-700
        "
        >
          Live anywhere
        </h1>
        <p className="text-center font-light text-xl text-gray-500 mb-35 bg-red-300">
          Keep calm & travel on
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-6 max-w-6xl mx-auto">
        <div className="h-96">
          <img
            className="w-full h-full rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1677741447337-48aba59a8f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
          <h3 className="text-center font-medium text-lg mb-1 ">
            Enjoy the great cold
          </h3>
          <span className="block text-center text-gray-400 text-sm">
            6.789 propreties
          </span>
        </div>
        <div className="h-96">
          <img
            className="w-full h-full rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1677741447337-48aba59a8f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
          <h3 className="text-center font-medium text-lg mb-1 ">
            Enjoy the great cold
          </h3>
          <span className="block text-center text-gray-400 text-sm">
            6.789 propreties
          </span>
        </div>
        <div className="h-96">
          <img
            className="w-full h-full rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1677741447337-48aba59a8f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
          <h3 className="text-center font-medium text-lg mb-1 ">
            Enjoy the great cold
          </h3>
          <span className="block text-center text-gray-400 text-sm">
            6.789 propreties
          </span>
        </div>
      </div>
    </>
  );
};

export default Test;
