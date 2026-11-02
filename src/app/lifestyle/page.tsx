import type { Metadata } from "next";
import Image from "next/image";
import { InfoCenter } from "@/components/HomeSections";
import { SubHero } from "@/components/Blocks";
import { lifestyle, pillars } from "@/lib/data";

export const metadata: Metadata = { title: "Lifestyle — ANAWAK" };

export default function LifestylePage() {
  const p = pillars[1];
  return (
    <>
      <SubHero
        image="/anawak/bikini_image.webp"
        note="The Lifestyle"
        title="An extraordinary life, made effortless."
        lead="Bright mornings on private beaches. Evenings on spacious terraces overlooking the sea. A life of abundance — without excess."
        cta={{ label: "Private Consultation", href: "/enquire" }}
      />
      <section className="csec white">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">{p.title}</h2>
          <p className="csec__lead" data-scroll="normal">{p.body}</p>
          <ul className="bullets">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
          <div className="cgrid">
            {lifestyle.map((l) => (
              <section className="citem" key={l.label} data-scroll="normal">
                <div className="citem__img"><Image src={l.image} alt={l.label} fill sizes="(min-width:769px) 420px, 100vw" /></div>
                <h3 className="citem__t">{l.label}</h3>
              </section>
            ))}
          </div>
        </div>
      </section>
      <InfoCenter
        id="freedom"
        note="The International Life"
        title="Freedom to live anywhere."
        desc="Step off your yacht onto a sunlit promenade. This is not a holiday — it is Tuesday."
        cta="View residences"
        href="/properties"
        image="/anawak/yacht.jpg"
      />
    </>
  );
}
