import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { OurSevise } from "../../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

export default function Idcard() {
    const { id } = useParams();
    const product = OurSevise.find(item => item.id === parseInt(id));

    const swiperRef = useRef(null);

    if (!product) return <h1 className="text-center text-white text-2xl mt-20">Ma'lumot topilmadi</h1>;

    const gallery = product.gallery || product.galery || [product.img];

    return (
        <div className="container max-w-[1300px] mx-auto mt-10 text-white">
            <h2 className="text-3xl text-black font-bold mb-8">{product.title}</h2>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="md:col-span-2 relative">

                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            prevEl: ".slider-prev",
                            nextEl: ".slider-next"
                        }}
                        modules={[Navigation]}
                        className="h-[400px] rounded-xl overflow-hidden"
                    >
                        <button className="slider-prev absolute left-2 top-1/2 z-20 w-[40px] h-[40px] flex items-center justify-center bg-black/40 rounded-full">
                            <ChevronLeft className="w-8 h-8 text-white" />
                        </button>

                        <button className="slider-next absolute right-2 top-1/2 z-20 w-[40px] h-[40px] flex items-center justify-center bg-black/40 rounded-full">
                            <ChevronRight className="w-8 h-8 text-white" />
                        </button>

                        {gallery.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img src={img} className="w-full h-full object-cover" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex gap-3 mt-4 flex-wrap">
                        {gallery.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => swiperRef.current.slideToLoop(index)}
                                className="w-[90px] h-[90px] border rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
                            >
                                <img src={img} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-1 bg-[#1c1500] p-6 rounded-xl shadow-xl">
                    <p className="text-xl font-bold mb-4">Narxi: ${product.price}</p>
                    <p className="mb-4">{product.desc || "Ma'lumot mavjud emas."}</p>
                    <button className="bg-yellow-500 w-full py-3 rounded-lg font-bold text-black">
                        Buyurtma berish
                    </button>
                </div>
            </div>
        </div>
    );
}
