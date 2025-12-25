import React, { useState, useEffect } from "react";
import { OurSevise2 } from "../../constants/data";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Shopcar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const filtered = OurSevise2.filter((item) => {
    const byTitle =
      search === "" || item.title.toLowerCase().includes(search.toLowerCase());
    const byPrice = maxPrice === "" || Number(item.price) <= Number(maxPrice);
    return byTitle && byPrice;
  });

  return (
    <div className="pt-5">
      {/* FILTERLAR */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <input
          type="text"
          placeholder={t("Shopcar.name")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[250px] px-4 py-3 border rounded-xl shadow"
        />
        <input
          type="number"
          placeholder={t("Shopcar.price")}
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-[200px] px-4 py-3 border rounded-xl shadow"
        />
      </div>

      {/* CARDLAR */}
      <div className="grid grid-cols-4 gap-10 justify-items-center max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[550px]:grid-cols-1">
        {loading &&
          [...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-[300px] h-[420px] rounded-xl bg-gray-300 animate-pulse"
            />
          ))}

        {!loading &&
          filtered.slice(0, visibleCount).map((car) => (
            <div
              key={car.id}
              className="w-[300px] bg-[#172843] rounded-xl p-3 shadow-xl"
            >
              <img
                src={car.img}
                alt={car.title}
                className="w-full h-[250px] object-cover rounded-lg"
              />

              <div className="text-white mt-3">
                <h3 className="text-lg font-semibold">{car.title}</h3>
                <p className="text-sm text-gray-300">{car.desc}</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="text-white text-xl font-bold">
                  {car.price} {t("Shopcar.currency")}
                </p>
                <span className="text-gray-300 text-sm">
                  ⭐ {car.rating}
                </span>
              </div>

              <button
                onClick={() => navigate(`/zapchas/${car.id}`)}
                className="mt-4 w-full bg-[#4da3ff] text-[#172843] py-2 rounded-full font-medium"
              >
                {t("Shopcar.details")}
              </button>
            </div>
          ))}
      </div>

      {!loading && visibleCount < filtered.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((p) => p + 8)}
            className="px-8 py-3 bg-[#183153] text-white rounded-full"
          >
            {t("Shopcar.loadMore")}
          </button>
        </div>
      )}
    </div>
  );
}
