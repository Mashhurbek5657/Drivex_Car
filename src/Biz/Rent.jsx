import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import img5 from '../img/03-merc-gelik-mob_1080x1080_613 (2).png'

export default function Rent() {


  const swiperRef = useRef(null);

  return (
    <div>
      <div className=" -mt-[70px]">

        <div className="absolute mt-[170px] top-0 left-0 w-full z-50">
          <div className="text-center font-sans relative z-0 mt-19">
            <h1 className="font-semibold text-[100px] text-white/30">BIZ HAQIMIZDA</h1>
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
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/BMW-VR-3.jpg')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/lovepik-luxury-car-interior-picture_501658650.jpg')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/gse7rkmikw7ql8izxarq.pnj.jpg')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/rr.png')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className=" max-w-[1300px] m-auto">
          <div className="min-h-screen flex items-center justify-center px-10 py-16">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">

              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-l-3xl rounded-b-3xl overflow-hidden col-span-2">
                  <img src={img5} className=" w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden">
                  <img src={img5} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-t-3xl rounded-l-3xl overflow-hidden col-span-1 h-44">
                  <img src={img5} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-r-3xl rounded-t-3xl rounded-bl-3xl overflow-hidden col-span-2 h-48">
                  <img src={img5} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight">
                  Bizning jamoa
                </h1>

                <p className="text-gray-600 leading-relaxed">
                  Ertangi kunning ustasi bo'lish uchun bugundan saboq olish kerak! Biz bilan kelajak kasblarini egallang! IT sohalari bir-biriga juda bog'langan va bir sohani o'zlashtirish bir vaqtning o'zida bir nechta boshqa sohalar haqida muhim bilimlarni beradi.
                </p>

                <div className="flex gap-4 pt-2">
                  <button className="px-8 py-3 bg-black text-white rounded-full hover:opacity-80 transition">
                    Join us
                  </button>
                </div>

                <div className="pt-4">
                  <p className="text-gray-600">Savollaringiz bormi?</p>
                  <p className="text-lg font-semibold">+998 (97) 973804288</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-20 gap-10">
            <div className=' flex justify-center'>
              <div>
                <div className=' flex justify-center'>
                  <h1 className=' text-[50px] text-yellow-600'>Auto maktab</h1>
                </div>
                <p>Bunday kafolatlar ushlab turish soni, o'quvchi imtihondan o'tishiga yordam berish, o'quvchining puli qo'shimcha mashg'ulotlari kabini o'z ichiga oladi.. </p>
              </div>
            </div>
            <br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6195.7505190988495!2d66.81098956857629!3d39.0637568109483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4c9100717d754b%3A0x2801c8b8529824a!2sAvtomaktab!5e0!3m2!1sru!2s!4v1764087162290!5m2!1sru!2s" width="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' w-full h-[500px]'></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
