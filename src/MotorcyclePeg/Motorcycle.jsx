import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import AvtoCard from '../Component/AvtoCard';

export default function Motorcycle() {
  const swiperRef = useRef(null);

  const faqs = [
    {
      question: "LIZINGNI QAYSI MANZILDA RO'YXATDAN O'TKAZISHIM KERAK?",
      answer:
        "Belgilangan manzilga avtomobil yetkazib berishning qo‘shimcha xizmati mavjud, ammo ijara boshlanishidan kamida 24 soat oldin buyurtma berish kerak. Avtomobilni ijara muddati tugagandan so‘ng siz uchun qulay bo‘lgan joydan olishimiz ham mumkin.",
    },
    {
      question: "MASHINANI XIZMAT KO'RSATISH PUNKTIDAN TASHQARIDA OLSAM BO'LADIMI?",
      answer:
        "Ha, avtomobilni belgilangan manzilingizga yetkazib berishimiz mumkin. Buning uchun oldindan kelishish talab etiladi.",
    },
    {
      question: "AVTOMOBIL IJARASINI UZAYTIRA OLAMANMI VA BUNI QANDAY QILISHIM MUMKIN?",
      answer:
        "Ijara muddatini uzaytirish mumkin. Buning uchun biz bilan telefon yoki Telegram orqali bog‘laning.",
    },
    {
      question: "IJARAGA OLISH VAQTIDA TEXNIK NOSOZLIK YUZ BERDI, NIMA QILISHIM KERAK?",
      answer:
        "Darhol bizning qo‘llab-quvvatlash xizmatimizga murojaat qiling. Texnik yordam bepul taqdim etiladi.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <div className=" -mt-[70px]">

        <div className="absolute mt-[170px] top-0 left-0 w-full z-50">
          <div className="text-center font-sans relative z-0 mt-19">
            <h1 className="font-semibold text-[100px] text-white/30">Foydalanish shartlari</h1>
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
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/MAIN-SHOT.RGB.png')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/white-car-with-license-plate-number-4-front_972324-78685.png')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/Transforming-Your-Garage-for-Luxury-Cars.jpg')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg relative w-full h-[420px] bg-cover bg-center bg-[url('/src/img/luxury-Car-in-showroom.png')]">
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" max-w-[1300px] m-auto">
        <div data-aos="fade-up" className=' flex justify-center mt-10'>
          <h1 className=' font-semibold text-[40px] text-[#244d87]'>Siz uchun qulay bo'lishi uchun biz hamma narsani o'ylab topdik.</h1>
        </div>
        <br />
        <br />
        <div data-aos="zoom-in-down" className=" grid md:grid-cols-2 gap-5">
          <div className=' p-10 w-[640px] h-[300px] rounded-[10px] border-[1px] border-[#183153a7] shadow-xl text-[#183153]'>
            <div className=" w-20 h-20 rounded-[50px] bg-[#175979] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className=' w-14' viewBox="0 0 640 640"><path fill="#ffffff" d="M320 576C214 576 128 490 128 384C128 292.8 258.2 109.9 294.6 60.5C300.5 52.5 309.8 48 319.8 48L320.2 48C330.2 48 339.5 52.5 345.4 60.5C381.8 109.9 512 292.8 512 384C512 490 426 576 320 576zM240 376C240 362.7 229.3 352 216 352C202.7 352 192 362.7 192 376C192 451.1 252.9 512 328 512C341.3 512 352 501.3 352 488C352 474.7 341.3 464 328 464C279.4 464 240 424.6 240 376z" /></svg>
            </div>
            <h1 className=" mt-5 text-[35px] font-semibold">
              Avtomobillarning tozaligi
            </h1>
            <p className="text-[20px]">Har bir mashina har foydalanishdan keyin yaxshilab yuviladi va quruq tozalanadi.</p>
          </div>
          <div className=' p-10 w-[640px] h-[300px] rounded-[10px] border-[1px] border-[#183153a7] shadow-xl text-[#183153]'>
            <div className=" w-20 h-20 rounded-[50px] bg-[#175979] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className=' w-14' viewBox="0 0 640 640"><path fill="#ffffff" d="M192 112L304 112L304 200C304 239.8 336.2 272 376 272L464 272L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 128C176 119.2 183.2 112 192 112zM352 131.9L444.1 224L376 224C362.7 224 352 213.3 352 200L352 131.9zM192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 250.5C512 233.5 505.3 217.2 493.3 205.2L370.7 82.7C358.7 70.7 342.5 64 325.5 64L192 64zM248 320C234.7 320 224 330.7 224 344C224 357.3 234.7 368 248 368L392 368C405.3 368 416 357.3 416 344C416 330.7 405.3 320 392 320L248 320zM248 416C234.7 416 224 426.7 224 440C224 453.3 234.7 464 248 464L392 464C405.3 464 416 453.3 416 440C416 426.7 405.3 416 392 416L248 416z" /></svg>            </div>
            <h1 className=" mt-5 text-[35px] font-semibold">
              Tez chiqish
            </h1>
            <p className="text-[20px]">Mashinani sizga yetkazish uchun kamida hujjatlar va bir necha marta bosish kifoya</p>
          </div>
          <div className=' p-10 w-[640px] h-[300px] rounded-[10px] border-[1px] border-[#183153a7] shadow-xl text-[#183153]'>
            <div className=" w-20 h-20 rounded-[50px] bg-[#175979] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className=' w-14' viewBox="0 0 640 640"><path fill="#ffffff" d="M199.2 181.4L173.1 256L466.9 256L440.8 181.4C436.3 168.6 424.2 160 410.6 160L229.4 160C215.8 160 203.7 168.6 199.2 181.4zM103.6 260.8L138.8 160.3C152.3 121.8 188.6 96 229.4 96L410.6 96C451.4 96 487.7 121.8 501.2 160.3L536.4 260.8C559.6 270.4 576 293.3 576 320L576 512C576 529.7 561.7 544 544 544L512 544C494.3 544 480 529.7 480 512L480 480L160 480L160 512C160 529.7 145.7 544 128 544L96 544C78.3 544 64 529.7 64 512L64 320C64 293.3 80.4 270.4 103.6 260.8zM192 368C192 350.3 177.7 336 160 336C142.3 336 128 350.3 128 368C128 385.7 142.3 400 160 400C177.7 400 192 385.7 192 368zM480 400C497.7 400 512 385.7 512 368C512 350.3 497.7 336 480 336C462.3 336 448 350.3 448 368C448 385.7 462.3 400 480 400z" /></svg>
            </div>
            <h1 className=" mt-5 text-[27px] font-semibold">
              Sizga qulay bo'lgan joyda yetkazib berish va qaytarish
            </h1>
            <p className="text-[15px]">Sizni uyingizda, ofisingizda yoki aeroportda kutib olamiz - mashinani qayerdan olib ketish yoki qaytarish qulayligini ayting.
            </p>
          </div>
          <div className=' p-10 w-[640px] h-[300px] rounded-[10px] border-[1px] border-[#183153a7] shadow-xl text-[#183153]'>
            <div className=" w-20 h-20 rounded-[50px] bg-[#175979] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className=' w-12' viewBox="0 0 640 640"><path fill="#ffffff" d="M288 192C288 139 245 96 192 96C139 96 96 139 96 192C96 245 139 288 192 288C245 288 288 245 288 192zM544 448C544 395 501 352 448 352C395 352 352 395 352 448C352 501 395 544 448 544C501 544 544 501 544 448zM534.6 150.6C547.1 138.1 547.1 117.8 534.6 105.3C522.1 92.8 501.8 92.8 489.3 105.3L105.3 489.3C92.8 501.8 92.8 522.1 105.3 534.6C117.8 547.1 138.1 547.1 150.6 534.6L534.6 150.6z" /></svg>
            </div>
            <h1 className=" mt-5 text-[27px] font-semibold">
              Sizga qulay bo'lgan joyda yetkazib berish va qaytarish
            </h1>
            <p className="text-[15px]">Sizni uyingizda, ofisingizda yoki aeroportda kutib olamiz - mashinani qayerdan olib ketish yoki qaytarish qulayligini ayting.
            </p>
          </div>
        </div>
        <div data-aos="fade-down" className=' flex justify-center mt-10'>
          <h1 className=' font-semibold text-[40px] text-[#244d87]'>Ijara shartlari</h1>
        </div>
        <br />
        <br />
        <div data-aos="fade-down" className=" grid md:grid-cols-3 gap-5">
          <div className=' p-10 w-[420px] h-[300px] rounded-[10px] bg-[#175979] shadow-xl'>
            <div className=" w-20 h-20 rounded-[50px] bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className=' w-14' viewBox="0 0 640 640"><path fill="#066888" d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" /></svg>
            </div>
            <h1 className=" mt-5 text-[30px] text-white font-semibold">
              Ijarachining yoshi
            </h1>
            <p className="text-[18px] text-white">24 yosh va undan katta haydovchilar mashina ijaraga olishlari mumkin</p>
          </div>
          <div className=' p-10 w-[420px] h-[300px] rounded-[10px] border-[1px] border-[#183153a7] shadow-xl text-[#183153]'>
            <div className=" w-20 h-20 rounded-[50px] bg-[#175979] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className=' w-14' viewBox="0 0 640 640"><path fill="#ffffff" d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" /></svg>
            </div>
            <h1 className=" mt-5 text-[30px] font-semibold">
              Haydash tajribasi
            </h1>
            <p className="text-[18px]">Ijaraga olish bo'yicha minimal tajriba - 4 yil</p>
          </div>
          <div className=' p-10 w-[420px] h-[300px] rounded-[10px] border-[1px] border-[#183153a7] shadow-xl text-[#183153]'>
            <div className=" w-20 h-20 rounded-[50px] bg-[#175979] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className=' w-14' viewBox="0 0 640 640"><path fill="#ffffff" d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z" /></svg>
            </div>
            <h1 className=" mt-5 text-[30px] font-semibold">
              Garov
            </h1>
            <p className="text-[18px]">Majburiy, biz uni ijara muddati tugaganidan keyin 5 kun ichida qaytarib beramiz</p>
          </div>
        </div>
        <div data-aos="fade-up-right" className=' flex justify-center mt-10'>
          <h1 className=' font-semibold text-[40px] text-[#244d87]'>Tez-tez beriladigan savollarga javoblar</h1>
        </div>
        <br />
        <br />
        <div>
          <div className="max-w-5xl mx-auto space-y-4">
            {faqs.map((item, index) => (
              <div
              data-aos="fade-right"
                key={index}
                className="border rounded-[10px] overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[20px]"
                >
                  <span>{item.question}</span>

                  <span
                    className={`
                      w-10 h-10
                      flex items-center justify-center
                      text-[47px] font-light
                      transition-all duration-500 ease-in-out
                      ${activeIndex === index
                        ? "rotate-45 "
                        : "rotate-0"}
                    `}
                  >
                    <div className=' flex'>
                      +
                    </div>
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-6 text-[16px] text-gray-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

