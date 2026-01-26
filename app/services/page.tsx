import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundOrbs from "../components/BackgroundOrbs";

export default function ServicesPage() {
    return (
        <div className="min-h-screen relative">
            <BackgroundOrbs />
            <Header />

            <main className="relative z-10 pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 gradient-text-secondary">
                            Core Offerings
                        </h1>
                        <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            End-to-end blockchain solutions tailored for visionary enterprises and ambitious startups.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                icon: "⛓️",
                                title: "Blockchain Development",
                                desc: "Custom Layer 1 and Layer 2 solutions with high-performance Rust backends and decentralized architectures.",
                                gradient: "from-brand-primary to-brand-secondary",
                                features: [
                                    "Custom blockchain protocols",
                                    "Smart contract development (Solidity, Move, Rust)",
                                    "DeFi protocol architecture",
                                    "NFT marketplace development",
                                    "Layer 2 scaling solutions"
                                ]
                            },
                            {
                                icon: "🛡️",
                                title: "Smart Contract Audits",
                                desc: "Institutional-grade security assessments for Solidity and Move contracts with comprehensive vulnerability analysis.",
                                gradient: "from-brand-secondary to-brand-accent",
                                features: [
                                    "Comprehensive security audits",
                                    "Gas optimization analysis",
                                    "Vulnerability detection",
                                    "Detailed audit reports",
                                    "Post-audit support"
                                ]
                            },
                            {
                                icon: "🏗️",
                                title: "Enterprise Integration",
                                desc: "Seamless blockchain integration for traditional systems across logistics, healthcare, and financial services.",
                                gradient: "from-brand-accent to-brand-primary",
                                features: [
                                    "Legacy system integration",
                                    "Supply chain transparency",
                                    "Healthcare data security",
                                    "Financial settlement systems",
                                    "Compliance & regulatory support"
                                ]
                            }
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="group glass-strong rounded-3xl p-8 hover:-translate-y-3 transition-all duration-500 hover:border-brand-primary/50 cursor-pointer relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:gradient-text-primary transition-all">{service.title}</h3>
                                    <p className="text-text-secondary leading-relaxed mb-6">{service.desc}</p>

                                    <ul className="space-y-2 text-sm text-text-muted">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-brand-accent mt-0.5">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="glass-strong rounded-3xl p-12 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 gradient-text-vibrant">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help bring your blockchain vision to life with our proven expertise.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white font-bold text-lg hover:shadow-2xl hover:shadow-brand-primary/50 transition-all duration-300 hover:scale-105 pulse-glow"
                        >
                            Schedule a Consultation →
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
