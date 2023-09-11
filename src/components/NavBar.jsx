import React from "react";
import logo from "/logo.png";

export default function NavBar() {
  return (
    <div >
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
                  className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <svg
                    className="hs-collapse-open:hidden w-4 h-4 bg-white"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden w-4 h-4 text-white"
                    width="16"
                    height="16"
                    fillRule="currentColor"
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
                <div className="navbar flex flex-col  mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                  <a className="text-white pr-3 px-3" aria-current="page" href="#">
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
        </nav>
      </header>
    </div>
  );
}
