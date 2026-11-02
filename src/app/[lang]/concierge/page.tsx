import Image from "next/image";
import { InfoCenter } from "@/components/HomeSections";
import { SubHero } from "@/components/Blocks";
import Paras from "@/components/Paras";
import { pillars, services } from "@/lib/data";
import { tr } from "@/lib/i18n";
import { getLang, titleMeta, type LangParams } from "@/lib/page";

export const generateMetadata = titleMeta("Concierge — ANAWAK", "コンシェルジュ — ANAWAK");

export default async function ConciergePage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = tr(lang);
  return (
    <>
      <SubHero
        image="/anawak/villas.jpg"
        title={t("Advisory, at your service", "お客様に寄り添うアドバイザリー")}
        cta={{ label: t("Private Consultation", "個別相談会"), href: "/enquire" }}
      />
      <Paras
        key={lang}
        lines={[
          t(
            "Every home represents a carefully selected opportunity to live with greater freedom, security, prosperity, and global connectivity.",
            "すべての住まいは、より大きな自由、安全、繁栄、そしてグローバルなつながりを持って生きるための、厳選された機会を表しています。",
          ),
          t(
            "ANAWAK serves as a trusted advisor guiding you toward an exceptional international lifestyle.",
            "ANAWAKは信頼できるアドバイザーとして、卓越したインターナショナルなライフスタイルへとお客様を導きます。",
          ),
        ]}
      />
      <section className="csec">
        <div className="csec__in svc">
          <div className="svc__list">
            <h2 className="csec__title" data-scroll="normal">{t("How we support you", "私たちのサポート")}</h2>
            {services.map((s) => (
              <section className="svc__item" key={s.title.en} data-scroll="normal">
                <h3>{s.title[lang]}</h3>
                <p>{s.body[lang]}</p>
              </section>
            ))}
          </div>
          <div className="svc__media" data-scroll="normal">
            <Image src="/properties/seahorse/5.jpg" alt="" fill sizes="(min-width:769px) 40vw, 100vw" />
          </div>
        </div>
      </section>
      <section className="csec csec--white">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">{t("The ANAWAK Standard", "ANAWAKの基準")}</h2>
          <div className="cgrid">
            {pillars.map((p) => (
              <section className="citem" key={p.title.en} data-scroll="normal">
                <div className="citem__img"><Image src={p.image} alt={p.title[lang]} fill sizes="(min-width:769px) 420px, 100vw" /></div>
                <h3 className="citem__t">{p.title[lang]}</h3>
                <p className="citem__d">{p.body[lang]}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <InfoCenter
        id="about"
        note={t("About us", "ANAWAKについて")}
        title={t("ANAWAK is curating a life without compromise.", "ANAWAKは、妥協のない極上の日常をデザインします。")}
        desc={t(
          "A discreet, guided path — refined over years of serving international families.",
          "長年にわたり世界のご家族に寄り添ってきた経験から磨き上げられた、秘密厳守のガイド付きルート。",
        )}
        cta={t("Learn more", "詳しく見る")}
        href="/about"
        image="/anawak/waterfront.jpg"
      />
    </>
  );
}
