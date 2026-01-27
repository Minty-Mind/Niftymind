"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-white/5 bg-bg-primary/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg-primary/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 md:gap-3 group cursor-pointer">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110 duration-300">
                        <Image src="/logo.png" alt="mintymind logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-xl md:text-2xl tracking-tight text-white">
                        Mintymind
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-6 lg:gap-8">
                        {[
                            { name: 'Services', href: '/services' },
                            { name: 'How We Work', href: '/how-we-work' },
                            { name: 'About', href: '/about' }
                        ].map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={item.href}
                                    className="text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-brand-primary transition-all duration-300 relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <Link
                    href="/contact"
                    className="hidden md:block px-6 py-2.5 rounded-lg bg-brand-primary text-bg-primary font-bold uppercase tracking-wide text-xs hover:glow-green-sm transition-all duration-300 hover:scale-105"
                >
                    Book a Call
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-text-secondary hover:text-brand-primary transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden glass-darker border-t border-white/5">
                    <nav className="px-4 py-4 space-y-3">
                        {[
                            { name: 'Services', href: '/services' },
                            { name: 'How We Work', href: '/how-we-work' },
                            { name: 'About', href: '/about' },
                            { name: 'Contact', href: '/contact' }
                        ].map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-3 px-4 rounded-lg text-sm font-bold uppercase tracking-wide text-text-secondary hover:text-brand-primary hover:bg-brand-primary/10 transition-all duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
