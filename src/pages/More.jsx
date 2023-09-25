import React, { Fragment } from "react";
import Breadcrumb from "../components/Breadcumb";
import { useParams } from "react-router-dom";
import events from "../assets/Data/Destinations.json";

export default function More() {
  let { name } = useParams();

  const event = events.find((user) => user.name === name);

  console.log(event);
  return (
    <Fragment>
      <Breadcrumb />
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">
        <div class="grid gap-12 row-gap-8 lg:grid-cols-3">
          <div>
            <img
              class="object-cover w-full h-56  sm:h-96"
              src={event.image}
              alt=""
            />
          </div>
          <div class="flex flex-col justify-center">
            <div class="max-w-xl mb-6">
              <h2 class="max-w-lg mb-6  font-bold tracking-tight text-gray-900 text-2xl ">
                The packages include
              </h2>
              <ul className="pl-6 list">
                {event.packages.map((item, index) => (
                  <li className="py-0.5 square">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <button className="px-4 py-2 bg-cerise text-white font-bold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
