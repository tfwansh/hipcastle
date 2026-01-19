import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PreLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [canHide, setCanHide] = useState(false);

    useEffect(() => {
        const MIN_DURATION = 1500; // 1.5 seconds for brand impression
        const startTime = performance.now();

        const resources: (HTMLImageElement | HTMLVideoElement)[] = [
            ...Array.from(document.images),
            ...Array.from(document.querySelectorAll("video")),
        ];

        const total = resources.length || 1;
        let loaded = 0;

        const updateProgress = () => {
            loaded++;
            const percent = Math.round((loaded / total) * 100);
            setProgress((prev) => (percent > prev ? percent : prev));
        };

        resources.forEach((res) => {
            if (
                (res instanceof HTMLImageElement && res.complete) ||
                (res instanceof HTMLVideoElement && res.readyState >= 3)
            ) {
                updateProgress();
            } else {
                res.addEventListener("load", updateProgress);
                res.addEventListener("loadeddata", updateProgress);
                res.addEventListener("error", updateProgress);
            }
        });

        if (document.fonts) {
            document.fonts.ready.then(() => {
                setProgress((prev) => (prev < 90 ? 90 : prev));
            });
        }

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    const elapsed = performance.now() - startTime;
                    const remaining = MIN_DURATION - elapsed;
                    if (remaining > 0) {
                        setTimeout(() => setCanHide(true), remaining);
                    } else {
                        setCanHide(true);
                    }
                    return 100;
                }
                return prev + 1;
            });
        }, 50);

        const handleWindowLoad = () => {
            const elapsed = performance.now() - startTime;
            const remaining = MIN_DURATION - elapsed;
            if (remaining > 0) {
                setTimeout(() => setCanHide(true), remaining);
            } else {
                setCanHide(true);
            }
        };
        window.addEventListener("load", handleWindowLoad);

        return () => {
            clearInterval(interval);
            window.removeEventListener("load", handleWindowLoad);
        };
    }, []);

    useGSAP(() => {
        if (progress >= 100 && canHide) {
            gsap.to(".preloader", {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
                onComplete,
            });
        }
    }, [progress, canHide, onComplete]);

    return (
        <div className="preloader fixed inset-0 flex flex-col items-center justify-center z-[9999] text-white bg-[#0a0a0a]">
            {/* HIPCASTLE Brand Logo */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-[0.3em] mb-4 text-[#f5f5f0]">
                HIPCASTLE<span className="text-[#c9a66b]">.</span>
            </h1>
            <p className="text-sm md:text-base tracking-[0.2em] text-[#a0a0a0] mb-10">
                Wear Your Ambition
            </p>

            {/* Progress */}
            <p className="text-[1.5rem] md:text-[2rem] tracking-wider font-bold text-[#c9a66b]">{progress}%</p>
            <div className="mt-2 w-48 md:w-64 h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#c9a66b] transition-all duration-150 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default PreLoader;