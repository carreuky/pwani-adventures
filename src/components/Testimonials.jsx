import React,{useState} from "react";
import testimony from "../assets/testimony.png";
import testimonies from "../assets/Data/Testimonials/Testimonials.json";
import {FaStar} from "react-icons/fa"
import Rating from "./Ratings";
import pic from "../assets/Data/Testimonials/images/person1.png"

export default function Testimonials() {
  const [test ,setTest] = useState(testimonies[0])
  const testMomials = testimonies.slice(0, 5).map((test) => {
    var name = test.name.split(" ");
    var first = name[0];
    return (
      <div className="text-center cursor-pointer">
        <img
          onClick={()=>setTest(test)}
          class="mx-auto mb-4 w-12 h-12 object-cover  rounded-full shadow-lg dark:shadow-black/20"
          src={test.image}
          alt="avatar"
        />
        <p className="text-sm">{first}</p>
      </div>
    );
  });

  

  return (
    <div class=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:py-20 lg:px-16 p-8 ">
      <div class="flex flex-col lg:flex-row">
        <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
          <h2 class="mb-4  text-3xl font-bold tracking-tight text-[#F47E3B] sm:text-4xl sm:leading-none">
            What our happy client say
          </h2>
          <p className=" text-sm my-3">
            {test?.desc}
          </p>
          <Rating digit={test?.rating}/>
          <div className="flex gap-4 my-3 ">{testMomials}</div>
        </div>
        <div class="lg:w-1/2 flex justify-center items-center">
          <img
            src={testimony}
            alt="Profile"
            className="object-cover w-auto h-64 rounded-t xl:h-72"
          />
        </div>
      </div>
    </div>
  );
}
