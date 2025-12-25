import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import img3 from "../img/03-merc-gelik-mob_1080x1080_613 (2).png";
import img4 from "../img/future-cars-679d3400f197f.avif";
import img6 from "../img/kia-sorento-2021 (1).png";
import img7 from "../img/a3f91322_1.jpg";
import img8 from "../img/S2kFb117352920149371_b.jpg";
import img9 from "../img/image (1).png";
import img10 from "../img/8.jpg";
import img18 from "../img/8LtSsd17016991665180_l.jpg"
import img19 from "../img/3EZ9i515997386104901_b.jpg"
import img20 from "../img/cobalt.jpg"
import img21 from "../img/mainiimage.avif"

import "./slider.css";

export default function Home() {
  const swiperRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  const features = Array.isArray(t("Home.features", { returnObjects: true }))
    ? t("Home.features", { returnObjects: true })
    : [];

  const [activeIndex, setActiveIndex] = useState(1);

  const images = [img18, img19, img20, img21];

  return (
    <div className="relative z-0 -mt-[70px] overflow-x-hidden">
      {/* Hero */}
      <div className="absolute mt-[170px] top-0 left-0 w-full z-50 px-4">
        <div className="text-center">
          <h1 className="font-semibold text-[50px] sm:text-[80px] lg:text-[100px] text-white/30">{t("Home.mainTitle1")}</h1>
          <h1 className="font-semibold text-[60px] sm:text-[100px] lg:text-[130px] text-white/30 -mt-[20px] lg:-mt-[50px]">{t("Home.mainTitle2")}</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 mt-10 sm:mt-[100px]">
          <Link to="/biz" className="w-full sm:w-[200px] h-[45px] rounded-[10px] border-2 border-slate-800 text-slate-300 flex items-center justify-center">{t("Home.details")}</Link>
          <Link to="/avtomobil" className="w-full sm:w-[200px] h-[45px] rounded-[10px] bg-slate-800 text-white/80 flex items-center justify-center">{t("Home.rentNow")}</Link>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
      slidesPerView="auto"
      loop
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      modules={[Autoplay]}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {images.map((bg, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-[500px] sm:h-[650px] lg:h-[737px] overflow-hidden">
            <img
              src={bg}
              alt={`slide-${i}`}
              className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-linear ${
                activeIndex === i ? "scale-[1.05]" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

      <div className="max-w-[1400px] mx-auto px-4">
        {/* Convenience & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
          <div data-aos="fade-right" className="bg-white rounded-lg flex flex-col sm:flex-row h-auto sm:h-[250px]">
            <div className="p-5 w-full sm:w-[400px]">
              <h1 className="text-[30px] sm:text-[40px]">{t("Home.convenienceTitle")}</h1>
              <p className="text-[16px] sm:text-[20px] mt-2">{t("Home.convenienceDesc")}</p>
            </div>
            <img src={img3} className="w-full sm:w-[280px] h-[200px] sm:h-[250px] object-cover rounded-lg" alt="" />
          </div>

          <div data-aos="fade-up" className="bg-white rounded-lg flex flex-col sm:flex-row h-auto sm:h-[250px]">
            <div className="p-5 w-full sm:w-[400px]">
              <h1 className="text-[30px] sm:text-[40px]">{t("Home.statsTitle")}</h1>
              <p className="text-[16px] sm:text-[20px] mt-2">{t("Home.statsDesc")}</p>
            </div>
            <img src={img4} className="w-full sm:w-[300px] h-[200px] sm:h-[250px] object-cover rounded-lg" alt="" />
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
          {[img6, img7, img8, img9].map((img, i) => (
            <div key={i} data-aos="zoom-in" className="relative h-[220px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden group">
              <div className="absolute inset-4 border border-white z-10 transition-all duration-[1400ms] group-hover:inset-8" />
              <img src={img} className="w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-110" alt="" />
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex flex-col lg:flex-row gap-10 mt-20">
          <img src={img10} data-aos="fade-up-right" className="rounded-lg w-full lg:w-[650px]" alt="" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i}>
                <h1 className="text-[#0079c5] text-[22px]">{f}</h1>
                <p>{t("Home.featureDesc")}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Driving School */}
        <div className="mt-20 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-center">
          <div data-aos="zoom-in-up" className="w-full lg:w-1/2">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] text-[#183153]">{t("Home.autoSchool")}</h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] mt-4">{t("Home.autoSchoolDesc")}</p>
            <Link to="/biz" className="inline-flex items-center justify-center w-full sm:w-[200px] h-[45px] sm:h-[50px] text-[16px] sm:text-[20px] text-white rounded-[10px] bg-[#183153] mt-4">{t("Home.moreRead")}</Link>
          </div>

          <div data-aos="flip-right" className="w-full lg:w-1/2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6195.7505190988495!2d66.81098956857629!3d39.0637568109483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4c9100717d754b%3A0x2801c8b8529824a!2sAvtomaktab!5e0!3m2!1sru!2s!4v1764087162290!5m2!1sru!2s" width="600" height="400" className="w-full h-[400px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
