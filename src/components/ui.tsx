"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Gradient placeholder standing in for photography. */
export function Ph({ h, className = "", children }: { h: number; className?: string; children?: React.ReactNode }) {
  return (
    <div className={`ph ${className}`} style={{ ["--h" as string]: h }}>
      {children}
    </div>
  );
}

type Variant = "primary" | "white" | "black" | "glass" | "outline";
const variants: Record<Variant, string> = {
  primary: "text-white bg-[var(--highlight)] hover:bg-[var(--highlight-dark)] transition-[background-color] duration-500",
  white: "text-[#222] bg-white hover:bg-white-dark transition-[background-color] duration-500",
  black: "text-white bg-black hover:opacity-80 transition-opacity duration-500",
  glass: "text-white bg-black/30 backdrop-blur-[32px] border-white/10 hover:opacity-80 transition-opacity duration-500",
  outline: "text-ink bg-white border-line hover:bg-[#f5f5f5] transition-[background-color] duration-500",
};

export function Button({
  href = "#", variant = "primary", className = "", children,
}: { href?: string; variant?: Variant; className?: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-transparent font-medium leading-none whitespace-nowrap
        px-6 py-4 text-[14px] min-w-[min(100%,260px)] pc:px-8 pc:py-[18px] pc:min-w-[315px] ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function TextLink({ href = "#", white = false, children }: { href?: string; white?: boolean; children: React.ReactNode }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 text-[14px] font-medium tracking-[.56px] hover:opacity-80 transition-opacity duration-300 ${white ? "text-white" : "text-[var(--highlight)]"}`}>
      {children}
      <i className="block size-[7px] rotate-45 border-t-[1.5px] border-r-[1.5px] border-current" />
    </Link>
  );
}

/** fadeInUp (0.8s, 32px) triggered when the element enters the viewport. */
export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tween = gsap.fromTo(el, { opacity: 0, y: 32 }, {
      opacity: 1, y: 0, duration: 0.8, delay: delay + 0.1, ease: "power1.inOut", paused: true,
    });
    const st = ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => tween.play() });
    return () => { st.kill(); tween.kill(); };
  }, [delay]);
  return <div ref={ref} className={`opacity-0 ${className}`}>{children}</div>;
}

/** Horizontal scroll-snap track with prev/next arrows (desktop). */
export function Track({
  children, className = "", arrowTheme = "light", title, titleClass = "",
}: { children: React.ReactNode; className?: string; arrowTheme?: "light" | "dark"; title: string; titleClass?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const prev = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const t = ref.current!;
    const update = () => {
      if (prev.current) prev.current.disabled = t.scrollLeft <= 2;
      if (next.current) next.current.disabled = t.scrollLeft + t.clientWidth >= t.scrollWidth - 2;
    };
    update();
    t.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { t.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * Math.max(240, ref.current.clientWidth * 0.8), behavior: "smooth" });
  const arrowCls = arrowTheme === "dark"
    ? "bg-white text-black size-9 hover:opacity-80"
    : "bg-white text-ink border border-line size-10 enabled:hover:bg-[#f5f5f5]";

  return (
    <>
      <Reveal className="flex items-center justify-between pb-[30px] pc:pb-[34px]">
        <h3 className={`text-[16px] pc:text-[20px] font-semibold tracking-[.64px] pc:tracking-[.8px] ${titleClass}`}>{title}</h3>
        <div className={`hidden pc:flex items-center ${arrowTheme === "dark" ? "gap-6" : "gap-2"}`}>
          {[-1, 1].map((d) => (
            <button
              key={d} ref={d < 0 ? prev : next} type="button" aria-label={d < 0 ? "Previous" : "Next"} onClick={() => scroll(d)}
              className={`relative rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed ${arrowCls}`}
            >
              <span className={`absolute top-1/2 left-1/2 size-2 border-b-[1.5px] border-l-[1.5px] border-current ${d < 0 ? "-translate-x-[30%] -translate-y-1/2 rotate-45" : "-translate-x-[70%] -translate-y-1/2 -rotate-[135deg]"}`} />
            </button>
          ))}
        </div>
      </Reveal>
      <div
        ref={ref}
        className={`scrollbar-none flex snap-x snap-mandatory overflow-x-auto -mx-[var(--pad)] px-[var(--pad)] scroll-px-[var(--pad)] [&>*]:shrink-0 [&>*]:snap-start ${className}`}
      >
        {children}
      </div>
    </>
  );
}
