import type { Metadata } from "next";
import Link from "next/link";
import { PropertyCard } from "@/components/Properties";
import { properties } from "@/lib/data";

export const metadata: Metadata = { title: "Residences — ANAWAK" };

export default function PropertiesPage() {
  return (
    <>
      <section className="props" style={{ paddingTop: "var(--header-h)" }}>
        <h1 className="props__title" data-scroll="normal">The Heart of Europe</h1>
        <p className="page__lead" style={{ margin: "0 auto 48px", textAlign: "center", padding: "0 var(--padding-inline)" }} data-scroll="normal">
          Four signature destinations, each offering a distinct expression of waterfront living.
        </p>
        {properties.map((p) => (
          <PropertyCard key={p.slug} p={p} />
        ))}
        <div className="props__bottom">
          <Link className="btn btn--blue" href="/enquire">Private Consultation</Link>
        </div>
      </section>
    </>
  );
}
