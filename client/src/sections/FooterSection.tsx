import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { getImage } from '../utils/media';
import splash from "../assets/videos/splash.mp4"
import { useMediaQuery } from "react-responsive";
import { journalEntries, watchAndBuyCards } from "../constants/details";

const FooterSection = () => {

    const isMobF = useMediaQuery({
        query: "(max-width: 768px)",
    });

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const footTextSplit = SplitText.create(".footer-title-animation", { type: "chars" });

            gsap.from(footTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                zIndex: 0,
                scrollTrigger: {
                    trigger: ".footer-section",
                    start: `${isMobF ? "top 60%" : "top 50%"}`,
                    end: `${isMobF ? "top 20%" : "top 10%"}`,
                    scrub: 1.5,
                }
            });
        });
    });

    return (
        <section className="footer-section lg:pt-20">
            {/* Builders Journal Section */}
            <div className="px-8 py-16 border-b border-[#ffffff10] relative overflow-hidden">
                {/* Background Video Reel */}
                <div className="absolute inset-0 flex opacity-20 pointer-events-none select-none">
                    {/* Repeat the video list enough times to fill any screen width */}
                    {[...watchAndBuyCards, ...watchAndBuyCards, ...watchAndBuyCards].slice(0, 12).map((card, i) => (
                        <div key={i} className="flex-none w-1/3 md:w-1/4 lg:w-1/5 h-full border-r border-[#0a0a0a]">
                            <video
                                src={card.src}
                                className="w-full h-full object-cover grayscale"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    ))}
                </div>

                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-[#c9a66b] text-sm tracking-[0.3em] uppercase">The Builders Journal</h3>
                        <a href="#" className="text-[#a0a0a0] text-sm hover:text-[#c9a66b] transition-colors">Read All →</a>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {journalEntries.map((entry, index) => (
                            <div key={index} className="group cursor-pointer p-6 rounded-xl bg-[#1a1a1a]/80 backdrop-blur-md border border-[#ffffff10] hover:border-[#c9a66b40] transition-all">
                                <span className="text-[#c9a66b] text-[10px] uppercase tracking-widest">{entry.category}</span>
                                <span className="text-[#a0a0a0] text-[10px] ml-3">{entry.date}</span>
                                <h4 className="text-[#f5f5f0] text-lg font-semibold mt-2 group-hover:text-[#c9a66b] transition-colors leading-snug">
                                    {entry.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Founder's Note */}
            <div className="px-8 py-16 border-b border-[#ffffff10]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="size-20 rounded-full bg-[#c9a66b] mx-auto mb-6 flex items-center justify-center">
                        <span className="text-[#0a0a0a] text-2xl font-bold">AC</span>
                    </div>
                    <h4 className="text-[#f5f5f0] text-xl font-semibold mb-1">Avinash Chate</h4>
                    <p className="text-[#a0a0a0] text-sm mb-6">Founder & Builder</p>
                    <blockquote className="text-[#a0a0a0] text-lg leading-relaxed italic">
                        "I repeated 12th grade. I got detained in engineering. Then I built a 3 crore training company.
                        Real growth happens quietly, consistently. It's not about the hype.
                        <span className="text-[#c9a66b]"> HIPCASTLE is the uniform for that journey.</span>"
                    </blockquote>
                </div>
            </div>

            {/* Main Footer Title */}
            <div className="2xl:h-[110dvh] relative z-100 lg:pt-[8vh] pt-[8vh]">
                <div className="overflow-hidden">
                    <h1 className="general-title text-center text-[#f5f5f0] footer-title-animation lg:pb-0 pb-5">HIPCASTLE<span className="text-[#c9a66b]">.</span></h1>
                </div>
                <p className="text-center text-[#a0a0a0] text-sm tracking-widest mt-4">• Founder Approved • Est 2025 •</p>
            </div>
            {
                isMobF ?
                    <img src={getImage("footer-drink.png")} alt="footer img" className="absolute object-contain top-0 mix-blend-lighten z-10 opacity-30" />
                    :
                    <video src={splash} autoPlay playsInline muted loop className="absolute object-contain top-[-4%] mix-blend-lighten z-10 opacity-30" />
            }


            <div className="flex-center gap-3 relative z-10 md:mt-10 mt-5">
                <div className="social-btn">
                    <img src={getImage("yt.svg")} alt="YouTube" className="opacity-70" />
                </div>
                <div className="social-btn">
                    <img src={getImage("insta.svg")} alt="Instagram" className="opacity-70" />
                </div>
                <div className="social-btn">
                    <img src={getImage("tiktok.svg")} alt="Twitter" className="opacity-70" />
                </div>
            </div>

            <div className="mt-30 lg:mb-32 mb-20 md:px-7 px-5 flex gap-10 md:flex-row flex-col justify-between items-start text-[#f5f5f0] font-paragraph md:text-sm font-medium">
                <div className="flex items-start md:gap-10 gap-5">
                    <div>
                        <p className="text-[#c9a66b] mb-2">Shop</p>
                        <p className="text-[#a0a0a0]">Collection</p>
                        <p className="text-[#a0a0a0]">New Arrivals</p>
                    </div>
                    <div>
                        <p className="text-[#c9a66b] mb-2">Brand</p>
                        <p className="text-[#a0a0a0]">Manifesto</p>
                        <p className="text-[#a0a0a0]">Our Story</p>
                        <p className="text-[#a0a0a0]">Founder</p>
                    </div>
                    <div>
                        <p className="text-[#c9a66b] mb-2">Support</p>
                        <p className="text-[#a0a0a0]">Contact</p>
                        <p className="text-[#a0a0a0]">Size Guide</p>
                        <p className="text-[#a0a0a0]">Care Guide</p>
                    </div>
                </div>
                <div className="md:max-w-sm">
                    <p className="text-[#a0a0a0]">
                        Get Exclusive Early Access and Stay Informed About Product
                        Updates, Collections, and Builder Stories
                    </p>
                    <div className="flex justify-between items-center border-b border-[#c9a66b50] py-4 md:mt-6">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full placeholder:font-sans placeholder:text-[#666666] text-[#f5f5f0]"
                        />
                        <img src={getImage("arrow.svg")} alt="arrow" className="opacity-70" />
                    </div>
                </div>
            </div>

            <div className="copyright-box">
                <p>© 2025 HIPCASTLE • Built for Builders</p>
                <div className="flex items-center gap-7">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;
