import React, { useEffect, useState } from 'react'
import img1 from "../img/Black_Modern_Car_Auto_Services_Logo-removebg-preview.png"
import { CircleUserRound, Globe, ShieldQuestion } from 'lucide-react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer';
import ScrollTop from './ScrollTop';

export default function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY > 200) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScrollTop)
    return () => window.removeEventListener("scroll", handleScrollTop)
  }, [])

  return (
    <div className="relative">
      <ScrollTop />
      <div
        className={`
          fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-500
          ${isScrolled ? "bg-white text-black translate-y-0" :
            "backdrop-blur-[10px] bg-white/5 text-[#ff932edb] translate-y-0"}
        `}
      >
        <div className="max-w-[1400px] m-auto">
          <nav className="flex items-center justify-between h-[70px]">

            <img
              className="w-[180px] object-cover cursor-pointer"
              src={img1}
              onClick={handleLogoClick}
              alt="logo"
            />

            <ul className="flex gap-8 text-[18px]">
              <li><Link to="/">Uy</Link></li>
              <li><Link to="/avtomobil">Avtomobil</Link></li>
              <li><Link to="/motosikl">Mototsikl</Link></li>
              <li><Link to="/biz">Biz haqimizda</Link></li>
              <li><Link to="/zapchas">Auto zapchaz</Link></li>
            </ul>

            <div className="flex gap-3">
              <ShieldQuestion className="w-[30px] cursor-pointer" />
              <Globe className="w-[30px] cursor-pointer" />
              <Link to="/logn">
                <CircleUserRound className="w-[30px] cursor-pointer" />
              </Link>
            </div>

          </nav>
        </div>
      </div>

      <div
        className={`
          w-[45px] flex justify-center items-center h-[45px] cursor-pointer
          rounded-full bg-yellow-700 z-50 fixed bottom-[90px] right-28 sm:right-2
          hover:bg-yellow-600 transition-all duration-500
          ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-7 fill-white rotate-[270deg]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
        </svg>
      </div>

      <Link to="/dashboard">
        <div className={` fill-white flex justify-center right-0 group items-center text-center rounded-l-lg py-2 px-3 gap-2 cursor-pointer bg-yellow-700  z-50 fixed bottom-5 transition-all duration-500`}>
          <svg xmlns="http://www.w3.org/2000/svg" className=' w-7 h-7' viewBox="0 0 640 640"><path d="M128 128C128 110.3 113.7 96 96 96C78.3 96 64 110.3 64 128L64 464C64 508.2 99.8 544 144 544L544 544C561.7 544 576 529.7 576 512C576 494.3 561.7 480 544 480L144 480C135.2 480 128 472.8 128 464L128 128zM534.6 214.6C547.1 202.1 547.1 181.8 534.6 169.3C522.1 156.8 501.8 156.8 489.3 169.3L384 274.7L326.6 217.4C314.1 204.9 293.8 204.9 281.3 217.4L185.3 313.4C172.8 325.9 172.8 346.2 185.3 358.7C197.8 371.2 218.1 371.2 230.6 358.7L304 285.3L361.4 342.7C373.9 355.2 394.2 355.2 406.7 342.7L534.7 214.7z" /></svg>
          <p className="text-base font-semibold group-hover:max-w-[200px] group-hover:opacity-100 max-w-0  text-white opacity-0 overflow-hidden transition-all duration-500">Dashboard</p>
        </div>
      </Link>

      <div className="pt-[70px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
