import React from "react";

export default function Funjoint() {
  return (
    <section className="lg:px-16 px-8 ">
      <h1 className="text-sm mb-2">FUN JOINT</h1>
      <p className="text-[#F47E3B] text-2xl">UPCOMING EVENTS</p>
      <div class=" py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-12">
        <div class="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-3">
          <div class="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div class="relative">
              <img
                class="object-cover w-full h-64 rounded-t xl:h-96"
                src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div class="absolute inset-0 bg-gray-800 bg-opacity-25"></div>
            </div>
            <div class="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 class="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Baobab
              </h5>
              <p>22/09/23</p>
              {/* <p class="mb-5 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                perspiciatis unde.
              </p> */}
              <a href=""
                class="text-[#F47E3B] px-6 font-medium tracking-wide  transition duration-200 "
              >
                Read more
              </a>
            </div>
          </div>
          <div class="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div class="relative">
              <img
                class="object-cover w-full h-64 rounded-t xl:h-96"
                src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div class="absolute inset-0 bg-gray-800 bg-opacity-25"></div>
            </div>
            <div class="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 class="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Baobab
              </h5>
              <p>22/09/23</p>
              {/* <p class="mb-5 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                perspiciatis unde.
              </p> */}
             <a href=""
                class="text-[#F47E3B] px-6 font-medium tracking-wide  transition duration-200 "
              >
                Read more
              </a>
            </div>
          </div>
          <div class="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2 hover:shadow md:text-center">
            <div class="relative">
              <img
                class="object-cover w-full h-64 rounded-t xl:h-96"
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div class="absolute inset-0 bg-gray-800 bg-opacity-25"></div>
            </div>
            <div class="px-6 py-8 sm:px-8">
              <h5 class="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Baobab
              </h5>
              <p>22/09/23</p>
              {/* <p class="mb-5 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                perspiciatis unde.
              </p> */}
              <a href=""
                class="text-[#F47E3B] px-6 font-medium tracking-wide  transition duration-200 "
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
