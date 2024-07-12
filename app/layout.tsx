import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Containers/Header";
import { siteConfig } from "@/config/site"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seller AMP - Tools for Amazon sellers",
  description: "Sourcing Analysis Simplified - Easily understand key indicators that help you profitably source products to sell on Amazon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
