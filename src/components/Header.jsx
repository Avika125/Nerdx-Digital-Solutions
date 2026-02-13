import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
    const pathname = useLocation();
    const navigate = useNavigate();
    const [openNavigation, setOpenNavigation] = useState(false);

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
        <div
            className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
                }`}
        >
            <div className="flex items-center justify-between px-8 lg:px-12 xl:px-16 max-lg:py-4 py-6">
                <Link className="block w-[12rem] xl:mr-8" to="/">
                    <img src={brainwave} width={190} height={40} alt="Nerdx" />
                </Link>

                {/* Mobile Navigation */}
                <nav
                    className={`${openNavigation ? "flex" : "hidden"
                        } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:hidden`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                to={item.url}
                                onClick={handleClick}
                                className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>

                {/* Desktop Menu Button */}
                <button
                    onClick={toggleNavigation}
                    className="hidden lg:flex ml-auto relative w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 p-[1px]"
                >
                    <div className="w-full h-full bg-n-8 rounded-xl flex flex-col justify-center items-center gap-1">
                        <span className={`w-5 h-[2px] bg-white transition-all duration-300 origin-center ${openNavigation ? 'rotate-45 translate-y-[3px]' : ''}`}></span>
                        <span className={`w-5 h-[2px] bg-white transition-all duration-300 origin-center ${openNavigation ? '-rotate-45 -translate-y-[3px]' : ''}`}></span>
                    </div>
                </button>

                {/* Mobile Menu Button */}
                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>

            {/* Fullscreen Dropdown Menu for Desktop */}
            <div
                className={`hidden lg:block fixed left-0 right-0 bg-n-8/95 backdrop-blur-md transition-all duration-500 ease-out overflow-hidden ${openNavigation ? 'top-[5rem] max-h-screen opacity-100' : 'top-[5rem] max-h-0 opacity-0'
                    }`}
                style={{ zIndex: 40 }}
            >
                <div className="container mx-auto px-5 lg:px-7.5 xl:px-10 py-12 flex justify-center">
                    <div className="flex flex-col gap-6 max-w-4xl w-full">
                        {navigation.map((item, index) => (
                            <Link
                                key={item.id}
                                to={item.url}
                                onClick={handleClick}
                                className="group relative px-8 py-6 transition-all duration-300 border-b border-n-6/30 hover:border-n-6/60 hover:bg-n-7/30"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: openNavigation ? 'slideIn 0.4s ease-out forwards' : 'none'
                                }}
                            >
                                <div className="flex items-center justify-center">
                                    <span className="font-code text-3xl md:text-4xl uppercase text-n-1 group-hover:text-color-1 transition-colors tracking-tight">
                                        {item.title}
                                    </span>
                                    <svg
                                        className="w-8 h-8 text-n-4/50 group-hover:text-color-1 group-hover:translate-x-3 transition-all duration-300 absolute right-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
