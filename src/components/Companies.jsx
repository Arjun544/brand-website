import React from "react";
import campanies from "../assets/companies.png";

const Companies = () => {
  return (
    <div className="flex items-center justify-center mx-14 lg:mx-32 h-1/6 mt-14 bg-gray-100 rounded-sm shadow-sm">
      <img className="h-6 w-2/3" src={campanies} alt="campanies" />
    </div>
  );
};

export default Companies;
