import React from "react";
import footerlogo from "../assets/flogo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="bg-[#F47E3B] lg:px-12 px-8">
      <div className="flex">
        <div className="w-16">
          <img class="  object-cover" src={footerlogo} alt="avatar" />
        </div>
        <div
          className="navbar w-full text-xs 
                 flex   flex-wrap items-center justify-end md:gap-x-7 md:mt-0 md:pl-6 "
        >
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
      <hr className="text-xs" />

      <div class="flex justify-between  py-3">
        <p className="text-xs text-white ">Copyright {year} Carreuky</p>

        <ul class="flex lg:gap-4 gap-2">
          <li>
            <a
              href="https//instagram.com/pwaniadventures"
              class="text-xl text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaInstagram />{" "}
            </a>
          </li>
          <li>
            <a
              href="https//facebook.com/pwaniadventures"
              class="text-xl text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https//twitter.com/pwaniadventures"
              class="text-xl text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="/"
              class="text-xl text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
