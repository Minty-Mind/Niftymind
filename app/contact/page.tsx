import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TechBackground from "../components/TechBackground";
import CalendlyWidget from "../components/CalendlyWidget";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
    title: "Contact — Book a Discovery Call",
    description: "Schedule a free 30-minute discovery call or send us your project details. We respond within 24 hours.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact | Nifty Minds",
        description: "Schedule a free 30-minute discovery call or send us your project details. We respond within 24 hours.",
        url: "/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen relative bg-bg-primary">
            <TechBackground />
            <Header />

            <main className="relative z-10 pt-32 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
                            Book Your <span className="gradient-text-brand">Discovery Call</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            Schedule a free <span className="font-system">30</span>-minute discovery call. We&apos;ll discuss your project, answer your questions, and outline a clear path forward.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Calendly Widget */}
                        <div className="lg:col-span-3 space-y-12">
                            <CalendlyWidget />

                            {/* Contact Form */}
                            <div className="glass-darker rounded-3xl p-8 lg:p-12 border-glow">
                                <h2 className="text-2xl font-bold mb-6 text-white">Or Send us a message</h2>
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="glass-darker rounded-3xl p-8 border-glow">
                                <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>

                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="text-3xl">📧</div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Email</h4>
                                            <a href="mailto:hello@niftyminds.io" className="text-brand-primary hover:text-brand-secondary transition-colors">
                                                hello@niftyminds.io
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="text-3xl">🇨🇦</div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Toronto Office</h4>
                                            <p className="text-text-secondary text-sm">
                                                Business & Strategy Hub
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="text-3xl">🌍</div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Global Engineering</h4>
                                            <p className="text-text-secondary text-sm">
                                                Engineering & Development Hub
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-darker rounded-3xl p-8 border-glow">
                                <h3 className="text-xl font-bold mb-4 text-white">What Happens Next?</h3>
                                <div className="space-y-4 text-sm text-text-secondary">
                                    <div className="flex gap-3 items-start">
                                        <span className="text-brand-primary font-bold font-system">1.</span>
                                        <p>We'll respond within <span className="font-system">24</span> hours to schedule your free consultation</p>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <span className="text-brand-primary font-bold font-system">2.</span>
                                        <p><span className="font-system">30</span>-minute discovery call to understand your needs and goals</p>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <span className="text-brand-primary font-bold font-system">3.</span>
                                        <p>Custom proposal with timeline and pricing within <span className="font-system">48</span> hours</p>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <span className="text-brand-primary font-bold font-system">4.</span>
                                        <p>Project kickoff within <span className="font-system">1</span> week of agreement</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-darker rounded-3xl p-8 text-center border-glow">
                                <div className="text-4xl mb-4">⚡</div>
                                <h3 className="text-lg font-bold mb-2 text-white">Urgent Project?</h3>
                                <p className="text-sm text-text-secondary mb-4">
                                    Need to move fast? We can start as soon as next week.
                                </p>
                                <a
                                    href="mailto:hello@niftyminds.io?subject=Urgent Project Inquiry"
                                    className="inline-block px-6 py-3 rounded-lg border border-brand-primary text-brand-primary hover:bg-brand-primary/10 font-semibold text-sm transition-all duration-300"
                                >
                                    Email Us Directly
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
