import React, { useState, useEffect } from "react";
import { OurSevise } from "../../constants/data";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AvtoCard() {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [inputLoading, setInputLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setVisibleCount(6);
    setInputLoading(true);
    setTimeout(() => setInputLoading(false), 700);
  };

  const filteredCars = OurSevise.filter((car) => {
    const matchTitle =
      search.trim() === "" ||
      car.title.toLowerCase().includes(search.toLowerCase());

    const matchPrice =
      maxPrice === "" || Number(car.price) <= Number(maxPrice);

    return matchTitle && matchPrice;
  });

  const visibleCars = filteredCars.slice(0, visibleCount);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoading(false);
    }, 800);
  };

  const openDetail = (id) => {
    navigate(`/avtomobil/${id}`);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <input
          type="text"
          placeholder={t("AvtoCard.searchPlaceholder")}
          value={search}
          onChange={handleInputChange(setSearch)}
          className="w-full sm:w-[260px] px-4 py-3 rounded-xl border outline-none shadow-md"
        />

        <input
          type="number"
          placeholder={t("AvtoCard.pricePlaceholder")}
          value={maxPrice}
          onChange={handleInputChange(setMaxPrice)}
          className="w-full sm:w-[200px] px-4 py-3 rounded-xl border outline-none shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {(loading || inputLoading) &&
          [...Array(9)].map((_, i) => (
            <div
              key={i}
              className="h-[450px] p-1 rounded-xl shadow-lg border"
            >
              <div className="w-full h-[370px] bg-gray-300 rounded-xl animate-pulse"></div>
              <div className="h-5 bg-gray-300 rounded w-2/5 animate-pulse mx-auto mt-6"></div>
            </div>
          ))}

        {!loading &&
          !inputLoading &&
          visibleCars.map((car) => (
            <div
              key={car.id}
              onClick={() => openDetail(car.id)}
              className="relative cursor-pointer bg-[#162336] h-[450px] p-1 rounded-xl shadow-xl border hover:scale-[1.02] transition"
            >
              <div className="absolute -top-5 -right-6 bg-[#183153] text-white font-bold px-6 py-2 rounded-full text-xl shadow-md z-10">
                ${car.price}
              </div>

              <img
                src={car.img}
                alt={car.title}
                className="w-full h-[370px] object-cover rounded-xl"
              />

              <div className="py-6 text-center">
                <button className="text-white font-semibold text-lg">
                  {t("AvtoCard.bookNow")}
                </button>
              </div>
            </div>
          ))}
      </div>

      {!loading && !inputLoading && visibleCount < filteredCars.length && (
        <div className="flex justify-center my-12">
          <button
            onClick={loadMore}
            className="bg-[#183153] hover:bg-[#0079c5] text-white font-bold px-8 py-3 rounded-full shadow-lg"
          >
            {t("AvtoCard.loadMore")}
          </button>
        </div>
      )}
    </div>
  );
}
