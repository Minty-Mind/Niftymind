import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundOrbs from "./components/BackgroundOrbs";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <BackgroundOrbs />
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
          {/* Hero background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt="Global Blockchain Network"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full glass border border-brand-primary/30 text-sm font-medium text-brand-accent">
              🚀 Bridging Continents, Building the Future
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tight">
              <span className="gradient-text-vibrant">Canadian Standards.</span>
              <br />
              <span className="text-white">Global Technical</span>
              <br />
              <span className="gradient-text-secondary">Excellence.</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Elite blockchain development powered by the perfect synergy of
              <span className="text-brand-accent font-semibold"> North American business rigor</span> and
              <span className="text-brand-primary font-semibold"> world-class engineering talent</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white font-bold text-lg hover:shadow-2xl hover:shadow-brand-primary/50 transition-all duration-300 hover:scale-105 pulse-glow"
              >
                Start Your Project
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-full glass-strong border border-brand-primary/50 text-white font-semibold text-lg hover:border-brand-primary transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              {[
                { value: '24/7', label: 'Development Cycle' },
                { value: '100%', label: 'Client Satisfaction' },
                { value: '2', label: 'Continents United' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl lg:text-5xl font-black gradient-text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-text-muted font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-24 lg:py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 gradient-text-secondary">
                What We Do Best
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Comprehensive blockchain solutions from concept to deployment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "⛓️",
                  title: "Blockchain Development",
                  desc: "Custom Layer 1/2 solutions with Rust and Solidity expertise",
                  gradient: "from-brand-primary to-brand-secondary"
                },
                {
                  icon: "🛡️",
                  title: "Smart Contract Audits",
                  desc: "Institutional-grade security assessments and vulnerability analysis",
                  gradient: "from-brand-secondary to-brand-accent"
                },
                {
                  icon: "🏗️",
                  title: "Enterprise Integration",
                  desc: "Seamless blockchain integration for traditional business systems",
                  gradient: "from-brand-accent to-brand-primary"
                }
              ].map((service, i) => (
                <div
                  key={i}
                  className="group glass-strong rounded-3xl p-8 hover:-translate-y-3 transition-all duration-500 hover:border-brand-primary/50 cursor-pointer relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-text-secondary leading-relaxed mb-6">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-primary font-semibold transition-colors group"
              >
                View All Services
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 lg:py-32 px-6 relative bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 gradient-text-vibrant">
                The mintymind Advantage
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Why leading companies choose us for their blockchain initiatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🌍",
                  title: "24/7 Development",
                  desc: "Round-the-clock progress with our dual-continent team structure"
                },
                {
                  icon: "🎯",
                  title: "Battle-Tested Expertise",
                  desc: "Deep experience in Rust, Solidity, and enterprise blockchain"
                },
                {
                  icon: "💎",
                  title: "Premium Quality",
                  desc: "Canadian business standards meet world-class technical execution"
                },
                {
                  icon: "⚡",
                  title: "Rapid Delivery",
                  desc: "Faster time-to-market with our always-on development cycle"
                }
              ].map((advantage, i) => (
                <div key={i} className="glass rounded-2xl p-6 text-center hover:glass-strong transition-all duration-300">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-white">{advantage.title}</h3>
                  <p className="text-sm text-text-secondary">{advantage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 lg:py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 gradient-text-primary">
                Our Tech Stack
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Cutting-edge technologies for robust blockchain solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Rust", icon: "🦀" },
                { name: "Solidity", icon: "💎" },
                { name: "Move", icon: "🔷" },
                { name: "Ethereum", icon: "Ξ" },
                { name: "Polygon", icon: "🟣" },
                { name: "Solana", icon: "◎" },
                { name: "Chainlink", icon: "🔗" },
                { name: "IPFS", icon: "📦" },
                { name: "The Graph", icon: "📊" },
                { name: "Hardhat", icon: "⚒️" },
                { name: "Web3.js", icon: "🌐" },
                { name: "Docker", icon: "🐳" }
              ].map((tech, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-6 text-center hover:glass-strong hover:border-brand-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <div className="text-sm font-semibold text-text-secondary group-hover:text-white transition-colors">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Bridge Teaser */}
        <section className="py-24 lg:py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                  <span className="gradient-text-vibrant">Two Continents.</span>
                  <br />
                  <span className="text-white">One Unstoppable Team.</span>
                </h2>

                <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                  Our unique dual-continent structure combines Canadian business excellence with Nigerian technical mastery, creating a 24-hour development powerhouse.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4 items-start">
                    <span className="text-3xl">🇨🇦</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Toronto Hub</h4>
                      <p className="text-text-secondary text-sm">Project management, client relations, and business strategy</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-3xl">🇳🇬</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Lagos Hub</h4>
                      <p className="text-text-secondary text-sm">Elite engineering team specializing in Rust and Solidity</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold transition-all duration-300 group"
                >
                  Learn More About Our Story
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              <div className="glass-strong rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10"></div>

                <div className="relative z-10">
                  <div className="text-7xl mb-8 float-animation">🌍</div>
                  <h3 className="text-3xl font-black mb-6 gradient-text-primary">Always-On Development</h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-8">
                    While one hemisphere sleeps, the other builds. Your project never stops moving forward.
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
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 lg:py-32 px-6 relative bg-gradient-to-b from-bg-primary to-bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 gradient-text-secondary">
                Trusted by Innovators
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                What our clients say about working with mintymind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The dual-continent model is genius. We got 24/7 development without the premium price tag of a purely North American team.",
                  author: "Sarah Chen",
                  role: "CTO, DeFi Protocol",
                  avatar: "👩‍💼"
                },
                {
                  quote: "mintymind's Rust expertise helped us build a high-performance Layer 2 solution that exceeded all our benchmarks.",
                  author: "Michael Rodriguez",
                  role: "Founder, NFT Marketplace",
                  avatar: "👨‍💻"
                },
                {
                  quote: "Professional, responsive, and technically brilliant. They turned our blockchain vision into reality in record time.",
                  author: "Amara Okafor",
                  role: "CEO, Supply Chain Platform",
                  avatar: "👩‍🔬"
                }
              ].map((testimonial, i) => (
                <div key={i} className="glass-strong rounded-3xl p-8 hover:border-brand-primary/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <p className="text-text-secondary italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-text-muted">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 lg:py-32 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-strong rounded-3xl p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10"></div>

              <div className="relative z-10">
                <h2 className="text-4xl lg:text-6xl font-black mb-6 gradient-text-vibrant">
                  Ready to Build Something Extraordinary?
                </h2>
                <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join the companies transforming their industries with blockchain technology.
                  Let's discuss your vision in a free 30-minute consultation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white font-bold text-lg hover:shadow-2xl hover:shadow-brand-primary/50 transition-all duration-300 hover:scale-105 pulse-glow"
                  >
                    Schedule Free Consultation →
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-4 rounded-full glass border border-brand-primary/50 text-white font-semibold text-lg hover:border-brand-primary transition-all duration-300 hover:scale-105"
                  >
                    View Our Services
                  </Link>
                </div>

                <div className="mt-10 flex items-center justify-center gap-8 text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">✓</span>
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">✓</span>
                    <span>Response within 24 hours</span>
                  </div>
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
