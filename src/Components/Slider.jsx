import React from 'react'
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import "swiper/css/pagination";

import 'swiper/css';
import {slider} from '../data'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'

const Slider = () => {
  return (
    <>
    <div className='position'>
    <div className='slider-container'>
      <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      pagination={{
          clickable: true,
        }}
      navigation = {{
      prevEl: '.swiper-custom-navigation-prev',
      nextEl: '.swiper-custom-navigation-next',
      }}
    >
      {slider.map(slide =>(
        <SwiperSlide key={slide.id}>
          <div className=''>
            <article className='slider'>
              <h3 className="icon-heading">{slide.sliderTitle}</h3>
              <p className='icon-text'>{slide.sliderText}</p>
              <img className='icon-img' src={slide.sliderIcon} alt="Cardonic" />
            </article>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="btn-container">
      <button className='swiper-custom-navigation swiper-custom-navigation-prev backNavigate'> <AiOutlineArrowLeft size={25} /></button>
      <button className='swiper-custom-navigation swiper-custom-navigation-next frontNavigate'><AiOutlineArrowRight size={25} /></button>            
    </div>
    </div>
  
    </div>

    

    </>
  )
}

export default Slider