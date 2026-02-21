import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import krishnova from "../assets/krishnova.png"
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 z-[999] transition-all duration-500 ease-in-out border-white/10 ${scrolled
          ? "top-4 md:top-6 w-[calc(100%-1.5rem)] md:w-[95%] xl:w-[80rem] rounded-2xl md:rounded-full bg-n-8/80 backdrop-blur-md border shadow-2xl"
          : "top-0 w-full border-b border-n-6 bg-n-8/90 backdrop-blur-sm"
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${scrolled
            ? "px-4 md:px-6 py-2"
            : "px-4 md:px-8 lg:px-12 xl:px-16 py-3 lg:py-4"
            }`}
        >
          {/* Logo */}
          <NavLink className="block w-[4rem] xs:w-[6rem] md:w-[8rem]" to="/">
            <img src={krishnova} width={190} height={40} alt="Logo" className="w-full h-auto" />
          </NavLink>

          {/* Desktop Button */}
          <button
            onClick={toggleNavigation}
            className="hidden lg:flex ml-auto relative w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 p-[1px]"
          >
            <div className="w-full h-full bg-n-8 rounded-xl flex flex-col justify-center items-center gap-1">
              <span
                className={`w-5 h-[2px] bg-white transition-all duration-300 ${openNavigation ? "rotate-45 translate-y-[3px]" : ""
                  }`}
              ></span>
              <span
                className={`w-5 h-[2px] bg-white transition-all duration-300 ${openNavigation ? "-rotate-45 -translate-y-[3px]" : ""
                  }`}
              ></span>
            </div>
          </button>

          {/* Mobile Button */}
          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>

        {/* ================= DESKTOP DROPDOWN ================= */}
        <div
          className={`hidden lg:block fixed left-0 right-0 bg-n-8/95 backdrop-blur-md transition-all duration-500 ease-out overflow-hidden ${openNavigation
            ? "top-[5rem] max-h-screen opacity-100"
            : "top-[5rem] max-h-0 opacity-0"
            }`}
          style={{ zIndex: 40 }}
        >
          <div className="container mx-auto px-5 lg:px-7.5 xl:px-10 py-12 flex justify-center">
            <div className="flex flex-col gap-6 max-w-4xl w-full">
              {navigation.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.url}
                  onClick={handleClick}
                  className={({ isActive }) =>
                    `
                    group relative px-8 py-6 text-center
                    transition-all duration-300
                    hover:scale-105 active:scale-95
                    ${isActive
                      ? "text-color-1 scale-105"
                      : "text-n-1 hover:text-color-1"
                    }
                    `
                  }
                >
                  <span className="font-code text-3xl md:text-4xl uppercase tracking-tight transition-all duration-300">
                    {item.title}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`
          ${openNavigation ? "flex" : "hidden"}
          fixed inset-0
          bg-n-8/95 backdrop-blur-xl
          lg:hidden
          z-[1000]
          flex-col
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={toggleNavigation}
            className="w-11 h-11 flex items-center justify-center rounded-xl border border-purple-500/40 text-white text-2xl bg-n-8/60"
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.url}
              onClick={handleClick}
              className={({ isActive }) =>
                `
                font-code
                text-xl sm:text-2xl
                uppercase
                tracking-[0.2em]
                transition-all duration-300
                hover:scale-105 active:scale-95
                ${isActive
                  ? "text-color-1 scale-105"
                  : "text-white hover:text-color-1"
                }
                `
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;