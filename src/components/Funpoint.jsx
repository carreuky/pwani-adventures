import React from "react";
import guide from "../assets/guide.png";

export default function Funpoint() {
  return (
    <section className="lg:px-16 px-8 py-8 flex flex-wrap">
      <div className="lg:w-6/12 px-2">
        <h1 className="text-3xl text-[#F47E3B] font-bold">
          Fun made easy for you , experience with us.
        </h1>
        <p className="py-5">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.Lorem
          ipsum dolor sit amet consectetur adipiscing elit Ut etLorem ipsum
          dolor sit amet consectetur adipiscing elit Ut et
        </p>
      </div>
      <div className="px-2 lg:w-6/12 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 flex flex-wrap">
        <img
          src={guide}
          className=" object-fit  lg:w-64  h-56 w-full  rounded-t"
          alt=""
          srcset=""
        />
        <div className=" ">
          <div className="py-1">
            <h1 className="text-[#F47E3B]">Book Guide</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
            </p>
            <a className="mt-2 text-xs font-bold" href="http://">
              Check Guide &rarr;
            </a>
          </div>
          <div className="pt-1">
            <h1 className="text-[#F47E3B]">Tree Planting</h1>
            <p className="text-sm">
              Donate and contribute to creating a carbon free environment.
            </p>
            <a className="mt-2 text-xs font-bold" href="http://">
              Inquire More &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
