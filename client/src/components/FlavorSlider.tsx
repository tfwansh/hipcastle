import { useGSAP } from "@gsap/react";
import { categoryCollection } from "../constants/details";
import gsap from "gsap";

const FlavorSlider = () => {

    useGSAP(() => {
        const cards = document.querySelectorAll<HTMLDivElement>(".category-card");

        cards.forEach((card) => {
            card.addEventListener("mousemove", (e: MouseEvent) => {
                const bounds = card.getBoundingClientRect();
                const x = e.clientX - bounds.left;
                const y = e.clientY - bounds.top;

                const offsetX = (x / bounds.width - 0.5) * 20;
                const offsetY = (y / bounds.height - 0.5) * 20;

                const iconEl = card.querySelector<HTMLElement>(".category-image");
                const borderEl = card.querySelector<HTMLElement>(".category-border");

                if (iconEl)
                    gsap.to(iconEl, { x: offsetX, y: offsetY, duration: 0.3, ease: "power2.out" });

                if (borderEl)
                    gsap.to(borderEl, { x: -offsetX * 0.3, y: -offsetY * 0.3, duration: 0.3, ease: "power2.out" });
            });

            card.addEventListener("mouseleave", () => {
                const iconEl = card.querySelector<HTMLElement>(".category-image");
                const borderEl = card.querySelector<HTMLElement>(".category-border");

                if (iconEl) gsap.to(iconEl, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
                if (borderEl) gsap.to(borderEl, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
            });
        });
    });

    return (
        <div className="slider-wrapper lg:w-[400vw] lg:h-full mt-0 xl:mt-0 bg-[#0f0f0f] h-[100%]">
            <div className="flavors lg:pb-50 flex md:flex-row flex-col items-center lg:items-start lg:pt-10 2xl:gap-48 lg:gap-36 md:gap-20 gap-6 flex-nowrap px-8">
                {categoryCollection.map((category) => (
                    <div
                        key={category.name}
                        className={`category-card relative z-30 lg:w-[35vw] w-80 lg:h-[60vh] md:w-[85vw] md:h-[45vh] h-72 flex-none ${category.rotation} rounded-2xl overflow-hidden cursor-pointer group bg-[#1a1a1a] transition-all duration-500`}
                    >
                        {/* Animated Border */}
                        <div className="category-border absolute inset-4 border-2 border-[#c9a66b] rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50"></div>

                        {/* Category Image (Replaces Icon) */}
                        <div className="category-image absolute inset-0 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full relative">
                                <img
                                    src={category.img}
                                    alt={category.name}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80"></div>
                            </div>
                        </div>

                        {/* Category Name - Large */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-40">
                            <span className="text-[#c9a66b] text-[10px] uppercase tracking-[0.3em] mb-2 block">
                                Explore →
                            </span>
                            <h3 className="text-[#f5f5f0] text-3xl md:text-4xl font-bold uppercase tracking-tight">
                                {category.name}
                            </h3>
                            <p className="text-[#a0a0a0] text-sm mt-1 line-clamp-2">
                                {category.description}
                            </p>
                            <p className="text-[#c9a66b] text-xs mt-2 uppercase tracking-widest">
                                {category.productCount} Products
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlavorSlider;