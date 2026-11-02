import LLink from "./LLink";
import { tr, type Locale } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Locale }) {
  const t = tr(lang);
  return (
    <footer className="footer">
      <div className="footer__top">
        <section className="footer__section">
          <h3 className="footer__heading">{t("Company", "企業情報")}</h3>
          <div className="footer__inner">
            <LLink className="footer__link" href="/company-profile">{t("Company Profile", "会社概要")}</LLink>
            <LLink className="footer__link" href="/about">{t("About us", "ANAWAKについて")}</LLink>
            <LLink className="footer__link" href="/jwd-group">{t("The World of JWD", "JWDの世界")}</LLink>
            <LLink className="footer__link" href="/properties">{t("Residences", "レジデンス")}</LLink>
            <LLink className="footer__link" href="/how-it-works">{t("How it works", "ご購入までの歩み")}</LLink>
          </div>
        </section>
        <section className="footer__section">
          <h3 className="footer__heading">{t("Contact us", "お問い合わせ")}</h3>
          <div className="footer__inner">
            <LLink className="footer__link" href="/enquire">{t("Private Consultation", "個別相談会")}</LLink>
            <LLink className="footer__link" href="/#portfolio">{t("Request the Portfolio", "ポートフォリオを請求する")}</LLink>
            <LLink className="footer__link" href="/inspection-tour">{t("Inspection Tour", "不動産視察ツアー")}</LLink>
            <LLink className="footer__link" href="/contact">{t("Contact us", "お問い合わせ")}</LLink>
          </div>
        </section>
      </div>
      <section className="footer__bottom">
        <nav className="footer__nav" aria-label="Legal">
          <LLink className="footer__small" href="/company-profile">{t("Company Profile", "会社概要")}</LLink>
          <LLink className="footer__small" href="#">{t("Privacy", "プライバシーポリシー")}</LLink>
          <LLink className="footer__small" href="#">{t("Terms", "利用規約")}</LLink>
        </nav>
        <div className="footer__left">
          <LLink href="/" className="footer__logo" aria-label="ANAWAK">ANAWAK</LLink>
          <span className="footer__copy">© 2026 ANAWAK · JWD Group. All rights reserved.</span>
          <p className="footer__legal">
            {t(
              "ANAWAK REAL ESTATE L.L.C. · Trade License No. 1124264 · RERA / ORN No. 1162605 · Office M34, AL MAMZAR BLDG, Hor Al Anz, Dubai, UAE",
              "ANAWAK REAL ESTATE L.L.C. · 商業ライセンス番号 1124264 · RERA / ORN番号 1162605 · Office M34, AL MAMZAR BLDG, Hor Al Anz, Dubai, UAE",
            )}
          </p>
        </div>
      </section>
    </footer>
  );
}
