import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const firstMsgSplit = SplitText.create(".first-message", { type: "words" });
            const secMsgSplit = SplitText.create(".second-message", { type: "words" });
            const paragraphSplit = SplitText.create(".message-content p", { type: "words,lines", linesClass: "paragraph-line" });

            gsap.to(firstMsgSplit.words, {
                color: "#f5f5f0",
                ease: "power1.in",
                stagger: 1,
                scrollTrigger: {
                    trigger: ".message-content",
                    start: "top center",
                    end: "30% center",
                    scrub: true,
                }
            });

            gsap.to(secMsgSplit.words, {
                color: "#f5f5f0",
                ease: "power1.in",
                stagger: 1,
                scrollTrigger: {
                    trigger: ".second-message",
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                }
            });

            // "Not Attention" banner - appears AFTER user has read the text
            // Triggers when the msg-text-scroll element reaches center of viewport
            const revealTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".msg-text-scroll",
                    start: "top 55%", // When the banner area reaches just above center
                    end: "top 35%",   // Complete by the time it's past center
                    scrub: 0.5,
                }
            });

            revealTl.to(".msg-text-scroll", {
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.inOut"
            });

            const paragraphTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".message-content p",
                    start: "top 60%",
                }
            });

            paragraphTl.from(paragraphSplit.words, {
                duration: 1,
                stagger: 0.01,
                yPercent: 300,
                rotate: 3,
                ease: "power1.inOut"
            });
        });
    }, []);

    return (
        <section className="message-content">
            <div className="container mx-auto flex-center py-28 relative">
                <div className="w-full h-full md:px-30 ">
                    <div className="msg-wrapper">
                        <h1 className="first-message text-wrap w-[90%]">Real growth comes from alignment</h1>
                        <div className="msg-text-scroll md:mt-12 mt-0">
                            <div className="bg-[#c9a66b] md:pb-4 pb-3 px-5">
                                <h2 className="text-[#0a0a0a]">Not Attention</h2>
                            </div>
                        </div>
                        <h1 className="second-message md:w-full w-[80%]">The world is loud. We focus on what lasts: Character. Consistency. Clarity.</h1>
                    </div>
                    <div className="flex-center md:mt-20 mt-10">
                        <div className="max-w-md px-10 flex-center overflow-hidden">
                            <p className="text-[#a0a0a0]">We noticed a gap in connection. HIPCASTLE started with a simple realization: There are plenty of fashion options, but not much meaning behind them.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Manifesto Quote */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                <p className="text-[#c9a66b] text-sm tracking-widest uppercase">Our Manifesto</p>
            </div>
        </section>
    )
}

export default MessageSection;