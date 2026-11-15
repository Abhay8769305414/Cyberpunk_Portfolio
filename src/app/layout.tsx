import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABHAY PRATAP SINGH // Cyber-Architect & AI Systems Engineer",
  description:
    "Portfolio of Abhay Pratap Singh — Computer Science graduate (VIT Bhopal '26) architecting multi-agent orchestration platforms, deterministic financial automation pipelines, and high-reliability data workflows.",
  keywords: [
    "Abhay Pratap Singh",
    "Cyberpunk Portfolio",
    "AI Systems Engineer",
    "Data Systems Engineer",
    "FinTech Analyst",
    "Agency OS",
    "Multi-Agent Orchestration",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Abhay Pratap Singh" }],
  openGraph: {
    title: "ABHAY PRATAP SINGH // Cyber-Architect & AI Systems Engineer",
    description:
      "Architecting multi-agent orchestration platforms, deterministic financial automation pipelines, and high-reliability data workflows.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800;900&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-[#F5F5F5] antialiased selection:bg-cyber-red selection:text-white min-h-screen relative font-sans">
        {children}
      </body>
    </html>
  );
}
