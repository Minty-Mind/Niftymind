import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-bg-primary text-text-primary">
            <Header />
            <main className="max-w-4xl mx-auto py-16 px-6">
                <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
                <p className="mb-4">Nifty Minds Global ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Information We Collect</h2>
                <p className="mb-4">We may collect personal information such as your name, email address, company name, and any details you submit through our contact forms or scheduling tools.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">How We Use Your Information</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>To respond to inquiries</li>
                    <li>To schedule and conduct discovery calls</li>
                    <li>To provide and improve our services</li>
                    <li>To communicate project‑related information</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Data Protection</h2>
                <p className="mb-4">We follow industry‑standard security practices to protect your information. We do not sell or rent your personal data to third parties.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Third‑Party Services</h2>
                <p className="mb-4">We may use trusted third‑party tools (such as scheduling or analytics services) that process data on our behalf.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Your Rights</h2>
                <p className="mb-4">You may request access, correction, or deletion of your personal information at any time by contacting us.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">Contact</h2>
                <p className="mb-4">Email: contact@niftymindsglobal.com</p>
            </main>
            <Footer />
        </div>
    );
}
