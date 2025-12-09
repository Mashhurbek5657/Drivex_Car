import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import AvtoCard from '../Component/AvtoCard';

export default function Avtomobil() {
  const swiperRef = useRef(null);

  return (
    <div>
      <div className=" -mt-[70px]">

        <div className="absolute mt-[170px] top-0 left-0 w-full z-50">
          <div className="text-center font-sans relative z-0 mt-19">
            <h1 className="font-semibold text-[100px] text-white/30">AUTO IJARA</h1>
          </div>
        </div>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="relative z-0"
        >
          <SwiperSlide>
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/MAIN-SHOT.RGB.png')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/white-car-with-license-plate-number-4-front_972324-78685.png')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/Transforming-Your-Garage-for-Luxury-Cars.jpg')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/luxury-Car-in-showroom.png')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" max-w-[1300px] m-auto">
        <div className=' flex justify-center mt-10'>
          <h1 className=' font-semibold text-[40px] text-yellow-600'>Avtomobillar ketmaketligi hoziriq ijaraga band qiling.</h1>
        </div>
        <br />
        <AvtoCard />
      </div>
    </div>
  )
}
