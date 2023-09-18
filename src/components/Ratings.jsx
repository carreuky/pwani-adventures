import React from "react";
import { FaStar } from "react-icons/fa";

function Rating({ digit }) {
  // Ensure the input digit is within the valid range (0-5)
  if (digit < 0 || digit > 5) {
    return <div>Invalid Rating</div>;
  }

  // Create an array of stars based on the input digit
  const stars = Array.from({ length: digit }, (_, index) => (
    <span className="flex text-2xl" key={index}>
      <FaStar style={{ color: "#FFE234" }} />
    </span>
  ));

  return <div className="rating flex gap-1">{stars}</div>;
}

export default Rating;
