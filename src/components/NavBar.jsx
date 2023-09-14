import React, { useState } from "react";
import logo from "/logo.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="lg:px-16 lg:pr-24 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full  text-sm py-3 md:py-0  lg:px-4  fixed top-0 left-0 w-full  transition-transform duration-300 transform z-10">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="relative md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between ">
              <img className="object-cover h-24 w-34" src={logo} alt="logo" />
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(true)}
                  className="sm:hidden hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2  shadow-sm align-middle "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#ED377E"
                    className="text-gray-900 dark:text-gray-100 h-8 w-8"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden w-4 h-4 text-white"
                    width="16"
                    height="16"
                    fillRule="currentColo"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
                <div
                  className="navbar w-full
                 flex flex-col  mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700"
                >
                  <a
                    className="text-white pr-3 px-3"
                    aria-current="page"
                    href="#"
                  >
                    HOME
                  </a>

                  <a className="text-white pr-3 px-3" href="#">
                    ABOUT
                  </a>

                  <a className="text-white pr-3" href="#">
                    SERVICES
                  </a>
                  <a className="text-white pr-3" href="#">
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-11/12 m-4 sm:hidden">
              <div className="p-4 bg-white border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center "
                    >
                      <img
                        className="object-cover h-20 w-20"
                        src={logo}
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-[#ED377E] focus:bg-[#ED377E]focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        className="w-5 hover:text-white text-[#ED377E]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-2">
                    <li onClick={() => setIsMenuOpen(false)}>
                      <a
                        href="/"
                        className="text-[#ED377E] font-medium tracking-wide  transition-colors duration-200 "
                      >
                        HOME
                      </a>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <a
                        href="/about"
                        className="text-[#ED377E] font-medium tracking-wide  transition-colors duration-200 "
                      >
                        ABOUT
                      </a>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="text-[#ED377E] font-medium tracking-wide  transition-colors duration-200 "
                      >
                        SERVICES
                      </a>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <a
                        href="/products"
                        className="text-[#ED377E] font-medium tracking-wide  transition-colors duration-200 "
                      >
                        CONTACT US
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}
