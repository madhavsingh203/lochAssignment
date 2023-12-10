import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = ({data, autoplayEnabled}) => {
  const swiperRef = useRef(null);


  return (
    <Swiper
    
    autoplay={autoplayEnabled ? { delay: 2500, disableOnInteraction: false } : false}
    modules={[Autoplay, Pagination, Navigation]}
    loop={true}
    slidesPerView={'1.5'}
    
    ref={swiperRef} className="swiper-container shadow-inner w-full">
      
        {data.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide w-full">
            <img src={item} alt={index} />
          </SwiperSlide>
        ))}
      
    </Swiper>
  );
};

export default Carousel;
