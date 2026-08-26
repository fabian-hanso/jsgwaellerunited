import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSG Wäller United",
  description: "Jugendfußball aus dem Westerwald - für den Westerwald.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <>
        <Navbar />
        {children}
        <Footer />
        </>
        <Script
          src="https://www.fussball.de/widgets.js"
          strategy="afterInteractive"
        />
        </body>
    </html>
  );
}
