import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './CarouselSteps.css';

import step1 from '../../assets/step1.mp4';
import step2 from '../../assets/step2.mp4';
import step3 from '../../assets/step3.mp4';
import step4 from '../../assets/step4.mp4';
import step5 from '../../assets/step5.mp4';

const steps = [
  { id: 1, videoUrl: step1 },
  { id: 2, videoUrl: step2 },
  { id: 3, videoUrl: step3 },
  { id: 4, videoUrl: step4 },
  { id: 5, videoUrl: step5 },
];

const CarouselSteps = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Swiper
         modules={[Pagination, Autoplay]}
          pagination={{ 
            el: '.custom-pagination', 
            clickable: true,
          }}
          autoplay={{
            delay: 3000,      
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          loop={false}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {steps.map((step) => (
            <SwiperSlide key={step.id}>
              <video
                src={step.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="step-video"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <div className="custom-pagination"></div>
    </div>
  );
};

export default CarouselSteps;
