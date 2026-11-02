import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { benefits, properties } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  return { title: p ? `${p.name} — ANAWAK` : "ANAWAK" };
}

export default async function PropertyPage({ params }: Params) {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = properties.filter((x) => x.slug !== p.slug);
  const specs: [string, string][] = [
    ["Price", p.price],
    ["Floor Area", p.specs.floorArea],
    ["Floor Plan", p.specs.floorPlan],
    ["Number of Bedrooms", p.specs.bedrooms],
    ["Investment Information", p.specs.investment],
    ["Additional Information", p.specs.additional],
  ];

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
        <div className="pd__grid">
          <div>
            <p className="pd__kicker">Property Overview</p>
            <h2 className="pd__h2" style={{ marginTop: 16 }}>Indicative details for this residence.</h2>
            <p className="pd__p">
              The figures below are indicative, drawn from current project and resale data. Prices are quoted in USD and may change with
              exchange-rate fluctuations. Final pricing, layouts, and investment documentation for {p.name} are confirmed by our advisors —
              reach out for the most current information.
            </p>
            <p className="pd__sub">Individual Owner Benefits</p>
            <ul className="pd__list">
              {benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div style={{ marginTop: 40 }}>
              <Link className="btn btn--blue" href="/enquire">Request Information</Link>
            </div>
          </div>
          <dl className="dlist" style={{ marginTop: 0 }}>
            {specs.map(([k, v]) => (
              <div className="dlist__row" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pd__section">
        <p className="pd__kicker">In Detail</p>
        <h2 className="pd__h2" style={{ marginTop: 16 }}>A closer look at {p.name}.</h2>
        <div className="pd__gallery">
          {p.gallery.map((src, i) => (
            <a key={src} href={src} target="_blank" rel="noreferrer">
              <Image src={src} alt={`${p.name} — image ${i + 1}`} fill sizes="(min-width:769px) 33vw, 50vw" />
            </a>
          ))}
          {p.videos.map((src) => (
            <video key={src} src={src} controls playsInline preload="metadata" poster={p.image} />
          ))}
        </div>
      </section>

      {p.documents.length > 0 && (
        <section className="pd__section">
          <p className="pd__kicker">Brochures &amp; Documents</p>
          <h2 className="pd__h2" style={{ marginTop: 16 }}>Downloadable resources for {p.name}.</h2>
          <div className="pd__docs">
            {p.documents.map((d) => (
              <a key={d.href} className="btn btn--border" href={d.href} target="_blank" rel="noreferrer">
                {d.label} — Download PDF
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="pd__section">
        <p className="pd__kicker">Also Within The Heart of Europe</p>
        <h2 className="pd__h2" style={{ marginTop: 16 }}>More developments to explore.</h2>
        <div className="pd__related">
          {others.map((o) => (
            <Link key={o.slug} className="pd__rel" href={`/properties/${o.slug}`}>
              <Image src={o.image} alt={o.name} fill sizes="(min-width:769px) 33vw, 100vw" />
              <span className="pd__relLabel">{o.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
