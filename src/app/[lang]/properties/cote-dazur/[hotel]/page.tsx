import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import LLink from "@/components/LLink";
import CoteOffer from "@/components/CoteOffer";
import { coteDazur, properties } from "@/lib/data";
import { tr } from "@/lib/i18n";
import { getLang, type LangParams } from "@/lib/page";

type Params = { params: Promise<{ lang: string; hotel: string }> };

export function generateStaticParams() {
  return coteDazur.hotels.map((h) => ({ hotel: h.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const lang = await getLang(params as LangParams["params"]);
  const { hotel } = await params;
  const h = coteDazur.hotels.find((x) => x.slug === hotel);
  return { title: h ? `${h.hotel[lang]} — ANAWAK` : "ANAWAK" };
}

export default async function HotelPage({ params }: Params) {
  const lang = await getLang(params as LangParams["params"]);
  const t = tr(lang);
  const { hotel } = await params;
  const h = coteDazur.hotels.find((x) => x.slug === hotel);
  if (!h) notFound();
  const p = properties.find((x) => x.slug === "cote-dazur")!;
  const other = coteDazur.hotels.find((x) => x.slug !== h.slug)!;

  return (
    <>
      <section className="pd__hero">
        <Image src={h.image} alt={h.hotel[lang]} fill priority sizes="100vw" />
        <div className="pd__heroShade" />
        <div className="pd__heroContent">
          <p className="pd__kicker">{t("Côte d'Azur · The Heart of Europe", "コート・ダジュール · ザ・ハート・オブ・ヨーロッパ")}</p>
          <h1 className="pd__name">{h.name[lang]}</h1>
          <p className="pd__tag">{h.hotel[lang]}</p>
          <p className="pd__price">{coteDazur.price}</p>
        </div>
      </section>

      <CoteOffer lang={lang} heading={h.hotel[lang]} />

      <section className="pd__section">
        <p className="pd__kicker">{t("In Detail", "詳細")}</p>
        <h2 className="pd__h2" style={{ marginTop: 16 }}>{t("A closer look at Côte d'Azur.", "さらに詳しく見る — コート・ダジュール。")}</h2>
        <div className="pd__gallery">
          {p.gallery.map((src, i) => (
            <a key={src} href={src} target="_blank" rel="noreferrer">
              <Image src={src} alt={`Côte d'Azur — ${i + 1}`} fill sizes="(min-width:769px) 33vw, 50vw" />
            </a>
          ))}
          {p.videos.map((src) => (
            <video key={src} src={src} controls playsInline preload="metadata" poster={p.image} />
          ))}
        </div>
      </section>

      <section className="pd__section">
        <p className="pd__kicker">{t("Also within Côte d'Azur", "コート・ダジュールのもう一つのホテル")}</p>
        <div className="cote__choose" style={{ marginTop: 24 }}>
          <LLink className="pd__rel cote__hotel" href={`/properties/cote-dazur/${other.slug}`}>
            <Image src={other.image} alt={other.hotel[lang]} fill sizes="(min-width:769px) 50vw, 100vw" />
            <span className="pd__relLabel">
              {other.name[lang]}
              <small>{other.hotel[lang]}</small>
            </span>
          </LLink>
        </div>
      </section>
    </>
  );
}
