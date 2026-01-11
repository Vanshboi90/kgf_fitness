"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Membership", href: "#membership" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

import { createPortal } from "react-dom";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on scroll
    useEffect(() => {
        if (!isOpen) return;

        const handleScroll = () => {
            setIsOpen(false);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
            setIsOpen(false);
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-void-navy/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 z-50">
                        <div className="relative w-10 h-10 md:w-12 md:h-12">
                            <Image
                                src="/logo.avif"
                                unoptimized
                                alt="KGF Fitness Logo"
                                fill
                                className="object-contain rounded-full"
                                priority
                            />
                        </div>
                        <span className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-white">
                            KGF <span className="text-kinetic-teal">Fitness</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="text-sm uppercase tracking-wider text-slate-300 hover:text-kinetic-teal transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#membership"
                            onClick={(e) => scrollToSection(e, "#membership")}
                            className="px-6 py-2 bg-white text-void-navy text-sm font-bold uppercase tracking-wider hover:bg-kinetic-teal transition-colors rounded-full"
                        >
                            Join Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden z-50 text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Portaled to Body */}
            {mounted && createPortal(
                <div
                    className={`fixed inset-0 bg-void-navy z-[60] flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <button
                        className="absolute top-6 right-6 md:right-10 text-white focus:outline-none"
                        onClick={() => setIsOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col gap-8 text-center">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="text-2xl uppercase font-bold text-white hover:text-kinetic-teal transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
