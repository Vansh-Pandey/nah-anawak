import Image from "next/image";
import LLink from "./LLink";

/** Full-height hero with a photo, centred title and a blue CTA (reference: How it works / Concierge hero). */
export function SubHero({ image, note, title, lead, cta }: {
  image: string; note?: string; title: string; lead?: string; cta?: { label: string; href: string };
}) {
  return (
    <section className="sub">
      <Image src={image} alt="" fill priority sizes="100vw" />
      <div className="sub__mask" />
      <div className="sub__inner">
        <div className="sub__title" data-scroll="normal">
          {note && <p className="sub__note">{note}</p>}
          <h1 className="sub__h">{title}</h1>
          {lead && <p className="sub__lead">{lead}</p>}
        </div>
        {cta && (
          <div className="sub__cta">
            <LLink className="btn btn--blue" href={cta.href}>{cta.label}</LLink>
          </div>
        )}
      </div>
    </section>
  );
}

export type ItemCard = { n?: string; title: string; body: string; image: string; cta?: { label: string; href: string } };

/** Large rounded photo cards with overlaid copy (reference: How it works items). */
export function ItemCards({ title, items }: { title?: string; items: ItemCard[] }) {
  return (
    <section className="items">
      {title && <h2 className="items__title" data-scroll="normal">{title}</h2>}
      <div className="items__list">
        {items.map((it) => (
          <section className="item" key={it.title} data-scroll="normal">
            <Image src={it.image} alt="" fill sizes="(min-width:769px) 1080px, 100vw" />
            <div className="item__up">
              {it.n && <span className="item__num">{it.n}</span>}
              <h3 className="item__title">{it.title}</h3>
              <p className="item__desc">{it.body}</p>
            </div>
            {it.cta && (
              <div className="item__bottom">
                <LLink className="item__btn" href={it.cta.href}>{it.cta.label}</LLink>
              </div>
            )}
          </section>
        ))}
      </div>
    </section>
  );
}

/** Two-column dark/light module (reference: "3 Key Benefits"). */
export function Module({ title, text, cta, rows }: {
  title: string; text: string; cta: { label: string; href: string }; rows: { n: string; title: string; body: string }[];
}) {
  return (
    <section className="modsec">
      <div className="mod">
        <div className="mod__left">
          <div className="mod__head" data-scroll="normal">
            <h2 className="mod__h">{title}</h2>
            <p className="mod__p">{text}</p>
          </div>
          <LLink className="mod__btn" href={cta.href}>{cta.label}</LLink>
        </div>
        <div className="mod__right">
          {rows.map((r) => (
            <div className="mod__row" key={r.title} data-scroll="normal">
              <span className="mod__num">{r.n}</span>
              <div className="mod__rowText">
                <h3 className="mod__t">{r.title}</h3>
                <p className="mod__d">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Facts({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="facts">
      {rows.map(([k, v]) => (
        <div className="facts__row" key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}
