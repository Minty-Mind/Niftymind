"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

declare global {
    interface Window {
        plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void;
    }
}

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = {
            name: String(formData.get("name") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            company: String(formData.get("company") ?? "").trim(),
            service: String(formData.get("service") ?? "").trim(),
            timeline: String(formData.get("timeline") ?? "").trim(),
            budget: String(formData.get("budget") ?? "").trim(),
            message: String(formData.get("message") ?? "").trim(),
            // honeypot — real users leave blank
            website: String(formData.get("website") ?? "").trim(),
        };

        if (!payload.name || !payload.email || !payload.message) {
            setStatus("error");
            setErrorMessage("Please fill in name, email, and project details.");
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data?.error || `Request failed (${res.status})`);
            }

            setStatus("success");
            form.reset();
            window.plausible?.("form_submitted", {
                props: { service: payload.service || "unspecified" },
            });
        } catch (err) {
            setStatus("error");
            setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please email hello@niftyminds.io.");
        }
    }

    const submitting = status === "submitting";

    return (
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            {/* honeypot */}
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-secondary mb-2">Full Name *</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        disabled={submitting}
                        className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all disabled:opacity-60"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-secondary mb-2">Work Email *</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        disabled={submitting}
                        className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all disabled:opacity-60"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-semibold text-text-secondary mb-2">Company</label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company Name"
                    disabled={submitting}
                    className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all disabled:opacity-60"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-text-secondary mb-2">Service Interest</label>
                    <select
                        id="service"
                        name="service"
                        disabled={submitting}
                        className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white transition-all appearance-none cursor-pointer disabled:opacity-60"
                    >
                        <option value="">Select a service</option>
                        <option value="blockchain">Blockchain Development</option>
                        <option value="audit">Smart Contract Audit</option>
                        <option value="fintech">Fintech Infrastructure</option>
                        <option value="mvp">MVP Development</option>
                        <option value="backend">Backend & API</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-text-secondary mb-2">Preferred Timeline</label>
                    <select
                        id="timeline"
                        name="timeline"
                        disabled={submitting}
                        className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white transition-all appearance-none cursor-pointer disabled:opacity-60"
                    >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 Months</option>
                        <option value="flexible">Flexible</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-text-secondary mb-2">Budget Range (Optional)</label>
                <select
                    id="budget"
                    name="budget"
                    disabled={submitting}
                    className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white transition-all appearance-none cursor-pointer disabled:opacity-60"
                >
                    <option value="">Select budget range</option>
                    <option value="<10k">&lt; $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k+">$50k+</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-text-secondary mb-2">Project Details *</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    rows={6}
                    required
                    disabled={submitting}
                    className="w-full bg-bg-tertiary border border-brand-primary/20 rounded-lg p-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-white placeholder:text-text-muted transition-all resize-none disabled:opacity-60"
                ></textarea>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-brand-primary/5 border border-brand-primary/10">
                <input
                    type="checkbox"
                    required
                    id="human-check"
                    disabled={submitting}
                    className="mt-1 w-4 h-4 rounded border-brand-primary/30 text-brand-primary focus:ring-brand-primary bg-bg-tertiary"
                />
                <label htmlFor="human-check" className="text-sm text-text-secondary">I am not a robot</label>
            </div>

            <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-lg bg-brand-primary text-bg-primary font-bold text-lg hover:glow-green transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
                {submitting ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
                <div
                    role="status"
                    className="p-4 rounded-lg bg-brand-primary/10 border border-brand-primary/30 text-sm text-white"
                >
                    Thanks — your message is in. We&apos;ll respond within <span className="font-system">24</span> hours to hello@niftyminds.io.
                </div>
            )}

            {status === "error" && (
                <div
                    role="alert"
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-200"
                >
                    {errorMessage || "Something went wrong. Please email hello@niftyminds.io."}
                </div>
            )}

            <p className="text-sm text-text-muted text-center">
                We&apos;ll respond within 24 hours. All conversations are confidential.
            </p>
        </form>
    );
}
