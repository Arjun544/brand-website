import React from "react";
import { Fade } from "react-reveal";
import Dec3 from "../assets/Dec3";
import PlayIcon from "../assets/PlayIcon";

const About = () => {
  return (
    <div
      id="about"
      className="relative h-1/3 flex flex-col md:flex-row items-center justify-evenly my-44 lg:my-32"
    >
        <Dec3 right="-top-32" left="right-12" rotate="-rotate-120" />
      
      <Fade left>
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-2xl font-medium text-center mb-6">
            ABOUT US
          </span>
          <span className="text-xs font-medium text-slate-400 tracking-wider">
            And produce say the ten moments parties. Simple innate <br /> summer
            fat appear basket his desire joy. Outward clothes <br /> promise at
            gravity do excited. Sufficient particular <br /> impossible by
            reasonable oh expression is. Yet preference <br /> connection
            unpleasant yet melancholy but end <br />
            appearance. And excellence partiality estimating <br /> terminated
            day everything.
          </span>
          <div className="flex gap-3 mt-6">
            <button className="px-6 py-2 bg-green-500 text-sm  text-white shadow-md cursor-pointer hover:bg-green-400">
              LEARN MORE
            </button>
            <button className="px-6 py-2 text-sm text-green-500 border-2 border-green-500 shadow-md cursor-pointer">
              <div className="flex items-center justify-center gap-2">
                <span>Watch video</span>
                <PlayIcon />
              </div>
            </button>
          </div>
        </div>
      </Fade>

      <Fade right>
        <div className="flex flex-col gap-y-4 mt-6 md:mt-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-evenly h-32 w-40 bg-white shadow-md hover:shadow-lg rounded-sm">
              <span className="text-xl font-semibold">1000+</span>
              <span className="text-xs text-slate-400">
                Completed <br /> Projects
              </span>
            </div>
            <div className="flex flex-col items-center justify-evenly h-32 w-40 bg-white shadow-md hover:shadow-lg rounded-sm">
              <span className="text-xl font-semibold">250+</span>
              <span className="text-xs text-slate-400">
                On Going <br /> Projects
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-evenly h-32 w-40 bg-white shadow-md hover:shadow-lg rounded-sm">
              <span className="text-xl font-semibold">500+</span>
              <span className="text-xs text-slate-400">
                Happy <br /> Clients
              </span>
            </div>
            <div className="flex flex-col items-center justify-evenly h-32 w-40 bg-white shadow-md hover:shadow-lg rounded-sm">
              <span className="text-xl font-semibold">25</span>
              <span className="text-xs text-slate-400">
                Offices through <br />
                out GLOB
              </span>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
