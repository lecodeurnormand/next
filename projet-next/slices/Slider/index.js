import React from 'react'
import { PrismicRichText } from '@prismicio/react'
// Import Swiper React components
import {  Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

/**
 * @typedef {import("@prismicio/client").Content.SliderSlice} SliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliderSlice>} SliderProps
 * @param { SliderProps }
 */
const Slider = ({ slice }) => (
  <section className='section-slider'>
    <div className='wrapper'>
    <div className='container-img'>
   <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
      effect = "fade"
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      navigation = {true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
{slice?.items?.map((item, i) =>
  <SwiperSlide key ={i}>
    <img src={item.img.url} alt={item.img.alt} />
    <PrismicRichText field={item.text} />
 </SwiperSlide>
   )}
</Swiper>
</div>
</div>
</section>
)

export default Slider