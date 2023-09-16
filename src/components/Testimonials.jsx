import React from "react";
import testimony from "../assets/testimony.png";

export default function Testimonials() {
  return (
    <div class=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:py-20 lg:px-16 p-8 ">
      <div class="flex flex-col lg:flex-row">
        <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
          <h2 class="mb-4  text-3xl font-bold tracking-tight text-[#F47E3B] sm:text-4xl sm:leading-none">
            What our happy client say
          </h2>
          <p className=" text-sm my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.
          </p>
          <div className="flex gap-4">
            <div className="text-center cursor-pointer">
              <img
                class="mx-auto mb-4 w-12 h-12 object-cover  rounded-full shadow-lg dark:shadow-black/20"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg"
                alt="avatar"
              />
              <p className="text-sm" >Peter</p>
            </div>
            <div className="text-center cursor-pointer">
              <img
                class="mx-auto mb-4 w-12 h-12 object-cover  rounded-full shadow-lg dark:shadow-black/20"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg"
                alt="avatar"
              />
              <p  className="text-sm">Joe</p>
            </div>
            <div className="text-center cursor-pointer">
              <img
                class="mx-auto mb-4 w-12 h-12 object-cover  rounded-full shadow-lg dark:shadow-black/20"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg"
                alt="avatar"
              />
              <p className="text-sm">Tim</p>
            </div>
          </div>

          
        </div>
        <div class="lg:w-1/2 flex justify-center items-center">
          <img
            src={testimony}
            alt=""
            className="object-cover w-auto h-64 rounded-t xl:h-72"
          />
        </div>
      </div>
    </div>
  );
}
