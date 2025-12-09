import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
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

    if (!product) return <h1 className="text-center text-white text-2xl mt-20">Ma'lumot topilmadi</h1>;

    const locations = ["Tashkent", "Samarkand", "Bukhara", "Fergana", "Namangan"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    const [step, setStep] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedYear, setSelectedYear] = useState(todayYear);
    const [selectedMonth, setSelectedMonth] = useState(todayMonth);
    const [startDay, setStartDay] = useState(todayDay);
    const [endDay, setEndDay] = useState(null);
    const [titleError, setTitleError] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState("");

    const gallery = product.gallery || product.galery || [product.img];
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    let totalDays = 1;
    if (endDay) totalDays = endDay - startDay + 1;
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
            openModal("Iltimos, ma'lumotlarni yuborish uchun ro'yxatdan o'ting!");
            return;
        }
        if (!selectedLocation || !endDay) {
            setTitleError(true);
            openModal("Iltimos, sanani va lokatsiyani tanlang!");
            return;
        }
        setTitleError(false);
        const text = `
🚗 Mashina: ${product.title}
📍 Lokatsiya: ${selectedLocation}
📅 Sana: ${formattedDate}
💰 Narx: $${totalPrice}
        `;
        try {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: MY_CHAT_ID, text, parse_mode: "HTML" }),
            });
            openModal("Muvaffaqiyatli yuborildi!");
        } catch (err) {
            openModal("Xatolik yuz berdi!");
        }
    };

    return (
        <div className="container max-w-[1300px] mx-auto mt-10 text-white relative">
            <h2 className={`text-3xl font-bold mb-8 text-black`}>{product.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 relative">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={1}
                        loop
                        navigation={{ prevEl: ".slider-prev", nextEl: ".slider-next" }}
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
                            <div key={index} onClick={() => swiperRef.current.slideToLoop(index)} className="w-[90px] h-[90px] border rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition">
                                <img src={img} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-1 rounded-[10px] border-2 border-[#1c1500] shadow-xl text-yellow-900">
                    <button className="bg-[#1c1500] w-full py-3 rounded-t-[5px] font-bold text-[19px] text-white">Hoziroq band qilish</button>
                    <div className=" p-6">
                        <p className="font-bold text-[33px] mb-2">{product.title}</p>
                        <p className=" font-bold mb-4 text-[25px]">Ijara Narxi: ${totalPrice}</p>
                        <p className="mb-5">{product.desc || "Ma'lumot mavjud emas."}</p>
                        <div className="border rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer mb-3 bg-white text-black" onClick={() => setStep(step === "location" ? null : "location")}>
                            <div className="flex items-center gap-2"><IoLocationOutline size={22} /><span>{selectedLocation || "Lokatsiya tanlang"}</span></div>
                            <span>▾</span>
                        </div>
                        {step === "location" && (
                            <div className="border rounded-xl bg-white text-black mb-3">
                                {locations.map((loc) => (
                                    <p key={loc} onClick={() => { setSelectedLocation(loc); setStep(null); }} className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${selectedLocation === loc ? "bg-black text-white" : ""}`}>{loc}</p>
                                ))}
                            </div>
                        )}
                        <div className="border rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer bg-white text-black" onClick={() => setStep(step === "date" ? null : "date")}>
                            <div className="flex items-center gap-2"><MdOutlineCalendarMonth size={22} /><span>{formattedDate || "Sanani tanlang"}</span></div>
                            <span>▾</span>
                        </div>
                        {step === "date" && (
                            <div className="border rounded-xl p-4 bg-white text-black space-y-3 mt-2">
                                <div className="flex justify-between items-center mb-2">
                                    <button onClick={() => { if (selectedMonth === 0) { setSelectedMonth(11); setSelectedYear(prev => prev - 1); } else setSelectedMonth(prev => prev - 1); }}>◀</button>
                                    <h2 className="font-bold">{months[selectedMonth]} {selectedYear}</h2>
                                    <button onClick={() => { if (selectedMonth === 11) { setSelectedMonth(0); setSelectedYear(prev => prev + 1); } else setSelectedMonth(prev => prev + 1); }}>▶</button>
                                </div>
                                <div className="grid grid-cols-7 gap-2 text-sm font-bold text-center">
                                    <span>SU</span><span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span>
                                </div>
                                <div className="grid grid-cols-7 gap-2">
                                    {days.map(d => (
                                        <button key={d} onClick={() => setEndDay(d)} className={`p-2 rounded-lg text-center border ${d === endDay ? "bg-black text-white" : "hover:bg-gray-200"}`}>{d}</button>
                                    ))}
                                </div>
                            </div>
                        )}
                        <button className="bg-yellow-700 mt-4 w-full py-3 rounded-lg font-bold text-white" onClick={handleSend}>Ma'lumotlarni yuborish</button>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white text-black p-6 rounded-lg max-w-sm w-full text-center">
                        <p>{modalText}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
