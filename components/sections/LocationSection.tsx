"use client";

import { useState } from "react";
import Image from "next/image";

const locations = {
    dighi: {
        name: "Dighi Branch",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9907613702458!2d73.8743172!3d18.619485299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7dbb0fefdd9%3A0xfc7c408c5d8bdc76!2sKGF%20FITNESS!5e0!3m2!1sen!2sin!4v1767676133322!5m2!1sen!2sin",
        instagram: "https://instagram.com/kgffitness_dighi",
        whatsapp: "https://wa.me/91XXXXXXXXXX"
    },
    alandi: {
        name: "Alandi Branch",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120951.51192108596!2d73.86473288354931!3d18.675895288752102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7db3f20c737%3A0x8e82f9e519afd2f9!2sKinetic%20Gym%20%26%20Fatloss%20center(KGF%20GYM)!5e0!3m2!1sen!2sin!4v1767676225591!5m2!1sen!2sin",
        instagram: "https://instagram.com/kgffitness_alandi",
        whatsapp: "https://wa.me/91XXXXXXXXXX"
    }
};

export default function LocationSection() {
    const [activeTab, setActiveTab] = useState<"dighi" | "alandi">("dighi");

    return (
        <section id="contact" className="w-full py-20 bg-void-navy relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase text-white mb-4 tracking-tighter">
                        Find Us
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Visit our premium fitness centers. Choose your nearest location.
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/5 p-1 rounded-full flex">
                        <button
                            onClick={() => setActiveTab("dighi")}
                            className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "dighi"
                                ? "bg-kinetic-teal text-void-navy shadow-lg shadow-kinetic-teal/20"
                                : "text-slate-400 hover:text-white"
                                }`}
                        >
                            Dighi
                        </button>
                        <button
                            onClick={() => setActiveTab("alandi")}
                            className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "alandi"
                                ? "bg-kinetic-teal text-void-navy shadow-lg shadow-kinetic-teal/20"
                                : "text-slate-400 hover:text-white"
                                }`}
                        >
                            Alandi
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Map */}
                    <div className="w-full aspect-video md:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                        <iframe
                            suppressHydrationWarning
                            src={locations[activeTab].map}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="transition-all duration-500"
                        ></iframe>
                    </div>

                    {/* Details */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white uppercase mb-2">
                                {locations[activeTab].name}
                            </h3>
                            <div className="h-1 w-20 bg-kinetic-teal"></div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Experience state-of-the-art equipment, expert trainers, and a community driven by results.
                                Join the {locations[activeTab].name} family today.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={locations[activeTab].whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                                Chat on WhatsApp
                            </a>

                            <a
                                href={locations[activeTab].instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                Follow on Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
