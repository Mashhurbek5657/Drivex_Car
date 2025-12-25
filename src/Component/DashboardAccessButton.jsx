import React from "react";

export default function DashboardAccessButton() {
  return (
    <div
      className="
        w-[50px] h-[50px]
        rounded-full cursor-pointer select-none
        bg-gradient-to-br from-[#183153] via-[#1d4e89] to-white
        shadow-md shadow-[#18315370]
        flex items-center justify-center
        transition-all duration-500
        hover:scale-110 hover:shadow-lg
        relative overflow-hidden
      "
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/25 to-transparent opacity-60"></div>
      <svg
        className="w-7 relative z-10 fill-white drop-shadow-sm"
        viewBox="0 0 640 640"
      >
        <path d="M128 128C128 110.3 113.7 96 96 96C78.3 96 64 110.3 64 128L64 464C64 508.2 99.8 544 144 544L544 544C561.7 544 576 529.7 576 512C576 494.3 561.7 480 544 480L144 480C135.2 480 128 472.8 128 464L128 128zM534.6 214.6C547.1 202.1 547.1 181.8 534.6 169.3C522.1 156.8 501.8 156.8 489.3 169.3L384 274.7L326.6 217.4C314.1 204.9 293.8 204.9 281.3 217.4L185.3 313.4C172.8 325.9 172.8 346.2 185.3 358.7C197.8 371.2 218.1 371.2 230.6 358.7L304 285.3L361.4 342.7C373.9 355.2 394.2 355.2 406.7 342.7L534.7 214.7z"/>
      </svg>
    </div>
  );
}
