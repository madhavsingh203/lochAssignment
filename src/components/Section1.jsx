import React from "react";
import BellIcon from "./icons/BellIcon";
import Carousel from "./Carousel";
import Card1 from "../assets/images/Card 1.png";
import Card2 from "../assets/images/Card 2.png";
import Card3 from "../assets/images/Card 3.png";
const Section1 = () => {
  const data = [Card1, Card2, Card3];
  return (
    <div className="flex flex-wrap gap-4 md:justify-between md:flex-nowrap h-full ">
      <div className="flex flex-col w-80 gap-4">
        <BellIcon />
        <h3 className="text-3xl font-medium">
          Get notified when a highly correlated whale makes a move
        </h3>
        <p className=" text-base font-medium">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
      <div className="top-card overflow-hidden w-80  ">
        <Carousel data={data} autoplayEnabled />
      </div>
    </div>
  );
};

export default Section1;
