"use client";

import { useRef } from "react";

export default function TheSpace({ id }: { id?: string }) {
    return (
        <section id={id} className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-20 py-20 bg-void-navy/50 backdrop-blur-sm z-10">
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-white mb-12 tracking-tighter">
                    The Space
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-[80vh] md:h-[600px]">
                    {/* Box 1: Gym Floor Image (Placeholder Style) */}
                    <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-slate-800/50 rounded-3xl border border-white/10 overflow-hidden group relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
                            alt="Gym Floor"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <h3 className="text-2xl font-bold text-white mb-1">5,000 SQ FT</h3>
                            <p className="text-slate-300">Rajnandini Towers</p>
                        </div>
                    </div>

                    {/* Box 2: Map */}
                    <div className="col-span-1 bg-slate-800/50 rounded-3xl border border-white/10 overflow-hidden p-6 flex flex-col justify-between hover:border-kinetic-teal/50 transition-colors cursor-pointer group">
                        <div>
                            <div className="w-10 h-10 rounded-full bg-kinetic-teal/20 flex items-center justify-center mb-4 text-kinetic-teal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Find Us</h3>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-slate-400 mb-4">2nd Floor, Above HDFC Bank,<br />Opp Pizza Hut, Dighi</p>
                            <a href="https://maps.app.goo.gl/YourMapLink" target="_blank" className="text-kinetic-teal text-sm font-semibold hover:underline group-hover:translate-x-1 transition-transform inline-block">Open Google Maps &rarr;</a>
                        </div>
                    </div>

                    {/* Box 3: Opening Date */}
                    <div className="col-span-1 bg-champion-gold rounded-3xl border border-champion-gold overflow-hidden p-6 flex flex-col justify-center items-center text-center relative group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        <h3 className="text-void-navy font-bold text-lg uppercase tracking-widest mb-2 z-10">Grand Opening</h3>
                        <p className="text-4xl md:text-5xl font-black text-void-navy z-10">JAN 5</p>
                        <p className="text-void-navy font-medium z-10">2026</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
