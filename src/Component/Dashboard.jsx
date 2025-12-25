import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
    const { t } = useTranslation();
    const [selectedDay, setSelectedDay] = useState(null);

    return (
        <div className="min-h-screen bg-gray-100 p-6 font-sans">
            <h1 className="text-xl font-semibold mb-6">{t('Dashboard.title')}</h1>

            <div className="grid grid-cols-4 gap-6"> 
                <div className="bg-white shadow rounded-xl p-5">
                    <p className="text-gray-500">{t('Dashboard.earning')}</p>
                    <h2 className="text-3xl font-bold mt-1">$ 628</h2>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <p className="text-gray-500">{t('Dashboard.share')}</p>
                    <h2 className="text-3xl font-bold mt-1">2434</h2>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <p className="text-gray-500">{t('Dashboard.likes')}</p>
                    <h2 className="text-3xl font-bold mt-1">1259</h2>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <p className="text-gray-500">{t('Dashboard.rating')}</p>
                    <h2 className="text-3xl font-bold mt-1">8,5</h2>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6">

                <div className="col-span-2 bg-white rounded-xl shadow p-6">
                    <div className="flex justify-between mb-4">
                        <h3 className="font-semibold text-gray-700">{t('Dashboard.result')}</h3>
                        <button className="bg-orange-500 text-white px-3 rounded-md text-sm">{t('Dashboard.checkNow')}</button>
                    </div>

                    <div className="h-40 w-full flex items-end space-x-3">
                        {[50, 70, 45, 65, 40, 75, 60, 80, 60, 80, 50, 70].map((h, i) =>
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-5 bg-blue-600 rounded" style={{ height: h }}></div>
                                <div className="w-5 bg-orange-400 rounded mt-1" style={{ height: h - 15 }}></div>
                                <p className="text-xs mt-2 text-gray-400">{t('Dashboard.month')} {i + 1}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center justify-center">
                    <div className="relative w-28 h-28">
                        <svg className="w-full h-full">
                            <circle cx="50%" cy="50%" r="45%" stroke="#ddd" strokeWidth="10" fill="none" />
                            <circle cx="50%" cy="50%" r="45%" stroke="#F59E0B" strokeWidth="10" fill="none" strokeDasharray="300" strokeDashoffset="165" strokeLinecap="round" />
                        </svg>
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-lg">
                            45%
                        </span>
                    </div>
                    <ul className="mt-4 text-gray-500 text-sm space-y-1">
                        <li>{t('Dashboard.item1')}</li>
                        <li>{t('Dashboard.item2')}</li>
                        <li>{t('Dashboard.item3')}</li>
                        <li>{t('Dashboard.item4')}</li>
                    </ul>
                    <button className="mt-4 bg-orange-500 text-white px-3 py-1 rounded-md text-sm">{t('Dashboard.checkNow')}</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="col-span-2 bg-white shadow rounded-xl p-6">
                    <p className="font-semibold text-gray-700 mb-5">{t('Dashboard.loremChart')}</p>
                    <div className="w-full h-[180px] bg-gradient-to-r from-blue-500 to-orange-400 opacity-70 rounded-lg"></div>
                </div>

                <div className="bg-white shadow rounded-xl p-6 h-80 flex flex-col">
                    <p className="font-semibold text-gray-700 mb-4">{t('Dashboard.calendar')}</p>
                    <div className="grid grid-cols-7 gap-2 text-center text-sm grow">
                        {Array.from({ length: 30 }, (_, i) => {
                            const day = i + 1;
                            const active = selectedDay === day;

                            return (
                                <button
                                    key={i}
                                    onClick={() => setSelectedDay(day)}
                                    className={`p-2 rounded transition 
                ${active ? "bg-orange-500 text-white shadow-md scale-105"
                                            : "bg-gray-100 hover:bg-gray-200"}`}
                                >
                                    {day}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
