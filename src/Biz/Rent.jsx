import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import img111 from "../img/N4Kup8bNiTEqI4Ga8B-Q4G53eFw5O2b6.jpg";
import img112 from "../img/5f58d51685868a422e30d2b18dbba38e.jpg";
import img113 from "../img/c7eae40cd9f80c78a73f61953b941c37.jpg";
import img114 from "../img/akbgUlALZYzBgVt.jpeg";

import img1 from "../img/bmw-logo-svgrepo-com (1).svg";
import img2 from "../img/audi-svgrepo-com.svg";
import img3 from "../img/chevrolet-svgrepo-com.svg";
import img4 from "../img/ford-svgrepo-com.svg";
import img5 from "../img/honda-svgrepo-com.svg";
import img6 from "../img/hyundai-svgrepo-com.svg";
import img7 from "../img/jaguar-svgrepo-com.svg";
import img8 from "../img/kia-svgrepo-com.svg";
import img9 from "../img/land-rover-svgrepo-com.svg";
import img10 from "../img/lexus-svgrepo-com.svg";
import img11 from "../img/mazda-alt-svgrepo-com.svg";
import img12 from "../img/mercedes-benz-alt-svgrepo-com.svg";
import img13 from "../img/mitsubishi-1-logo-svgrepo-com.svg";
import img14 from "../img/nissan-svgrepo-com.svg";
import img15 from "../img/porsche-svgrepo-com.svg";
import img16 from "../img/subaru-svgrepo-com.svg";
import img17 from "../img/tesla-svgrepo-com.svg";
import img18 from "../img/toyota-svgrepo-com.svg";
import img19 from "../img/volkswagen-svgrepo-com.svg";
import img20 from "../img/volvo-svgrepo-com.svg";


import img190 from "../img/BMW-VR-3.jpg";
import img990 from "../img/lovepik-luxury-car-interior-picture_501658650.jpg";
import img890 from "../img/gse7rkmikw7ql8izxarq.pnj.jpg";
import img290 from "../img/rr.png";

export default function Rent() {
  const swiperRef = useRef(null);
  const { t } = useTranslation();


  const [activeIndex, setActiveIndex] = useState(1);

  const images = [img190, img990, img890, img290];

  return (
    <div className="overflow-x-hidden">
      <div className="-mt-[70px] relative">

        <div className="absolute top-[140px] sm:top-[170px] w-full z-50">
          <h1 className="text-center font-semibold text-[42px] sm:text-[70px] lg:text-[100px] text-white/30">
            {t("Rent.title")}
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
                  className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-linear ${activeIndex === i ? "scale-[1.05]" : "scale-100"
                    }`}
                />
                <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="max-w-[1300px] mx-auto px-4">

          <div className="min-h-screen flex items-center justify-center">
            <div
              className="w-full grid lg:grid-cols-2 gap-10 items-center mt-10 sm:mt-6 lg:-mt-40"
            >
              <div data-aos="fade-up-right" className="grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-l-3xl rounded-b-3xl overflow-hidden">
                  <img src={img113} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden">
                  <img src={img112} className="w-full h-full object-cover" />
                </div>
                <div className="col-span-1 h-32 sm:h-44 rounded-t-3xl rounded-l-3xl overflow-hidden">
                  <img src={img111} className="w-full h-full object-cover" />
                </div>
                <div className="col-span-2 h-40 sm:h-48 rounded-r-3xl rounded-t-3xl rounded-bl-3xl overflow-hidden">
                  <img src={img114} className="w-full h-full object-cover" />
                </div>
              </div>

              <div data-aos="zoom-in-down" className="space-y-5">
                <h1 className="text-3xl sm:text-5xl font-bold">{t("Rent.teamTitle")}</h1>
                <p className="text-gray-600 text-sm sm:text-base">{t("Rent.teamDesc")}</p>
                <p className="text-lg font-semibold">{t("Rent.contact")}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 sm:mt-10 lg:-mt-40">
            <h1 className="text-3xl sm:text-[50px] text-yellow-600">{t("Rent.carBrandsTitle")}</h1>
            <p className="text-sm sm:text-base">{t("Rent.carBrandsDesc")}</p>
          </div>

          <div data-aos="fade-right" className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
              img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl flex items-center justify-center shadow hover:scale-[1.05] transition"
              >
                <img src={logo} className="w-14 sm:w-16" />
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h1 className="text-center text-3xl sm:text-[50px] text-yellow-600">{t("Rent.autoSchoolTitle")}</h1>
            <p className="text-center text-sm sm:text-base mt-2">{t("Rent.autoSchoolDesc")}</p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6195.7505190988495!2d66.81098956857629!3d39.0637568109483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4c9100717d754b%3A0x2801c8b8529824a!2sAvtomaktab!5e0!3m2!1sru!2s!4v1764087162290!5m2!1sru!2s" width="600" height="400" className="w-full h-[400px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}
