import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import AvtoCard from "../Component/AvtoCard";
import { useTranslation } from "react-i18next";

export default function Avtomobil() {
  const swiperRef = useRef(null);
  const { t } = useTranslation();

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
          className="relative z-0"
        >
          {[
            "/src/img/MAIN-SHOT.RGB.png",
            "/src/img/white-car-with-license-plate-number-4-front_972324-78685.png",
            "/src/img/Transforming-Your-Garage-for-Luxury-Cars.jpg",
            "/src/img/luxury-Car-in-showroom.png",
          ].map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
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
