import React from "react";
import arabuko from "../assets/bonfire.png";
import ride from "../assets/ride.png";
import funkids from "../assets/funkids.jpeg";
import nightfun from "../assets/nightfun.jpg";
import bonfire from "../assets/bonfire.png";

export default function Gallery() {
  return (
    <section className="lg:px-16 px-8 py-8">
      <div className="text-center my-4">
      <p className="mb-2 uppercase">Trip Gallery</p>
      <h1 className="text-[#F47E3B] text-3xl font-bold">Completed Journey</h1>
      </div>
      
    <div class="grid max-w-screen md:row-gap-4 sm:mx-auto lg:grid-cols-3 gap-4 py-4 ">
      <div class=" relative">
        <img
          src={arabuko}
          alt=""
          className="object-cover w-full h-64 rounded-t xl:h-72"
        />
        <div class="absolute bottom-0 right-0 px-2 text-white hover:-translate-y-2 hover:shadow-2xl hover:opacity-100 bg-black bg-opacity-25">
          <p className="font-bold">Arabuko Forest</p>
          <span className="font-bold">25 participants</span>
        </div>
      </div>{" "}
      <div class="sm:col-span-2 ">
        <div class=" relative">
          {" "}
          <img
            src={ride}
            alt=""
            className="object-cover w-full h-64 rounded-t xl:h-72"
          />
          <div class="absolute bottom-0 right-0 px-2 text-white hover:-translate-y-2 hover:shadow-2xl hover:opacity-100 bg-black bg-opacity-25">
            <p className="font-bold">Beache Ride</p>
            <span className="font-bold">31 participants</span>
          </div>
        </div>
      </div>
      <div>
        <div class=" relative">
          {" "}
          <img
            src={funkids}
            alt=""
            className="object-cover w-full h-64 rounded-t xl:h-72"
          />
          <div class="absolute bottom-0 right-0 px-2 text-white hover:-translate-y-2 hover:shadow-2xl hover:opacity-100 bg-black bg-opacity-25">
            <p className="font-bold">Sunday Hungout</p>
            <span className="font-bold">19 participants</span>
          </div>
        </div>
      </div>
      <div class=" relative">
        {" "}
        <img
          src={bonfire}
          alt=""
          className="object-cover w-full h-64 rounded-t xl:h-72"
        />
        <div class="absolute bottom-0 right-0 px-2 text-white hover:-translate-y-2 hover:shadow-2xl hover:opacity-100 bg-black bg-opacity-25">
          <p className="font-bold">Bonfire Fun</p>
          <span className="font-bold">27 participants</span>
        </div>
      </div>{" "}
      <div class=" relative">
        {" "}
        <img
          src={nightfun}
          alt=""
          className="object-cover w-full h-64 rounded-t xl:h-72"
        />
        <div class="absolute bottom-0 right-0 px-2 text-white hover:-translate-y-2 hover:shadow-2xl hover:opacity-100 bg-black bg-opacity-25">
          <p className="font-bold">Night Hungout</p>
          <span className="font-bold">15 participants</span>
        </div>
      </div>{" "}
    </div>
    </section>
  );
}
