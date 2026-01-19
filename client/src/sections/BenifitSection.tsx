import { useGSAP } from "@gsap/react"
import ClipPathTitle from "../components/ClipPathTitle"
import gsap from "gsap";
import { SplitText } from "gsap/all";
import VideoPin from "../components/VideoPin";

const BenifitSection = () => {

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const hParaSplit = SplitText.create(".para-animation", { type: "words" });


            const revealTl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: ".benefit-section",
                    start: "top 65%",
                    end: "top -10%",
                    scrub: 1.5,
                }
            });

            revealTl.from(hParaSplit.words, {
                duration: 1,
                stagger: 0.2,
                opacity: 0,
                rotate: 8,
                yPercent: 30,
                ease: "power1.inOut"
            }).to(".benefit-section .first-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out"
            }).to(".benefit-section .second-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out"
            }).to(".benefit-section .third-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out"
            }).to(".benefit-section .fourth-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out"
            });
        });
    });

    return (
        <section className="benefit-section">
            <div className="container mx-auto pt-16 mb-0 py-0">
                <div className="col-center">
                    <p className="md:text-sm para-animation text-[#a0a0a0]">Construction Breakdown:
                        <br />The Promise vs. The Proof
                    </p>
                </div>

                <div className="md:mt-20 md:mb-0 mb-30 mt-30 col-center">
                    <ClipPathTitle title={"150+ Washes"} color={"#0a0a0a"} bg={"#c9a66b"} className={"first-title"} borderColor={"#0a0a0a"} />
                    <ClipPathTitle title={"Reinforced Seams"} color={"#0a0a0a"} bg={"#f5f5f0"} className={"second-title"} borderColor={"#0a0a0a"} />
                    <ClipPathTitle title={"Double-Checked QC"} color={"#f5f5f0"} bg={"#1a1a1a"} className={"third-title"} borderColor={"#c9a66b"} />
                    <ClipPathTitle title={"5+ Year Lifespan"} color={"#0a0a0a"} bg={"#c9a66b"} className={"fourth-title"} borderColor={"#0a0a0a"} />
                </div>
                <div className="md:mt-0 md:pb-0 pb-20 mt-10">
                    <p className="text-[#c9a66b]">Repair Program Coming 2026</p>
                </div>
            </div>

            <div className="vd-pin relative overlay-box md:-mt-52 mt-0">
                <div className="video-wrapper relative w-full h-screen">
                    <VideoPin />
                </div>
            </div>
        </section>
    )
}

export default BenifitSection