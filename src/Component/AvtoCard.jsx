import React, { useState, useEffect } from "react";
import { OurSevise } from "../../constants/data";
import { useNavigate } from "react-router-dom";

export default function AvtoCard() {
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const visibleCars = OurSevise.slice(0, visibleCount);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => prev + 6);
            setLoading(false);
        }, 1000);
    };

    const openDetail = (id) => {
        navigate(`/avtomobil/${id}`);
    };

    return (
        <div>
            <div className="grid md:grid-cols-3 mt-7 gap-10">
                {loading &&
                    [...Array(9)].map((_, i) => (
                        <div key={i}
                            className=" h-[450px] p-1 rounded-xl shadow-xl border animate-pulse"
                        >
                            <div className="w-full h-[370px] bg-gray-600 rounded-xl"></div>
                            <div className="px-4 mt-4">
                                <div className="h-5 bg-gray-500 rounded w-1/2 mx-auto mb-3"></div>
                                <div className="h-6 bg-gray-500 rounded w-2/3 mx-auto"></div>
                            </div>
                        </div>
                    ))
                }

                {!loading &&
                    visibleCars.map((car) => (
                        <div
                            key={car.id}
                            onClick={() => openDetail(car.id)}
                            className="cursor-pointer bg-[#1c1500] h-[450px] p-1 rounded-xl shadow-xl relative border border-gray-300 hover:scale-[1.02] transition"
                        >
                            <div className="absolute -right-6 bg-yellow-400 text-black font-bold 
                                px-6 py-2 rounded-full text-xl shadow-md transform -translate-y-1/2 z-20">
                                ${car.price}
                            </div>

                            <img
                                src={car.img}
                                alt={car.title}
                                className="w-full rounded-xl h-[370px] object-cover"
                            />

                            <div className="py-6 text-center">
                                <button
                                    onClick={() => openDetail(car.id)}
                                    className="text-yellow-400 font-semibold text-lg flex items-center justify-center gap-2 mx-auto"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 640 640">
                                        <path fill="#e1b40e" d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
                                    </svg>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {!loading && visibleCount < OurSevise.length && (
                <div className="flex justify-center my-10">
                    <button
                        onClick={loadMore}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full shadow-lg"
                    >
                        Yana car
                    </button>
                </div>
            )}
        </div>
    );
}