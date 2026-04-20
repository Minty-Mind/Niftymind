import type { Metadata } from "next";
import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TechBackground from "../components/TechBackground";
import Link from "next/link";

function withNumericFont(text: string) {
    const parts = text.split(/(\d[\d.,]*)/g);
    return parts.map((part, i) =>
        /^\d/.test(part) ? (
            <span key={i} className="font-system">{part}</span>
        ) : (
            <Fragment key={i}>{part}</Fragment>
        ),
    );
}

export const metadata: Metadata = {
    title: "FAQ — Frequently Asked Questions",
    description: "Answers to common questions about working with Nifty Minds: engagement structure, pricing, audits, timelines, IP, and security.",
    alternates: { canonical: "/faq" },
    openGraph: {
        title: "FAQ | Nifty Minds",
        description: "Answers to common questions about working with Nifty Minds: engagement structure, pricing, audits, timelines, IP, and security.",
        url: "/faq",
    },
};

type Faq = { q: string; a: string };

const faqs: { section: string; items: Faq[] }[] = [
    {
        section: "Engagement & Pricing",
        items: [
            {
                q: "How are projects scoped and priced?",
                a: "Every engagement starts with a free 30-minute discovery call and a written proposal. We price fixed-scope work as a flat fee, and ongoing work on a retainer or time-and-materials basis. Pricing is set after we understand your requirements — we do not publish rate cards because blockchain work varies dramatically in complexity.",
            },
            {
                q: "What is a typical engagement size?",
                a: "Most client projects fall between roughly $10k and $100k+. Smart contract audits and short-scope MVP builds tend to sit on the lower end; full DeFi protocols, custody systems, or multi-chain infrastructure projects are larger.",
            },
            {
                q: "How quickly can you start?",
                a: "For well-scoped projects we can typically kick off within one week of signing the agreement. For urgent work, reach out at hello@niftyminds.io with the word “urgent” in the subject line.",
            },
            {
                q: "Do you offer a free consultation?",
                a: "Yes. The 30-minute discovery call is free and carries no obligation. If we are not the right fit for your project we will say so, and where possible we will refer you to someone who is.",
            },
        ],
    },
    {
        section: "Smart Contract Audits",
        items: [
            {
                q: "What does an audit include?",
                a: "A line-by-line review of the in-scope code, automated tooling (static analysis, symbolic execution where relevant), threat modeling for the protocol’s economic and governance design, and a written report with severity-rated findings and remediation guidance. We also re-review fixes at no additional charge for findings raised during the audit.",
            },
            {
                q: "Do you guarantee the audited code is secure?",
                a: "No auditor can honestly guarantee that. An audit substantially reduces risk but does not eliminate it. Our Terms of Service detail the limits of this work; in short, audits cover only the defined scope and commit, and cannot insure against exploits. We are explicit about this because we take it seriously.",
            },
            {
                q: "How long does an audit take?",
                a: "Most engagements run 1–2 weeks depending on size and complexity. Larger protocols or systems with novel cryptography take longer. We always give a written timeline before starting.",
            },
        ],
    },
    {
        section: "Working With Us",
        items: [
            {
                q: "Who will I work with?",
                a: "You get direct access to the engineering leads on your project — not account managers acting as go-betweens. For larger projects a technical project manager coordinates daily updates, weekly demos, and delivery timelines.",
            },
            {
                q: "How do you communicate during a project?",
                a: "Daily written updates in a shared Slack or Discord channel, weekly demo sessions over video, and direct access to the engineers on your project. All code ships to a shared repository from day one.",
            },
            {
                q: "Who owns the code you write?",
                a: "Client deliverables are assigned to you on payment, subject to the Statement of Work. We retain rights only to generic, reusable components and internal tooling we develop independently. The specifics are spelled out in every engagement letter.",
            },
            {
                q: "Do you sign NDAs?",
                a: "Yes. We sign mutual NDAs before discussing any sensitive material, and we are comfortable working under existing NDAs your legal team has drafted.",
            },
        ],
    },
    {
        section: "Technology & Compliance",
        items: [
            {
                q: "Which chains and languages do you work with?",
                a: "Primary stack: Solidity (EVM chains), Rust (Solana, Cosmos SDK, Substrate), and TypeScript/Node.js for backend and indexing. We have also shipped on Move-based chains and Bitcoin Layer 2s. If your stack is outside this list, ask — we will tell you honestly whether we are the right fit.",
            },
            {
                q: "Are you SOC 2 or ISO 27001 certified?",
                a: "Not yet. We operate to SOC 2-ready internal practices (access controls, documentation, incident response, secrets management) and will provide details during due diligence. Formal certification is planned; it is not currently in place.",
            },
            {
                q: "Do you handle KYC/AML or regulated fintech work?",
                a: "We build the technical infrastructure that supports regulated processes (identity verification integrations, auditable transaction flows, custody-ready architectures). We do not provide legal or compliance advice — clients are responsible for engaging counsel in the relevant jurisdictions.",
            },
        ],
    },
];

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((section) =>
        section.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
            },
        })),
    ),
};

export default function FaqPage() {
    return (
        <div className="min-h-screen relative bg-bg-primary">
            <TechBackground />
            <Header />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <main className="relative z-10 pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
                            Frequently Asked <span className="gradient-text-brand">Questions</span>
                        </h1>
                        <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            Straight answers to the questions we get most often. If you don&apos;t see yours here,{" "}
                            <Link href="/contact" className="text-brand-primary hover:text-brand-secondary underline">
                                send it to us directly
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="space-y-16">
                        {faqs.map((section, sIdx) => (
                            <section key={sIdx}>
                                <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-6 tracking-tight">
                                    {section.section}
                                </h2>
                                <div className="space-y-4">
                                    {section.items.map((item, iIdx) => (
                                        <details
                                            key={iIdx}
                                            className="group glass-darker rounded-2xl border border-brand-primary/10 open:border-brand-primary/30 transition-colors"
                                        >
                                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4 p-6 text-white font-semibold text-lg">
                                                <span>{withNumericFont(item.q)}</span>
                                                <span
                                                    aria-hidden="true"
                                                    className="text-brand-primary text-2xl leading-none transition-transform group-open:rotate-45 shrink-0"
                                                >
                                                    +
                                                </span>
                                            </summary>
                                            <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                                                {withNumericFont(item.a)}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <div className="glass-darker rounded-3xl p-12 mt-20 text-center border-glow">
                        <h2 className="text-3xl lg:text-4xl font-black mb-4 gradient-text-white-green">
                            Still have questions?
                        </h2>
                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                            Book a free <span className="font-system">30</span>-minute discovery call and we&apos;ll answer them in person.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-lg bg-brand-primary text-bg-primary font-bold text-lg hover:glow-green transition-all duration-300 hover:scale-105"
                        >
                            Book a Discovery Call
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
