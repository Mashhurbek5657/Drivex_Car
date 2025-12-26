import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
    const { t } = useTranslation();
    const [selectedDay, setSelectedDay] = useState(null);

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <div className="container py-6">

                <h1 className="text-xl font-semibold mb-6">
                    {t("Dashboard.title")}
                </h1>

                {/* TOP CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: t("Dashboard.earning"), value: "$ 628" },
                        { label: t("Dashboard.share"), value: "2434" },
                        { label: t("Dashboard.likes"), value: "1259" },
                        { label: t("Dashboard.rating"), value: "8,5" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white shadow rounded-xl p-5">
                            <p className="text-gray-500">{item.label}</p>
                            <h2 className="text-3xl font-bold mt-1">
                                {item.value}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* CHART + CIRCLE */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {/* BAR CHART */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
                        <div className="flex justify-between mb-4">
                            <h3 className="font-semibold text-gray-700">
                                {t("Dashboard.result")}
                            </h3>
                            <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
                                {t("Dashboard.checkNow")}
                            </button>
                        </div>

                        <div className="h-40 w-full flex items-end justify-between">
                            {[50, 70, 45, 65, 40, 75, 60, 80, 60, 80, 50, 70].map((h, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div
                                        className="w-4 sm:w-5 bg-blue-600 rounded"
                                        style={{ height: h }}
                                    />
                                    <div
                                        className="w-4 sm:w-5 bg-orange-400 rounded mt-1"
                                        style={{ height: h - 15 }}
                                    />
                                    <p className="text-xs mt-2 text-gray-400">
                                        {t("Dashboard.month")} {i + 1}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PROGRESS */}
                    <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center justify-center">
                        <div className="relative w-28 h-28">
                            <svg className="w-full h-full">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="45%"
                                    stroke="#ddd"
                                    strokeWidth="10"
                                    fill="none"
                                />
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="45%"
                                    stroke="#F59E0B"
                                    strokeWidth="10"
                                    fill="none"
                                    strokeDasharray="300"
                                    strokeDashoffset="165"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center font-bold text-lg">
                                45%
                            </span>
                        </div>

                        <ul className="mt-4 text-gray-500 text-sm space-y-1 text-center">
                            <li>{t("Dashboard.item1")}</li>
                            <li>{t("Dashboard.item2")}</li>
                            <li>{t("Dashboard.item3")}</li>
                            <li>{t("Dashboard.item4")}</li>
                        </ul>

                        <button className="mt-4 bg-orange-500 text-white px-4 py-1 rounded-md text-sm">
                            {t("Dashboard.checkNow")}
                        </button>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {/* GRADIENT CHART */}
                    <div className="lg:col-span-2 bg-white shadow rounded-xl p-6">
                        <p className="font-semibold text-gray-700 mb-5">
                            {t("Dashboard.loremChart")}
                        </p>
                        <div className="w-full h-[180px] bg-gradient-to-r from-blue-500 to-orange-400 opacity-70 rounded-lg" />
                    </div>

                    {/* CALENDAR */}
                    <div className="bg-white shadow rounded-xl p-6">
                        <p className="font-semibold text-gray-700 mb-4">
                            {t("Dashboard.calendar")}
                        </p>

                        <div className="grid grid-cols-7 gap-2 text-center text-sm">
                            {Array.from({ length: 30 }, (_, i) => {
                                const day = i + 1;
                                const active = selectedDay === day;

                                return (
                                    <button
                                        key={day}
                                        onClick={() => setSelectedDay(day)}
                                        className={`p-2 rounded transition
                                            ${
                                                active
                                                    ? "bg-orange-500 text-white shadow scale-105"
                                                    : "bg-gray-100 hover:bg-gray-200"
                                            }`}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
