import React from "react";
import ScrollspyNav from "react-scrollspy-nav";
import MenuIcon from "../assets/menu.png";

const NavBar = () => {
  return (
    <ScrollspyNav
      scrollTargetIds={["home", "work", "testimonials", "about", "contact"]}
      offset={-10}
      activeNavClass="is-active"
      scrollDuration="1000"
      headerBackground="true"
    >
      {/* large screen navbar */}
      <div className="absolute z-50 right-16 left-16 lg:right-32 lg:left-32 flex h-24 items-center justify-between">
        <a href="home" className="text-black font-bold">
          brand.io
        </a>
        <div className="hidden md:hidden lg:flex gap-8 text-sm font-light tracking-wide ">
          <a href="#home" className="hover:text-green-400 hover:font-semibold">
            Home
          </a>
          <a href="#work" className="hover:text-green-400 hover:font-semibold">
            Work
          </a>
          <a
            href="#testimonials"
            className="hover:text-green-400 hover:font-semibold"
          >
            Testimonials
          </a>
          <a href="#about" className="hover:text-green-400 hover:font-medium">
            About
          </a>
          <a
            href="#contact"
            className="hover:text-green-400 hover:font-semibold"
          >
            Contact
          </a>
        </div>
        <div className="hidden md:hidden lg:flex gap-5">
          <button className="text-sm cursor-pointer">Login</button>
          <button className="px-6  py-2 bg-green-500 text-sm rounded-md text-white shadow-md cursor-pointer hover:bg-green-400">
            Sign up
          </button>
        </div>
        {/* Medium & Small screens menu */}
        <img className="h-6 lg:hidden" src={MenuIcon} alt="menu" />
      </div>
    </ScrollspyNav>
  );
};

export default NavBar;
