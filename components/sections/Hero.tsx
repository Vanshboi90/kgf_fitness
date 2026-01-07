"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Hero({ id }: { id?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleLeftRef = useRef<HTMLHeadingElement>(null);
    const titleRightRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial Reveal
        tl.fromTo(
            [titleLeftRef.current, titleRightRef.current],
            { y: 100, opacity: 0, filter: "blur(10px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.5, stagger: 0.2 }
        ).fromTo(
            subRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=1"
        );
    }, []);

    return (
        <section
            id={id}
            ref={containerRef}
            className="relative w-full h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden pointer-events-none"
        >
            <div className="z-10 mix-blend-difference text-white max-w-7xl mx-auto w-full">
                {/* Status Tag */}
                <div className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full mb-8 backdrop-blur-sm pointer-events-auto cursor-default hover:bg-white/5 transition-colors">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-medium tracking-wider uppercase text-slate-300">
                        Hiring Trainers & Receptionist
                    </span>
                </div>

                {/* Main Title - Split for 3D Interaction */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 items-center">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.9]">
                        <div className="overflow-hidden">
                            <span ref={titleLeftRef} className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
                                KINETIC STATE
                            </span>
                        </div>
                        <div className="overflow-hidden">
                            <span ref={titleRightRef} className="block text-stroke-2 text-transparent hover:text-white transition-colors duration-500">
                                RAW POWER
                            </span>
                        </div>
                    </h1>
                </div>

                {/* Subheading */}
                <p
                    ref={subRef}
                    className="mt-8 text-xl md:text-2xl font-light text-slate-400 max-w-lg"
                >
                    Dighi&apos;s most spacious fitness destination. 5,000 sq ft of pure potential.
                </p>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-6 md:left-20 animate-bounce text-slate-500">
                    <span className="text-xs uppercase tracking-[0.2em]">Scroll to Explore</span>
                </div>
            </div>
        </section>
    );
}
