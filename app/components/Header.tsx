import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="glass-strong fixed top-0 left-0 right-0 z-50 border-t-0 border-x-0 rounded-none">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative w-10 h-10 transition-transform group-hover:scale-110 duration-300">
                        <Image src="/logo.png" alt="mintymind logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-white via-brand-accent to-brand-primary bg-clip-text text-transparent">
                        mintymind
                    </span>
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        {[
                            { name: 'Services', href: '/services' },
                            { name: 'About', href: '/about' },
                            { name: 'Contact', href: '/contact' }
                        ].map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-text-secondary hover:text-white transition-all duration-300 relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Link
                    href="/contact"
                    className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold text-sm hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 hover:scale-105"
                >
                    Get Started
                </Link>
            </div>
        </header>
    );
}
