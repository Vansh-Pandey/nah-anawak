"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { properties } from "@/lib/data";
import { Button } from "./ui";

const SLIDE_MS = 9000;

// Hero slides — the four Heart of Europe properties (gradient placeholders, no photography)
const slides = properties.map((p) => ({
  title: p.name,
  subtitle: p.tagline,
  tag: `The Heart of Europe · ${p.price}`,
  h: p.h,
  image: p.hero,
}));

export default function Hero() {
  const [cur, setCur] = useState(0);
  const root = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const go = useCallback(
    (n: number) => setCur((n + slides.length) % slides.length),
    [],
  );

  // Auto-advance every 9 s
  useEffect(() => {
    timer.current = setTimeout(() => go(cur + 1), SLIDE_MS);
    return () => clearTimeout(timer.current);
  }, [cur, go]);

  // Entrance animation
  useEffect(() => {
    const slide = root.current?.querySelectorAll<HTMLElement>("[data-slide]")[cur];
    if (!slide) return;
    const ctx = gsap.context(() => {
      const targets = slide.querySelectorAll('[data-fadein]');
      gsap.set(targets, { y: 40, opacity: 0 });
      targets.forEach((el, i) =>
        gsap.to(el, { y: 0, opacity: 1, duration: 1.1, delay: 0.3 + i * 0.18, ease: "power2.out" }),
      );
    }, slide);
    return () => ctx.revert();
  }, [cur]);

  return (
    <section
      ref={root}
      id="hero"
      data-header-dark
      className="relative h-svh min-h-[500px] overflow-hidden bg-black text-white"
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <article
          key={i}
          data-slide
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === cur ? "z-[3] opacity-100" : "z-[1] opacity-0"
          }`}
        >
          {/* Background */}
          <div
            className={`absolute inset-0 transition-transform duration-[12000ms] ease-out ${i === cur ? "scale-100" : "scale-[1.08]"}`}
            style={{
              background: `linear-gradient(160deg, hsl(${s.h} 35% 28%), hsl(${s.h + 40} 25% 12%))`,
            }}
          >
            <Image src={s.image} alt={`${s.title} — The Heart of Europe`} fill priority={i === 0} sizes="100vw" className="object-cover object-center" />
          </div>

          {/* Dark gradient overlays — top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

          {/* ── TOP: giant title */}
          <div className="absolute top-0 left-0 right-0 px-6 pt-[calc(var(--header-h)+20px)] pc:px-14 pc:pt-[calc(var(--header-h)+28px)]">
            <h1
              data-fadein
              className="font-display text-[clamp(72px,13vw,200px)] font-bold uppercase leading-[0.88] tracking-[-0.01em] text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
            >
              {s.title}
            </h1>
          </div>

          {/* ── BOTTOM-LEFT: subtitle & tag */}
          <div className="absolute bottom-0 left-0 px-6 pb-[130px] pc:px-14 pc:pb-[140px]">
            <p
              data-fadein
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 mb-3 pc:text-[12px]"
            >
              {s.tag}
            </p>
            <p
              data-fadein
              className="font-sans text-[clamp(28px,4vw,54px)] font-bold leading-[1.1] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
            >
              {s.subtitle.split("\n").map((line, j) => (
                <span key={j} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </article>
      ))}

      {/* ── Dot / ring pagination (bottom-center) */}
      <div className="pointer-events-none absolute bottom-[60px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 pc:bottom-[72px]">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => go(i)}
            className="pointer-events-auto relative flex items-center justify-center"
          >
            <svg viewBox="0 0 28 28" className="size-7">
              <circle cx="14" cy="14" r="12" fill="none" stroke="#ffffff40" strokeWidth="1.5" />
              {i === cur && (
                <circle
                  key={cur}
                  cx="14" cy="14" r="12"
                  fill="none" stroke="white" strokeWidth="1.5"
                  strokeLinecap="round"
                  pathLength={75.4}
                  strokeDasharray="75.4 75.4"
                  strokeDashoffset={75.4}
                  className="animate-ring"
                  style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
                />
              )}
              <circle cx="14" cy="14" r={i === cur ? 3 : 2} fill="white" opacity={i === cur ? 1 : 0.4} />
            </svg>
          </button>
        ))}
      </div>

      <HeroCta />
    </section>
  );
}

/** Fixed CTA bar that fades as the hero scrolls away */
function HeroCta() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const on = () => {
      const hide =
        document.getElementById("hero")!.getBoundingClientRect().bottom <
        window.innerHeight * 0.35;
      el.style.opacity = hide ? "0" : "1";
      el.style.visibility = hide ? "hidden" : "visible";
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[5] flex justify-center gap-2 px-4 pb-[42px] transition-[opacity,visibility] duration-300 pc:gap-4"
    >
      <Button href="#lineup" variant="glass" className="pointer-events-auto !min-w-0 !px-11 pc:!px-[67px]">
        View Residence
      </Button>
      <Button href="#catalog" variant="primary" className="pointer-events-auto !min-w-0 !px-11 pc:!px-[67px]">
        Private Consultation
      </Button>
    </div>
  );
}
