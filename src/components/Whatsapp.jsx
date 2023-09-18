import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <div className="whatsapp text-5xl cursor-pointer">
      <a href="https://api.whatsapp.com/send?phone=+254757785659&text=Welcome to Pwani Adventures 🌴🏖️🏄">
        <FaWhatsapp
          style={{
            color: "#25d366",
          }}
        />
      </a>
    </div>
  );
}
