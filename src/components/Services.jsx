import React from "react";
import Ratings from "../assets/ratings.png";
import Sales from "../assets/sales.png";
import Customer from "../assets/customer.png";
import ServiceTile from "./ServiceTile";
import { Slide } from "react-reveal";

const Services = () => {
  const services = [
    {
      icon:  Ratings ,
      title: "Rating & Reviews",
      desc: "Collect reviews, Q&A and other content from your customers started.",
    },
    {
      icon: Sales ,
      title: "Sales and Marketing",
      desc: "Use your user-generated content in sales and marketing.",
    },
    {
      icon:  Customer ,
      title: "Customer Experience",
      desc: "In the end, it's all about your customers. Build their trust and help.",
    },
  ];
  return (
    <Slide bottom cascade>
      <div className="flex flex-col items-center h-1/2 justify-center mt-56 mb-56 lg:mb-16 lg:mt-16">
        <span className="text-2xl font-medium text-center">
          Grow faster with help your<br></br> customers
        </span>
        <div className="lg:flex">
          {services.map((service, index) => (
            <div key={index}>
              <ServiceTile service={service} />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default Services;
