import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "../globals.css";
import "../pages.css";
import "../i18n.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import Loader from "@/components/Loader";
import { isLocale, locales, tr } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/locale";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
// Japanese glyphs are loaded on demand (unicode-range slices), so nothing is preloaded for English visitors.
const noto = Noto_Sans_JP({ variable: "--font-noto-jp", subsets: ["latin"], weight: ["400", "500", "700"], preload: false });

type Props = { children: React.ReactNode; params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = tr(lang);
  return {
    title: t("ANAWAK — Own More Than a Home. Own Your Future.", "ANAWAK — 単なる住まいを超える価値を。未来の資産をその手に。"),
    description: t(
      "ANAWAK by JWD Group — exceptional waterfront residences and investment opportunities. Live Beyond Ownership.",
      "JWDグループが提供するANAWAK — 卓越したウォーターフロントレジデンスと価値ある投資機会。所有の先にある暮らしを。",
    ),
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${inter.variable} ${noto.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LocaleProvider lang={lang}>
          <Loader />
          <Header />
          <main>{children}</main>
          <Footer lang={lang} />
          <Effects />
        </LocaleProvider>
      </body>
    </html>
  );
}
