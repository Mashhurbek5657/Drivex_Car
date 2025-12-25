import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import SHopcar from "../Component/Shopcar";

export default function Zapchas() {
  const swiperRef = useRef(null);
  const { t } = useTranslation();

  return (
    <div className="overflow-x-hidden">
      <div className="-mt-[70px] relative">

        <div className="absolute top-[120px] sm:top-[150px] w-full z-50">
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
        >
          {[...t("Zapchas.sliderImages", { returnObjects: true })].map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-[260px] sm:h-[320px] lg:h-[420px] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
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
