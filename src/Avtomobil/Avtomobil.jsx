import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import AvtoCard from "../Component/AvtoCard";
import { useTranslation } from "react-i18next";

import img1 from "../img/MAIN-SHOT.RGB.png";
import img2 from "../img/white-car-with-license-plate-number-4-front_972324-78685.png";
import img3 from "../img/Transforming-Your-Garage-for-Luxury-Cars.jpg";
import img4 from "../img/luxury-Car-in-showroom.png";

export default function Avtomobil() {
  const swiperRef = useRef(null);
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [img1, img2, img3, img4];

  return (
    <div>
      <div className="-mt-[70px] relative">
        <div className="absolute mt-[170px] top-0 left-0 w-full z-10 pointer-events-none">
          <div className="text-center font-sans">
            <h1 className="font-semibold text-[60px] sm:text-[80px] md:text-[100px] text-white/30">
              {t("Cars.title")}
            </h1>
          </div>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="relative z-0"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] overflow-hidden">
                <img
                  src={img}
                  alt={`slide-${i}`}
                  className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-linear ${
                    activeIndex === i ? "scale-[1.05]" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex justify-center mt-10">
          <h1 className="font-semibold text-[24px] sm:text-[32px] md:text-[40px] text-[#244d87] text-center">
            {t("Cars.subtitle")}
          </h1>
        </div>
        <br />
        <AvtoCard />
      </div>
    </div>
  );
}
