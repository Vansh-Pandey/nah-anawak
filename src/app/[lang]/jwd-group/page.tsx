import Image from "next/image";
import { SubHero } from "@/components/Blocks";
import { groupSites } from "@/lib/data";
import { tr } from "@/lib/i18n";
import { getLang, titleMeta, type LangParams } from "@/lib/page";

export const generateMetadata = titleMeta("The World of JWD — ANAWAK", "JWDの世界 — ANAWAK");

export default async function JwdGroupPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = tr(lang);
  return (
    <>
      <SubHero
        image="/anawak/group-wdwc.jpg"
        note={t("The World of JWD", "JWDの世界")}
        title={t("One group. Many extraordinary worlds.", "ひとつのグループ。多彩で非凡な世界観。")}
        lead={t(
          "ANAWAK stands within a constellation of destinations and partners that share one standard of quality.",
          "ANAWAKは、同一の品質基準を共有する魅力的な目的地やパートナーのネットワークに支えられています。",
        )}
      />
      <section className="csec white">
        <div className="csec__in">
          <div className="cgrid">
            {groupSites.map((g) => (
              <a className="citem" key={g.name} href={g.url} target="_blank" rel="noreferrer" data-scroll="normal">
                <div className="citem__img"><Image src={g.image} alt={g.name} fill sizes="(min-width:769px) 420px, 100vw" /></div>
                <h3 className="citem__t">{g.name}</h3>
                <p className="citem__d">{g.description[lang]}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
