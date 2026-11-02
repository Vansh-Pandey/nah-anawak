import { InfoCenter } from "@/components/HomeSections";
import { ItemCards, SubHero } from "@/components/Blocks";
import { journey } from "@/lib/data";
import { tr } from "@/lib/i18n";
import { getLang, titleMeta, type LangParams } from "@/lib/page";

export const generateMetadata = titleMeta("How it works — ANAWAK", "ご購入までの歩み — ANAWAK");

export default async function HowItWorksPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = tr(lang);
  return (
    <>
      <SubHero
        image="/anawak/bikini2_image.webp"
        title={t("The Ownership Journey", "ご購入までの歩み")}
        lead={t("From first conversation to family legacy.", "最初の対話から、ご家族のレガシーへ。")}
        cta={{ label: t("Private Consultation", "個別相談会"), href: "/enquire" }}
      />
      <ItemCards
        items={journey.map((j, i) => ({
          n: j.n,
          title: j.title[lang],
          body: j.body[lang],
          image: j.image,
          cta:
            i === 0 ? { label: t("Private Consultation", "個別相談会"), href: "/enquire" }
            : i === 1 ? { label: t("View all residences", "レジデンス一覧を見る"), href: "/properties" }
            : undefined,
        }))}
      />
      <InfoCenter
        id="find"
        note={t("Residences", "レジデンス")}
        title={t("Find your place in The Heart of Europe.", "ザ・ハート・オブ・ヨーロッパで、あなたの住まいを。")}
        desc={t(
          "Four signature destinations, each offering a distinct expression of waterfront living.",
          "ウォーターフロントの暮らしをそれぞれ異なる表現で体現する、4つの代表的なデスティネーション。",
        )}
        cta={t("View residences", "レジデンスを見る")}
        href="/properties"
        image="/properties/seahorse/8.jpg"
      />
      <InfoCenter
        id="tour"
        note={t("The Inspection Tour", "不動産視察ツアー")}
        title={t("Walk the city before you own it.", "所有する前に、街を歩く。")}
        desc={t(
          "Six days of seminars, private property tours, and a taste of the life you're considering. Departs every Sunday.",
          "6日間のセミナーと専用車での物件視察で、これから始まる暮らしを体感する。毎週日曜日発。",
        )}
        cta={t("See the tour", "ツアーを見る")}
        href="/inspection-tour"
        image="/anawak/desert.jpg"
      />
    </>
  );
}
