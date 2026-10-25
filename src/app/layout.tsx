import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const noto = Noto_Sans_JP({ variable: "--font-noto-jp", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  title: "ANAWAK — Own More Than a Home. Own Your Future.",
  description: "ANAWAK by JWD Group — exceptional waterfront residences and investment opportunities. Live Beyond Ownership.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${noto.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
