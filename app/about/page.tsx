import Header from "../components/Header";
import Footer from "../components/Footer";
import TechBackground from "../components/TechBackground";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen relative bg-bg-primary">
            <TechBackground />
            <Header />

            <main className="relative z-10 pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
                            About <span className="gradient-text-green">Nifty Minds</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            We're a Canada-Nigeria technology consultancy bridging continents to deliver exceptional blockchain solutions.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="glass-darker rounded-3xl p-12 lg:p-16 mb-16 border-glow">
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-white tracking-tight">Our Mission</h2>
                        <p className="text-xl text-text-secondary leading-relaxed mb-6">
                            We exist to make world-class blockchain development accessible to Canadian startups and enterprises. By combining Canadian business standards with elite engineering talent, we deliver secure, scalable solutions at a pace and price point that traditional agencies can't match.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            We believe the future of technology is global, collaborative, and built on trust. That's why we've structured our team to give you the best of both worlds: local project management and communication paired with world-class technical execution.
                        </p>
                    </div>

                    {/* The Model */}
                    <div className="mb-20">
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center text-white tracking-tight">
                            Our <span className="gradient-text-green">Cross-Border</span> Model
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Toronto */}
                            <div className="glass-darker rounded-3xl p-10 border-glow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-6xl">🇨🇦</div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">Toronto, Canada</div>
                                        <h3 className="text-2xl font-bold text-white">Business & Strategy</h3>
                                    </div>
                                </div>

                                <p className="text-text-secondary mb-6 leading-relaxed">
                                    Our Toronto office handles all client-facing operations, ensuring you get the clear communication, transparency, and business standards you expect from a Canadian company.
                                </p>

                                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">What We Handle</h4>
                                <ul className="space-y-2 text-text-secondary text-sm">
                                    {[
                                        "Project management and client communication",
                                        "Business strategy and technical planning",
                                        "Compliance and regulatory guidance",
                                        "Contract negotiation and legal coordination",
                                        "Quality assurance and delivery oversight"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-brand-primary mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Lagos */}
                            <div className="glass-darker rounded-3xl p-10 border-glow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-6xl">🇳🇬</div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">Lagos, Nigeria</div>
                                        <h3 className="text-2xl font-bold text-white">Engineering & Development</h3>
                                    </div>
                                </div>

                                <p className="text-text-secondary mb-6 leading-relaxed">
                                    Our Lagos-based engineering team brings deep expertise in Rust, Solidity, and modern Web3 frameworks. They're the technical powerhouse behind every project we deliver.
                                </p>

                                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">What We Build</h4>
                                <ul className="space-y-2 text-text-secondary text-sm">
                                    {[
                                        "Smart contract development and auditing",
                                        "Backend and distributed systems",
                                        "DeFi protocol architecture",
                                        "API development and integration",
                                        "Security testing and optimization"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-brand-primary mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why This Works */}
                    <div className="glass-darker rounded-3xl p-12 lg:p-16 mb-16 border-glow">
                        <h2 className="text-3xl lg:text-4xl font-black mb-8 text-white">Why This Model Works</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "⚡",
                                    title: "24/7 Development",
                                    desc: "While Toronto sleeps, Lagos builds. Your project progresses around the clock."
                                },
                                {
                                    icon: "💎",
                                    title: "Premium Quality",
                                    desc: "You get Canadian business standards paired with world-class technical talent."
                                },
                                {
                                    icon: "💰",
                                    title: "Smart Economics",
                                    desc: "Access elite developers at rates that make sense for your budget."
                                }
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-text-secondary text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Values */}
                    <div className="mb-16">
                        <h2 className="text-3xl lg:text-4xl font-black mb-12 text-center text-white">
                            Our <span className="gradient-text-green">Values</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Trust & Transparency",
                                    desc: "We communicate clearly, meet our commitments, and never overpromise. You'll always know exactly where your project stands."
                                },
                                {
                                    title: "Security First",
                                    desc: "Every line of code is written with security in mind. We follow industry best practices and conduct thorough testing before deployment."
                                },
                                {
                                    title: "Long-Term Partnership",
                                    desc: "We're not just developers for hire. We're strategic partners invested in your long-term success."
                                },
                                {
                                    title: "Technical Excellence",
                                    desc: "We stay at the cutting edge of blockchain technology, constantly learning and improving our craft."
                                }
                            ].map((value, i) => (
                                <div key={i} className="glass-dark rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                    <p className="text-text-secondary leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="glass-darker rounded-3xl p-12 text-center border-glow">
                        <h2 className="text-3xl lg:text-4xl font-black mb-6 gradient-text-white-green">
                            Let's Work Together
                        </h2>
                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                            Ready to experience the Nifty Minds difference? Book a call and let's discuss your project.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-lg bg-brand-primary text-bg-primary font-bold text-lg hover:glow-green transition-all duration-300 hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
