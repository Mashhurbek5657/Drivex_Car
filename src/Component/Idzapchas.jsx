import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { OurSevise2 } from "../../constants/data";
import { useCart } from "./CartContext";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

export default function Idzapchas() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { addToCart } = useCart();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const product = OurSevise2.find((item) => String(item.id) === String(id));

  if (!product) {
    return <div className="text-center mt-20">{t("Idzapchas.notFound")}</div>;
  }

  const images = product.gallery || product.galery || (product.img ? [product.img] : []);

  return (
    <div className="max-w-[1400px] mx-auto px-6 mt-10 max-md:px-4">
      <div>
        <Link to="/zapchas">
          <button className=" w-[170px] h-[40px] rounded-3xl bg-slate-600 cursor-pointer text-white text-[20px]">
            {t("Idzapchas.back")}
          </button>
        </Link>
        <h2 className="text-3xl mt-5 font-bold mb-6 max-md:text-2xl">
          {loading ? (
            <div className="w-1/3 h-8 bg-gray-300 rounded animate-pulse"></div>
          ) : (
            product.title
          )}
        </h2>
      </div>

      <div className="flex gap-10 max-lg:flex-col">
        <div className="bg-[#f4f4f4] rounded-3xl p-6 max-md:p-4 w-full">
          <div className="flex gap-6 max-md:flex-col">
            <div className="hidden md:block">
              {loading ? (
                <div className="w-[100px] h-[450px] bg-gray-300 rounded animate-pulse"></div>
              ) : (
                <Swiper
                  onSwiper={setThumbsSwiper}
                  direction="vertical"
                  slidesPerView={4}
                  spaceBetween={12}
                  watchSlidesProgress
                  className="w-[100px] h-[450px]"
                >
                  {images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="rounded-xl cursor-pointer">
                        <img src={img} className="w-[80px] object-contain rounded-xl" alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            <div className="relative w-[730px]">
              {loading ? (
                <div className="w-full h-[420px] bg-gray-300 rounded-[36px] animate-pulse"></div>
              ) : (
                <>
                  <Swiper
                    slidesPerView={2}
                    loop
                    thumbs={{ swiper: thumbsSwiper }}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }}
                    modules={[Thumbs, Navigation]}
                    className="w-[700px] h-[420px] max-lg:w-full max-md:h-[320px]"
                  >
                    {images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="rounded-3xl flex items-center justify-center">
                          <img src={img} className="w-[310px] object-contain rounded-3xl" alt="" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <button
                    ref={prevRef}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-50 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    ref={nextRef}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-50 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#172843] text-white rounded-2xl mt-10 p-6 w-[450px] max-lg:w-full">
          {loading ? (
            <>
              <div className="h-8 bg-gray-400 rounded animate-pulse mb-4"></div>
              <div className="h-8 bg-gray-400 rounded animate-pulse mb-4"></div>
              <div className="h-16 bg-gray-400 rounded animate-pulse"></div>
            </>
          ) : (
            <>
              <p className="text-3xl font-bold mb-4">{product.title}</p>
              <p className="text-3xl font-bold mb-4">
                {(product.price * qty).toLocaleString()} {t("Idzapchas.currency")}
              </p>
              <p className="font-bold mb-4">{product.desc}</p>

              <div className="flex items-center justify-between p-2 border rounded-lg gap-4 mb-6">
                <button
                  className="w-12 h-12 text-[30px] flex justify-center items-center bg-slate-500 rounded-[10px]"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  -
                </button>

                <span className="font-bold text-[30px]">{qty}</span>

                <button
                  className="w-12 h-12 text-[30px] flex justify-center items-center bg-slate-500 rounded-[10px]"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(product, qty)}
                className="w-full bg-[#4da3ff] text-[#172843] py-3 rounded-full font-bold"
              >
                {t("Idzapchas.addToCart")}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
