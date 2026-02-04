import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TechBackground from "./components/TechBackground";
import NeuralBackground from "@/components/ui/flow-field-background";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-bg-primary">
      <TechBackground />
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 relative overflow-hidden">
          {/* Neural Background for Hero */}
          <div className="absolute inset-0 z-0">
            <NeuralBackground
              color="#6858dd"
              speed={0.8}
              trailOpacity={0.2}
            />
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-block mb-6 px-4 py-2 rounded-full glass-dark border border-brand-primary/20 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-primary animate-fade-in-up">
              Canada-Nigeria Technology Consultancy
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold leading-[1.1] mb-6 sm:mb-8 tracking-tighter animate-fade-in-up delay-100">
              <span className="text-white block sm:inline">Secure blockchain solutions—</span>
              <span className="gradient-text-brand block sm:inline">built to scale,</span>
              <span className="text-white block sm:inline"> delivered with confidence.</span>
            </h1>

            <p className="text-sm sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-4 animate-fade-in-up delay-200">
              We help startups and teams ship smart contracts and blockchain infrastructure faster, without security risks or delivery headaches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-fade-in-up delay-300 w-full sm:w-auto px-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-brand-primary text-bg-primary font-bold uppercase tracking-wide text-xs sm:text-sm hover:glow-brand transition-all duration-300 hover:scale-105 text-center"
              >
                Book Discovery Call
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-lg glass-dark border border-brand-primary/30 text-white font-bold uppercase tracking-wide text-xs sm:text-sm hover:border-brand-primary transition-all duration-300 hover:scale-105 text-center"
              >
                View Services
              </Link>
            </div>

            <div className="animate-fade-in-up delay-400 mb-16 sm:mb-20">
              <p className="text-sm text-text-muted font-medium">
                <span className="text-brand-primary font-bold">Best for:</span> funded startups and teams that need security-first smart contracts, fast.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 animate-fade-in-up delay-500">
              {[
                { label: 'Security First', value: 'Audited Code' },
                { label: 'Clear Communication', value: 'Daily Updates' },
                { label: 'Fast Delivery', value: 'Development' }
              ].map((item, i) => (
                <div key={i} className="text-center p-4 rounded-2xl glass-dark sm:bg-transparent border border-white/5 sm:border-none">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-primary mb-1 sm:mb-2">{item.value}</div>
                  <div className="text-[10px] sm:text-sm text-text-muted font-medium uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Work / Proof Section */}
        <section className="py-16 px-4 sm:px-6 relative bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black mb-8 text-white text-center">
              Recent Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-dark rounded-2xl p-8 hover:border-text-muted transition-colors border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Smart Contract Development</h3>
                  <span className="bg-brand-primary/20 text-brand-primary text-xs font-bold px-3 py-1 rounded-full">DeFi</span>
                </div>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  Designed and implemented secure Solidity smart contracts for a decentralized finance protocol. Focused on gas optimization and audit readiness.
                </p>
                <div className="space-y-2 text-sm text-text-muted">
                  <div className="flex gap-2"><span className="text-brand-primary">✓</span> Delivered within <span className="font-system">3</span>-week timeline</div>
                  <div className="flex gap-2"><span className="text-brand-primary">✓</span> <span className="font-system">100</span>% test coverage</div>
                  <div className="flex gap-2"><span className="text-brand-primary">✓</span> Passed external audit</div>
                </div>
              </div>

              <div className="glass-dark rounded-2xl p-8 hover:border-text-muted transition-colors border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Blockchain Backend System</h3>
                  <span className="bg-brand-primary/20 text-brand-primary text-xs font-bold px-3 py-1 rounded-full">Infrastructure</span>
                </div>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  Built a high-performance Rust backend for real-time blockchain data processing and event indexing.
                </p>
                <div className="space-y-2 text-sm text-text-muted">
                  <div className="flex gap-2"><span className="text-brand-primary">✓</span> Handles <span className="font-system">10</span>k+ events/second</div>
                  <div className="flex gap-2"><span className="text-brand-primary">✓</span> &lt;<span className="font-system">50</span>ms latency</div>
                  <div className="flex gap-2"><span className="text-brand-primary">✓</span> Auto-scaling architecture</div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-text-muted mt-6 italic">(Client details available upon request)</p>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-white">
                What We Build
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                End-to-end blockchain solutions designed for security, scalability, and long-term success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: (<>Blockchain & Web<span className="font-system">3</span> Development</>),
                  desc: "Custom smart contracts, DeFi protocols, and decentralized applications built with Solidity and Rust.",
                  icon: "⛓️"
                },
                {
                  title: "Smart Contract Audits",
                  desc: "Comprehensive security assessments to identify vulnerabilities before deployment.",
                  icon: "🛡️"
                },
                {
                  title: "Fintech Infrastructure",
                  desc: "Payment systems, custody solutions, and blockchain-based financial services.",
                  icon: "💳"
                },
                {
                  title: "MVP Development",
                  desc: "Rapid prototyping and development to get your product to market quickly.",
                  icon: "🚀"
                },
                {
                  title: "Backend & API Development",
                  desc: "Scalable backend systems and APIs built with Node.js, Rust, and modern frameworks.",
                  icon: "⚙️"
                },
                {
                  title: "Technical Consulting",
                  desc: "Architecture planning, technology selection, and strategic technical guidance.",
                  icon: "💡"
                }
              ].map((service, i) => (
                <div
                  key={i}
                  className="glass-dark rounded-2xl p-8 hover:border-glow transition-all duration-500 hover:-translate-y-2 card-tech"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-semibold transition-colors group"
              >
                View All Services
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Why mintymind */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative bg-bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 gradient-text-white-brand">
                Why Choose Nifty Minds
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We bridge the gap between Canadian business standards and global technical excellence, giving you the best of both worlds.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {[
                {
                  flag: "🇨🇦",
                  location: "Toronto",
                  title: "Canadian Standards & Security",
                  points: [
                    "Canadian-style project management & security",
                    "Documentation & privacy-by-design",
                    "Alignment with compliance (SOC 2-ready)",
                    "Direct access to leadership"
                  ]
                },
                {
                  flag: "🇳🇬",
                  location: "Lagos",
                  title: "World-Class Engineering",
                  points: [
                    "Elite Rust and Solidity developers",
                    "Proven track record in Web3",
                    "Cost-effective premium talent",
                    "24/7 development capability"
                  ]
                }
              ].map((item, i) => (
                <div key={i} className="glass-darker rounded-3xl p-10 border-glow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{item.flag}</div>
                    <div>
                      <div className="text-sm text-brand-primary font-semibold">{item.location}</div>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-text-secondary">
                        <span className="text-brand-primary mt-1 flex-shrink-0">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-brand-primary/30 text-brand-primary hover:bg-brand-primary/10 font-semibold transition-all duration-300"
              >
                Learn More About Our Team
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-white">
                How We Work
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                A proven process designed for clarity, speed, and exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  desc: "We start with a deep dive into your business goals and technical requirements."
                },
                {
                  step: "02",
                  title: "Architecture & Planning",
                  desc: "Our team designs a scalable, secure architecture tailored to your needs."
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  desc: "We build and rigorously test your solution with daily progress updates."
                },
                {
                  step: "04",
                  title: "Delivery & Support",
                  desc: "We deploy your solution and provide ongoing support and maintenance."
                }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="glass-dark rounded-2xl p-8 h-full">
                    <div className="text-6xl font-black text-brand-primary/20 mb-4 font-system">{item.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-primary/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-semibold transition-colors group"
              >
                See Our Full Process
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="glass-darker rounded-3xl p-8 sm:p-12 lg:p-16 text-center border-glow">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 gradient-text-white-brand">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                Book a free 30-minute discovery call. We'll discuss your project, answer your questions, and outline a clear path forward.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-lg bg-brand-primary text-bg-primary font-bold text-lg hover:glow-brand transition-all duration-300 hover:scale-105 pulse-glow-brand"
                >
                  Book Your Discovery Call
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-lg glass-dark border border-brand-primary/30 text-white font-semibold text-lg hover:border-brand-primary transition-all duration-300"
                >
                  View Services
                </Link>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
