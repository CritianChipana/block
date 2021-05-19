import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./sliderCard.css"

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow,Pagination
} from 'swiper/core';
import { IntegranteCard } from '../block/blockScreen/IntegranteCard';
import { integrantes } from '../../data/integrantes';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);

export const SliderCard = ( { elemtos } ) => {

    const integran = integrantes; 
   
    const inte = elemtos;

    return (
        <>
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
                pagination={{
                    el:".swiper-pagination"
                }}
                loop={true}
                autoplay={{
                    delay:500,
                    disableOnInteraction:true
                }} 
                className="mySwiper aaa"
            >
                {
                    integran.map( (dato)=>(
                        <SwiperSlide>
                            <div className="contenedor-slider">
                                <IntegranteCard key={dato.id} {...dato}/>
                            </div>    
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </>
    )
}
