import Header from "../components/Header";
import Footer from "../components/Footer";
import TechBackground from "../components/TechBackground";
import Link from "next/link";

export default function ServicesPage() {
    const services = [
        {
            id: "blockchain",
            icon: "⛓️",
            title: "Blockchain & Web3 Development",
            tagline: "Custom blockchain solutions built for scale and security",
            description: "We build production-ready blockchain applications using Solidity, Rust, and modern Web3 frameworks. From smart contracts to full DeFi protocols, we handle the entire development lifecycle.",
            whoItsFor: "Web3 startups, DeFi protocols, NFT projects, and enterprises exploring blockchain",
            businessValue: [
                "Faster time to market with experienced developers",
                "Reduced risk through security-first development",
                "Scalable architecture that grows with your business",
                "Lower long-term costs with clean, maintainable code"
            ],
            capabilities: [
                "Smart contract development (Solidity, Rust, Move)",
                "DeFi protocol architecture and implementation",
                "NFT marketplace and minting platforms",
                "Layer 2 scaling solutions",
                "Cross-chain bridge development",
                "Decentralized governance systems"
            ]
        },
        {
            id: "audits",
            icon: "🛡️",
            title: "Smart Contract Audits & Security",
            tagline: "Comprehensive security assessments before you deploy",
            description: "Our security team conducts thorough audits of your smart contracts to identify vulnerabilities, optimize gas usage, and ensure your code meets industry best practices.",
            whoItsFor: "Any project deploying smart contracts to mainnet, especially those handling user funds",
            businessValue: [
                "Protect your users and your reputation",
                "Avoid costly exploits and hacks",
                "Build trust with investors and users",
                "Meet compliance and insurance requirements"
            ],
            capabilities: [
                "Line-by-line code review",
                "Automated vulnerability scanning",
                "Gas optimization analysis",
                "Reentrancy and overflow protection",
                "Access control verification",
                "Detailed audit reports with remediation steps"
            ]
        },
        {
            id: "fintech",
            icon: "💳",
            title: "Fintech & Payment Infrastructure",
            tagline: "Secure, compliant financial systems",
            description: "We build payment systems, custody solutions, and blockchain-based financial services that meet Canadian regulatory standards while leveraging the efficiency of blockchain technology.",
            whoItsFor: "Fintech startups, payment processors, digital banks, and financial institutions",
            businessValue: [
                "Faster settlement times with blockchain rails",
                "Lower transaction costs compared to traditional systems",
                "Enhanced security and transparency",
                "Regulatory compliance built-in from day one"
            ],
            capabilities: [
                "Payment gateway integration",
                "Cryptocurrency custody solutions",
                "Stablecoin payment systems",
                "KYC/AML compliance tools",
                "Multi-signature wallet systems",
                "Real-time settlement infrastructure"
            ]
        },
        {
            id: "mvp",
            icon: "🚀",
            title: "MVP & Startup Engineering",
            tagline: "Get to market fast without compromising quality",
            description: "We help startups build and launch MVPs quickly. Our team works as an extension of yours, providing the technical expertise you need to validate your idea and secure funding.",
            whoItsFor: "Early-stage startups, founders without technical co-founders, companies pivoting to Web3",
            businessValue: [
                "Launch in weeks, not months",
                "Validate your idea with real users",
                "Impress investors with a working product",
                "Build on a foundation that scales"
            ],
            capabilities: [
                "Rapid prototyping and development",
                "Full-stack application development",
                "Product strategy and technical planning",
                "User testing and iteration",
                "Investor demo preparation",
                "Post-launch support and scaling"
            ]
        },
        {
            id: "backend",
            icon: "⚙️",
            title: "Backend & API Development",
            tagline: "Scalable infrastructure for modern applications",
            description: "We build robust backend systems and APIs using Node.js, Rust, and cloud-native technologies. Whether you need to integrate with blockchain networks or build traditional web services, we've got you covered.",
            whoItsFor: "Companies needing reliable backend infrastructure, blockchain indexing, or API development",
            businessValue: [
                "Handle millions of requests with confidence",
                "Reduce infrastructure costs with efficient code",
                "Integrate seamlessly with blockchain networks",
                "Scale automatically as your user base grows"
            ],
            capabilities: [
                "RESTful and GraphQL API development",
                "Blockchain indexing and data aggregation",
                "Microservices architecture",
                "Database design and optimization",
                "Cloud deployment (AWS, GCP, Azure)",
                "Real-time data processing"
            ]
        }
    ];

    return (
        <div className="min-h-screen relative bg-bg-primary">
            <TechBackground />
            <Header />

            <main className="relative z-10 pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl lg:text-6xl font-black mb-6 text-white">
                            Our <span className="gradient-text-green">Services</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            End-to-end blockchain and software development services designed for security, scalability, and long-term success.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className="glass-darker rounded-3xl p-10 lg:p-12 border-glow scroll-mt-32"
                            >
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="text-6xl">{service.icon}</div>
                                    <div className="flex-1">
                                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-3 text-white">
                                            {service.title}
                                        </h2>
                                        <p className="text-xl text-brand-primary font-bold tracking-tight">
                                            {service.tagline}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Who It's For</h3>
                                        <p className="text-text-secondary">{service.whoItsFor}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Business Value</h3>
                                        <ul className="space-y-2">
                                            {service.businessValue.map((value, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                                                    <span className="text-brand-primary mt-0.5 flex-shrink-0">✓</span>
                                                    <span>{value}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">What We Deliver</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {service.capabilities.map((capability, idx) => (
                                            <div key={idx} className="glass-dark rounded-lg p-3 text-sm text-text-secondary">
                                                {capability}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-20 glass-darker rounded-3xl p-12 text-center border-glow">
                        <h2 className="text-3xl lg:text-4xl font-black mb-6 gradient-text-white-green">
                            Not Sure Which Service You Need?
                        </h2>
                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                            Book a free discovery call. We'll discuss your project goals and recommend the right approach.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-lg bg-brand-primary text-bg-primary font-bold text-lg hover:glow-green transition-all duration-300 hover:scale-105"
                        >
                            Schedule a Call
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
