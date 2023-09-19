import React, { useState } from "react";
import NavBar from "../components/NavBar";
import group11 from "../assets/back.png";
import Whyus from "../components/Whyus";
import Funjoint from "../components/Funjoint";
import Funpoint from "../components/Funpoint";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Whatsapp from "../components/Whatsapp";

export default function Home() {
 // Define a state variable to track the currently expanded section
//  const [expandedSection, setExpandedSection] = useState(null);

//  // Function to toggle the expanded state for a section
//  const toggleExpand = (sectionId) => {
//    if (expandedSection === sectionId) {
//      // If the clicked section is already expanded, close it
//      setExpandedSection(null);
//    } else {
//      // If a different section is clicked, expand it and close the previous one
//      setExpandedSection(sectionId);
//    }
//  };

  return (
    <div className="">
      <section
        className="bg-hero-pattern home  bg-no-repeat bg-cover bg-center  text-white lg:px-16 px-8 	"
        style={{
          // height: "100vh",
          backgroundImage: `url(${group11})`,
        }}
      >
        <div className="pt-36   text-white max-w-2xl">
          <h1 className="lg:text-5xl text-2xl font-semibold leading-relaxed">
            Explore the world with exciting people
          </h1>
          <p className="pt-6">
            We help your experience different culture and places in Kenya. Lets
            help your find a package for you
          </p>
          <button className="mt-10 bg-[#ED377E] rounded-full px-4 py-2 font-light text-sm">
            Start Journey
          </button>
        </div>
        <hr className="bg-white mt-14 mb-6" />

        <div className="grid gap-8 row-gap-5 lg:grid-cols-3 pb-2">
          <div className="">
            <h6 className="mb-1 font-semibold leading-5">01</h6>
            <p className="max-w-md mb-1 font-semibold text-sm sm:mx-auto">
              Choose place, activity and time
            </p>
            <span className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.
            </span>
          </div>
          <div className="">
            <h6 className="mb-1 font-semibold leading-5">02</h6>
            <p className="max-w-md mb-1 font-semibold text-sm sm:mx-auto">
              Lets connect and fit your budget.
            </p>
            <span className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.
            </span>
          </div>
          <div className="">
            <h6 className="mb-1 font-semibold leading-5">03</h6>
            <p className="max-w-md mb-1 font-semibold text-sm sm:mx-auto">
              Explore with friends and family.
            </p>
            <span className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.
            </span>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F4]">
        <Whyus />
        <Funjoint />
        <Funpoint />
        <Gallery />
        <Testimonials />
        <Whatsapp />
      </section>
      {/* <div>
      <h2 onClick={() => toggleExpand(1)}>Section 1</h2>
      {expandedSection === 1 && (
        <div>
          <p>This is the content for Section 1.</p>
          <p>You can add more content here.</p>
        </div>
      )}

      <h2 onClick={() => toggleExpand(2)}>Section 2</h2>
      {expandedSection === 2 && (
        <div>
          <p>This is the content for Section 2.</p>
          <p>You can add more content here.</p>
        </div>
      )} */}

      {/* Add more sections as needed */}
    {/* </div> */}
    </div>
  );
}
