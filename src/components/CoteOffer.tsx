import Image from "next/image";
import Link from "next/link";
import { coteDazur } from "@/lib/data";

/** The Côte d'Azur offering (Nice / St. Tropez) as shown on the ANAWAK reference page. */
export default function CoteOffer({ heading }: { heading?: string }) {
  return (
    <section className="pd__section">
      <div className="pd__grid">
        <div>
          <div className="cote__photo">
            <Image src={coteDazur.offerImage} alt="Côte d'Azur — Nice / St. Tropez" fill sizes="(min-width:1024px) 45vw, 100vw" />
            <span className="cote__tag">Côte d&apos;Azur Nice / St. Tropez</span>
          </div>
          <dl className="cote__types">
            <dt className="pd__kicker">Price list</dt>
            {coteDazur.types.map(([t, v]) => (
              <div className="cote__row" key={t}>
                <dt>{t}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="pd__kicker">{coteDazur.label}</p>
          <h2 className="pd__h2" style={{ marginTop: 16 }}>{heading ?? "VOCO Dubai Nice Heart of Europe, VOCO Dubai St. Tropez Heart of Europe"}</h2>
          <p className="pd__p">{coteDazur.description}</p>
          <dl className="dlist" style={{ marginTop: 32 }}>
            <div className="dlist__row"><dt>Brand</dt><dd>{coteDazur.brand}</dd></div>
            <div className="dlist__row"><dt>Reference price</dt><dd>{coteDazur.price}</dd></div>
            <div className="dlist__row"><dt>Units</dt><dd>{coteDazur.units}</dd></div>
            <div className="dlist__row"><dt>Owner benefit</dt><dd>{coteDazur.benefit}</dd></div>
          </dl>
          <div style={{ marginTop: 40 }}>
            <Link className="btn btn--blue" href="/enquire">Request Information</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
