import React from 'react';
import { useTranslation } from 'react-i18next';

function Notfon() {
  const { t } = useTranslation();

  return (
    <div className="-mt-[70px] slide-bg relative w-full min-h-screen bg-cover bg-center bg-[url('/src/img/artistic-image-car-vs-semi-600nw-2484090183.png')] flex justify-center items-center px-4">
      <div className="text-center text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] select-none">

        {/* ===== 404 ===== */}
        <h1 className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 font-bold text-[90px] sm:text-[130px] md:text-[200px] lg:text-[240px]">
          <div className="container flex -z-40 items-center justify-center text-center">
            {/* ICONS */}
            <svg width="173" height="205" viewBox="0 0 173 205" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="icon" className="inline-flex -mb-4 w-10 sm:w-14 md:w-auto">
              <path d="M172.218 166V129.496H141.018V0.639984H116.682L0.929688 153.832V166H99.5217V205H141.018V166H172.218ZM99.5217 129.496H59.2737L99.5217 75.52V129.496Z" fill="white" />
            </svg>
            <svg className="inline-block animate-bounce transition-all mt-1 w-[90px] sm:w-[140px] md:w-[200px] lg:w-[240px]" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 640">
              <path d="M168.1 531.1L156.9 540.1C153.7 542.6 149.8 544 145.8 544C136 544 128 536 128 526.2L128 256C128 150 214 64 320 64C426 64 512 150 512 256L512 526.2C512 536 504 544 494.2 544C490.2 544 486.3 542.6 483.1 540.1L471.9 531.1C458.5 520.4 439.1 522.1 427.8 535L397.3 570C394 573.8 389.1 576 384 576C378.9 576 374.1 573.8 370.7 570L344.1 539.5C331.4 524.9 308.7 524.9 295.9 539.5L269.3 570C266 573.8 261.1 576 256 576C250.9 576 246.1 573.8 242.7 570L212.2 535C200.9 522.1 181.5 520.4 168.1 531.1zM288 256C288 238.3 273.7 224 256 224C238.3 224 224 238.3 224 256C224 273.7 238.3 288 256 288C273.7 288 288 273.7 288 256zM384 288C401.7 288 416 273.7 416 256C416 238.3 401.7 224 384 224C366.3 224 352 238.3 352 256C352 273.7 366.3 288 384 288z" />
            </svg>
            <svg width="173" height="205" viewBox="0 0 173 205" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="icon" className="inline-flex -mb-4 w-10 sm:w-14 md:w-auto">
              <path d="M172.218 166V129.496H141.018V0.639984H116.682L0.929688 153.832V166H99.5217V205H141.018V166H172.218ZM99.5217 129.496H59.2737L99.5217 75.52V129.496Z" fill="white" />
            </svg>
          </div>
        </h1>

        {/* ===== TEXT ===== */}
        <h2 className="font-semibold tracking-wide text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px]">
          {t("NotFound.title")}
        </h2>

        <p className="mt-3 mx-auto max-w-[650px] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed opacity-90">
          {t("NotFound.description")}
        </p>
      </div>
    </div>
  );
}

export default Notfon;
