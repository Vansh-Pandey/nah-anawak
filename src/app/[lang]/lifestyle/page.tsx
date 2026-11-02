import Image from "next/image";
import { InfoCenter } from "@/components/HomeSections";
import { SubHero } from "@/components/Blocks";
import { lifestyle, pillars } from "@/lib/data";
import { tr } from "@/lib/i18n";
import { getLang, titleMeta, type LangParams } from "@/lib/page";

export const generateMetadata = titleMeta("Lifestyle — ANAWAK", "ライフスタイル — ANAWAK");

export default async function LifestylePage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = tr(lang);
  const p = pillars[1];
  return (
    <>
      <SubHero
        image="/anawak/bikini_image.webp"
        note={t("The Lifestyle", "ライフスタイル")}
        title={t("An extraordinary life, made effortless.", "非日常の暮らしを、限りなく身近に。")}
        lead={t(
          "Bright mornings on private beaches. Evenings on spacious terraces overlooking the sea. A life of abundance — without excess.",
          "プライベートビーチで迎える輝かしい朝。海を見渡す広々としたテラスで過ごす夕暮れ。過度な装飾を排した、豊かな暮らしの提案。",
        )}
        cta={{ label: t("Private Consultation", "個別相談会"), href: "/enquire" }}
      />
      <section className="csec white">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">{p.title[lang]}</h2>
          <p className="csec__lead" data-scroll="normal">{p.body[lang]}</p>
          <ul className="bullets">{p.points.map((x) => <li key={x.en}>{x[lang]}</li>)}</ul>
          <div className="cgrid">
            {lifestyle.map((l) => (
              <section className="citem" key={l.label.en} data-scroll="normal">
                <div className="citem__img"><Image src={l.image} alt={l.label[lang]} fill sizes="(min-width:769px) 420px, 100vw" /></div>
                <h3 className="citem__t">{l.label[lang]}</h3>
              </section>
            ))}
          </div>
        </div>
      </section>
      <InfoCenter
        id="freedom"
        note={t("The International Life", "インターナショナルな暮らし")}
        title={t("Freedom to live anywhere.", "世界のどこにでも暮らせる自由。")}
        desc={t(
          "Step off your yacht onto a sunlit promenade. This is not a holiday — it is Tuesday.",
          "ヨットから降り立ち、陽の光が降り注ぐプロムナードへ。これは休暇ではありません。ありふれた火曜日の朝です。",
        )}
        cta={t("View residences", "レジデンスを見る")}
        href="/properties"
        image="/anawak/yacht.jpg"
      />
    </>
  );
}
