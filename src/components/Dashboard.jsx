import React from "react";
import BellIcon from "./icons/BellIcon";
import Carousel from "./Carousel";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Dashboard = () => {
  return (
    <div className="dashboard-bg h-full w-full text-white pl-6 py-20 break-words  flex flex-col gap-8 pb-12">
      <Section1 />
      <Section2/>
      <Section3/>
      
    </div>
  );
};

export default Dashboard;
