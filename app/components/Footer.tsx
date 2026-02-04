import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-16 px-6 border-t border-brand-primary/10 relative z-10 bg-bg-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="relative w-8 h-8">
                                <Image src="/logo.png" alt="Nifty Minds logo" fill className="object-contain" />
                            </div>
                            <span className="font-bold text-xl text-white">Nifty Minds</span>
                        </Link>
                        <p className="text-sm text-text-muted">
                            Canada-Nigeria technology consultancy specializing in blockchain and Web<span className="font-system">3</span> development.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-text-secondary">
                            <li><Link href="/services#blockchain" className="hover:text-brand-primary transition-colors">Blockchain Development</Link></li>
                            <li><Link href="/services#audits" className="hover:text-brand-primary transition-colors">Smart Contract Audits</Link></li>
                            <li><Link href="/services#fintech" className="hover:text-brand-primary transition-colors">Fintech Infrastructure</Link></li>
                            <li><Link href="/services#mvp" className="hover:text-brand-primary transition-colors">MVP Development</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-text-secondary">
                            <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
                            <li><Link href="/how-we-work" className="hover:text-brand-primary transition-colors">How We Work</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Locations</h4>
                        <div className="space-y-4 text-sm text-text-secondary">
                            <div>
                                <div className="font-medium text-white mb-1">🇨🇦 Toronto</div>
                                <p className="text-text-muted">Business & Strategy</p>
                            </div>
                            <div>
                                <div className="font-medium text-white mb-1">🇳🇬 Lagos</div>
                                <p className="text-text-muted">Engineering & Development</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-text-muted">
                        © <span className="font-system">{new Date().getFullYear()}</span> Nifty Minds. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-text-muted">
                        <Link href="/privacy" className="hover:text-brand-primary transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-brand-primary transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
