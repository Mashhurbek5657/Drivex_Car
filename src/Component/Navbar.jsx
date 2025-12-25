import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import img1 from "../../public/log2.png";
import { CircleUserRound, Globe, Menu, X } from "lucide-react";
import Footer from "./Footer";
import DashboardAccessButton from "./DashboardAccessButton";
import InternetLoading from "./InternetLoading.jsx";
import { useCart } from "../Component/CartContext";
import i18n from "../i18n/i18nConfig.jsx";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [language, setLanguage] = useState("UZ");
  const [isScrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { cartCount } = useCart();

  const homeStylePaths = ["/", "/logn"];
  const isHomeLike =
    homeStylePaths.includes(location.pathname) ||
    location.pathname === "*" ||
    location.pathname.includes("404");

  const handleLogoClick = () => {
    if (location.pathname === "/") window.location.reload();
    else navigate("/");
  };

  const handleLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    setLangOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle =
    isHomeLike && !isScrolled
      ? "bg-transparent text-white"
      : "bg-white text-black shadow-md";

  const textStyle = isHomeLike && !isScrolled ? "text-white" : "text-black";

  return (
    <div className="overflow-x-hidden">
      <InternetLoading />
      <ScrollTop />

      <div
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${navbarStyle}`}
      >
        <div className="max-w-[1300px] mx-auto px-4">
          <nav className="flex items-center justify-between h-[70px]">
            <img
              src={img1}
              onClick={handleLogoClick}
              className="w-[160px] sm:w-[190px] cursor-pointer"
              alt="logo"
            />

            <ul className={`hidden md:flex gap-8 text-[18px] ${textStyle}`}>
              <li><Link to="/">{t("Navbar.home")}</Link></li>
              <li><Link to="/avtomobil">{t("Navbar.cars")}</Link></li>
              <li><Link to="/biz">{t("Navbar.about")}</Link></li>
              <li><Link to="/zapchas">{t("Navbar.spare")}</Link></li>
              <li><Link to="/tss">{t("Navbar.faq")}</Link></li>
            </ul>

            <div className={`flex items-center gap-3 ${textStyle}`}>
              <Link to="/shop" className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-[25px] cursor-pointer"
                >
                  <path
                    fill="currentColor"
                    d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528zM336 142.4C322.7 142.4 312 153.1 312 166.4L312 200L278.4 200C265.1 200 254.4 210.7 254.4 224C254.4 237.3 265.1 248 278.4 248L312 248L312 281.6C312 294.9 322.7 305.6 336 305.6C349.3 305.6 360 294.9 360 281.6L360 248L393.6 248C406.9 248 417.6 237.3 417.6 224C417.6 210.7 406.9 200 393.6 200L360 200L360 166.4C360 153.1 349.3 142.4 336 142.4z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <div className="relative">
                <Globe
                  className="w-[30px] cursor-pointer"
                  onClick={() => setLangOpen(!langOpen)}
                />
                {langOpen && (
                  <div className="absolute right-0 mt-3 w-[150px] rounded-xl border border-gray-200 bg-white shadow-xl">
                    <button
                      onClick={() => handleLanguage("UZ")}
                      className={`w-full px-4 py-3 text-left rounded-t-xl transition-all duration-300 ${
                        language === "UZ"
                          ? "bg-black text-white border-b border-gray-300"
                          : "text-black hover:bg-gray-100"
                      }`}
                    >
                      🇺🇿 O‘zbekcha
                    </button>
                    <button
                      onClick={() => handleLanguage("EN")}
                      className={`w-full px-4 py-3 text-left rounded-b-xl transition-all duration-300 ${
                        language === "EN"
                          ? "bg-black text-white"
                          : "text-black hover:bg-gray-100"
                      }`}
                    >
                      🇬🇧 English
                    </button>
                  </div>
                )}
              </div>

              <Link to="/logn">
                <CircleUserRound className="w-[26px]" />
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden"
              >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </nav>
        </div>

        <div
          className={`md:hidden bg-white text-black transition-all duration-300 ${
            menuOpen
              ? "max-h-[300px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col gap-4 px-6 py-4">
            <li><Link onClick={() => setMenuOpen(false)} to="/">{t("Navbar.home")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/avtomobil">{t("Navbar.cars")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/biz">{t("Navbar.about")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/zapchas">{t("Navbar.spare")}</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/tss">{t("Navbar.faq")}</Link></li>
          </ul>
        </div>
      </div>

      <div
        className={`w-[50px] h-[50px] fixed bottom-[170px] right-[10px] sm:right-2 z-50 rounded-full bg-[#183153] cursor-pointer flex justify-center items-center hover:bg-[#357ba6] transition-all duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg className="w-7 fill-white rotate-[270deg]" viewBox="0 0 640 640">
          <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
        </svg>
      </div>

      <Link to="/dashboard" className="fixed bottom-[110px] right-2 z-[9999]">
        <DashboardAccessButton size="lg" label="Dashboard" />
      </Link>

      <div className="pt-[70px]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
