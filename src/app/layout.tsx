import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";

export const metadata: Metadata = {
  title: "JANTRA - Enterprise Software, Reimagined",
  description: "Experience the next generation of spatial computing for business. Modular, intuitive, and designed for the visionaries of tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 antialiased text-slate-900 selection:bg-orange-200">
        <BackgroundOrbs />
        <Navbar />
        <div className="flex-1 flex flex-col min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
