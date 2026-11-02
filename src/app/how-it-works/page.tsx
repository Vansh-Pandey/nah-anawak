import type { Metadata } from "next";
import { InfoCenter } from "@/components/HomeSections";
import { ItemCards, SubHero } from "@/components/Blocks";
import { journey } from "@/lib/data";

export const metadata: Metadata = { title: "How it works — ANAWAK" };

export default function HowItWorksPage() {
  return (
    <>
      <SubHero
        image="/anawak/bikini2_image.webp"
        title="The Ownership Journey"
        lead="From first conversation to family legacy."
        cta={{ label: "Private Consultation", href: "/enquire" }}
      />
      <ItemCards
        items={journey.map((j, i) => ({
          n: j.n,
          title: j.title,
          body: j.body,
          image: j.image,
          cta:
            i === 0 ? { label: "Private Consultation", href: "/enquire" }
            : i === 1 ? { label: "View all residences", href: "/properties" }
            : undefined,
        }))}
      />
      <InfoCenter
        id="find"
        note="Residences"
        title="Find your place in The Heart of Europe."
        desc="Four signature destinations, each offering a distinct expression of waterfront living."
        cta="View residences"
        href="/properties"
        image="/properties/seahorse/8.jpg"
      />
      <InfoCenter
        id="tour"
        note="The Inspection Tour"
        title="Walk the city before you own it."
        desc="Six days of seminars, private property tours, and a taste of the life you're considering. Departs every Sunday."
        cta="See the tour"
        href="/inspection-tour"
        image="/anawak/desert.jpg"
      />
    </>
  );
}
