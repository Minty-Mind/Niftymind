import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms governing use of the Nifty Minds website and services.",
    alternates: { canonical: "/terms" },
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-bg-primary text-text-primary">
            <Header />
            <main className="max-w-4xl mx-auto py-16 px-6">
                <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
                <p className="mb-4">By accessing or using this website, you agree to these Terms of Service.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Services</h2>
                <p className="mb-4">Nifty Minds Global provides software development, blockchain engineering, security review, and consulting services. Specific deliverables, acceptance criteria, timelines, and fees are defined in individual written agreements (Statements of Work) that supplement these Terms.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">No Guarantees</h2>
                <p className="mb-4">While we strive for high-quality outcomes, we do not guarantee specific business, financial, or technical results.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Smart Contract and Audit Disclaimers</h2>
                <p className="mb-4">Blockchain software — including smart contracts, protocols, and on-chain infrastructure — is inherently experimental. Our services in this area are subject to the following:</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li><strong className="text-white">Audit scope is limited.</strong> Security reviews cover only the code, commits, and scope explicitly defined in the engagement. Findings reflect the state of the code at the time of review. Subsequent changes, external dependencies, compiler updates, or protocol upgrades fall outside that review.</li>
                    <li><strong className="text-white">No guarantee against exploits.</strong> An audit, review, or test suite — however thorough — does not constitute a warranty that code is free of vulnerabilities. We do not insure, indemnify, or guarantee against loss of funds, exploits, hacks, economic attacks, oracle manipulation, or governance failures.</li>
                    <li><strong className="text-white">No financial or legal advice.</strong> Nothing we deliver constitutes financial, investment, regulatory, tax, or legal advice. Clients are solely responsible for compliance with applicable laws in every jurisdiction they operate.</li>
                    <li><strong className="text-white">Third-party risk.</strong> We are not responsible for the behavior, security, or availability of third-party chains, bridges, oracles, libraries, or infrastructure integrated with our deliverables.</li>
                    <li><strong className="text-white">Deployed code.</strong> Once code is deployed on-chain, the client accepts full responsibility for its operation, upgrades, key management, and response to incidents unless otherwise agreed in writing.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Intellectual Property</h2>
                <p className="mb-4">Website content, branding, and materials are owned by Nifty Minds Global unless otherwise stated. Ownership and licensing of code and other work product delivered under an engagement are defined in the applicable Statement of Work. Absent a written assignment, Nifty Minds Global retains all rights in reusable components, libraries, patterns, and know-how developed outside of or incorporated into client deliverables.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Confidentiality</h2>
                <p className="mb-4">Each party will protect confidential information shared during an engagement and use it solely to perform its obligations. Mutual NDAs executed with a client supersede this section where applicable.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Limitation of Liability</h2>
                <p className="mb-4">To the maximum extent permitted by law, Nifty Minds Global&apos;s aggregate liability arising out of or relating to the services or this website is limited to the fees paid to us under the applicable engagement in the six (<span className="font-system">6</span>) months preceding the claim. We are not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, including lost profits, lost tokens, lost revenue, or loss of data, even if advised of the possibility.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Governing Law</h2>
                <p className="mb-4">These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict-of-laws principles. The parties submit to the exclusive jurisdiction of the courts located in Toronto, Ontario.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Changes</h2>
                <p className="mb-4">We may update these Terms from time to time. Continued use of the website after an update constitutes acceptance of the revised Terms.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Contact</h2>
                <p className="mb-4">Email: hello@niftyminds.io</p>
            </main>
            <Footer />
        </div>
    );
}
