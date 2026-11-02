import { InfoCenter } from "@/components/HomeSections";
import { SubHero } from "@/components/Blocks";
import { pillars } from "@/lib/data";
import { tr } from "@/lib/i18n";
import { getLang, titleMeta, type LangParams } from "@/lib/page";

export const generateMetadata = titleMeta("Legacy — ANAWAK", "レガシー — ANAWAK");

export default async function LegacyPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = tr(lang);
  const p = pillars[2];
  return (
    <>
      <SubHero
        image="/anawak/lifestyle-pool.jpg"
        note={t("For Generations to Come", "未来の世代へ受け継ぐために")}
        title={t("Secure your legacy.", "揺るぎないレガシーをその手に。")}
        lead={t(
          "Protect wealth across generations while enjoying a world-class lifestyle today.",
          "今日、世界水準のライフスタイルを享受しながら、世代を超えて資産を守り抜きます。",
        )}
        cta={{ label: t("Private Consultation", "個別相談会"), href: "/enquire" }}
      />
      <section className="csec white">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">{p.title[lang]}</h2>
          <p className="csec__lead" data-scroll="normal">{p.body[lang]}</p>
          <ul className="bullets">{p.points.map((x) => <li key={x.en}>{x[lang]}</li>)}</ul>
        </div>
      </section>
      <InfoCenter
        id="journey"
        note={t("The Ownership Journey", "ご購入までの歩み")}
        title={t("From first conversation to family legacy.", "最初の対話から、ご家族のレガシーへ。")}
        desc={t(
          "A discreet, guided path — refined over years of serving international families.",
          "長年にわたり世界のご家族に寄り添ってきた経験から磨き上げられた、秘密厳守のガイド付きルート。",
        )}
        cta={t("How it works", "ご購入までの歩み")}
        href="/how-it-works"
        image="/anawak/pillar-legacy.jpg"
      />
    </>
  );
}
