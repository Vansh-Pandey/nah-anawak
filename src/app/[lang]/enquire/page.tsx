import type { Metadata } from "next";
import LLink from "@/components/LLink";
import EnquireForm from "@/components/EnquireForm";
import { tr } from "@/lib/i18n";
import { getLang, type LangParams } from "@/lib/page";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const t = tr(await getLang(params));
  return { title: t("Private Consultation — ANAWAK", "個別相談会 — ANAWAK") };
}

export default async function EnquirePage({ params }: LangParams) {
  const t = tr(await getLang(params));
  return (
    <div className="enq">
      <div className="enq__title" data-scroll="normal">
        <p className="enq__sub">{t("get in touch", "お問い合わせ")}</p>
        <h1 className="enq__h">
          {t("Make it yours.", "あなたの住まいへ。")} <br />
          {t("Take the next step.", "次の一歩を。")}
        </h1>
        <p className="enq__lead">{t("Arrange a private consultation with our wealth advisors.", "資産アドバイザーによるプライベート相談会を予約します。")}</p>
      </div>
      <div className="enq__cards">
        <div className="enq__card" data-scroll="normal">
          <div className="enq__text">
            <h3 className="enq__ct">{t("Request the Portfolio", "ポートフォリオを請求する")}</h3>
            <p className="enq__cx">
              {t(
                "Each residence is selected for its architecture, its waterfront, and its enduring value — never merely for its price.",
                "すべての邸宅は、建築、ウォーターフロントの立地、そして永続的な価値基準によって選定されており、単なる価格のみで選ばれることはありません。",
              )}
            </p>
          </div>
          <LLink className="enq__link" href="#form">{t("Request now", "今すぐ請求")}</LLink>
        </div>
        <div className="enq__card" data-scroll="normal">
          <div className="enq__text">
            <h3 className="enq__ct">{t("Private Consultation", "個別相談会")}</h3>
            <p className="enq__cx">
              {t(
                "Our advisors welcome you for a private, unhurried conversation — in English or Japanese.",
                "専門アドバイザーが、英語または日本語で丁寧にご相談を承ります。",
              )}
            </p>
          </div>
          <LLink className="enq__link" href="#form">{t("I'm interested", "相談してみる")}</LLink>
        </div>
      </div>
      <div className="enq__form" id="form">
        <EnquireForm />
      </div>
      <p className="enq__office">
        {t(
          "ANAWAK REAL ESTATE L.L.C. · Office M34, AL MAMZAR BLDG, Hor Al Anz · Trade License No. 1124264 · RERA / ORN No. 1162605",
          "ANAWAK REAL ESTATE L.L.C. · Office M34, AL MAMZAR BLDG, Hor Al Anz · 商業ライセンス番号 1124264 · RERA / ORN番号 1162605",
        )}
      </p>
    </div>
  );
}
