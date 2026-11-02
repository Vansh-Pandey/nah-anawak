import Image from "next/image";
import LLink from "@/components/LLink";
import { InfoCenter } from "@/components/HomeSections";
import { Module } from "@/components/Blocks";
import { pillars, properties } from "@/lib/data";
import { tr } from "@/lib/i18n";
import { getLang, titleMeta, type LangParams } from "@/lib/page";

export const generateMetadata = titleMeta("Our Residences — ANAWAK", "レジデンス一覧 — ANAWAK");

export default async function PropertiesPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = tr(lang);
  return (
    <>
      <div className="ptitle">
        <h1 data-scroll="normal">{t("Our Residences", "レジデンス一覧")}</h1>
      </div>
      <div className="pfilter">
        <div className="pfilter__inner">
          <span className="pfilter__label">{t("Collection:", "コレクション:")}</span>
          <span className="pfilter__btn">{t("The Heart of Europe", "ザ・ハート・オブ・ヨーロッパ")}</span>
          <span className="pfilter__count">{t(`${properties.length} residences`, `${properties.length}物件`)}</span>
        </div>
      </div>
      <div className="plist">
        {properties.map((p) => (
          <LLink key={p.slug} className="pcard" href={`/properties/${p.slug}`} data-scroll="normal">
            <div className="pcard__pic">
              <Image src={p.image} alt={p.name} fill sizes="(min-width:769px) 450px, 100vw" />
            </div>
            <div>
              <h2 className="pcard__name">{p.name}</h2>
              <span className="pcard__area">{p.unit[lang]}</span>
              <p className="pcard__concept">{p.tagline[lang]}</p>
              <p className="pcard__price">{p.price}</p>
            </div>
          </LLink>
        ))}
      </div>

      <InfoCenter
        id="next-step"
        note={t("Take the next step", "次のステップへ")}
        title={t("Own your place in one of the world's most extraordinary lifestyles.", "世界で最も卓越したライフスタイルを日常に。")}
        desc={t(
          "Our advisors welcome you for a private, unhurried conversation — in English or Japanese — about residences, legacy, and life.",
          "私たちの専門アドバイザーが、住まい、レガシー、および暮らしについて、英語または日本語で丁寧にご相談を承ります。",
        )}
        cta={t("Arrange a Consultation", "相談会を予約する")}
        href="/enquire"
        image="/anawak/bikini2_image.webp"
      />

      <Module
        title={t("The ANAWAK Standard", "ANAWAKの基準")}
        text={t(
          "Three principles guide every residence we curate — and every relationship we build.",
          "私たちが厳選するすべての住まい、そして築き上げるすべての関係性には、3つの原則があります。",
        )}
        cta={{ label: t("Learn more", "詳しく見る"), href: "/concierge" }}
        rows={pillars.map((p) => ({ n: p.n, title: p.title[lang], body: p.body[lang] }))}
      />
    </>
  );
}
