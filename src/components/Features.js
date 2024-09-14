import React from "react";
import ImageComputer from "../assets/image-computer.png";

const Features = () => {
  return (
    <div className="section-container my-20">
      <div className="relative flex flex-col md:flex-row md:space-x-32">
        <div className="md:w-1/2">
          <img src={ImageComputer} className="md:absolute top-0 right-[50%]"></img>
        </div>
      </div>
    </div>
  );
};

export default Features;
