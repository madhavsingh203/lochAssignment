import React from "react";
import CarouselIcon from "./icons/CarouselIcon";
import Testimonial1 from "../assets/images/testimonial1.png";
import Testimonial2 from "../assets/images/testimonial2.png";
import Testimonial3 from "../assets/images/testimonial3.png";
import Carousel from "./Carousel";
const Section3 = () => {
  const carouselData = [Testimonial1, Testimonial2, Testimonial3];
  return (
    <div className="  h-full">
      <div className="flex justify-end pr-8   border-b border-b-gray-200 pb-4">
        <h3 className="text-2xl font-medium">Testimonial</h3>
      </div>
      <div className="flex justify-between gap-2 mt-4">
        <div className="flex items-end">
          <CarouselIcon />
        </div>
        <div className="top-card overflow-hidden w-full shodow-inner rounded-lg">
          <Carousel data={carouselData} autoplayEnabled={false} />
        </div>
      </div>
    </div>
  );
};

export default Section3;
