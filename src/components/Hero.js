import { BiCopyright } from "react-icons/bi";
import React from "react";

const Hero = () => {
  return (
    <div className="section-container pt-16 mb-40">
      <BiCopyright className="h-40 w-40 text-strongCyan mx-auto my-16" />
      <h3>A history of everything you copy</h3>
      <p className="text-darkGrayishBlue text-2xl mb-10">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className="button-container">
        <a
          href="#"
          className="bg-strongCyan p-4 px-8 rounded-full shadow-2xl hover:opacity-80"
        >
          Download for iOS
        </a>
        <a
          href="#"
          className="bg-lightBlue p-4 px-8 rounded-full shadow-2xl hover:opacity-80"
        >
          Download for Mac
        </a>
      </div>
    </div>
  );
};

export default Hero;
