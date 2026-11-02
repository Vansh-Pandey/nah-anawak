import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "ANAWAK — Own More Than a Home. Own Your Future.",
  description: "ANAWAK by JWD Group — exceptional waterfront residences and investment opportunities. Live Beyond Ownership.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
