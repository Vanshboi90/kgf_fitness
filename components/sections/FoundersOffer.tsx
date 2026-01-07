"use client";

export default function FoundersOffer() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-20 bg-void-navy/80 backdrop-blur-md relative z-10">
            <div className="max-w-4xl w-full text-center">
                <h2 className="text-kinetic-teal font-medium uppercase tracking-[0.2em] mb-4">
                    Limited Time Opportunity
                </h2>
                <h3 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8">
                    Founder&apos;s Offer
                </h3>

                <div className="relative inline-block">
                    <div className="text-2xl text-slate-500 line-through decoration-red-500 decoration-2">
                        ₹16,999
                    </div>
                    <div className="text-7xl md:text-9xl font-bold text-champion-gold mt-2">
                        ₹9,999<span className="text-2xl text-white font-normal align-top">/YR</span>
                    </div>
                    <div className="absolute -top-6 -right-12 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase -rotate-12 animate-pulse">
                        First 100 Only
                    </div>
                </div>

                <p className="text-slate-400 mt-8 mb-12 text-lg max-w-lg mx-auto">
                    Be a Founder. First 100 members lock the legacy rate forever.
                </p>

                <a
                    href="https://wa.me/919881827872?text=I%20want%20to%20claim%20the%20Founder%20Offer"
                    target="_blank"
                    className="inline-block bg-white text-void-navy px-12 py-5 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-kinetic-teal hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                    Claim via WhatsApp
                </a>
            </div>
        </section>
    );
}
