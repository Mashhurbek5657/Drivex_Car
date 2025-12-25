import React from "react";
import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib.default || MarqueeLib;

import { useTranslation } from "react-i18next";

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

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="max-w-[1300px] m-auto">
        <div className="marquee-fade">
          <div className='flex justify-center mt-16'>
            <h1 className='font-semibold text-[40px] text-[#183153]'>{t("Footer.partners")}</h1>
          </div>
          <Marquee direction="left" speed={25} pauseOnHover gradient gradientColor={[255, 255, 255]} gradientWidth={80} className="mt-[10px]">
            {[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10].map((img,i)=>(
              <img key={i} className="w-[80px] ml-20 cursor-pointer" src={img} />
            ))}
          </Marquee>
        </div>

        <div className="marquee-fade -mt-7">
          <Marquee direction="right" speed={25} pauseOnHover gradient gradientColor={[255, 255, 255]} gradientWidth={80} className="mt-20">
            {[img11,img12,img13,img14,img15,img16,img17,img18,img19,img20].map((img,i)=>(
              <img key={i} className="w-[80px] ml-20 cursor-pointer" src={img} />
            ))}
          </Marquee>
        </div>
      </div>

      <footer className='mt-20 bg-[#183153] pt-10 text-white'>
        <div className='max-w-[1300px] m-auto flex flex-wrap gap-10'>
            <div> <h1 className=' text-[39px] font-bold '>Logo</h1> <div> <svg width={0} height={0} style={{ position: 'absolute' }}> <defs> <clipPath id="squircleClip" clipPathUnits="objectBoundingBox"> <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" /> </clipPath> </defs> </svg> <div className="relative mt-3"> <div className="absolute inset-0 bg-black/20 w-[233px] backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" /> <div className="relative flex items-end gap-x-2 p-2"> <div className="relative"> <div style={{ clipPath: 'url(#squircleClip)' }} className="w-[48px] h-[48px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"> <a href="https://github.com/Mashhurbek5657"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> </svg> </a> </div> </div> <div className="relative"> <div style={{ clipPath: 'url(#squircleClip)' }} className="w-[48px] h-[48px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> </svg> </div> </div> <div className="relative"> <div style={{ clipPath: 'url(#squircleClip)' }} className="w-[48px] h-[48px] bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg border border-red-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"> <a href="https://www.youtube.com/@teo.mashhur.2011"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg"> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> </svg> </a> </div> </div> <div className="relative"> <div style={{ clipPath: 'url(#squircleClip)' }} className="w-[48px] h-[48px] bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg border border-indigo-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg"> <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" /> </svg> </div> </div> </div> </div> </div> <h1 className=' mt-2'>Har bir sayohatingiz qulay bo'lishiga ishonch hosil qilamiz.</h1> </div>


          <div>
            <h1 className='text-[25px] font-semibold mt-3'>{t("Footer.users")}</h1>
            <p className='text-[15px] mt-3'>Mashhurbek Ergashev</p>
            <p className='text-[15px]'>Fazliddin Nizomiddinov</p>
            <p className='text-[15px]'>Asilbek Numonov</p>
          </div>

          <div>
            <h1 className='text-[25px] font-semibold mt-3'>{t("Footer.links")}</h1>
            <p className='text-[15px] mt-3 text-[#0079c5]'>
              <a href="https://iqtidoracademy.uz/">@IqtidorAcademy</a>
            </p>
            <p className='text-[15px] text-[#0079c5]'>
              <a href="https://t.me/Teo_Mashhur">@MashhurVibe.uz</a>
            </p>
          </div>

          <div>
            <h1 className='text-[25px] font-semibold mt-3'>{t("Footer.contact")}</h1>
            <p className='mt-3'>{t("Footer.email")}: ergashevmashhurbek08@gmail.com</p>
            <p>{t("Footer.phone")}: 97+380-42-88</p>
          </div>
        </div>

        <div className="w-full h-1 mt-10 bg-black/50"></div>
        <div className="flex p-2 justify-center">
          <h1 className='text-white'>{t("Footer.copyright")}</h1>
        </div>
      </footer>
    </div>
  );
}
