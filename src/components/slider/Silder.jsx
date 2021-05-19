import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./slider.css"

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow,Pagination
} from 'swiper/core';
// import { integrantes } from '../../data/integrantes';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);

export const Silder = ({elemtos}) => {

    const inte = elemtos;


    return (
        
            <Swiper 
                effect={'coverflow'} 
                grabCursor={true} 
                centeredSlides={true} 
                slidesPerView={'auto'} 
                coverflowEffect={{
                    "rotate": 20,
                    "stretch": 0,
                    "depth": 200,
                    "modifier": 1,
                    "slideShadows": true
                    }}
                pagination={true}
                autoplay={{
                    delay:500,
                    disableOnInteraction:true
                }} 
                className="mySwiper"
            >
                {
                    inte.map( (data)=>(
                        <SwiperSlide><img className="prototipo-img" src={data.foto} alt="on"/></SwiperSlide>
                    ))
                }
            </Swiper>
        
    )
}
