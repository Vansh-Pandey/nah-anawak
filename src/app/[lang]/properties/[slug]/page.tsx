import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import LLink from "@/components/LLink";
import { benefits, properties } from "@/lib/data";
import { tr } from "@/lib/i18n";
import { getLang, type LangParams } from "@/lib/page";

type Params = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return properties.filter((p) => p.specs).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  return { title: p ? `${p.name} — ANAWAK` : "ANAWAK" };
}

export default async function PropertyPage({ params }: Params) {
  const lang = await getLang(params as LangParams["params"]);
  const t = tr(lang);
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  if (!p || !p.specs) notFound();
  const s = p.specs;
  const others = properties.filter((x) => x.slug !== p.slug);
  const specs: [string, string][] = [
    [t("Price", "参考価格"), p.price],
    [t("Floor Area", "床面積"), s.floorArea[lang]],
    [t("Floor Plan", "間取り"), s.floorPlan[lang]],
    [t("Number of Bedrooms", "寝室数"), s.bedrooms[lang]],
    [t("Investment Information", "投資情報"), s.investment[lang]],
    [t("Additional Information", "追加情報"), s.additional[lang]],
  ];

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
        <div className="pd__grid">
          <div>
            <p className="pd__kicker">{t("Property Overview", "物件概要")}</p>
            <h2 className="pd__h2" style={{ marginTop: 16 }}>{t("Indicative details for this residence.", "このレジデンスの目安情報です。")}</h2>
            <p className="pd__p">
              {t(
                `The figures below are indicative, drawn from current project and resale data. Prices are quoted in USD and may change with exchange-rate fluctuations. Final pricing, layouts, and investment documentation for ${p.name} are confirmed by our advisors — reach out for the most current information.`,
                `以下の数値は、現在のプロジェクトおよびリセール市場のデータに基づく目安です。価格は米ドル建てであり、為替レートの変動により変更される場合があります。${p.name} の最終的な価格、レイアウト、および投資関連書類は、アドバイザーが確定いたします。最新情報については、アドバイザーまでお問い合わせください。`,
              )}
            </p>
            <p className="pd__sub">{t("Individual Owner Benefits", "個人オーナー・メリット")}</p>
            <ul className="pd__list">
              {benefits.map((b) => (
                <li key={b.en}>{b[lang]}</li>
              ))}
            </ul>
            <div style={{ marginTop: 40 }}>
              <LLink className="btn btn--blue" href="/enquire">{t("Request Information", "資料請求・お問い合わせ")}</LLink>
            </div>
          </div>
          <dl className="dlist" style={{ marginTop: 0 }}>
            {specs.map(([k, v]) => (
              <div className="dlist__row" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pd__section">
        <p className="pd__kicker">{t("In Detail", "詳細")}</p>
        <h2 className="pd__h2" style={{ marginTop: 16 }}>{t(`A closer look at ${p.name}.`, `さらに詳しく見る — ${p.name}。`)}</h2>
        <div className="pd__gallery">
          {p.gallery.map((src, i) => (
            <a key={src} href={src} target="_blank" rel="noreferrer">
              <Image src={src} alt={`${p.name} — ${i + 1}`} fill sizes="(min-width:769px) 33vw, 50vw" />
            </a>
          ))}
          {p.videos.map((src) => (
            <video key={src} src={src} controls playsInline preload="metadata" poster={p.image} />
          ))}
        </div>
      </section>

      {p.documents.length > 0 && (
        <section className="pd__section">
          <p className="pd__kicker">{t("Brochures & Documents", "ブローシャー・資料")}</p>
          <h2 className="pd__h2" style={{ marginTop: 16 }}>{t(`Downloadable resources for ${p.name}.`, `${p.name} のダウンロード資料。`)}</h2>
          <div className="pd__docs">
            {p.documents.map((d) => (
              <a key={d.href} className="btn btn--border" href={d.href} target="_blank" rel="noreferrer">
                {d.label[lang]} — {t("Download PDF", "PDFをダウンロード")}
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="pd__section">
        <p className="pd__kicker">{t("Also Within The Heart of Europe", "「ザ・ハート・オブ・ヨーロッパ」のその他の物件")}</p>
        <h2 className="pd__h2" style={{ marginTop: 16 }}>{t("More developments to explore.", "探索を続ける")}</h2>
        <div className="pd__related">
          {others.map((o) => (
            <LLink key={o.slug} className="pd__rel" href={`/properties/${o.slug}`}>
              <Image src={o.image} alt={o.name} fill sizes="(min-width:769px) 33vw, 100vw" />
              <span className="pd__relLabel">{o.name}</span>
            </LLink>
          ))}
        </div>
      </section>
    </>
  );
}
