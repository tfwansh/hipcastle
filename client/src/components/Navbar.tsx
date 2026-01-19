import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavMenu from "./NavMenu";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useGSAP(() => {
        const els = Array.from(document.querySelectorAll<HTMLElement>(".nav-logo"));
        if (!els.length) return;

        const disposers: Array<() => void> = [];

        els.forEach((el) => {
            const onMove = (e: MouseEvent) => {
                const b = el.getBoundingClientRect();
                const x = e.clientX - b.left;
                const y = e.clientY - b.top;
                const offsetX = (x / b.width - 0.5) * 10;
                const offsetY = (y / b.height - 0.5) * 10;
                gsap.to(el, { x: offsetX, y: offsetY, scale: 1.05, duration: 0.25, ease: "power2.out" });
            };

            const onLeave = () => gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.35, ease: "power3.out" });

            el.addEventListener("mousemove", onMove);
            el.addEventListener("mouseleave", onLeave);

            disposers.push(() => {
                el.removeEventListener("mousemove", onMove);
                el.removeEventListener("mouseleave", onLeave);
            });
        });

        return () => disposers.forEach((d) => d());
    });

    return (
        <>
            <nav className="fixed top-0 left-0 z-[100] flex items-center justify-between md:p-6 p-3 w-full bg-transparent">
                {/* HIPCASTLE Logo */}
                <a href="#" className="nav-logo">
                    <h1 className="text-xl md:text-2xl font-bold tracking-[0.15em] text-[#f5f5f0]">
                        HIPCASTLE<span className="text-[#c9a66b]">.</span>
                    </h1>
                </a>

                {/* Right side controls */}
                <div className="flex items-center gap-4">
                    {/* Shop Now Button */}
                    <a
                        href="#"
                        className="px-6 py-2 bg-[#c9a66b] rounded-full hover:bg-[#b8956a] text-[#0a0a0a] text-sm font-semibold uppercase tracking-wider transition-all duration-300"
                    >
                        Shop Now
                    </a>

                    {/* Menu Toggle - Always visible, changes icon based on state */}
                    <div
                        className="p-2 backdrop-blur-xl rounded-full cursor-pointer border border-[#ffffff20] hover:border-[#c9a66b] transition-all lg:block hidden"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        {isMenuOpen ? (
                            <i className="ri-close-fill text-[#f5f5f0] text-2xl"></i>
                        ) : (
                            <i className="ri-menu-5-line text-[#f5f5f0] text-2xl"></i>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Toggle - Fixed position, always on top */}
            <div
                className="lg:hidden fixed top-4 right-4 z-[1001] p-2 backdrop-blur-xl rounded-full cursor-pointer border border-[#ffffff20]"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                {isMenuOpen ? (
                    <i className="ri-close-fill text-[#f5f5f0] text-2xl"></i>
                ) : (
                    <i className="ri-menu-5-line text-[#f5f5f0] text-2xl"></i>
                )}
            </div>

            <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Navbar;