import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InfoCenter } from "@/components/HomeSections";
import { Module } from "@/components/Blocks";
import { pillars, properties } from "@/lib/data";

export const metadata: Metadata = { title: "Our Residences — ANAWAK" };

const unit: Record<string, string> = {
  seahorse: "2 bedrooms · 3 levels",
  portofino: "Studio – 2 bedrooms",
  "germany-island": "Lagoon Villa",
  "cote-dazur": "Nice · St. Tropez",
};

export default function PropertiesPage() {
  return (
    <>
      <div className="ptitle">
        <h1 data-scroll="normal">Our Residences</h1>
      </div>
      <div className="pfilter">
        <div className="pfilter__inner">
          <span className="pfilter__label">Collection:</span>
          <span className="pfilter__btn">The Heart of Europe</span>
          <span className="pfilter__count">{properties.length} residences</span>
        </div>
      </div>
      <div className="plist">
        {properties.map((p) => (
          <Link key={p.slug} className="pcard" href={`/properties/${p.slug}`} data-scroll="normal">
            <div className="pcard__pic">
              <Image src={p.image} alt={p.name} fill sizes="(min-width:769px) 450px, 100vw" />
            </div>
            <div>
              <h2 className="pcard__name">{p.name}</h2>
              <span className="pcard__area">{unit[p.slug]}</span>
              <p className="pcard__concept">{p.tagline}</p>
              <p className="pcard__price">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <InfoCenter
        id="next-step"
        note="Take the next step"
        title="Own your place in one of the world's most extraordinary lifestyles."
        desc="Our advisors welcome you for a private, unhurried conversation — in English or Japanese — about residences, legacy, and life."
        cta="Arrange a Consultation"
        href="/enquire"
        image="/anawak/bikini2_image.webp"
      />

      <Module
        title="The ANAWAK Standard"
        text="Three principles guide every residence we curate — and every relationship we build."
        cta={{ label: "Learn more", href: "/concierge" }}
        rows={pillars.map((p) => ({ n: p.n, title: p.title, body: p.body }))}
      />
    </>
  );
}
