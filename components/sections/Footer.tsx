export default function Footer({ id }: { id?: string }) {
    return (
        <footer id={id} className="w-full bg-void-navy border-t border-white/10 pt-20 pb-10 relative z-10 overflow-hidden">
            {/* Background Texture - Optional subtle gradient/glow could be added here */}

            <div className="max-w-7xl mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand & Socials */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <h3 className="text-3xl font-bold uppercase tracking-tighter text-white">
                                KGF <span className="text-kinetic-teal">Fitness</span>
                            </h3>
                            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                                Dighi's Premier Fitness Destination. <br />
                                5,000 Sq Ft of Kinetic Luxury designed to transform your life.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {/* Instagram */}
                            <a href="https://instagram.com/kgffitness_dighi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-kinetic-teal hover:text-void-navy flex items-center justify-center transition-all duration-300 text-white" aria-label="Instagram">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* Facebook - Placeholder for now, can be added if specific URL known */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-kinetic-teal hover:text-void-navy flex items-center justify-center transition-all duration-300 text-white" aria-label="Facebook">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Explore</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Services', 'Membership', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-kinetic-teal transition-colors text-sm uppercase tracking-wide">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-slate-400 hover:text-kinetic-teal transition-colors text-sm uppercase tracking-wide flex items-center gap-2">
                                    Careers
                                    <span className="text-[10px] bg-kinetic-teal text-void-navy px-1.5 py-0.5 rounded font-bold">HIRING</span>
                                </a>
                            </li>
                            {['Privacy Policy', 'Terms of Service', 'FAQs'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-kinetic-teal transition-colors text-sm uppercase tracking-wide">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Locations */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Visit Us</h4>
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-kinetic-teal text-sm font-bold uppercase mb-2">Dighi Branch</h5>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Rajnandini Towers, 2nd Floor<br />
                                    Above HDFC Bank, Opp Pizza Hut<br />
                                    Dighi, Pune
                                </p>
                            </div>
                            <div>
                                <h5 className="text-kinetic-teal text-sm font-bold uppercase mb-2">Alandi Branch</h5>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Global Punany<br />
                                    Alandi, Pune
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} KGF Fitness. All rights reserved.</p>
                    <p>Open 365 Days | 5:00 AM – 11:00 PM</p>
                </div>
            </div>
        </footer>
    );
}
