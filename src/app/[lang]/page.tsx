import Hero from "@/components/Hero";
import PropertiesSection from "@/components/Properties";
import { InfoLeft, InfoCenter, GroupSection, WhoWeAre } from "@/components/HomeSections";
import { tr } from "@/lib/i18n";
import { getLang, type LangParams } from "@/lib/page";

export default async function Home({ params }: LangParams) {
  const t = tr(await getLang(params));
  return (
    <>
      <Hero>
        <PropertiesSection />
        <InfoLeft
          id="standard"
          note={t("The ANAWAK Standard", "ANAWAKの基準")}
          title={t("Trust. Lifestyle. Legacy.", "信頼。ライフスタイル。レガシー。")}
          desc={t(
            "Three principles guide every residence we curate — and every relationship we build.",
            "私たちが厳選するすべての住まい、そして築き上げるすべての関係性には、3つの原則があります。",
          )}
          cta={t("Learn more", "詳しく見る")}
          href="/how-it-works"
          image="/anawak/lifestyle-pool.jpg"
        />
        <InfoCenter
          id="journey"
          note={t("The Ownership Journey", "ご購入までの歩み")}
          title={t("From first conversation to family legacy.", "最初の対話から、ご家族のレガシーへ。")}
          desc={t(
            "A discreet, guided path — refined over years of serving international families.",
            "長年にわたり世界のご家族に寄り添ってきた経験から磨き上げられた、秘密厳守のガイド付きルート。",
          )}
          cta={t("Private Consultation", "個別相談会")}
          href="/enquire"
          image="/anawak/bikini2_image.webp"
        />
        <InfoCenter
          id="tour"
          note={t("The Inspection Tour", "不動産視察ツアー")}
          title={t("Walk the city before you own it.", "所有する前に、街を歩く。")}
          desc={t(
            "Six days of seminars, private property tours, and a taste of the life you're considering. Departs every Sunday.",
            "6日間のセミナーと専用車での物件視察で、これから始まる暮らしを体感する。毎週日曜日発。",
          )}
          cta={t("Reserve Your Seat", "ツアーに申し込む")}
          href="/inspection-tour"
          image="/anawak/desert.jpg"
        />
        <GroupSection />
        <WhoWeAre />
      </Hero>
    </>
  );
}
