import React from 'react';

function Notfon() {
    return (
        <div>
            <div className="-mt-[70px] slide-bg relative w-full h-[737px] 
            bg-cover bg-center bg-[url('/src/img/artistic-image-car-vs-semi-600nw-2484090183.png')] 
            flex justify-center items-center">

                <div className="text-center text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] select-none">

                    <h1 className="text-[200px] md:text-[240px] font-bold flex gap-6 justify-center items-center">
                        <span className="inline-block animate-pulse">4</span>
                        <span className="inline-block animate-bounce">0</span>
                        <span className="inline-block animate-pulse">4</span>
                    </h1>

                    <h2 className="text-[40px] md:text-[50px] font-semibold tracking-wide">
                        PAGE NOT FOUND
                    </h2>

                    <p className="text-[18px] mt-3 max-w-[650px] mx-auto leading-relaxed opacity-90">
                        404 topilmadi xatosi eng keng tarqalgan HTTP holatlaridan biri boʻlib, soʻralgan sahifa serverda topilmadi.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Notfon;
