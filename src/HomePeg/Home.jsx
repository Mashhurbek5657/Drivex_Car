import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Navbar from '../Component/Navbar';
import img3 from '../img/03-merc-gelik-mob_1080x1080_613 (2).png'
import img4 from '../img/future-cars-679d3400f197f.avif'
import img5 from '../img/Annotation 2025-11-24 153845.png'
import img6 from '../img/kia-sorento-2021 (1).png'
import img7 from '../img/a3f91322_1.jpg'
import img8 from '../img/S2kFb117352920149371_b.jpg'
import img9 from '../img/image (1).png'
import img10 from '../img/8.jpg'
import './slider.css';
import Footer from '../Component/Footer';
import { Link, Outlet } from 'react-router-dom'
import AvtoCard from '../Component/AvtoCard';


export default function Home() {
  const swiperRef = useRef(null);

  return (
    <div className="relative z-0 -mt-[70px]">
      <div className="absolute mt-[170px] top-0 left-0 w-full z-50">
        <div className="text-center font-sans relative z-0 mt-19">
          <h1 className="font-semibold text-[100px] text-white/30">AVTOMOBIL</h1>
          <h1 className="font-semibold text-[130px] text-white/30 -mt-[50px]">IJARA XIZMATLARI</h1>
        </div>
        <div className="flex justify-center gap-10 mt-[100px]">
          <button className="w-[200px] h-[45px] rounded-[10px] bg-slate-800 text-white/80 text-[17px]">
            <Link to={"/avtomobil"}>Hozir ijaraga</Link>
          </button>
          <button className="w-[200px] h-[45px] rounded-[10px] border-2 border-slate-800 text-slate-500 text-[17px]">
            <Link to={"/biz"}>Tafsilotlar</Link>
          </button>
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
          <div className="slide-bg relative w-full h-[737px] bg-cover bg-center bg-[url('/src/img/8LtSsd17016991665180_l.jpg')]">
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-bg relative w-full h-[737px] bg-cover bg-center bg-[url('/src/img/bmw.png')]">
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-bg relative w-full h-[737px] bg-cover bg-center bg-[url('/src/img/cobalt.jpg')]">
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-bg relative w-full h-[737px] bg-cover bg-center bg-[url('/src/img/3EZ9i515997386104901_b.jpg')]">
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </SwiperSlide>
        <div className="absolute top-1/2 mt-[270px] left-3 z-[999] -translate-y-1/2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-black/60 text-white p-3 rounded-full"
          >
            &#10094;
          </button>
        </div>

        <div className="absolute top-1/2 mt-[270px] right-3 z-[999] -translate-y-1/2">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-black/60 text-white p-3 rounded-full"
          >
            &#10095;
          </button>
        </div>
      </Swiper>

      <div className="contenr">
        <div className=" max-w-[1400px] m-auto">
          <div className="wrappr">
            <div className=" flex gap-5 mt-20">
              <div className=" w-[700px] flex rounded-[10px] h-[250px] bg-white">
                <div className=' w-[400px] p-5'>
                  <h1 className='text-[40px]'>Qulaylik</h1>
                  <h1 className='text-[20px]'>2024-yilgi eng ommalashgan mashina</h1>
                  <br />
                  <p>Har bir sayohat sizning umidlaringizni to'liq qondirish uchun mo'ljallangan haqiqiy qulaylik asaridir.</p>
                </div>
                <img className=' w-[300px] h-[250px] rounded-[10px]' src={img3} alt="" />
              </div>
              <div className=" w-[700px] flex rounded-[10px] h-[250px] bg-white">
                <div className=' w-[400px] p-5'>
                  <h1 className='text-[40px]'>Statistika</h1>
                  <h1 className='text-[20px]'>2021-yilgi eng qimmatliavtomobillar TOP 4 taligi </h1>
                  <br />
                  <p>Har bir sayohat sizning umidlaringizni to'liq qondirish uchun mo'ljallangan haqiqiy qulaylik asaridir.</p>
                </div>
                <img className=' w-[350px] h-[250px] rounded-[10px]' src={img4} alt="" />
              </div>
            </div>
            <div className=" flex gap-10 items-center mt-[100px]">
              <div>
                <h1 className=' text-[50px] text-yellow-600'>Avtomobil ijarasi</h1>
                <br />
                <p className=' text-[20px]'>asosiy kafolat bo'yicha ta'mirlash ishi nosoz bo'lgan qismlarni ta'mirlash yoki boshqarish bilan cheklanadi.</p>
                <br />
                <button className=' text-[20px] text-white w-[200px] h-[50px] cursor-pointer rounded-[10px] border-2 bg-yellow-900'><Link to={"/avtomobil"}>ko'proq o'qish</Link></button>
              </div>
              <div>
                <img src={img5} alt="" />
              </div>
            </div>
            <div className=' flex justify-center items-center gap-5 mt-10'>
              <div className=' w-[200px] h-1 bg-yellow-600 rounded-[10px]'></div>
              <h1 className=' text-[25px] text-slate-600'>Standart qulaylik</h1>
              <div className=' w-[200px] h-1 bg-yellow-600 rounded-[10px]'></div>
            </div>
            <div className=" grid grid-cols-2 mt-10 gap-[56px]">
              <div className='w-[670px] h-[400px] overflow-hidden'>
                <img src={img6} className='imgsn w-[670px]' alt="" />
              </div>
              <div className='w-[670px] h-[400px] overflow-hidden'>
                <img src={img7} className='imgsn w-[670px]' alt="" />
              </div>
              <div className='w-[670px] h-[399px] overflow-hidden'>
                <img src={img8} className='imgsn w-[670px]' alt="" />
              </div>
              <div className='w-[670px] h-[400px] overflow-hidden'>
                <img src={img9} className='imgsn w-[670px]' alt="" />
              </div>
            </div>

            <div className=' flex justify-center mt-20'>
              <h1 className=' font-semibold text-[40px] text-yellow-800'>Har bir sayohatingiz qulay bo'lishiga ishonch hosil qilamiz.</h1>
            </div>
            <div className=" flex mt-20 gap-20">
              <div>
                <img src={img10} className=' rounded-[10px] w-[650px]' alt="" />
              </div>
              <div className=" grid grid-cols-2 gap-[56px]">
                <div>
                  <h1 className=' text-yellow-600 text-[25px]'>O'z avtoservis markazi</h1>
                  <p>Mashinalar har doim mukammal holatda</p>
                </div>
                <div>
                  <h1 className=' text-yellow-600 text-[25px]'>Tez chiqish</h1>
                  <p>Biz sizni uzoq kuttirmaymiz.</p>
                </div>
                <div>
                  <h1 className=' text-yellow-600 text-[25px]'>Hashamatli avtomobil ijarasi</h1>
                  <p>Noyob mashinalarni ijaraga olishingiz mumkin</p>
                </div>
                <div>
                  <h1 className=' text-yellow-600 text-[25px]'>Professional haydovchilar</h1>
                  <p>Ba'zi avtomobil modellari haydovchi bilan ijaraga olinadi.</p>
                </div>
              </div>
            </div>
            <div className=" mt-20 flex gap-10 items-center">
              <div>
                <h1 className=' text-[50px] text-yellow-600'>Auto maktab</h1>
                <br />
                <p>Bunday kafolatlar ushlab turish soni, o'quvchi imtihondan o'tishiga yordam berish, o'quvchining puli qo'shimcha mashg'ulotlari kabini o'z ichiga oladi.. </p>
                <br />
                <button className=' text-[20px] text-white w-[200px] h-[50px] cursor-pointer rounded-[10px] border-2 bg-yellow-900'><Link to={"/biz"}>ko'proq o'qish</Link></button>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6195.7505190988495!2d66.81098956857629!3d39.0637568109483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4c9100717d754b%3A0x2801c8b8529824a!2sAvtomaktab!5e0!3m2!1sru!2s!4v1764087162290!5m2!1sru!2s" width="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' w-full h-[400px]'></iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
