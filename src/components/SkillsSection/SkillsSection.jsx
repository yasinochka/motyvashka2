import React from 'react';
import './SkillsSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import html from './html.png';
import css from './css.png';
import react from './react.png';
import python from './python.png';
import cplusplus from './c++.png';
import javascr from './javascr.png';
const SkillsSection = () => {
    return (
        <div className="skills">
            <h2 className='Skills-header'>Skills</h2>
            <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
                <SwiperSlide>
                    <div className='skill-photo'>
                        <img src={html} alt="html" className="html-img" />
                        <p>HTML</p>
                         </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='skill-photo'>
                <img src={css} alt="css" className="css-img" />
                <p>CSS</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='skill-photo'>
                        <img src={javascr} alt="javascr" className="javascr-img"/>
                        <p>JavaScript</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='skill-photo'>
                <img src={react} alt="react" className="react-img" />
                <p>React</p>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='skill-photo'>
                <img src={cplusplus} alt="cplusplus" className="cplusplus-img" />
                <p>C++</p>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='skill-photo'>
                <img src={python} alt="python" className="python-img" />
                <p>Python</p>
                </div>
                </SwiperSlide>
            </Swiper>
    </div>
    );
  };
  
  export default SkillsSection;