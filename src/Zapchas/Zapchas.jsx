import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import SHopcar from "../Component/Shopcar";

import img1 from "../img/MAIN-SHOT.RGB.png";
import img2 from "../img/white-car-with-license-plate-number-4-front_972324-78685.png";
import img3 from "../img/Transforming-Your-Garage-for-Luxury-Cars.jpg";
import img4 from "../img/luxury-Car-in-showroom.png";

export default function Zapchas() {
  const swiperRef = useRef(null);
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(1);

  const images = [img1, img2, img3, img4];

  return (
    <div className="overflow-x-hidden">
      <div className="-mt-[70px] relative">
        <div className="absolute top-[120px] sm:top-[150px] w-full z-50 pointer-events-none">
          <h1 className="text-center font-semibold text-[36px] sm:text-[60px] lg:text-[100px] text-white/30">
            {t("Zapchas.title")}
          </h1>
        </div>

        <Swiper
          slidesPerView="auto"
          loop
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[420px] overflow-hidden">
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
        <h1 className="text-center font-semibold text-[#244d87] text-[26px] sm:text-[34px] lg:text-[40px] mt-10">
          {t("Zapchas.subtitle")}
        </h1>

        <SHopcar />
      </div>
    </div>
  );
}
