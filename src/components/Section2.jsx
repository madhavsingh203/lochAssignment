import React from "react";
import Cohort1 from "../assets/images/Cohorts 1.png";
import EyeIcon from "./icons/EyeIcon";
const Section2 = () => {
  return (
    <div className="flex h-full pb-8 px-2 ">

    <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap ">
      <div className="rounded-xl">
        <img
          src={Cohort1}
          alt="cohort-1-img"
          className="img-with-transparent-bg w-full max-w-80"
        />
      </div>
      <div className="w-full md:w-80 flex flex-col gap-4">
        <EyeIcon />
        <h3 className="text-3xl font-medium">
          Watch what the whales are doing
        </h3>
        <p className="text-base font-medium  break-words">
          All whales are not equal. Know exactly what the whales impacting
          YOUR portfolio are doing.
        </p>
      </div>
    </div>
  </div>
  );
};

export default Section2;
