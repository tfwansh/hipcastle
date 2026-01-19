import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FlavorSection = () => {

    const flavorRef = useRef<HTMLDivElement | null>(null);
    const slideRef = useRef<HTMLDivElement | null>(null);

    const isTablet = useMediaQuery({
        query: "(max-width: 1024px)",
    });
    const isMob = useMediaQuery({
        query: "(max-width: 768px)",
    });

    useGSAP(() => {
        if (!slideRef.current) return;

        const scrollAmount = slideRef.current.scrollWidth - window.innerWidth;

        if (!isTablet) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 0%",
                    end: "+=3500",
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(".flavor-scroll-inner", {
                x: isMob ? 0 : `-${scrollAmount}px`,
                ease: "power1.inOut",
            });
        };
        if (isMob) {
            const btn = document.querySelector(".fixed-btn") as HTMLElement | null;
            if (!btn) return;

            ScrollTrigger.create({
                trigger: ".flavor-section",
                start: "top 90%",
                end: "bottom bottom",
                onToggle: (self) => {
                    btn.style.position = self.isActive ? "fixed" : "absolute";
                    btn.style.bottom = "0%";
                    btn.style.left = "50%";
                    btn.style.transform = "translateX(-50%)";
                },
            });

            return () => ScrollTrigger.killAll();
        };

    });

    return (
        <section ref={flavorRef} className="flavor-section relative overflow-hidden">
            {/* Section Header - Shop by Category */}
            <div className="absolute top-8 left-8 z-50">
                <h3 className="text-[#f5f5f0] text-lg md:text-xl font-bold tracking-wider uppercase mb-1">Shop by Category</h3>
                <p className="text-[#a0a0a0] text-xs">Find Your Perfect Fit</p>
            </div>

            {/* Drag to Explore indicator */}
            <div className="absolute top-8 right-8 z-50 lg:block hidden">
                <p className="text-[#a0a0a0] text-xs tracking-widest uppercase">Drag to Explore →</p>
            </div>

            {/* Fixed button */}
            <div
                className={`${isMob ?
                    "fixed-btn w-full fixed py-4 h-22 left-1/2 z-[100] flex justify-center bg-[#0f0f0f]"
                    :
                    "absolute bottom-[10%] left-1/2 -translate-x-1/2 z-[100] flex justify-center"
                    }`}
            >
                <button type="button" className="text-sm rounded-full border border-[#ffffff20] text-[#f5f5f0] px-10 md:py-4 py-3 cursor-pointer hover:bg-[#c9a66b] hover:text-[#0a0a0a] hover:border-[#c9a66b] transition-all font-semibold uppercase tracking-wider" >
                    Shop All Categories
                </button>
            </div>

            {/* Horizontal scroll container */}
            <div className="flavor-scroll-inner h-full flex lg:flex-row flex-col relative">
                <div className="lg:w-[57%] flex-none h-80 lg:h-full lg:mt-[9%] xl:mt-0 lg:pb-50">
                    <FlavorTitle />
                </div>
                <div ref={slideRef} className="lg:pb-0 pb-8 slider-con">
                    <FlavorSlider />
                </div>
            </div>

        </section >
    );
};

export default FlavorSection;