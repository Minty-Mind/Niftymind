import { NextResponse } from "next/server";

export const runtime = "nodejs";

const CONTACT_TO = process.env.CONTACT_TO_EMAIL || "hello@niftyminds.io";
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL || "Nifty Minds <hello@niftyminds.io>";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

type Payload = {
    name?: string;
    email?: string;
    company?: string;
    service?: string;
    timeline?: string;
    budget?: string;
    message?: string;
    website?: string;
};

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
    let body: Payload;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    // honeypot — silent drop for bots
    if (body.website && body.website.trim().length > 0) {
        return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
        return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }
    if (!isEmail(email)) {
        return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (message.length > 5000 || name.length > 200) {
        return NextResponse.json({ error: "Input too long." }, { status: 400 });
    }

    const company = (body.company ?? "").trim();
    const service = (body.service ?? "").trim();
    const timeline = (body.timeline ?? "").trim();
    const budget = (body.budget ?? "").trim();

    const subject = `New inquiry: ${name}${company ? ` (${company})` : ""}${service ? ` — ${service}` : ""}`;

    const rows = [
        ["Name", name],
        ["Email", email],
        ["Company", company || "—"],
        ["Service", service || "—"],
        ["Timeline", timeline || "—"],
        ["Budget", budget || "—"],
    ];

    const html = `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px;">
            <h2 style="margin:0 0 16px;">New Nifty Minds inquiry</h2>
            <table style="border-collapse: collapse; width: 100%; margin-bottom: 16px;">
                ${rows
                    .map(
                        ([k, v]) => `
                <tr>
                    <td style="padding:6px 12px 6px 0; color:#555; font-weight:600; vertical-align:top;">${escapeHtml(k)}</td>
                    <td style="padding:6px 0;">${escapeHtml(v)}</td>
                </tr>`,
                    )
                    .join("")}
            </table>
            <h3 style="margin:16px 0 8px;">Project details</h3>
            <p style="white-space: pre-wrap; line-height: 1.5;">${escapeHtml(message)}</p>
        </div>
    `;

    const text = [
        ...rows.map(([k, v]) => `${k}: ${v}`),
        "",
        "Project details:",
        message,
    ].join("\n");

    if (!RESEND_API_KEY) {
        console.warn("[contact] RESEND_API_KEY not set — inquiry logged only, no email sent:", {
            name,
            email,
            company,
            service,
            timeline,
            budget,
        });
        return NextResponse.json({ ok: true, delivered: false }, { status: 200 });
    }

    try {
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: CONTACT_FROM,
                to: [CONTACT_TO],
                reply_to: email,
                subject,
                html,
                text,
            }),
        });

        if (!res.ok) {
            const errText = await res.text();
            console.error("[contact] Resend error:", res.status, errText);
            return NextResponse.json(
                { error: "Email delivery failed. Please email hello@niftyminds.io directly." },
                { status: 502 },
            );
        }

        return NextResponse.json({ ok: true, delivered: true }, { status: 200 });
    } catch (err) {
        console.error("[contact] fetch failed:", err);
        return NextResponse.json(
            { error: "Email delivery failed. Please email hello@niftyminds.io directly." },
            { status: 502 },
        );
    }
}
