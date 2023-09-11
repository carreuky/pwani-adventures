import React from "react";
import guide from "../assets/back.png";

export default function Funpoint() {
  return (
    <section className="px-16">
       <div className="w-5/12">
      <h1 className="text-4xl text-[#F47E3B]">Fun made easy for you , experience with us.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.Lorem ipsum
        dolor sit amet consectetur adipiscing elit Ut etLorem ipsum dolor sit
        amet consectetur adipiscing elit Ut et
      </p>
      </div>
      <div className="w-7/12 ">
      <div>
        <img src={guide} alt="" srcset="" />
      </div>
      <div className="flex flex-cols">
      <div>
        <h1>Book Guide</h1>
        <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
        <a href="http://">Check Guide</a>
      </div>
      <div>
      <h1>Tree Planting</h1>
        <p>Donate and contribute to creating a carbon free environment.</p>
        <a href="http://">Inquire More</a>
      </div>

      </div>
      </div>
    </section>
  );
}
