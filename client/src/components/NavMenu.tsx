import React, { useState, useEffect } from "react";
import gsap from "gsap";
import menu1 from "../assets/images/menu1.png";
import menu2 from "../assets/images/menu2.png";
import menu3 from "../assets/images/menu3.png";
import menu4 from "../assets/images/menu4.png";
import menu5 from "../assets/images/menu5.png";
import menu6 from "../assets/images/menu6.png";
import { getItem } from "../utils/media";

// Try to get nb.jpg with fallback
const menu7 = getItem("nb.jpg") || getItem("static-img.png");

interface MenuItem {
    name: string;
    img: string;
}

interface NavMenuProps {
    isOpen: boolean;
    onClose?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen = false, onClose }) => {

    const menuItems: MenuItem[] = [
        { name: "Collection", img: menu1 },
        { name: "New Arrivals", img: menu2 },
        { name: "Manifesto", img: menu3 },
        { name: "Our Story", img: menu4 },
        { name: "Founder", img: menu5 },
        { name: "Contact", img: menu6 },
    ];

    const [hovered, setHovered] = useState<string | null>(null);
    const [currentImg, setCurrentImg] = useState<string>(menu7);

    useEffect(() => {
        const menu = document.querySelector(".navmenu") as HTMLElement | null;
        if (!menu) return;

        if (isOpen) {
            gsap.fromTo(
                menu,
                { yPercent: -100, opacity: 0, display: "flex" },
                { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out", display: "flex" }
            );
        } else {
            gsap.to(menu, {
                yPercent: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.in",
                onComplete: () => { gsap.set(menu, { display: "none" }) },
            });
        }
    }, [isOpen]);

    return (
        <div className="navmenu fixed inset-0 w-full h-screen bg-[#1a1a1a] justify-center items-center hidden z-[999]">
            {/* Close button inside menu - always visible */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-[1002] p-3 rounded-full bg-[#0a0a0a] border border-[#ffffff20] hover:border-[#c9a66b] transition-all cursor-pointer"
            >
                <i className="ri-close-fill text-[#f5f5f0] text-2xl"></i>
            </button>

            <div className="flex w-full h-full">
                {/* Left side - Menu Links */}
                <div className="menu-links w-full lg:w-1/2 flex flex-col justify-center items-start px-8 md:px-16 text-left bg-[#0a0a0a]">
                    {menuItems.map((item, index) => (
                        <a
                            href="#"
                            key={item.name}
                            onMouseEnter={() => {
                                setHovered(item.name);
                                setCurrentImg(item.img);
                            }}
                            onMouseLeave={() => {
                                setHovered(null);
                                setCurrentImg(menu7);
                            }}
                            className={`uppercase text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter transition-all duration-400 text-[#f5f5f0] hover:text-[#c9a66b] ${hovered === item.name ? "text-[#c9a66b]" : hovered ? "opacity-30" : ""
                                }`}
                            style={{
                                fontStyle: index === 2 ? 'italic' : 'normal'
                            }}
                        >
                            {item.name}
                        </a>
                    ))}

                    <div className="flex justify-start items-center gap-6 text-lg mt-10 text-[#a0a0a0]">
                        <a href="#" className="hover:text-[#c9a66b] transition-colors">YouTube</a>
                        <a href="#" className="hover:text-[#c9a66b] transition-colors">Instagram</a>
                        <a href="#" className="hover:text-[#c9a66b] transition-colors">Twitter</a>
                    </div>
                </div>

                {/* Right side - Image (hidden on mobile) */}
                <div className="menu-img hidden lg:flex w-1/2 justify-center items-center bg-[#1a1a1a]">
                    <img
                        src={currentImg}
                        alt="Menu Preview"
                        className="w-full h-full object-cover transition-all duration-300 ease-out opacity-80"
                    />
                </div>
            </div>
        </div>
    );
};

export default NavMenu;