import React, { useEffect, useState } from "react";

export default function InternetLoading() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (online) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center pointer-events-auto">
      <div className="bg-white rounded-xl p-8 flex flex-col items-center gap-4 shadow-2xl">
        <div className="w-14 h-14 border-4 border-[#183153] border-t-transparent rounded-full animate-spin"></div>
        <h1 className="text-lg font-semibold text-[#183153]">
          Internet yo‘q...
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Iltimos internetni yoqing
        </p>
      </div>
    </div>
  );
}
