import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/universal/Navbar";
import Footer from "@/components/universal/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stones Village Inc.",
  description:
    "Stones Village Inc. is a company that sells, supplies, fabricates, and installs stones for kitchens, bathrooms, vanity, and more. We have a wide variety of stones such as marble, onyx, quartz, and porcelain. We are located in the heart of the city of Vaughan, Ontario.",
  keywords:
    "stones, marble, onyx, porcelain, quartz, kitchen, vanity, countertops, slabs, supply, fabricate, install, vaughan",
};

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11399823022"
        ></script>
        <script>
          {gtag("js", new Date())}
          {gtag("config", "AW-11399823022")}
        </script>
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
