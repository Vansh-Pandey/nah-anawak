import type { Metadata } from "next";
import { InfoCenter } from "@/components/HomeSections";
import { SubHero } from "@/components/Blocks";
import { legacy, pillars } from "@/lib/data";

export const metadata: Metadata = { title: "Legacy — ANAWAK" };

export default function LegacyPage() {
  const p = pillars[2];
  return (
    <>
      <SubHero
        image="/anawak/lifestyle-pool.jpg"
        note={legacy.kicker}
        title={legacy.title}
        lead={legacy.body}
        cta={{ label: "Private Consultation", href: "/enquire" }}
      />
      <section className="csec white">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">{p.title}</h2>
          <p className="csec__lead" data-scroll="normal">{p.body}</p>
          <ul className="bullets">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </section>
      <InfoCenter
        id="journey"
        note="The Ownership Journey"
        title="From first conversation to family legacy."
        desc="A discreet, guided path — refined over years of serving international families."
        cta="How it works"
        href="/how-it-works"
        image="/anawak/pillar-legacy.jpg"
      />
    </>
  );
}
