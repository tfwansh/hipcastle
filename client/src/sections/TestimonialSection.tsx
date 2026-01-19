import { watchAndBuyCards, productCollection } from "../constants/details";
import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { createPortal } from "react-dom";

// Product card colors for modal
const productCardColors = [
    "from-[#2a2a2a] to-[#1a1a1a]",
    "from-[#1a2a3a] to-[#0a1520]",
    "from-[#1a1a2a] to-[#0a0a15]",
    "from-[#2a1a1a] to-[#150a0a]",
];

// Video Shop Modal Component - Matching reference design
interface VideoShopModalProps {
    card: typeof watchAndBuyCards[0] | null;
    isOpen: boolean;
    onClose: () => void;
}

const VideoShopModal: React.FC<VideoShopModalProps> = ({ card, isOpen, onClose }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.play().catch(console.log);
        }
    }, [isOpen, card]);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // ESC key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!mounted || !isOpen || !card) return null;

    const modalContent = (
        <div
            className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
            {/* Left Side - Video */}
            <div className="w-1/2 h-full flex items-center justify-center p-12 bg-[#0a0a0a]">
                <div className="relative w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden bg-[#1a1a1a]">
                    <video
                        ref={videoRef}
                        src={card.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Right Side - Products */}
            <div className="w-1/2 h-full flex flex-col p-12 bg-[#0f0f0f] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-[#1a1a1a] text-[#f5f5f0] flex items-center justify-center hover:bg-[#c9a66b] hover:text-[#0a0a0a] transition-all border border-[#ffffff20] cursor-pointer"
                >
                    <i className="ri-close-line text-2xl"></i>
                </button>

                {/* Header */}
                <div className="mb-8">
                    <span className="text-[#c9a66b] text-xs uppercase tracking-[0.3em]">{card.category} Collection</span>
                    <h2 className="text-[#f5f5f0] text-4xl font-bold uppercase tracking-tight mt-2">
                        Shop This Look
                    </h2>
                </div>

                {/* Products Grid - 2x2 */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                    {card.products.map((product, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br ${productCardColors[index % productCardColors.length]} border border-[#ffffff08] hover:border-[#c9a66b40]`}
                        >
                            {/* Product Image */}
                            <div className="aspect-[3/4] flex items-center justify-center relative bg-[#ffffff05]">
                                {(() => {
                                    // Lookup image from productCollection
                                    const prodImg = productCollection.find(p => p.name === product.name)?.img ||
                                        // Fallback check for fuzzy match
                                        productCollection.find(p => product.name.includes(p.name))?.img;

                                    return prodImg ? (
                                        <img
                                            src={prodImg}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center text-[#3a3a3a]">
                                            <i className="ri-t-shirt-2-line text-5xl opacity-50"></i>
                                        </div>
                                    );
                                })()}
                            </div>

                            {/* Product Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                                <h4 className="text-[#f5f5f0] text-sm font-semibold uppercase tracking-tight leading-tight">
                                    {product.name}
                                </h4>
                                <p className="text-[#c9a66b] text-base font-bold mt-1">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-8 space-y-3">
                    <button className="w-full py-4 rounded-full bg-[#f5f5f0] text-[#0a0a0a] font-semibold uppercase tracking-wider hover:bg-[#c9a66b] transition-colors cursor-pointer">
                        View Full Collection →
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full py-4 rounded-full border border-[#ffffff20] text-[#a0a0a0] font-semibold uppercase tracking-wider hover:border-[#c9a66b] hover:text-[#c9a66b] transition-colors cursor-pointer"
                    >
                        ← Back to Lookbook
                    </button>
                </div>
            </div>
        </div>
    );

    // Use portal to render modal at document body level
    return createPortal(modalContent, document.body);
};

const TestimonialSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const vdRf = useRef<HTMLVideoElement[]>([]);
    const [selectedCard, setSelectedCard] = useState<typeof watchAndBuyCards[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useGSAP(() => {
        gsap.set(".testimonials-section", {
            marginTop: "-100vh"
        });

        const tesTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                end: `${isMobile ? "60% top" : "300% top"}`,
                scrub: true,
                pinSpacing: false
            }
        });

        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: `${isMobile ? "1% top" : "5% top"}`,
                end: `${isMobile ? "80% top" : "120% top"}`,
                scrub: 0.8,
                pin: true,
            }
        });

        // Faster stagger for all cards to appear sooner
        pinTl.from(".vd-card", {
            yPercent: 200,
            stagger: 0.12,
            ease: "power1.out"
        }, "<");

        tesTl.to(".testimonials-section .ft-anim", {
            xPercent: 70 + 30,
            yPercent: -100
        }).to(".testimonials-section .st-anim", {
            xPercent: 25 + 30, yPercent: -100
        }, "<").to(".testimonials-section .tt-anim", {
            xPercent: -80, yPercent: -100
        }, "<");
    });

    const setVideoRef = (el: HTMLVideoElement | null, index: number): void => {
        if (el) {
            vdRf.current[index] = el;
            el.play().catch(() => { });
        }
    };

    const handleCardClick = (card: typeof watchAndBuyCards[0]) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    return (
        <>
            <section className="testimonials-section">
                {/* Section Header */}
                <div className="absolute top-8 left-8 z-50">
                    <h3 className="text-[#1a1a1a] text-sm tracking-[0.3em] uppercase mb-1">Curated Vibes</h3>
                </div>

                <div className="relative w-full lg:h-[130vh] h-[112vh]">
                    <div className="all-title lg:h-[150vh] h-full absolute size-full flex flex-col items-center lg:pt-[5vw] pt-[15vw]">
                        <h1 className="text-[#1a1a1a] first-title ft-anim">Watch</h1>
                        <h1 className="text-[#c9a66b] sec-title st-anim">&</h1>
                        <h1 className="text-[#1a1a1a] third-title tt-anim">Buy</h1>
                    </div>
                    <div className="pin-box">
                        {
                            watchAndBuyCards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`vd-card ${card.translation || ''} ${card.rotation}`}
                                    onClick={() => handleCardClick(card)}
                                >
                                    <video
                                        ref={(el) => setVideoRef(el, index)}
                                        src={card.src}
                                        playsInline
                                        muted
                                        loop
                                        autoPlay
                                        className="size-full object-cover"
                                    />
                                    {/* Card Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent flex justify-between items-end">
                                        <div>
                                            <span className="text-[#c9a66b] text-[10px] uppercase tracking-widest">{card.category}</span>
                                            <h4 className="text-[#f5f5f0] font-semibold">{card.name}</h4>
                                            <p className="text-[#c9a66b] text-sm font-bold">{card.price}</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="size-8 rounded-full bg-[#f5f5f0]/10 backdrop-blur-sm flex items-center justify-center mb-1 group-hover:bg-[#c9a66b] transition-colors">
                                                <i className="ri-shopping-bag-3-fill text-[#f5f5f0] text-xs"></i>
                                            </div>
                                            <span className="text-[8px] uppercase tracking-widest text-[#f5f5f0] opacity-80">Tap to Shop</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="absolute bottom-20 w-full h-auto py-2 flex justify-center items-center z-100">
                    <button type="button" className="bg-[#1a1a1a] text-[#f5f5f0] px-10 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-[#c9a66b] hover:text-[#0a0a0a] transition-all cursor-pointer">
                        Explore All Looks
                    </button>
                </div>
            </section>

            {/* Video Shop Modal - Rendered via Portal */}
            <VideoShopModal
                card={selectedCard}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default TestimonialSection;
