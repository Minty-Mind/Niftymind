import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundOrbs from "../components/BackgroundOrbs";

export default function ContactPage() {
    return (
        <div className="min-h-screen relative">
            <BackgroundOrbs />
            <Header />

            <main className="relative z-10 pt-32 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 gradient-text-vibrant">
                            Ready to Build the Future?
                        </h1>
                        <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            Book a free 30-minute consultation to discuss your blockchain roadmap with our experts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="glass-strong rounded-3xl p-8 lg:p-12">
                            <h2 className="text-2xl font-bold mb-6 gradient-text-secondary">Send us a message</h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-text-secondary mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-text-secondary mb-2">Work Email *</label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-text-secondary mb-2">Company</label>
                                    <input
                                        type="text"
                                        placeholder="Your Company Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-text-secondary mb-2">Service Interest</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white transition-all">
                                        <option value="">Select a service</option>
                                        <option value="blockchain-dev">Blockchain Development</option>
                                        <option value="smart-contract-audit">Smart Contract Audit</option>
                                        <option value="enterprise-integration">Enterprise Integration</option>
                                        <option value="consultation">General Consultation</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-text-secondary mb-2">Project Details *</label>
                                    <textarea
                                        placeholder="Tell us about your vision, timeline, and any specific requirements..."
                                        rows={6}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white font-bold text-lg hover:shadow-2xl hover:shadow-brand-primary/50 transition-all duration-300 hover:scale-[1.02] pulse-glow"
                                >
                                    Send Inquiry →
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="glass-strong rounded-3xl p-8">
                                <h3 className="text-2xl font-bold mb-6 gradient-text-primary">Get in Touch</h3>

                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="text-3xl">📧</div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Email</h4>
                                            <a href="mailto:hello@mintymind.io" className="text-brand-accent hover:text-brand-primary transition-colors">
                                                hello@mintymind.io
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="text-3xl">🇨🇦</div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Toronto Office</h4>
                                            <p className="text-text-secondary text-sm">
                                                123 Bay Street, Suite 400<br />
                                                Toronto, ON M5J 2N8
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="text-3xl">🇳🇬</div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Lagos Office</h4>
                                            <p className="text-text-secondary text-sm">
                                                Victoria Island<br />
                                                Lagos, Nigeria
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-strong rounded-3xl p-8">
                                <h3 className="text-xl font-bold mb-4 text-white">What to Expect</h3>
                                <div className="space-y-4 text-sm text-text-secondary">
                                    <div className="flex gap-3 items-start">
                                        <span className="text-brand-accent font-bold">1.</span>
                                        <p>We'll respond within 24 hours to schedule your free consultation</p>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <span className="text-brand-accent font-bold">2.</span>
                                        <p>30-minute discovery call to understand your needs</p>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <span className="text-brand-accent font-bold">3.</span>
                                        <p>Custom proposal delivered within 48 hours</p>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <span className="text-brand-accent font-bold">4.</span>
                                        <p>Kickoff within 1 week of agreement</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-strong rounded-3xl p-8 text-center">
                                <div className="text-4xl mb-4">⚡</div>
                                <h3 className="text-xl font-bold mb-2 gradient-text-secondary">Urgent Project?</h3>
                                <p className="text-sm text-text-secondary mb-4">
                                    Need immediate assistance? Schedule a same-day call.
                                </p>
                                <a
                                    href="https://calendly.com/mintymind"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-3 rounded-full border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold text-sm transition-all duration-300"
                                >
                                    Book Calendar →
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
