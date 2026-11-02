"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { groupSites } from "@/lib/data";

/** Sticky full-height information panel with a photographic background (reference: Creators). */
export function InfoLeft({ id, note, title, desc, cta, href, image, loop }: {
  id: string; note: string; title: string; desc: string; cta: string; href: string; image: string; loop?: boolean;
}) {
  return (
    <section className="info" id={id}>
      <div className="info__container">
        {loop ? (
          <div className="info__loop" style={{ backgroundImage: `url(${image})` }} />
        ) : (
          <div className="info__bg"><Image src={image} alt="" fill sizes="100vw" /></div>
        )}
        <div className="info__mask" />
        <div className="info__footMsg">
          <span className="info__note" data-scroll="normal">{note}</span>
          <div className="info__frame" data-scroll="normal">
            <h2 className="info__title">{title}</h2>
            <div className="info__right">
              <p className="info__desc">{desc}</p>
              <Link className="info__btn" href={href}>{cta}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Sticky panel with centred copy over a darkened photo (reference: Concierge / Club House). */
export function InfoCenter({ id, note, title, desc, cta, href, image }: {
  id: string; note: string; title: string; desc: string; cta: string; href: string; image: string;
}) {
  return (
    <section className="info" id={id}>
      <div className="info__container" data-center="true">
        <div className="info__bg"><Image src={image} alt="" fill sizes="100vw" /></div>
        <div className="info__mask" />
        <div className="center__section">
          <div className="center__frame" data-scroll="normal">
            <span className="info__note">{note}</span>
            <h2 className="info__title">{title}</h2>
            <p className="info__desc">{desc}</p>
          </div>
          <Link className="info__btn" href={href}>{cta}</Link>
        </div>
      </div>
    </section>
  );
}

/** Group companies slider + portfolio card (reference: News + digital catalog). */
export function GroupSection() {
  const track = useRef<HTMLDivElement>(null);
  const [nav, setNav] = useState({ prev: false, next: false });
  useEffect(() => {
    const t = track.current!;
    const update = () => setNav({ prev: t.scrollLeft > 2, next: t.scrollLeft + t.clientWidth < t.scrollWidth - 2 });
    update();
    t.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      t.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  const go = (d: number) => track.current?.scrollBy({ left: d * (track.current.clientWidth * 0.7), behavior: "smooth" });

  return (
    <section className="news" id="jwd">
      <div className="news__container">
        <h2 className="news__title" data-scroll="normal">The World of JWD</h2>
        <div className="news__cards">
          <div className="slider" data-scroll="normal">
            <div className="slider__track" ref={track}>
              {groupSites.map((s) => (
                <div className="slider__slide" key={s.name}>
                  <a className="ncard" href={s.url} target="_blank" rel="noreferrer">
                    <div className="ncard__bg">
                      <Image src={s.image} alt={s.name} fill sizes="(min-width:769px) 660px, 268px" />
                      <div className="ncard__shade" />
                    </div>
                    <div className="ncard__wrap">
                      <div>
                        <h3 className="ncard__title">{s.name}</h3>
                        <p className="ncard__title ncard__desc">{s.description}</p>
                      </div>
                      <div className="ncard__cta"><span className="ncard__btn">Learn more</span></div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <button type="button" className="slider__nav" data-dir="-1" data-show={nav.prev} aria-label="Previous" onClick={() => go(-1)}><i /></button>
            <button type="button" className="slider__nav" data-dir="1" data-show={nav.next} aria-label="Next" onClick={() => go(1)}><i /></button>
          </div>
        </div>
        <div className="catalog" id="portfolio" data-scroll="normal">
          <div className="catalog__img"><Image src="/properties/seahorse/11.jpg" alt="" fill sizes="(min-width:769px) 480px, 100vw" /></div>
          <div className="catalog__body">
            <div className="catalog__text">
              <h3>REQUEST THE ANAWAK PORTFOLIO</h3>
              <p>Each residence is selected for its architecture, its waterfront, and its enduring value — never merely for its price.</p>
            </div>
            <Link className="btn btn--blue" href="/enquire">Request now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhoWeAre() {
  return (
    <section className="who" id="about">
      <div className="who__container">
        <div className="info__bg"><Image src="/anawak/waterfront.jpg" alt="" fill sizes="100vw" /></div>
        <div className="who__panel">
          <div className="who__text" data-scroll="normal">
            <span className="who__note">WHO WE ARE</span>
            <h2 className="who__title">ANAWAK is curating a life without compromise</h2>
            <p className="who__desc">
              Every home represents a carefully selected opportunity to live with greater freedom, security, prosperity, and global connectivity.
              Whether for investment, family legacy, or a second home, ANAWAK serves as a trusted advisor guiding you toward an exceptional international lifestyle.
            </p>
          </div>
          <Link className="who__btn" href="/company-profile">Learn more</Link>
        </div>
      </div>
    </section>
  );
}
