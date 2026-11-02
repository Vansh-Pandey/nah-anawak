import Image from "next/image";
import LLink from "./LLink";
import { coteDazur } from "@/lib/data";
import { tr, type Locale } from "@/lib/i18n";

/** The Côte d'Azur offering (Nice / St. Tropez) as shown on the ANAWAK reference page. */
export default function CoteOffer({ lang, heading }: { lang: Locale; heading?: string }) {
  const t = tr(lang);
  const hotels = coteDazur.hotels.map((h) => h.hotel[lang]).join(lang === "ja" ? "、" : ", ");
  return (
    <section className="pd__section">
      <div className="pd__grid">
        <div>
          <div className="cote__photo">
            <Image src={coteDazur.offerImage} alt={t("Côte d'Azur — Nice / St. Tropez", "コート・ダジュール — ニース / セントロペス")} fill sizes="(min-width:1024px) 45vw, 100vw" />
            <span className="cote__tag">{t("Côte d'Azur Nice / St. Tropez", "Côte d'Azur Nice / St. Tropez")}</span>
          </div>
          <dl className="cote__types">
            <dt className="pd__kicker">{t("Price list", "価格表")}</dt>
            {coteDazur.types.map(([ty, v]) => (
              <div className="cote__row" key={ty}>
                <dt>{ty}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="pd__kicker">{coteDazur.label[lang]}</p>
          <h2 className="pd__h2" style={{ marginTop: 16 }}>{heading ?? hotels}</h2>
          <p className="pd__p">{coteDazur.description[lang]}</p>
          <dl className="dlist" style={{ marginTop: 32 }}>
            <div className="dlist__row"><dt>{t("Brand", "ブランド")}</dt><dd>{coteDazur.brand}</dd></div>
            <div className="dlist__row"><dt>{t("Reference price", "参考価格")}</dt><dd>{coteDazur.price}</dd></div>
            <div className="dlist__row"><dt>{t("Units", "取扱")}</dt><dd>{coteDazur.units[lang]}</dd></div>
            <div className="dlist__row"><dt>{t("Owner benefit", "オーナー優待")}</dt><dd>{coteDazur.benefit[lang]}</dd></div>
          </dl>
          <div style={{ marginTop: 40 }}>
            <LLink className="btn btn--blue" href="/enquire">{t("Request Information", "この物件を相談する")}</LLink>
          </div>
        </div>
      </div>
    </section>
  );
}
