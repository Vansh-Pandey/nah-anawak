import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoteOffer from "@/components/CoteOffer";
import { coteDazur, properties } from "@/lib/data";

export const metadata: Metadata = { title: "Côte d'Azur — ANAWAK" };

export default function CoteDazurPage() {
  const p = properties.find((x) => x.slug === "cote-dazur")!;
  return (
    <>
      <section className="pd__hero">
        <Image src={p.image} alt={p.name} fill priority sizes="100vw" />
        <div className="pd__heroShade" />
        <div className="pd__heroContent">
          <p className="pd__kicker">The Heart of Europe</p>
          <h1 className="pd__name">{p.name}</h1>
          <p className="pd__tag">{p.tagline}</p>
          <p className="pd__price">{p.price}</p>
        </div>
      </section>

      <section className="pd__section">
        <p className="pd__kicker">Choose your hotel</p>
        <h2 className="pd__h2" style={{ marginTop: 16 }}>Côte d&apos;Azur is made up of Nice and St. Tropez.</h2>
        <div className="cote__choose">
          {coteDazur.hotels.map((h) => (
            <Link key={h.slug} className="pd__rel cote__hotel" href={`/properties/cote-dazur/${h.slug}`}>
              <Image src={h.image} alt={h.hotel} fill sizes="(min-width:769px) 50vw, 100vw" />
              <span className="pd__relLabel">
                {h.name}
                <small>{h.hotel}</small>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CoteOffer />
    </>
  );
}
