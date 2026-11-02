import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CoteOffer from "@/components/CoteOffer";
import { coteDazur, properties } from "@/lib/data";

type Params = { params: Promise<{ hotel: string }> };

export function generateStaticParams() {
  return coteDazur.hotels.map((h) => ({ hotel: h.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { hotel } = await params;
  const h = coteDazur.hotels.find((x) => x.slug === hotel);
  return { title: h ? `${h.hotel} — ANAWAK` : "ANAWAK" };
}

export default async function HotelPage({ params }: Params) {
  const { hotel } = await params;
  const h = coteDazur.hotels.find((x) => x.slug === hotel);
  if (!h) notFound();
  const p = properties.find((x) => x.slug === "cote-dazur")!;
  const other = coteDazur.hotels.find((x) => x.slug !== h.slug)!;

  return (
    <>
      <section className="pd__hero">
        <Image src={h.image} alt={h.hotel} fill priority sizes="100vw" />
        <div className="pd__heroShade" />
        <div className="pd__heroContent">
          <p className="pd__kicker">Côte d&apos;Azur · The Heart of Europe</p>
          <h1 className="pd__name">{h.name}</h1>
          <p className="pd__tag">{h.hotel}</p>
          <p className="pd__price">{coteDazur.price}</p>
        </div>
      </section>

      <CoteOffer heading={h.hotel} />

      <section className="pd__section">
        <p className="pd__kicker">In Detail</p>
        <h2 className="pd__h2" style={{ marginTop: 16 }}>A closer look at Côte d&apos;Azur.</h2>
        <div className="pd__gallery">
          {p.gallery.map((src, i) => (
            <a key={src} href={src} target="_blank" rel="noreferrer">
              <Image src={src} alt={`Côte d'Azur — image ${i + 1}`} fill sizes="(min-width:769px) 33vw, 50vw" />
            </a>
          ))}
          {p.videos.map((src) => (
            <video key={src} src={src} controls playsInline preload="metadata" poster={p.image} />
          ))}
        </div>
      </section>

      <section className="pd__section">
        <p className="pd__kicker">Also within Côte d&apos;Azur</p>
        <div className="cote__choose" style={{ marginTop: 24 }}>
          <Link className="pd__rel cote__hotel" href={`/properties/cote-dazur/${other.slug}`}>
            <Image src={other.image} alt={other.hotel} fill sizes="(min-width:769px) 50vw, 100vw" />
            <span className="pd__relLabel">
              {other.name}
              <small>{other.hotel}</small>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
