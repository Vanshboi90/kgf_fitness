export default function Footer({ id }: { id?: string }) {
    return (
        <footer id={id} className="w-full bg-void-navy/80 backdrop-blur-md border-t border-white/10 px-6 md:px-20 py-20 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40">
                <div>
                    <h4 className="text-white text-xl font-bold uppercase mb-6">Dighi Branch</h4>
                    <p className="text-slate-400 mb-4">
                        Rajnandini Towers, 2nd Floor<br />
                        Above HDFC Bank, Opp Pizza Hut<br />
                        Dighi, Pune
                    </p>
                    <a href="https://www.instagram.com/kgf_fitness_dighi" target="_blank" className="text-kinetic-teal hover:underline text-sm uppercase tracking-wider">
                        @kgf_fitness_dighi
                    </a>
                </div>

                <div>
                    <h4 className="text-white text-xl font-bold uppercase mb-6">Alandi Branch (Est. 2023)</h4>
                    <p className="text-slate-400 mb-4">
                        Global Punany<br />
                        Alandi, Pune
                    </p>
                    <a href="https://www.instagram.com/kgf.gym.alandi_" target="_blank" className="text-kinetic-teal hover:underline text-sm uppercase tracking-wider">
                        @kgf.gym.alandi_
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} KGF Fitness. All rights reserved.</p>
                <p className="mt-2 md:mt-0 font-mono">Open 365 Days | 5:00 AM – 11:00 PM</p>
            </div>
        </footer>
    );
}
