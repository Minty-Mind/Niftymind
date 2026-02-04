import Header from "../components/Header";
import Footer from "../components/Footer";
import TechBackground from "../components/TechBackground";
import CalendlyWidget from "../components/CalendlyWidget";

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
                            Schedule a free 30-minute discovery call. We'll discuss your project, answer your questions, and outline a clear path forward.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Calendly Widget */}
                        <div className="lg:col-span-3 space-y-12">
                            <CalendlyWidget />

                            {/* Contact Form */}
                            <div className="glass-darker rounded-3xl p-8 lg:p-12 border-glow">
                                <h2 className="text-2xl font-bold mb-6 text-white">Or Send us a message</h2>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-text-secondary mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                required
                                                className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-text-secondary mb-2">Work Email *</label>
                                            <input
                                                type="email"
                                                placeholder="john@company.com"
                                                required
                                                className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-text-secondary mb-2">Company</label>
                                        <input
                                            type="text"
                                            placeholder="Your Company Name"
                                            className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-text-secondary mb-2">Service Interest</label>
                                            <select className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white transition-all appearance-none cursor-pointer">
                                                <option value="">Select a service</option>
                                                <option value="blockchain">Blockchain Development</option>
                                                <option value="audit">Smart Contract Audit</option>
                                                <option value="fintech">Fintech Infrastructure</option>
                                                <option value="mvp">MVP Development</option>
                                                <option value="backend">Backend & API</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-text-secondary mb-2">Preferred Timeline</label>
                                            <select className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white transition-all appearance-none cursor-pointer">
                                                <option value="">Select timeline</option>
                                                <option value="asap">ASAP</option>
                                                <option value="1-3-months">1-3 Months</option>
                                                <option value="flexible">Flexible</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-text-secondary mb-2">Budget Range (Optional)</label>
                                        <select className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white transition-all appearance-none cursor-pointer">
                                            <option value="">Select budget range</option>
                                            <option value="<10k">&lt; $10k</option>
                                            <option value="10k-25k">$10k - $25k</option>
                                            <option value="25k-50k">$25k - $50k</option>
                                            <option value="50k+">$50k+</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-text-secondary mb-2">Project Details *</label>
                                        <textarea
                                            placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                                            rows={6}
                                            required
                                            className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 rounded-lg bg-brand-primary/5 border border-brand-primary/10">
                                        <input type="checkbox" required id="human-check" className="mt-1 w-4 h-4 rounded border-brand-primary/30 text-brand-primary focus:ring-brand-primary bg-bg-tertiary" />
                                        <label htmlFor="human-check" className="text-sm text-text-secondary">I am not a robot</label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-lg bg-brand-primary text-bg-primary font-bold text-lg hover:glow-green transition-all duration-300 hover:scale-[1.02]"
                                    >
                                        Send Message →
                                    </button>

                                    <p className="text-sm text-text-muted text-center">
                                        We'll respond within 24 hours. All conversations are confidential.
                                    </p>
                                </form>
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
                                        <div className="text-3xl">🇳🇬</div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Lagos Office</h4>
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
