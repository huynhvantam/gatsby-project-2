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


        {/* <div className="p-4"> */}
        {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsVisible(!isVisible)}
          >
            Toggle Text
          </button>
          {isVisible && (
            <p className="mt-4 text-gray-800">
              This is the text that will be shown or hidden based on the button click.
            </p>
          )}
        </div> */}








        {/* <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0">
                  <Link to="/" className="text-white">
                    My Site
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      activeClassName="bg-gray-900 text-white"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                    <div className="relative">
                      <button
                        type="button"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        Dropdown
                      </button>
                      <div className="absolute z-10 top-10 -left-1 bg-white border border-gray-200 w-40 rounded-md shadow-lg py-1 px-3">
                        <Link
                          to="/option1"
                          className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-sm"
                        >
                          Option 1
                        </Link>
                        <Link
                          to="/option2"
                          className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-sm"
                        >
                          Option 2
                        </Link>
                        <Link
                          to="/option3"
                          className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-sm"
                        >
                          Option 3
                        </Link>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      activeClassName="bg-gray-900 text-white"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav> */}
        {/* <nav class="bg-white shadow">
          <div class="max-w-7xl mx-auto px-4 py-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <a href="#" class="text-gray-800 font-bold text-xl">Logo</a>
                <div class="ml-10 flex items-baseline space-x-4">
                  <a href="#" class="hover:text-gray-600">Home</a>
                  <div class="dropdown inline-block relative">
                    <button class="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                      <span class="mr-1">Dropdown</span>
                      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12l-6-6h12z" />
                      </svg>
                    </button>
                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                      <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Home 1</a></li>
                      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Home 2</a></li>
                      <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Home 3</a></li>
                    </ul>
                  </div>
                  <a href="#" class="hover:text-gray-600">About</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <div id="dropdownDelay" class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div> */}

      </div>
      ;
    </>
  );
};

export default HeroSection;
