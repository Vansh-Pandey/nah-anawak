import Image from "next/image";
import LLink from "@/components/LLink";
import CoteOffer from "@/components/CoteOffer";
import { coteDazur, properties } from "@/lib/data";
import { tr } from "@/lib/i18n";
import { getLang, titleMeta, type LangParams } from "@/lib/page";

export const generateMetadata = titleMeta("Côte d'Azur — ANAWAK", "コート・ダジュール — ANAWAK");

export default async function CoteDazurPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = tr(lang);
  const p = properties.find((x) => x.slug === "cote-dazur")!;
  return (
    <>
      <section className="pd__hero">
        <Image src={p.image} alt={p.name} fill priority sizes="100vw" />
        <div className="pd__heroShade" />
        <div className="pd__heroContent">
          <p className="pd__kicker">{t("The Heart of Europe", "ザ・ハート・オブ・ヨーロッパ")}</p>
          <h1 className="pd__name">{p.name}</h1>
          <p className="pd__tag">{p.tagline[lang]}</p>
          <p className="pd__price">{p.price}</p>
        </div>
      </section>

      <section className="pd__section">
        <p className="pd__kicker">{t("Choose your hotel", "ホテルを選ぶ")}</p>
        <h2 className="pd__h2" style={{ marginTop: 16 }}>
          {t("Côte d'Azur is made up of Nice and St. Tropez.", "コート・ダジュールは、ニースとセントロペスで構成されています。")}
        </h2>
        <div className="cote__choose">
          {coteDazur.hotels.map((h) => (
            <LLink key={h.slug} className="pd__rel cote__hotel" href={`/properties/cote-dazur/${h.slug}`}>
              <Image src={h.image} alt={h.hotel[lang]} fill sizes="(min-width:769px) 50vw, 100vw" />
              <span className="pd__relLabel">
                {h.name[lang]}
                <small>{h.hotel[lang]}</small>
              </span>
            </LLink>
          ))}
        </div>
      </section>

      <CoteOffer lang={lang} />
    </>
  );
}
