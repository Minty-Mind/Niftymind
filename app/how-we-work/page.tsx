import Header from "../components/Header";
import Footer from "../components/Footer";
import TechBackground from "../components/TechBackground";
import Link from "next/link";

export default function HowWeWorkPage() {
    const process = [
        {
            step: "01",
            title: "Discovery & Strategy",
            duration: (<><span className="font-system">1</span>-<span className="font-system">2</span> weeks</>),
            description: "We start by understanding your business goals, technical requirements, and success criteria. This isn't a sales call—it's a collaborative planning session.",
            activities: [
                "Initial discovery call to understand your vision",
                "Technical requirements gathering",
                "Architecture planning and technology selection",
                "Timeline and budget estimation",
                "Risk assessment and mitigation planning"
            ],
            deliverables: [
                "Project proposal with clear scope",
                "Technical architecture document",
                "Development timeline",
                "Fixed-price quote or retainer agreement"
            ]
        },
        {
            step: "02",
            title: "Architecture & Planning",
            duration: (<><span className="font-system">1</span>-<span className="font-system">2</span> weeks</>),
            description: "Before writing a single line of code, we design a scalable, secure architecture that will support your long-term growth.",
            activities: [
                "Detailed system architecture design",
                "Database schema and data modeling",
                "Smart contract architecture (if applicable)",
                "Security review and threat modeling",
                "Development environment setup"
            ],
            deliverables: [
                "System architecture diagrams",
                "Technical specification document",
                "Security assessment report",
                "Development roadmap with milestones"
            ]
        },
        {
            step: "03",
            title: "Development & Testing",
            duration: (<><span className="font-system">4</span>-<span className="font-system">12</span> weeks</>),
            description: "Our team builds your solution using agile methodology, with daily progress updates and regular demos. You'll never be left wondering what's happening.",
            activities: [
                (<>Sprint-based development (<span className="font-system">2</span>-week sprints)</>),
                "Daily standup meetings with the team",
                "Continuous integration and testing",
                "Code reviews and quality assurance",
                "Regular demos and feedback sessions"
            ],
            deliverables: [
                "Working software deployed to staging",
                "Comprehensive test coverage",
                "Technical documentation",
                "Weekly progress reports",
                "Demo videos of new features"
            ]
        },
        {
            step: "04",
            title: "Delivery & Long-Term Support",
            duration: "Ongoing",
            description: "We don't just hand over the code and disappear. We ensure a smooth launch and provide ongoing support to keep your system running smoothly.",
            activities: [
                "Production deployment and monitoring",
                "Team training and knowledge transfer",
                "Performance optimization",
                "Bug fixes and maintenance",
                "Feature enhancements and scaling"
            ],
            deliverables: [
                "Production-ready application",
                "Complete source code and documentation",
                "Deployment guides and runbooks",
                "Ongoing support and maintenance (optional)",
                "Regular security updates"
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
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
                            How We <span className="gradient-text-brand">Work</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            A proven, transparent process designed to deliver exceptional results on time and on budget.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="space-y-16 mb-20">
                        {process.map((item, index) => (
                            <div key={index} className="glass-darker rounded-3xl p-10 lg:p-12 border-glow">
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="text-7xl font-black text-brand-primary/30 font-system">{item.step}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-2">
                                            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">{item.title}</h2>
                                            <span className="px-3 py-1 rounded-full glass-dark text-xs font-bold uppercase tracking-widest text-brand-primary">
                                                {item.duration}
                                            </span>
                                        </div>
                                        <p className="text-lg text-text-secondary leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">What We Do</h3>
                                        <ul className="space-y-2">
                                            {item.activities.map((activity, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                                                    <span className="text-brand-primary mt-0.5 flex-shrink-0">→</span>
                                                    <span>{activity}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">What You Get</h3>
                                        <ul className="space-y-2">
                                            {item.deliverables.map((deliverable, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                                                    <span className="text-brand-primary mt-0.5 flex-shrink-0">✓</span>
                                                    <span>{deliverable}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Communication */}
                    <div className="glass-darker rounded-3xl p-12 lg:p-16 mb-16 border-glow">
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 text-white tracking-tight">
                            Communication & <span className="gradient-text-brand">Transparency</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Daily Updates",
                                    desc: "You'll receive daily progress updates via Slack or email. No surprises, ever."
                                },
                                {
                                    title: "Weekly Demos",
                                    desc: "See your product come to life with weekly demo videos and live walkthroughs."
                                },
                                {
                                    title: "Direct Access",
                                    desc: "You'll have direct access to our team leads—no layers of account managers."
                                }
                            ].map((item, i) => (
                                <div key={i} className="glass-dark rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-text-secondary text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="glass-darker rounded-3xl p-12 text-center border-glow">
                        <h2 className="text-3xl lg:text-4xl font-black mb-6 gradient-text-white-brand">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                            Book a free discovery call. We'll walk you through our process and answer all your questions.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-lg bg-brand-primary text-bg-primary font-bold text-lg hover:glow-brand transition-all duration-300 hover:scale-105"
                        >
                            Schedule Your Call
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
