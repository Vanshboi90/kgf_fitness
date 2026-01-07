"use client";

import { useRef } from "react";

const packages = [
    {
        name: "Monthly",
        price: "1,499",
        duration: "1 Month",
        features: ["Access to Gym Floor", "General Trainer Support", "Locker Access", "Steam Bath (Weekly)"],
        recommended: false,
    },
    {
        name: "Quarterly",
        price: "3,999",
        duration: "3 Months",
        features: ["All Monthly Benefits", "Diet Consultation", "Body Composition Analysis", "1 Personal Training Session"],
        recommended: true,
    },
    {
        name: "Yearly",
        price: "11,999",
        duration: "12 Months",
        features: ["All Quarterly Benefits", "Unlimited Steam Bath", "Free KGF Merchandise", "Nutrition Plan", "Guest Passes (5)"],
        recommended: false,
    },
    {
        name: "Couple (Yearly)",
        price: "21,999",
        duration: "12 Months",
        features: ["Dual Membership", "Couple Training Sessions", "Priority Support", "All Yearly Benefits"],
        recommended: false,
    },
];

export default function Membership({ id }: { id?: string }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section id={id} className="w-full py-20 bg-void-navy/80 backdrop-blur-md relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-20">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase text-white mb-4 tracking-tighter">
                        Membership
                    </h2>
                    <p className="text-slate-400 max-w-xl">
                        Choose your commitment level. No hidden fees. Just pure gains.
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-kinetic -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`flex-none w-[85vw] md:w-[350px] snap-center rounded-3xl p-8 border hover:border-kinetic-teal/50 transition-colors duration-300 flex flex-col relative group ${pkg.recommended
                                ? "bg-gradient-to-br from-slate-800 to-slate-900 border-kinetic-teal shadow-lg shadow-kinetic-teal/10"
                                : "bg-slate-900/50 border-white/10"
                                }`}
                        >
                            {pkg.recommended && (
                                <div className="absolute top-0 right-0 bg-kinetic-teal text-void-navy text-xs font-bold uppercase px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{pkg.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-xl text-slate-400">₹</span>
                                <span className="text-4xl font-black text-white">{pkg.price}</span>
                                <span className="text-sm text-slate-500">/ {pkg.duration}</span>
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-kinetic-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={`https://wa.me/91XXXXXXXXXX?text=Hi, I am interested in the ${pkg.name} membership plan at KGF Fitness.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 block text-center ${pkg.recommended
                                    ? "bg-kinetic-teal text-void-navy hover:bg-white"
                                    : "bg-white/5 text-white hover:bg-white hover:text-void-navy"
                                    }`}
                            >
                                Choose Plan
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
