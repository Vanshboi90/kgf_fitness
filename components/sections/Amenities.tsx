"use client";

const amenities = [
    { title: "Steam Bath", desc: "Post-workout recovery", icon: "😶‍🌫️" },
    { title: "Diet Café", desc: "Nutrition + BMI Machine", icon: "🥗" },
    { title: "Trekking", desc: "Community Activities", icon: "🏔️" },
    { title: "Game Zone", desc: "Table Tennis & Play", icon: "🏓" },
];

export default function Amenities() {
    return (
        <section className="w-full py-32 px-4 md:px-20 bg-void-navy relative z-10 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-kinetic-teal/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-white mb-16 text-right tracking-tighter">
                    Lifestyle &<br />Recovery
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {amenities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 uppercase">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
