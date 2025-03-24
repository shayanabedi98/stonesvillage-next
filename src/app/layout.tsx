import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/universal/Navbar";
import Footer from "@/components/universal/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextAuthProvider } from "@/components/universal/Providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stones Village Inc.",
  description:
    "Stones Village Inc. is a company that sells, supplies, fabricates, and installs stones for kitchens, bathrooms, vanity, and more. We have a wide variety of stones such as marble, onyx, quartz, and porcelain. We are located in the heart of the city of Vaughan, Ontario.",
  keywords:
    "stones, marble, onyx, porcelain, quartz, kitchen, vanity, countertops, slabs, supply, fabricate, install, vaughan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NextAuthProvider>
          <div className="flex flex-col min-h-lvh">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </NextAuthProvider>
      </body>
      <GoogleTagManager gtmId="AW-11399823022" />
    </html>
  );
}
