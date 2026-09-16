import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Single Solution — Find The Leverage. Fix The Right Problem.",
  description:
    "Single Solution helps businesses identify where they are losing time or money, then deploys focused solutions across AI, automation, custom software, dashboards, growth, and marketing.",
  keywords: [
    "AI Agents",
    "Automation Systems",
    "Custom Software",
    "Internal Dashboards",
    "Growth & Marketing",
    "Business Optimization",
    "Operations Leverage"
  ],
  authors: [{ name: "Single Solution" }],
  openGraph: {
    title: "Single Solution — Find The Leverage. Fix The Right Problem.",
    description:
      "Find the leverage. Fix the right problem. Create measurable impact with AI, automation, custom software, and marketing.",
    type: "website",
    locale: "en_US",
    siteName: "Single Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Single Solution — Find The Leverage.",
    description:
      "We identify which part of your business is costing you time and money, then deploy tested solutions to fix it for you.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
