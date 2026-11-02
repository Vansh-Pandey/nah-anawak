"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Statement paragraphs that light up one after another while scrolling (reference: intro of Concierge / About). */
export default function Paras({ lines }: { lines: string[] }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current!;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ scrollTrigger: { trigger: el, start: "top 65%", end: "bottom 80%", scrub: 0.6 } })
        .to(gsap.utils.toArray("p", el), { opacity: 1, ease: "none", stagger: 1, duration: 1 });
    }, el);
    return () => ctx.revert();
  }, []);
  return (
    <div className="paras" ref={root}>
      {lines.map((l) => (
        <p key={l}>{l}</p>
      ))}
    </div>
  );
}
