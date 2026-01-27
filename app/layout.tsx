import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "Nifty Minds | Canadian Standards. Global Technical Excellence.",
  description: "Bridging North American business needs with world-class blockchain development. Specializing in Rust, Solidity, and Enterprise Web3 solutions.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unigeo.variable}`}>
        {children}
      </body>
    </html>
  );
}
