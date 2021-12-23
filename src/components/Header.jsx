import React from "react";
import Dec2 from "../assets/Dec2";
import heroImage from "../assets/hero-image.png";

const Header = () => {
  return (
    <div className="min-h-screen pt-36 w-full bg-white">
      <div className=" sm:flex sm:items-center sm:justify-center">
        {/* Header Text */}
        <div className="flex flex-col">
          <div className="flex gap-2">
            <span className="font-bold text-6xl lg:text-7xl">Tell a</span>
            <span className="font-bold text-green-500 text-6xl lg:text-7xl">
              better
            </span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-6xl lg:text-7xl text-green-500">
              brand
            </span>
            <span className="font-bold text-6xl lg:text-7xl">story</span>
          </div>
          <span className="lg:w-2/4 text-xs text-slate-400 my-6 tracking-wider text-justify">
            Literature surrounded insensible at indulgence or to admiration
            remarkably. Matter future lovers desire marked boy use. Chamber
            reached do he nothing be.
          </span>
          <div className="flex gap-5">
            <button className="px-4 lg:px-6  py-2 bg-green-500 text-sm rounded-md text-white shadow-md cursor-pointer hover:bg-green-400">
              EXPLORE MORE
            </button>
            <button className="text-sm cursor-pointer">Contact Us</button>
          </div>
          <Dec2/>
        </div>
        {/* Header Image */}

        <div>
          <img className=" object-cover" src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Header;
