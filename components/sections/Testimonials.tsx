"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
    {
        name: "Rahul Patil",
        role: "Member since 2023",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop", // Placeholder
        text: "The sheer space at KGF is unmatched in Dighi. I never have to wait for equipment, even during peak hours. The 3D vibe is insane!",
        rating: 5,
    },
    {
        name: "Anjali Deshmukh",
        role: "Transformation Client",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop", // Placeholder
        text: "Lost 10kgs in 3 months thanks to the personal training zone. The trainers actually focus on form rather than just pushing heavy weights.",
        rating: 5,
    },
    {
        name: "Vikram Singh",
        role: "bodybuilder",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop", // Placeholder
        text: "Best heavy lifting section. Dumbbells go up to 60kg, squat racks are solid. Finally a real gym for lifters.",
        rating: 5,
    },
    {
        name: "Sneha Kapoor",
        role: "Zumba Enthusiast",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop", // Placeholder
        text: "The group studio acoustics and lighting make every session feel like a party. Love the weekend yoga workshops too.",
        rating: 4,
    },
    {
        name: "Amit Sharma",
        role: "Functional Training",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop", // Placeholder
        text: "The CrossFit zone is world-class. Great community and the vibe is always energetic.",
        rating: 5,
    },
];

export default function Testimonials({ id }: { id?: string }) {
    return (
        <section id={id} className="w-full py-20 bg-void-navy relative z-10 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-20">
                <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase text-white mb-4 tracking-tighter">
                            Stories
                        </h2>
                        <p className="text-slate-400">
                            Real results from real people.
                        </p>
                    </div>
                </div>

                {/* Swiper Container */}
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay, Pagination, EffectCoverflow]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="w-full pb-12"
                    >
                        {testimonials.map((entry, index) => (
                            <SwiperSlide key={index} className="max-w-[350px] md:max-w-[400px]">
                                <div className="h-full bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/20 transition-colors select-none shadow-2xl">
                                    <div>
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-5 h-5 ${i < entry.rating ? 'text-champion-gold' : 'text-slate-700'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-slate-300 text-lg leading-relaxed mb-6">"{entry.text}"</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden">
                                            <div className="w-full h-full bg-gradient-to-br from-kinetic-teal to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                                {entry.name.charAt(0)}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold uppercase">{entry.name}</h4>
                                            <p className="text-slate-500 text-xs uppercase tracking-wider">{entry.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
