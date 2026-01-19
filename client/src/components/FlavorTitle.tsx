import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const firstTextSplit = SplitText.create(".first-text-split h1", {
                type: "chars"
            });
            const secTextSplit = SplitText.create(".second-text-split h1", {
                type: "chars"
            });

            gsap.from(firstTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 33%",
                }
            });

            gsap.to(".flavor-text-scroll", {
                duration: 1,
                clipPath: "polygon(0% 0%,100% 0%,100% 100%, 0% 100%)",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 17%",
                }
            });

            gsap.from(secTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 3%",
                }
            });
        });

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top top",
                end: "bottom 80%",
                scrub: true,
            },
        });

        titleTl
            .to(".first-text-split", {
                xPercent: -30,
                ease: "power1.inOut",
            })
            .to(".flavor-text-scroll", {
                xPercent: -22,
                ease: "power1.inOut",
            }, "<")
            .to(".second-text-split", {
                xPercent: -10,
                ease: "power1.inOut",
            }, "<");
    });

    return (
        <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
            <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
                <h1 className="text-[#f5f5f0]">Built for the</h1>
            </div>

            <div className="flavor-text-scroll">
                <div className="bg-[#c9a66b] pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
                    <h2 className="text-[#0a0a0a]">150th Wear</h2>
                </div>
            </div>

            <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
                <h1 className="text-[#f5f5f0]">Not the First</h1>
            </div>
        </div>
    );
};

export default FlavorTitle;