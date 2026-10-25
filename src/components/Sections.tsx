"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { features, movies, news, owners, creators, properties } from "@/lib/data";
import { Button, Reveal, TextLink, Track } from "./ui";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   MANIFESTO — large scroll-driven text reveal
   (dark bg, two stacked headlines: first bright,
   second dim — matching the real site)
───────────────────────────────────────────── */
export function Manifesto() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const lines = el.querySelectorAll<HTMLElement>("[data-line]");

    // First line: fade in + rise from below on scroll
    const ctx = gsap.context(() => {
      lines.forEach((line, i) => {
        gsap.fromTo(
          line,
          { y: 40, opacity: i === 0 ? 0 : 0.18 },
          {
            y: 0,
            opacity: i === 0 ? 1 : 0.22,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      data-header-dark
      className="bg-[#0a0a0a] px-[var(--pad)] py-[clamp(60px,10vw,140px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2
          data-line
          className="font-sans text-[clamp(32px,5.5vw,88px)] font-bold leading-[1.1] tracking-[-0.02em] text-white"
        >
          ANAWAK is not selling property.
          <br className="hidden pc:block" /> ANAWAK is curating
          <br className="hidden pc:block" /> a life without compromise.
        </h2>
        <p
          data-line
          className="mt-[clamp(32px,5vw,72px)] font-sans text-[clamp(32px,5.5vw,88px)] font-bold leading-[1.1] tracking-[-0.02em] text-white opacity-[0.18]"
        >
          Live Beyond Ownership.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROPERTIES — full-viewport stacked panels
   Each property gets its own screen-height panel
   with the photo as bg, giant name centred,
   location+designer subtitle, blue pill CTA.
   The panels stack as you scroll (sticky-style).
───────────────────────────────────────────── */
function PropertyPanel({
  prop,
  index,
}: {
  prop: (typeof properties)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Subtle Ken Burns on each panel as it enters
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const img = el.querySelector<HTMLElement>("[data-img]");
    const content = el.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!img) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { scale: 1.06 },
        {
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
      content.forEach((c, i) => {
        gsap.fromTo(
          c,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: i * 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 75%", once: true },
          }
        );
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      data-header-dark
      className="relative h-svh min-h-[500px] overflow-hidden"
    >
      {/* Photo */}
      <div
        data-img
        className="absolute inset-0"
        style={{ background: `linear-gradient(160deg, hsl(${prop.h} 35% 28%), hsl(${prop.h + 40} 25% 12%))` }}
      >
        <Image src={prop.panel} alt={prop.name} fill sizes="100vw" className="object-cover object-center" />
      </div>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Section label top-left */}
      {index === 0 && (
        <div
          data-reveal
          className="absolute left-[var(--pad)] top-[calc(var(--header-h)+24px)] text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60"
        >
          The Heart of Europe
        </div>
      )}

      {/* Centred name + location + CTA */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white">
        <h2
          data-reveal
          className="font-display text-[clamp(54px,10vw,160px)] font-bold uppercase leading-none tracking-[-0.01em] drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
        >
          {prop.name}
        </h2>
        <p data-reveal className="text-[14px] font-light tracking-wide text-white/90 pc:text-[16px]">
          {prop.tagline}&nbsp;|&nbsp;{prop.price}
        </p>
        <Link
          data-reveal
          href="#catalog"
          className="mt-2 inline-flex items-center rounded-full bg-[#0171e3] px-7 py-3 text-[13px] font-semibold text-white transition-transform duration-300 hover:scale-105 pc:px-9 pc:py-3.5 pc:text-[14px]"
        >
          Request Information
        </Link>
      </div>
    </div>
  );
}

export function Lineup() {
  return (
    <section id="lineup">
      {properties.map((p, i) => (
        <PropertyPanel key={p.id} prop={p} index={i} />
      ))}
      <div className="flex flex-col items-center gap-4 bg-[#0a0a0a] px-[var(--pad)] py-16 pc:flex-row pc:justify-center pc:gap-6">
        <Button variant="glass" href="#">View Residences</Button>
        <Button variant="primary" href="#catalog">Request the Portfolio</Button>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURES — dark bg, 4-column cards
   with number, image placeholder, title, desc
───────────────────────────────────────────── */
export function Features() {
  return (
    <section
      data-header-dark
      className="bg-[#0f0f0f] px-[var(--pad)] pt-[var(--section-pad)] pb-[60px] text-white pc:pb-[90px]"
    >
      <Reveal>
        <h2 className="pt-10 text-[clamp(20px,2.5vw,32px)] font-semibold leading-none tracking-[-0.01em]">
          From first conversation to family legacy.
        </h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-4 pc:grid-cols-4 pc:gap-6">
        {features.map((f, i) => (
          <Reveal key={f.n} delay={i * 0.08}>
            <div className="relative flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 pt-14 pb-8 pc:pt-16 pc:pb-10">
              <span className="absolute top-5 left-5 text-[13px] font-medium tracking-[0.1em] text-white/40">
                {f.n}
              </span>
              {/* Coloured accent square */}
              <div
                className="aspect-square w-full max-w-[120px] self-center rounded-xl"
                style={{
                  background: `linear-gradient(135deg, hsl(${f.h} 35% 35%), hsl(${f.h + 40} 25% 15%))`,
                }}
              />
              <div>
                <h4 className="text-[14px] font-semibold leading-[1.7] tracking-[0.02em]">
                  {f.title}
                </h4>
                <p className="mt-2 text-[12px] font-light leading-[1.9] text-white/50">
                  {f.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <TextLink white href="#catalog">Arrange a Consultation</TextLink>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BRAND FILM — animated gradient bg + quote +
   body text + "Watch film" link + dialog modal
───────────────────────────────────────────── */
export function BrandFilm() {
  const dlg = useRef<HTMLDialogElement>(null);
  return (
    <section data-header-dark className="bg-[#0a0a0a]">
      {/* Animated gradient panel */}
      <div className="relative flex h-[70vh] min-h-[400px] items-center justify-center overflow-hidden pc:h-[100lvh]">
        <div className="absolute inset-0 animate-[drift_18s_ease-in-out_infinite_alternate] bg-[linear-gradient(120deg,#0d2233,#1a3d2b_45%,#3a2510)] bg-[length:200%_200%]" />
        <div className="absolute inset-0 bg-black/30" />
        <Reveal className="relative z-[1] px-[var(--pad)] text-center">
          <p className="font-sans text-[clamp(28px,4.5vw,60px)] font-bold leading-[1.3] tracking-[-0.02em] text-white">
            Own More Than a Home.
            <br />
            Own Your Future.
          </p>
        </Reveal>
      </div>

      {/* Copy + CTA */}
      <div className="flex flex-col items-center gap-8 px-[var(--pad)] py-16 text-center text-white pc:py-20">
        <Reveal>
          <p className="max-w-[700px] text-[13px] font-light leading-[2.2] tracking-[0.02em] text-white/70 pc:text-[17px]">
            Every home represents a carefully selected opportunity to live with greater freedom,
            security, prosperity, and global connectivity. Whether for investment, family legacy,
            or a second home, ANAWAK serves as a trusted advisor guiding you toward an
            exceptional international lifestyle.
          </p>
        </Reveal>
        <button
          type="button"
          onClick={() => dlg.current?.showModal()}
          className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[0.04em] text-[#0171e3] transition-opacity hover:opacity-70"
        >
          The ANAWAK Standard
          <i className="block size-[7px] rotate-45 border-t-[1.5px] border-r-[1.5px] border-current" />
        </button>
      </div>

      {/* Video dialog */}
      <dialog
        ref={dlg}
        onClick={(e) => e.target === dlg.current && dlg.current?.close()}
        className="m-auto aspect-video w-[min(92vw,960px)] rounded-2xl bg-black text-white backdrop:bg-black/80"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => dlg.current?.close()}
          className="absolute top-3 right-4 text-[28px] leading-none text-white/70 hover:text-white"
        >
          ×
        </button>
        <div className="grid h-full place-items-center text-[13px] text-white/40">
          Video placeholder
        </div>
      </dialog>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CATALOG CTA
───────────────────────────────────────────── */
export function CatalogCta() {
  return (
    <section
      id="catalog"
      className="flex flex-col items-center gap-8 bg-[#f5f5f7] px-[var(--pad)] py-[60px] text-center pc:flex-row pc:justify-center pc:gap-20 pc:py-24 pc:text-left"
    >
      <Reveal>
        <div className="grid aspect-[3/4] w-[180px] -rotate-3 place-items-center rounded-[6px] bg-gradient-to-br from-[#1a1a1a] to-[#404040] text-[13px] font-bold tracking-[0.3em] text-white shadow-[0_28px_60px_#0004]">
          PORTFOLIO
        </div>
      </Reveal>
      <Reveal className="flex max-w-[380px] flex-col items-center gap-6 pc:items-start" delay={0.1}>
        <p className="text-[14px] leading-[1.9] text-[#333]">
          Our advisors welcome you for a private, unhurried conversation — in English or Japanese — about residences, legacy, and life.
        </p>
        <Button variant="primary" className="pc:!min-w-[240px]">Arrange a Consultation</Button>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SHARED dark section wrapper
───────────────────────────────────────────── */
function Dark({
  id,
  bg = "#0f0f0f",
  children,
}: {
  id: string;
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-header-dark
      className="overflow-hidden px-[var(--pad)] py-[60px] text-white pc:py-20"
      style={{ background: bg }}
    >
      {children}
    </section>
  );
}

/* ─────────────────────────────────────────────
   NEWS carousel
───────────────────────────────────────────── */
export function News() {
  return (
    <Dark id="news">
      <Track title="The Inspection Tour" arrowTheme="dark" className="gap-4 pc:gap-6">
        {news.map((t, i) => (
          <Link
            key={t}
            href="#"
            className="flex w-60 flex-col gap-3.5 transition-opacity hover:opacity-70"
          >
            <div
              className="aspect-[1200/630] w-full rounded-xl"
              style={{
                background: `linear-gradient(135deg, hsl(${(i * 47) % 360} 30% 25%), hsl(${(i * 47 + 40) % 360} 20% 12%))`,
              }}
            />
            <h4 className="text-[12px] font-semibold leading-[1.8] tracking-[0.02em]">{t}</h4>
          </Link>
        ))}
      </Track>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Link
          href="#"
          className="text-[12px] text-white/30 underline underline-offset-4 transition-colors hover:text-white/60"
        >
          Departs every Sunday · ¥550,000 per person, tax included
        </Link>
        <TextLink white>Reserve Your Seat</TextLink>
      </div>
    </Dark>
  );
}

/* ─────────────────────────────────────────────
   STORIES (owners + creators)
───────────────────────────────────────────── */
export function Stories() {
  return (
    <>
      <Dark id="owners">
        <Track title="Client Voices" arrowTheme="dark" className="gap-4 pc:gap-6">
          {owners.map((t, i) => (
            <Link
              key={t}
              href="#"
              className="flex w-[152px] flex-col gap-4 transition-opacity hover:opacity-70 pc:w-60"
            >
              <div
                className="aspect-square w-full rounded-xl"
                style={{
                  background: `linear-gradient(135deg, hsl(${(i * 41 + 20) % 360} 28% 22%), hsl(${(i * 41 + 60) % 360} 20% 10%))`,
                }}
              />
              <h4 className="text-[12px] font-semibold leading-[1.8] tracking-[0.02em]">{t}</h4>
            </Link>
          ))}
        </Track>
        <div className="mt-10">
          <TextLink white>Arrange a Consultation</TextLink>
        </div>
      </Dark>

      <Dark id="creators" bg="#141414">
        <Track title="The World of JWD" arrowTheme="dark" className="gap-4 pc:gap-6">
          {creators.map(([n, t], i) => (
            <Link
              key={n}
              href="#"
              className="flex w-[152px] flex-col gap-4 transition-opacity hover:opacity-70 pc:w-60"
            >
              <div
                className="aspect-square w-full rounded-xl"
                style={{
                  background: `linear-gradient(135deg, hsl(${(i * 53 + 90) % 360} 25% 20%), hsl(${(i * 53 + 130) % 360} 18% 10%))`,
                }}
              />
              <div>
                <small className="mb-1.5 block text-[10px] font-light tracking-[0.1em] text-white/35">{n}</small>
                <h4 className="text-[12px] font-semibold leading-[1.8] tracking-[0.02em]">{t}</h4>
              </div>
            </Link>
          ))}
        </Track>
        <div className="mt-10">
          <TextLink white>JWD Group</TextLink>
        </div>
      </Dark>
    </>
  );
}

/* ─────────────────────────────────────────────
   MOVIES carousel
───────────────────────────────────────────── */
export function Movies() {
  const dlg = useRef<HTMLDialogElement>(null);
  const [cur, setCur] = useState<(typeof movies)[number] | null>(null);
  const close = () => { dlg.current?.close(); setCur(null); };
  return (
    <Dark id="movies" bg="#0a0a0a">
      <Track title="Property Videos" arrowTheme="dark" className="gap-4 pc:gap-6">
        {movies.map((m) => (
          <button
            key={m.title}
            type="button"
            onClick={() => { setCur(m); dlg.current?.showModal(); }}
            className="flex w-[280px] flex-col gap-3 text-left transition-opacity hover:opacity-70 pc:w-[380px] pc:gap-4"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#181818]">
              <Image src={m.poster} alt={m.title} fill sizes="380px" className="object-cover" />
              {/* Play button */}
              <span className="absolute top-1/2 left-1/2 z-[2] size-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/40 backdrop-blur-sm" />
              <i className="absolute top-1/2 left-1/2 z-[3] -translate-x-[25%] -translate-y-1/2 border-y-[8px] border-l-[14px] border-y-transparent border-l-white" />
            </div>
            <h4 className="text-[12px] font-semibold leading-[1.8] tracking-[0.02em] pc:text-[14px]">{m.title}</h4>
          </button>
        ))}
      </Track>
      <div className="mt-10">
        <TextLink white href="#lineup">View Residences</TextLink>
      </div>
      <dialog
        ref={dlg}
        onClick={(e) => e.target === dlg.current && close()}
        onClose={() => setCur(null)}
        className="m-auto aspect-video w-[min(92vw,960px)] overflow-hidden rounded-2xl bg-black text-white backdrop:bg-black/80"
      >
        <button type="button" aria-label="Close" onClick={close} className="absolute top-3 right-4 z-10 text-[28px] leading-none text-white/70 hover:text-white">×</button>
        {cur && <video key={cur.src} src={cur.src} poster={cur.poster} controls autoPlay playsInline className="size-full object-contain" />}
      </dialog>
    </Dark>
  );
}
