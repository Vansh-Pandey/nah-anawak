"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LLink from "./LLink";
import { properties, type Property } from "@/lib/data";
import { useLang, useT } from "@/lib/locale";

/** One full-viewport property card (photo background, theme-coloured title). */
export function PropertyCard({ p }: { p: Property }) {
  const t = useT();
  return (
    <div className="prop" data-theme={p.theme}>
      <LLink className="prop__card" href={`/properties/${p.slug}`}>
        <div className="prop__media">
          <Image src={p.image} alt={p.name} fill sizes="100vw" />
        </div>
        <div className="prop__inner">
          <div className="prop__top">
            <div className="prop__body" data-scroll="normal">
              <h2 className="prop__title" data-long={p.name.length > 9}>{p.name}</h2>
              <p className="prop__text">
                <span>{t("Located in The Heart of Europe", "ザ・ハート・オブ・ヨーロッパ内")}</span>
                <span> | </span>
                <span>{t("Price", "参考価格")}: {p.price}</span>
              </p>
            </div>
          </div>
        </div>
      </LLink>
    </div>
  );
}

/** "Explore Our Properties" block plus the floating consultation CTA that shows while it is on screen. */
export default function PropertiesSection() {
  const t = useT();
  const lang = useLang();
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
          <LLink className="btn btn--blue" href="/enquire">{t("Private Consultation", "個別相談会")}</LLink>
        </div>
      </div>
      <section className="props">
        <h2 className="props__title" data-scroll="normal">{t("Explore Our Properties", "厳選されたレジデンス")}</h2>
        {properties.map((p) => (
          <PropertyCard key={p.slug} p={p} />
        ))}
        <div className="excl">
          <LLink className="excl__card" href="/properties">
            <Image src="/properties/seahorse/9.jpg" alt="ANAWAK — The Heart of Europe" fill sizes="100vw" />
            <div className="excl__overlay" />
            <div className="excl__content">
              <div className="excl__hero" data-scroll="normal">
                <p className="excl__place">ANAWAK</p>
                <p className="excl__name" data-lang={lang}>{t("THE HEART OF EUROPE", "ザ・ハート・オブ・ヨーロッパ")}</p>
              </div>
              <p className="excl__tag" data-scroll="normal">{t("Featured developments on the World Islands.", "ザ・ワールド・アイランドに佇む、注目のプロジェクト。")}</p>
            </div>
          </LLink>
        </div>
        <div className="props__bottom" data-scroll="normal">
          <LLink className="btn btn--border" href="/properties">{t("See all", "すべて見る")}</LLink>
        </div>
      </section>
    </div>
  );
}
