import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Warplink — Design & Engineering Studio, Lagos",
  description: "We design and build digital products for African founders. Fast execution, clean code, premium output. Based in Lagos.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://warplink.space"),
  alternates: {
    canonical: "https://warplink.space",
  },
  openGraph: {
    title: "Warplink — Design & Engineering Studio, Lagos",
    description: "We design and build digital products for African founders. Fast execution, clean code, premium output. Based in Lagos.",
    url: "https://warplink.space",
    siteName: "Warplink",
    images: [
      {
        url: "https://warplink.space/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warplink — Design & Engineering Studio, Lagos",
    description: "We design and build digital products for African founders. Fast execution, clean code, premium output. Based in Lagos.",
    images: ["https://warplink.space/og-image.png"],
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
