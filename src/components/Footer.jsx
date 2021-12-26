import React from "react";
import FacebookIcon from "../assets/FacebookIcon";
import InstagramIcon from "../assets/InstagramIcon";
import LinkedInIcon from "../assets/LinkedInIcon";
import TwitterIcon from "../assets/TwitterIcon";

const Footer = () => {
  return (
    <div className="flex flex-col h-1/4 w-full mt-32 px-8 lg:px-32">
      <div className="flex flex-wrap lg:flex-nowrap h-full w-full gap-6">
        <div className="flex flex-col flex-grow bg-white gap-4">
          <a href="home" className="text-black font-bold">
            brand.io
          </a>
          <span className="text-xs font-medium text-start text-slate-400 tracking-wider">
            Nor again is there anyone who loves or pursues or <br /> desires to
            obtain pain of itself.
          </span>
        </div>
        {/* About */}
        <div className="flex flex-col flex-grow-0 w-72 gap-4">
          <span className=" ">About</span>
          <li className="list-none flex flex-col gap-2">
            <span className="text-xs text-slate-500 font-semibold">Home</span>
            <span className="text-xs text-slate-500 font-semibold">
              Features
            </span>
            <span className="text-xs text-slate-500 font-semibold">FAQs</span>
            <span className="text-xs text-slate-500 font-semibold">
              Reviews
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              Stories
            </span>
          </li>
        </div>
        {/* Privacy */}
        <div className="flex flex-col flex-grow-0 w-72 gap-4">
          <span className=" ">Privacy</span>
          <li className="list-none flex flex-col gap-2">
            <span className="text-xs text-slate-500 font-semibold">
              Privacy
            </span>
            <span className="text-xs text-slate-500 font-semibold">Policy</span>
            <span className="text-xs text-slate-500 font-semibold">
              Payment
            </span>
            <span className="text-xs text-slate-500 font-semibold">Terms</span>
          </li>
        </div>
        {/* Contact */}
        <div className="flex flex-col flex-grow-0 w-72 gap-4">
          <span className=" ">Contact Us</span>
          <li className="list-none flex flex-col gap-2">
            <span className="text-xs text-slate-500 font-semibold">
              +01 234 567 8910
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              arshakir@gmail.com
            </span>
            <div className="flex mt-8 gap-2">
              <div className="flex items-center justify-center h-8 w-8 bg-green-500 cursor-pointer hover:bg-green-600">
                <InstagramIcon />
              </div>
              <div className="flex items-center justify-center h-8 w-8 bg-green-500 cursor-pointer hover:bg-green-600">
                <LinkedInIcon />
              </div>
              <div className="flex items-center justify-center h-8 w-8 bg-green-500 cursor-pointer hover:bg-green-600">
                <FacebookIcon />
              </div>
              <div className="flex items-center justify-center h-8 w-8 bg-green-500 cursor-pointer hover:bg-green-600">
                <TwitterIcon />
              </div>
            </div>
          </li>
        </div>
      </div>
      <div className="divide-x-2 divide-blue-800"></div>
      <div className="flex items-center gap-1 mb-4">
        <span className="text-xs font-semibold text-center text-slate-400 tracking-wider">
          © Copyright 2021
        </span>
        <span className="text-xs font-semibold text-center text-black tracking-wider">
          brand.io
        </span>
        <span className="text-xs font-semibold text-center text-slate-400 tracking-wider">
          All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
