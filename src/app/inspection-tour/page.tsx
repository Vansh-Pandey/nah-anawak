import type { Metadata } from "next";
import { InfoCenter } from "@/components/HomeSections";
import { Facts, ItemCards, SubHero } from "@/components/Blocks";
import { tour } from "@/lib/data";

export const metadata: Metadata = { title: "The Inspection Tour — ANAWAK" };

export default function TourPage() {
  return (
    <>
      <SubHero
        image="/anawak/desert.jpg"
        note={tour.badge}
        title={tour.title}
        lead={tour.desc}
        cta={{ label: "Reserve Your Seat", href: "/enquire" }}
      />

      <section className="csec">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">Tour details</h2>
          <Facts rows={tour.facts} />
          <p className="csec__lead" data-scroll="normal">{tour.note}</p>
        </div>
      </section>

      <section className="csec csec--white">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">How the Tour Works</h2>
          <ol className="bullets" style={{ listStyle: "none" }}>
            {tour.how.map((h, i) => (
              <li key={h}>{`0${i + 1}  ${h}`}</li>
            ))}
          </ol>
        </div>
      </section>

      <ItemCards
        title="Five nights, six days."
        items={tour.days.map((d) => ({ n: d.label, title: d.title, body: d.body, image: d.image }))}
      />

      <section className="csec">
        <div className="csec__in" style={{ display: "grid", gap: 48 }}>
          <div data-scroll="normal">
            <h2 className="csec__title">What&apos;s Included</h2>
            <ul className="bullets">{tour.included.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div data-scroll="normal">
            <h2 className="csec__title">Not Included</h2>
            <ul className="bullets">{tour.excluded.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <p className="csec__lead">{tour.footnote}</p>
        </div>
      </section>

      <InfoCenter
        id="reserve"
        note="Departs Every Sunday"
        title="Reserve Your Seat"
        desc="Round-trip airfare is included in the tour price — nothing more to book before you land."
        cta="Private Consultation"
        href="/enquire"
        image="/anawak/day1.jpg"
      />
    </>
  );
}
