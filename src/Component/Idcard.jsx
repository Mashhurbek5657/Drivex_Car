import React, { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { OurSevise } from "../../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";

export default function Idcard() {
    const { id } = useParams();
    const product = OurSevise.find(item => item.id === parseInt(id));
    const swiperRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [step, setStep] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [startDay, setStartDay] = useState(new Date().getDate());
    const [endDay, setEndDay] = useState(null);
    const [titleError, setTitleError] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!product) return <h1 className="text-center text-white text-2xl mt-20">Ma'lumot topilmadi</h1>;

    const locations = ["Toshkent", "Samarqand", "Sirdaryo", "Navoiy", "Namangan", "Qashqadaryo", "Xorazm"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const gallery = product.gallery || product.galery || [product.img];

    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    let totalDays = 1;
    if (endDay) totalDays = endDay - startDay + 1;
    if (totalDays < 1) totalDays = 1;
    const totalPrice = product.price * totalDays;
    const formattedDate = endDay ? `${startDay}/${selectedMonth + 1} - ${endDay}/${selectedMonth + 1}/${selectedYear}` : "";

    const BOT_TOKEN = `8389898735:AAH1MsADfS6yjL3EXLbwMmlgtJ6lgPr1j3A`;
    const MY_CHAT_ID = `8155528404`;

    const openModal = (text) => {
        setModalText(text);
        setModalOpen(true);
        setTimeout(() => setModalOpen(false), 2500);
    }

    const handleSend = async () => {
        const isAuth = localStorage.getItem("isAuthenticated") === "true";
        if (!isAuth) {
            openModal("♻ Iltimos, ma'lumotlarni yuborish uchun ro'yxatdan o'ting!");
            return;
        }
        if (!selectedLocation || !endDay) {
            setTitleError(true);
            openModal("⚠ Iltimos, sanani va lokatsiyani tanlang!");
            return;
        }

        setTitleError(false);
        const text = `🔔 ijara avtomobili.\n🚗 Mashina: ${product.title}\n🌏 Lokatsiya: ${selectedLocation}\n📅 Sana: ${formattedDate}\n💰 Narx: $${totalPrice}`;
        try {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: MY_CHAT_ID, text, parse_mode: "HTML" }),
            });
            openModal("✔ Ma'lumotlar yuborildi operatorlar tez orada siz bilan bog‘lanadi.");
        } catch (err) {
            openModal("❓ Xatolik yuz berdi!");
            console.log(err);
        }
    };

    const isDayPast = (year, month, day) => {
        const today = new Date();
        if (year < today.getFullYear()) return true;
        if (year > today.getFullYear()) return false;
        if (month < today.getMonth()) return true;
        if (month > today.getMonth()) return false;
        return day < today.getDate();
    };

    return (
        <div className="max-w-[1300px] mx-auto px-4">
            <div>
                {loading ? (
                    <div className="w-1/3 h-8 bg-gray-300 rounded animate-pulse"></div>
                ) : (
                    <button
                        className="mt-4 w-[200px] h-[40px] bg-[#183153] text-white rounded-lg font-bold"
                    >
                        <li><Link to="/avtomobil">Ortqaga</Link></li>
                    </button>
                )}
                <br />
                <h2 className="text-[26px] sm:text-[32px] font-bold mb-6 text-[#214a83]">
                    {loading ? (
                        <div className="w-1/3 h-8 bg-gray-300 rounded animate-pulse"></div>
                    ) : (
                        product.title
                    )}
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 text-[#214a83] gap-6">
                <div className="lg:col-span-2">
                    <div className="relative h-[240px] sm:h-[320px] lg:h-[400px] rounded-xl overflow-hidden">
                        {loading ? (
                            <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl"></div>
                        ) : (
                            <Swiper
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                slidesPerView={1}
                                loop
                                navigation={{ prevEl: ".prev", nextEl: ".next" }}
                                modules={[Navigation]}
                                className="h-full"
                            >
                                <button className="prev absolute left-2 top-1/2 z-20 bg-black/40 rounded-full p-2">
                                    <ChevronLeft className="text-white" />
                                </button>
                                <button className="next absolute right-2 top-1/2 z-20 bg-black/40 rounded-full p-2">
                                    <ChevronRight className="text-white" />
                                </button>

                                {gallery.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={img} className="w-full h-full object-cover" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>

                    {loading ? (
                        <div className="flex gap-3 mt-4">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-[80px] h-[80px] bg-gray-300 rounded-lg animate-pulse"
                                ></div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex gap-3 mt-4 overflow-x-auto">
                            {gallery.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => swiperRef.current.slideToLoop(i)}
                                    className="min-w-[70px] h-[70px] sm:min-w-[90px] sm:h-[90px] border rounded-lg overflow-hidden cursor-pointer"
                                >
                                    <img src={img} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="border rounded-xl shadow-xl">
                    <div className="bg-[#183153] text-white text-center py-3 font-bold rounded-t-xl">
                        {loading ? (
                            <div className="w-32 h-6 bg-gray-300 rounded animate-pulse mx-auto"></div>
                        ) : (
                            "Hoziroq band qilish"
                        )}
                    </div>

                    <div className="p-4 sm:p-6">
                        {loading ? (
                            <>
                                <div className="h-7 w-3/5 bg-gray-300 animate-pulse rounded mb-4"></div>
                                <div className="h-6 w-2/5 bg-gray-300 animate-pulse rounded mb-4"></div>
                                <div className="h-10 w-full bg-gray-300 animate-pulse rounded mb-3"></div>
                                <div className="h-10 w-full bg-gray-300 animate-pulse rounded mb-3"></div>
                                <div className="h-12 w-full bg-gray-300 animate-pulse rounded"></div>
                            </>
                        ) : (
                            <>
                                <p className="text-[22px] sm:text-[26px] font-bold mb-2">{product.title}</p>
                                <p className="text-[20px] font-bold mb-4">Ijara narxi: ${totalPrice}</p>

                                <div
                                    onClick={() => setStep(step === "location" ? null : "location")}
                                    className={`border rounded-xl px-4 py-3 flex justify-between items-center mb-3 cursor-pointer ${titleError && !selectedLocation ? "ring-2 ring-red-400" : ""
                                        }`}
                                >
                                    <span className="flex gap-2 items-center">
                                        <IoLocationOutline />
                                        {selectedLocation || "Lokatsiya tanlang"}
                                    </span> 
                                    ▾
                                </div>

                                {step === "location" && (
                                    <div className="border rounded-xl mb-3">
                                        {locations.map(loc => (
                                            <p
                                                key={loc}
                                                onClick={() => {
                                                    setSelectedLocation(loc);
                                                    setStep(null);
                                                }}
                                                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                            >
                                                {loc}
                                            </p>
                                        ))}
                                    </div>
                                )}

                                <div
                                    onClick={() => setStep(step === "date" ? null : "date")}
                                    className={`mt-3 border rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer bg-white
  ${titleError && !endDay ? "ring-2 ring-red-400" : ""}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <MdOutlineCalendarMonth size={22} />
                                        <span>{formattedDate || "Sanani tanlang"}</span>
                                    </div>
                                    <span className={`transition ${step === "date" ? "rotate-180" : ""}`}>▾</span>
                                </div>

                                {step === "date" && (
                                    <div className="mt-2 border rounded-xl bg-white shadow-lg p-4">
                                        <div className="flex justify-between items-center mb-3">
                                            <button
                                                onClick={() =>
                                                    selectedMonth === 0
                                                        ? (setSelectedMonth(11), setSelectedYear(y => y - 1))
                                                        : setSelectedMonth(m => m - 1)
                                                }
                                            >
                                                ‹
                                            </button>

                                            <h2 className="font-bold">
                                                {months[selectedMonth]} {selectedYear}
                                            </h2>

                                            <button
                                                onClick={() =>
                                                    selectedMonth === 11
                                                        ? (setSelectedMonth(0), setSelectedYear(y => y + 1))
                                                        : setSelectedMonth(m => m + 1)
                                                }
                                            >
                                                ›
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-7 gap-2 text-center text-sm font-bold mb-2">
                                            <span>SU</span><span>MO</span><span>TU</span>
                                            <span>WE</span><span>TH</span><span>FR</span><span>SA</span>
                                        </div>

                                        <div className="grid grid-cols-7 gap-2">
                                            {days.map(d => {
                                                const past = isDayPast(selectedYear, selectedMonth, d);
                                                return (
                                                    <button
                                                        key={d}
                                                        disabled={past}
                                                        onClick={() => setEndDay(d)}
                                                        className={`p-2 rounded-lg border text-sm
            ${past ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"}
            ${d === endDay ? "bg-[#183153] text-white" : ""}`}
                                                    >
                                                        {d}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}


                                <button
                                    onClick={handleSend}
                                    className="mt-4 w-full bg-[#183153] text-white py-3 rounded-lg font-bold"
                                >
                                    Ma'lumotlarni yuborish
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg text-center">
                        {modalText}
                    </div>
                </div>
            )}
        </div>
    );
}
