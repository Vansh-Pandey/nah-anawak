import Image from "next/image";
import { InfoCenter } from "@/components/HomeSections";
import { Facts, SubHero } from "@/components/Blocks";
import Paras from "@/components/Paras";
import { companyProfile, groupSites } from "@/lib/data";
import { splitParen, tr } from "@/lib/i18n";
import { getLang, titleMeta, type LangParams } from "@/lib/page";

export const generateMetadata = titleMeta("About us — ANAWAK", "ANAWAKについて — ANAWAK");

export default async function AboutPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = tr(lang);
  const get = (en: string) => companyProfile.fields.find((f) => f.k.en === en)!.v[lang];
  const [capital, capitalJpy] = splitParen(get("Capital"));
  const [assets, assetsJpy] = splitParen(get("Total Assets"));

  return (
    <>
      <SubHero
        image="/anawak/waterfront.jpg"
        note={t("About us", "ANAWAKについて")}
        title={t(
          "ANAWAK is not only selling property. ANAWAK is curating a life without compromise.",
          "ANAWAKが提供するのは、単なる不動産だけではありません。妥協のない極上の日常をデザインします。",
        )}
      />
      <Paras
        key={lang}
        lines={[
          t(
            "Every home represents a carefully selected opportunity to live with greater freedom, security, prosperity, and global connectivity.",
            "すべての住まいは、より大きな自由、安全、繁栄、そしてグローバルなつながりを持って生きるための、厳選された機会を表しています。",
          ),
          t(
            "Whether for investment, family legacy, or a second home, ANAWAK serves as a trusted advisor guiding you toward an exceptional international lifestyle.",
            "投資、家族の遺産、あるいはセカンドハウスのいずれであっても、ANAWAKは信頼できるアドバイザーとして、卓越したインターナショナルなライフスタイルへとお客様を導きます。",
          ),
          t("Live Beyond Ownership.", "所有の先にある暮らし。"),
        ]}
      />

      <section className="csec csec--dark">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">{t("Company", "会社概要")}</h2>
          <p className="csec__lead" data-scroll="normal">{companyProfile.lead[lang]}</p>
          <div className="nums" data-scroll="normal">
            <div>
              <p className="nums__t">{t("Capital", "資本金")}</p>
              <p className="nums__v">{capital}</p>
              <p className="nums__s">{lang === "ja" ? "（" : "("}{capitalJpy}</p>
            </div>
            <div>
              <p className="nums__t">{t("Total Assets", "総資産額")}</p>
              <p className="nums__v">{assets}</p>
              <p className="nums__s">{lang === "ja" ? "（" : "("}{assetsJpy}</p>
            </div>
          </div>
          <Facts
            rows={companyProfile.fields
              .filter((f) => f.k.en !== "Capital" && f.k.en !== "Total Assets")
              .map((f) => [f.k[lang], f.v[lang]] as [string, string])}
          />
        </div>
      </section>

      <section className="csec csec--white" id="jwd">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">{t("One group. Many extraordinary worlds.", "ひとつのグループ。多彩で非凡な世界観。")}</h2>
          <p className="csec__lead" data-scroll="normal">
            {t(
              "ANAWAK stands within a constellation of destinations and partners that share one standard of quality.",
              "ANAWAKは、同一の品質基準を共有する魅力的な目的地やパートナーのネットワークに支えられています。",
            )}
          </p>
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

      <InfoCenter
        id="contact"
        note={t("Private Consultation", "個別相談会")}
        title={t("Own your place in one of the world's most extraordinary lifestyles.", "世界で最も卓越したライフスタイルを日常に。")}
        desc={t(
          "Our advisors welcome you for a private, unhurried conversation — in English or Japanese — about residences, legacy, and life.",
          "私たちの専門アドバイザーが、住まい、レガシー、および暮らしについて、英語または日本語で丁寧にご相談を承ります。",
        )}
        cta={t("Arrange a Consultation", "相談会を予約する")}
        href="/enquire"
        image="/anawak/bikini2_image.webp"
      />
    </>
  );
}
