import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { getImage } from '../utils/media';

const BottomBanner = () => {

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const bTitleSplit = SplitText.create(".b-title", { type: "chars" });

            const revealTl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: ".bottom-banner",
                    start: "top 50%",
                    end: "top 10%",
                    scrub: 1.5,
                }
            });

            revealTl.from(bTitleSplit.chars, {
                stagger: 0.2,
                opacity: 0,
                rotate: 3,
                yPercent: 30,
                ease: "power1.inOut"
            }).to(".bottom-banner .rolling-animation", {
                opacity: 1,
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out"
            });
        });
    });


    return (
        <section className="bottom-banner 2xl:min-h-dvh lg:w-full w-[200%] h-full overflow-hidden relative bg-[#0a0a0a] flex flex-col justify-center items-start">

            <img src={getImage("bottom-banner.svg")} alt="" className="h-fit mt-10 opacity-20" />

            <div className="absolute w-[35rem] h-[24rem] z-100 lg:top-[30%] top-[50%] lg:left-20 left-10">
                <div className="relative inline-block md:translate-y-20 z-100">
                    <div className="general-title relative flex flex-col justify-center items-center gap-24">
                        <div className="overflow-hidden place-self-start">
                            <h1 className="text-[#f5f5f0] b-title">Join the</h1>
                        </div>
                        <div className="rotate-[3deg] rolling-animation text-nowrap md:-mt-28 -mt-24 place-self-start">
                            <div className="bg-[#c9a66b] pb-4 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                                <h2 className="text-[#0a0a0a]">Inner Circle</h2>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-10 mt-2 text-[#a0a0a0] text-sm font-paragraph flex flex-col lg:gap-14 gap-8">
                        <div>
                            <p className="lg:w-1/2 w-[80%]">We don't do spam. New collections drop to members 24 hours before the public. Plus, early access to the 2026 Repair Program.</p>
                        </div>
                        <div>
                            <p className="text-[#c9a66b] text-xs mb-4">Join 12,000+ Builders • Unsubscribe Anytime</p>
                        </div>
                        <div className="font-medium">
                            <a href="#" className="px-10 py-4 rounded-full bg-[#c9a66b] text-[#0a0a0a] font-semibold uppercase tracking-wider hover:bg-[#b8956a] transition-colors">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BottomBanner;