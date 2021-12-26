import React from "react";
import CircleDec from "../assets/CircleDec";
import Dec3 from "../assets/Dec3";

const Contact = () => {
  return (
    <div id="contact" className=" h-1/2 w-full bg-slate-100 mt-96 lg:mt-0">
      <div className="relative z-10">
        <Dec3 right="-top-8" left="left-2" />
        <CircleDec />
      </div>
      <div className="z-40 flex flex-col h-full items-center justify-evenly">
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-medium text-center mb-4">
            Ready to get started?
          </span>
          <span className="text-xs font-medium text-center text-slate-400 tracking-wider">
            Products on online services or over the Internet. Electronic
            commerce draws <br /> on technologies such as mobile commerce
            application
          </span>
        </div>

        <div className="flex items-center justify-center w-2/3 lg:w-1/4">
          <input
            className="h-14 w-full ring-0 text-sm px-4 border-none outline-1 outline-slate-300 shadow-md"
            type="text"
            placeholder="Enter your email address"
          />

          <button className="w-40 lg:w-40 h-14 bg-green-500 text-sm text-white shadow-md cursor-pointer hover:bg-green-400">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
