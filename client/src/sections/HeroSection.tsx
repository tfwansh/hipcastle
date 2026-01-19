import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { getImage } from '../utils/media';
import heroBgVid from "../assets/videos/hero-bg.mp4"

const HeroSection = () => {

    const isMobHero = useMediaQuery({
        query: "(max-width:768px)",
    });

    const isTabHero = useMediaQuery({
        query: "(max-width:1024px)",
    });

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const titleSplit = SplitText.create(".hero-title", { type: "chars" });

            const tl = gsap.timeline({ delay: 1 });

            tl.to(".hero-content", {
                opacity: 1,
                y: 0,
                ease: "power1.inOut"
            })
                .to(".hero-text-scroll", {
                    duration: 1,
                    clipPath: "polygon(0% 0%,100% 0%,100% 100%, 0% 100%)",
                    ease: "circ.out"
                }, "-=0.5")
                .from(titleSplit.chars, {
                    yPercent: 200,
                    stagger: 0.02,
                    ease: "power2.out"
                }, "-=0.5");

            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hero-container",
                    start: "1% top",
                    end: "bottom top",
                    scrub: true,
                }
            });

            heroTl.to(".hero-container", {
                rotate: 7,
                scale: 0.9,
                yPercent: 30,
                ease: "power1.inOut"
            });
        });
    });


    return (
        <section>
            <div className="hero-container">
                {(isTabHero ?
                    <>
                        {isMobHero && <img src={getImage("hero-bg.png")} alt="" className="absolute bottom-40 object-cover w-full h-full opacity-40" />}
                        <img src={getImage("hero-img.png")} alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto opacity-60" />
                    </>
                    :
                    <video src={heroBgVid} autoPlay playsInline muted loop className="absolute inset-0 w-full h-full object-cover opacity-40" />
                )}

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/80 z-5"></div>

                <div className="hero-content opacity-0">
                    <div className="overflow-hidden">
                        <h1 className="hero-title lg:p-0 p-2">Clothes for who</h1>
                    </div>
                    <div className="hero-text-scroll">
                        <div className="hero-subtitle">
                            <h1>You're Becoming</h1>
                        </div>
                    </div>
                    <h2>Growth isn't linear. Neither are our clothes. 300+ GSM. Double-Stitched. Built for the sprint.</h2>
                    <div className="hero-button hover:bg-[#b8956a] hover:scale-105">
                        <a href="#">Shop Collection</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;