import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-bg-primary text-text-primary">
            <Header />
            <main className="max-w-4xl mx-auto py-16 px-6">
                <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
                <p className="mb-4">By accessing or using this website, you agree to these Terms of Service.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Services</h2>
                <p className="mb-4">Nifty Minds Global provides software development, blockchain engineering, and consulting services. Specific deliverables and timelines are defined in individual agreements.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">No Guarantees</h2>
                <p className="mb-4">While we strive for high‑quality outcomes, we do not guarantee specific business results.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Intellectual Property</h2>
                <p className="mb-4">All materials on this site are owned by Nifty Minds Global unless otherwise stated.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Limitation of Liability</h2>
                <p className="mb-4">We are not liable for indirect or consequential damages arising from use of our services or website.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Governing Law</h2>
                <p className="mb-4">These terms are governed by the laws applicable in Canada.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Contact</h2>
                <p className="mb-4">Email: contact@niftymindsglobal.com</p>
            </main>
            <Footer />
        </div>
    );
}
