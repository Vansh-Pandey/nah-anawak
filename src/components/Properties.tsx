"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { properties, type Property } from "@/lib/data";

/** One full-viewport property card (photo background, theme-coloured title). */
export function PropertyCard({ p }: { p: Property }) {
  return (
    <div className="prop" data-theme={p.theme}>
      <Link className="prop__card" href={`/properties/${p.slug}`}>
        <div className="prop__media">
          <Image src={p.image} alt={p.name} fill sizes="100vw" />
        </div>
        <div className="prop__inner">
          <div className="prop__top">
            <div className="prop__body" data-scroll="normal">
              <h2 className="prop__title" data-long={p.name.length > 9}>{p.name}</h2>
              <p className="prop__text">
                <span>Located in The Heart of Europe</span>
                <span> | </span>
                <span>Price: {p.price}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

/** "Explore Our Properties" block plus the floating consultation CTA that shows while it is on screen. */
export default function PropertiesSection() {
  const wrap = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => {
      const r = wrap.current!.getBoundingClientRect();
      setShow(r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.4);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  return (
    <div className="ctaWrap" ref={wrap}>
      <div className="cta" data-in-view={show}>
        <div className="cta__inner">
          <Link className="btn btn--blue" href="/enquire">Private Consultation</Link>
        </div>
      </div>
      <section className="props">
        <h2 className="props__title" data-scroll="normal">Explore Our Properties</h2>
        {properties.map((p) => (
          <PropertyCard key={p.slug} p={p} />
        ))}
        <div className="excl">
          <Link className="excl__card" href="/properties">
            <Image src="/properties/seahorse/9.jpg" alt="ANAWAK — The Heart of Europe" fill sizes="100vw" />
            <div className="excl__overlay" />
            <div className="excl__content">
              <div className="excl__hero" data-scroll="normal">
                <p className="excl__place">ANAWAK</p>
                <p className="excl__name">THE HEART OF EUROPE</p>
              </div>
              <p className="excl__tag" data-scroll="normal">Featured developments on the World Islands.</p>
            </div>
          </Link>
        </div>
        <div className="props__bottom" data-scroll="normal">
          <Link className="btn btn--border" href="/properties">See all</Link>
        </div>
      </section>
    </div>
  );
}
