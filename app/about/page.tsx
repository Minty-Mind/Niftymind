import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundOrbs from "../components/BackgroundOrbs";

export default function AboutPage() {
    return (
        <div className="min-h-screen relative">
            <BackgroundOrbs />
            <Header />

            <main className="relative z-10 pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                            <span className="gradient-text-vibrant">The Dual-Continent</span>
                            <br />
                            <span className="text-white">Advantage</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            <span className="font-bold text-white">mintymind</span> harnesses a unique synergy between
                            Canadian business excellence and Nigerian technical mastery to deliver unparalleled results.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                        <div className="space-y-8">
                            {[
                                {
                                    flag: "🇨🇦",
                                    title: "Onshore Management",
                                    desc: "North American business rigor, transparent communication, and local project oversight.",
                                    color: "brand-primary",
                                    details: [
                                        "Toronto-based project management",
                                        "Real-time communication in your timezone",
                                        "Canadian business standards & compliance",
                                        "Direct access to leadership"
                                    ]
                                },
                                {
                                    flag: "🇳🇬",
                                    title: "Global Dev Power",
                                    desc: "Elite Rust and Solidity engineers working in complementary time zones for 24-hour development cycles.",
                                    color: "brand-secondary",
                                    details: [
                                        "Lagos-based technical team",
                                        "World-class Rust & Solidity expertise",
                                        "Continuous development workflow",
                                        "Cost-effective premium talent"
                                    ]
                                }
                            ].map((item, i) => (
                                <div key={i} className="glass-strong rounded-3xl p-8 group hover:border-brand-primary/50 transition-all duration-300">
                                    <div className="flex gap-5 items-start">
                                        <div className={`text-5xl group-hover:scale-125 transition-transform duration-300`}>
                                            {item.flag}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-2xl font-bold text-${item.color} mb-3`}>{item.title}</h3>
                                            <p className="text-text-secondary leading-relaxed mb-6">{item.desc}</p>

                                            <ul className="space-y-2 text-sm">
                                                {item.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-text-muted">
                                                        <span className="text-brand-accent mt-0.5">✓</span>
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-8">
                            {/* Always-On Development */}
                            <div className="glass-strong rounded-3xl p-12 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10"></div>

                                <div className="relative z-10">
                                    <div className="text-7xl mb-8 float-animation">🌍</div>
                                    <h3 className="text-3xl font-black mb-6 gradient-text-primary">Always-On Development</h3>
                                    <p className="text-lg text-text-secondary leading-relaxed mb-8">
                                        While one hemisphere sleeps, the other builds. This ensures lightning-fast delivery cycles and unmatched responsiveness.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="glass rounded-xl p-4">
                                            <div className="font-bold text-brand-accent mb-1">Toronto</div>
                                            <div className="text-text-muted">9 AM - 5 PM EST</div>
                                        </div>
                                        <div className="glass rounded-xl p-4">
                                            <div className="font-bold text-brand-secondary mb-1">Lagos</div>
                                            <div className="text-text-muted">2 PM - 10 PM WAT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Why This Matters */}
                            <div className="glass-strong rounded-3xl p-8">
                                <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">Why This Matters</h3>
                                <div className="space-y-4 text-text-secondary">
                                    <div className="flex gap-3 items-start">
                                        <span className="text-2xl">⚡</span>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Faster Time to Market</h4>
                                            <p className="text-sm">Round-the-clock development means your project progresses 24/7, not just 8 hours a day.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <span className="text-2xl">💰</span>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Premium Quality, Smart Pricing</h4>
                                            <p className="text-sm">Access world-class talent at rates that make sense for your budget.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <span className="text-2xl">🤝</span>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Best of Both Worlds</h4>
                                            <p className="text-sm">Canadian business standards with global technical excellence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="glass-strong rounded-3xl p-12 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 gradient-text-vibrant">
                            Experience the Difference
                        </h2>
                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                            Join forward-thinking companies who've discovered the power of our dual-continent approach.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white font-bold text-lg hover:shadow-2xl hover:shadow-brand-primary/50 transition-all duration-300 hover:scale-105 pulse-glow"
                        >
                            Let's Talk →
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
