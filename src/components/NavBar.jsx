import React, { useState, useRef } from "react";
import { Fade } from "react-reveal";
import ScrollspyNav from "react-scrollspy-nav";
import MenuIcon from "../assets/menu.png";
import useOutsideClick from "../UseOutsideClick";
import "./nav.css";

const NavBar = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  return (
    <ScrollspyNav
      scrollTargetIds={["home", "work", "testimonials", "about", "contact"]}
      offset={-150}
      activeNavClass="is-active"
      scrollDuration="1000"
      headerBackground="true"
    >
      {/* large screen navbar */}
      <Fade top>
        <div
          className={`fixed z-50 top-0 right-0 left-0 px-8 lg:px-32 w-full flex h-24 items-center justify-between ${
            scrolled
              ? "shadow-md bg-slate-100 opacity-90"
              : "shadow-none bg-transparent"
          }`}
        >
          <a href="home" className="text-black font-bold">
            brand.io
          </a>
          <div className="hidden md:hidden lg:flex gap-8 text-sm font-light tracking-wide ">
            <a
              href="#home"
              className="hover:text-green-400 hover:font-semibold"
            >
              Home
            </a>
            <a
              href="#work"
              className="hover:text-green-400 hover:font-semibold"
            >
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
            <button className="px-6 py-2 bg-green-500 text-sm rounded-md text-white shadow-md cursor-pointer hover:bg-green-400">
              Sign up
            </button>
          </div>
          {/* Medium & Small screens menu */}
          <img
            onClick={() => setIsMenuOpen((prevoiusState) => !prevoiusState)}
            className="h-6 lg:hidden cursor-pointer transition-all duration-1000 ease-in-out"
            src={MenuIcon}
            alt="menu"
          />
          {isMenuOpen && (
            <div
              ref={ref}
              className="fixed z-50 top-24 right-0 flex flex-col h-52 w-full bg-white opacity-100 justify-evenly pl-4 lg:hidden shadow-md "
            >
              <a
                href="#home"
                className="hover:text-green-400 hover:font-semibold"
              >
                Home
              </a>
              <a
                href="#work"
                className="hover:text-green-400 hover:font-semibold"
              >
                Work
              </a>
              <a
                href="#testimonials"
                className="hover:text-green-400 hover:font-semibold"
              >
                Testimonials
              </a>
              <a
                href="#about"
                className="hover:text-green-400 hover:font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-green-400 hover:font-semibold"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </Fade>
    </ScrollspyNav>
  );
};

export default NavBar;
