import React from "react";
import Dec3 from "../assets/Dec3";
import CreateAccImage from "../assets/create-acc.png";
import SearchServicesImage from "../assets/search-services.png";
import SitEnjoyImage from "../assets/sit-enjoy.png";
import { Fade } from "react-reveal";

const Work = () => {
  return (
    <div id="work" className="relative flex flex-col h-auto">
      <Fade right>
        <Dec3 right="-top-24" left="right-2" />
      </Fade>
      <Fade left>
        <span className="text-2xl font-medium text-center mb-4">
          How it works
        </span>
        <span className="text-xs font-medium text-center text-slate-400 tracking-wider">
          It’ s about you and your family, having a comfortable payment,
          <br></br>
          exceptional service and a lender.
        </span>
        <Fade left cascade>
          <div className="flex flex-col">
            {/* Create acc */}
            <div className="flex flex-col items-center justify-center mt-10 md:flex md:flex-row md:justify-evenly">
              <img className="h-52" src={CreateAccImage} alt="create-acc" />
              <div className="flex flex-col gap-3">
                <span className="text-md"> Create Account </span>
                <span className="text-xs font-medium text-slate-400 tracking-wider">
                  we know your home is more than just a<br></br> place to live,
                  that’ s why we’ re committed<br></br> to providing the best
                  home loan
                </span>
              </div>
            </div>
            {/* Search service */}
            <div className="flex flex-col-reverse items-center justify-center mt-10 md:flex md:flex-row md:justify-evenly">
              <div className="flex flex-col gap-3">
                <span className="text-md"> Search for services </span>
                <span className="text-xs font-medium text-slate-400 tracking-wider">
                  It’ s the fast, easy way to apply for your<br></br> mortgage
                  and access your application<br></br> anytime, anywhere. With
                  our mortgage access center
                </span>
              </div>

              <img
                className="h-40 mb-5 md:mb-0"
                src={SearchServicesImage}
                alt="create-acc"
              />
            </div>
            {/* Sit and Enjoy */}
            <div className="flex flex-col items-center justify-center mt-10 md:flex md:flex-row md:justify-evenly">
              <img
                className="h-40 mb-5 md:mb-0"
                src={SitEnjoyImage}
                alt="create-acc"
              />
              <div className="flex flex-col gap-3">
                <span className="text-md"> Sit back and Enjoy </span>
                <span className="text-xs font-medium text-slate-400 tracking-wider">
                  It’ s about you and your family, having a<br></br> comfortable
                  payment, exceptional service<br></br> and a lender.
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </Fade>
    </div>
  );
};

export default Work;
