import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './Photoswiper.css';

import ya from './ya.jpg';
import ya2 from './ya2.jpg';
import ya3 from './ya3.jpg';
import ya4 from './ya4.jpg';
import ya5 from './ya5.jpg';
const photos = [ya4, ya, ya5, ya2, ya3];

const PhotoSwiper = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={photos.length > 1}
        effect="fade" // Включаємо fade
        fadeEffect={{ crossFade: true }}
        spaceBetween={30}
        slidesPerView={1} // Одна фотка завжди
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo} alt={`Фото ${index + 1}`} className="swiper-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoSwiper;
