import { companyProfile } from "@/lib/data";
import { tr } from "@/lib/i18n";
import { getLang, titleMeta, type LangParams } from "@/lib/page";

export const generateMetadata = titleMeta("Company Profile — ANAWAK", "会社概要 — ANAWAK");

export default async function CompanyProfilePage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = tr(lang);
  return (
    <section className="page">
      <p className="pd__kicker">{t("Company Profile", "会社概要")}</p>
      <h1 className="page__title" style={{ marginTop: 16 }}>ANAWAK REAL ESTATE L.L.C.</h1>
      <p className="page__lead">{companyProfile.lead[lang]}</p>
      <dl className="dlist">
        {companyProfile.fields.map((f) => (
          <div className="dlist__row" key={f.k.en}>
            <dt>{f.k[lang]}</dt>
            <dd>{f.v[lang]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
