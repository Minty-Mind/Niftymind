import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const unigeo = localFont({
  src: [
    {
      path: './unigeo64-trial-webfont/Unigeo64-Thin-trial.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: './unigeo64-trial-webfont/Unigeo64-Extralight-trial.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: './unigeo64-trial-webfont/Unigeo64-Light-trial.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './unigeo64-trial-webfont/Unigeo64-Regular-trial.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './unigeo64-trial-webfont/Unigeo64-Medium-trial.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './unigeo64-trial-webfont/Unigeo64-Semibold-trial.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './unigeo64-trial-webfont/Unigeo64-Bold-trial.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './unigeo64-trial-webfont/Unigeo64-Extrabold-trial.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: "--font-unigeo",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://niftyminds.io";
const SITE_NAME = "Nifty Minds";
const SITE_TITLE = "Nifty Minds | Canadian Standards. Global Technical Excellence.";
const SITE_DESCRIPTION =
  "Canadian blockchain consultancy. Secure smart contracts, audits, and Web3 infrastructure — built to scale, delivered with confidence.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Nifty Minds",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "blockchain development",
    "smart contract audit",
    "Solidity",
    "Rust",
    "Web3 consultancy",
    "DeFi development",
    "fintech infrastructure",
    "Canadian blockchain agency",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_CA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nifty Minds — Canadian Standards. Global Technical Excellence.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0a",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "Nifty Minds Global",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressCountry: "CA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@niftyminds.io",
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${unigeo.variable}`}>
        {children}
        {plausibleDomain && (
          <Script
            src="https://plausible.io/js/script.js"
            data-domain={plausibleDomain}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
