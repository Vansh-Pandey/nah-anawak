import { InfoCenter } from "@/components/HomeSections";
import { Facts, ItemCards, SubHero } from "@/components/Blocks";
import { tour } from "@/lib/data";
import { tr } from "@/lib/i18n";
import { getLang, titleMeta, type LangParams } from "@/lib/page";

export const generateMetadata = titleMeta("The Inspection Tour — ANAWAK", "不動産視察ツアー — ANAWAK");

export default async function TourPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = tr(lang);
  return (
    <>
      <SubHero
        image="/anawak/desert.jpg"
        note={tour.badge[lang]}
        title={tour.title[lang]}
        lead={tour.desc[lang]}
        cta={{ label: t("Reserve Your Seat", "ツアーに申し込む"), href: "/enquire" }}
      />

      <section className="csec">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">{t("Tour details", "ツアー概要")}</h2>
          <Facts rows={tour.facts.map((f) => [f.k[lang], f.v[lang]] as [string, string])} />
          <p className="csec__lead" data-scroll="normal">{tour.note[lang]}</p>
        </div>
      </section>

      <section className="csec csec--white">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">{t("How the Tour Works", "ツアーの流れ")}</h2>
          <ol className="bullets" style={{ listStyle: "none" }}>
            {tour.how.map((h, i) => (
              <li key={h.en}>{`0${i + 1}  ${h[lang]}`}</li>
            ))}
          </ol>
        </div>
      </section>

      <ItemCards
        title={t("Five nights, six days.", "5泊6日の旅程。")}
        items={tour.days.map((d) => ({ n: d.label[lang], title: d.title[lang], body: d.body[lang], image: d.image }))}
      />

      <section className="csec">
        <div className="csec__in" style={{ display: "grid", gap: 48 }}>
          <div data-scroll="normal">
            <h2 className="csec__title">{t("What's Included", "ツアー代金に含まれるもの")}</h2>
            <ul className="bullets">{tour.included.map((i) => <li key={i.en}>{i[lang]}</li>)}</ul>
          </div>
          <div data-scroll="normal">
            <h2 className="csec__title">{t("Not Included", "含まれないもの")}</h2>
            <ul className="bullets">{tour.excluded.map((i) => <li key={i.en}>{i[lang]}</li>)}</ul>
          </div>
          <p className="csec__lead">{tour.footnote[lang]}</p>
        </div>
      </section>

      <InfoCenter
        id="reserve"
        note={tour.badge[lang]}
        title={t("Reserve Your Seat", "ツアーに申し込む")}
        desc={tour.note[lang]}
        cta={t("Private Consultation", "個別相談会")}
        href="/enquire"
        image="/anawak/day1.jpg"
      />
    </>
  );
}
