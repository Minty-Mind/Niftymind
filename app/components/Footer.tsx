import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-8 h-8 opacity-60">
                            <Image src="/logo.png" alt="mintymind logo" fill className="object-contain grayscale" />
                        </div>
                        <span className="font-bold text-lg text-text-muted">mintymind</span>
                    </Link>

                    <div className="text-text-muted text-sm text-center md:text-right">
                        <p>© 2024 mintymind Blockchain Solutions</p>
                        <p className="mt-1">Toronto 🇨🇦 • Lagos 🇳🇬 • Remote-First 🌍</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
