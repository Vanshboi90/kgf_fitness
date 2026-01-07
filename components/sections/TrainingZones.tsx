"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const zones = [
    {
        id: "01",
        title: "CrossFit & Abs",
        desc: "High Intensity Functional Training",
        color: "from-orange-500 to-red-600",
        image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=2670",
    },
    {
        id: "02",
        title: "Zumba & Yoga",
        desc: "Rhythm, Flow, and Flexibility",
        color: "from-purple-500 to-pink-600",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=2670",
    },
    {
        id: "03",
        title: "Cardio Zone",
        desc: "Top Tier Treadmills & Ellipticals",
        color: "from-blue-500 to-cyan-600",
        image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=2669",
    },
    {
        id: "04",
        title: "Heavy Lifting",
        desc: "Personal Training & Free Weights",
        color: "from-slate-700 to-slate-900",
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=2574",
    },
];

export default function TrainingZones({ id }: { id?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        // We can add scroll-based velocity skew here later
    }, []);

    return (
        <section id={id} ref={containerRef} className="w-full py-20 px-4 md:px-20 bg-void-navy/80 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-white mb-16 tracking-tighter">
                    Training Zones
                </h2>

                <div className="flex flex-col gap-4">
                    {zones.map((zone) => {
                        const isActive = activeId === zone.id;
                        return (
                            <div
                                key={zone.id}
                                onClick={() => setActiveId(isActive ? null : zone.id)}
                                className={`group relative w-full overflow-hidden border-t border-white/10 transition-all duration-500 cursor-pointer
                                    ${isActive ? 'h-64 md:h-80 border-white/30' : 'h-32 md:h-40 hover:border-white/30 hover:h-64 md:hover:h-80'}
                                `}
                            >
                                {/* Background Image */}
                                <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                    <img src={zone.image} alt={zone.title} className={`w-full h-full object-cover transition-all duration-700 transform ${isActive ? 'grayscale-0 scale-105' : 'grayscale group-hover:grayscale-0 group-hover:scale-105'}`} />
                                    <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-transparent' : 'bg-black/60 group-hover:bg-transparent'}`} />
                                </div>

                                {/* Content */}
                                <div className={`relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full p-6 md:p-10 pointer-events-none transition-transform duration-500 ${isActive ? 'translate-x-4' : 'group-hover:translate-x-4'}`}>
                                    <div className="flex items-center gap-6">
                                        <span className={`text-xl md:text-2xl font-mono transition-colors ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>
                                            {zone.id}
                                        </span>
                                        <div>
                                            <h3 className="text-3xl md:text-5xl font-bold text-white uppercase italic">
                                                {zone.title}
                                            </h3>
                                            <p className={`text-sm md:text-base text-slate-400 mt-2 transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                                {zone.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`mt-4 md:mt-0 transition-opacity duration-500 transform text-white text-xl ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                                        &rarr;
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="border-t border-white/10"></div>
                </div>
            </div>
        </section>
    );
}
