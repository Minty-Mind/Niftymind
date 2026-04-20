import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TechBackground from "./components/TechBackground";

export const metadata = {
    title: "Page Not Found",
    description: "We couldn't find the page you were looking for.",
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <div className="min-h-screen relative bg-bg-primary">
            <TechBackground />
            <Header />

            <main className="relative z-10 pt-32 pb-24 px-6 min-h-[70vh] flex items-center">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="text-7xl lg:text-9xl font-black gradient-text-brand mb-6 font-system tracking-tighter">
                        404
                    </div>
                    <h1 className="text-3xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
                        We couldn&apos;t find that page.
                    </h1>
                    <p className="text-lg lg:text-xl text-text-secondary mb-10 leading-relaxed max-w-xl mx-auto">
                        The link may be broken, or the page may have moved. Here&apos;s where most people end up going next.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href="/services"
                            className="px-8 py-4 rounded-lg bg-brand-primary text-bg-primary font-bold text-base hover:glow-green transition-all duration-300 hover:scale-105"
                        >
                            View Services
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-lg border border-brand-primary text-brand-primary font-bold text-base hover:bg-brand-primary/10 transition-all duration-300"
                        >
                            Book a Discovery Call
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-text-muted">
                        <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-brand-primary transition-colors">About</Link>
                        <Link href="/how-we-work" className="hover:text-brand-primary transition-colors">How We Work</Link>
                        <Link href="/faq" className="hover:text-brand-primary transition-colors">FAQ</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
