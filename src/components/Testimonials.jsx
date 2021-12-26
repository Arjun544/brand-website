import React from "react";
import Dec3 from "../assets/Dec3";
import LeftArrow from "../assets/LeftArrow";
import RightArrow from "../assets/RightArrow";
import StarIcon from "../assets/StarIcon";
import { Fade } from "react-reveal";

const Testimonials = () => {
  const reviews = [
    {
      review:
        "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.",
      by: "Sabo Masties",
      position: "Founder @ Rolex",
    },
    {
      review:
        "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.",
      by: "test ",
      position: "Founder @ Rolex",
    },
    {
      review:
        "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.",
      by: "test 2",
      position: "Founder @ Rolex",
    },
  ];
  return (
    <div
      id="testimonials"
      className="relative h-2/3 flex flex-col items-center justify-center my-24 lg:my-32"
    >
      <Dec3 right="-top-28" left="left-2" />
      <span className="text-2xl font-medium text-center mb-4">
        WHAT OUR CLIENTS SAY
      </span>
      <span className="text-xs font-medium text-center text-slate-400 tracking-wider">
        Community development is often linked with community work or community
        <br></br>
        planning, and may involve stakeholders, foundations,
      </span>
      <div className=" h-full w-1/2 bg-slate-100 mt-10"></div>
      {/* Swiper */}
      <div className="absolute mx-auto top-32 lg:top-12 flex flex-col h-5/6 w-4/5 items-center justify-center">
        <div className="flex flex-wrap lg:flex w-full h-full items-center justify-center">
          {reviews.map((item, i) => (
            <Fade key={i} left>
              <div className="z-20 flex flex-col items-start justify-evenly h-52 w-96 bg-white shadow-md mb-4 lg:mr-4 px-6 hover:shadow-lg">
                <StarIcon />
                <span className="text-xs text-slate-400 tracking-wider">
                  {item.review}
                </span>
                <div className="flex flex-col">
                  <span>{item.by}</span>
                  <span className="text-xs text-slate-400 tracking-wider">
                    {item.position}
                  </span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
        {/* Arrows */}
        <div className="hidden lg:flex z-20 bg-white p-1 gap-1 ">
          <div className="flex items-center justify-center h-8 w-8 cursor-pointer">
            <LeftArrow />
          </div>
          <div className="flex items-center justify-center h-8 w-8 cursor-pointer">
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
