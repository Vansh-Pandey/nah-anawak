"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Pinned hero (image + giant wordmark) followed by the scroll-lit manifesto. */
export default function Hero({ children }: { children?: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const msg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current!;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo("[data-hero-image]", { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power1.out" }, 0)
        .fromTo("[data-hero-photo]", { scale: 1.12 }, { scale: 1, duration: 2.4, ease: "power2.out" }, 0)
        .fromTo("[data-hero-tagline]", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2, ease: "power2.inOut" }, 0.4)
        .fromTo("[data-hero-line]", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power1.out", stagger: 0.55 }, 0.9);
    }, el);
    return () => ctx.revert();
  }, []);

  // Manifesto words light up one after another as the section scrolls through
  useEffect(() => {
    const m = msg.current!;
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>("[data-msg-text]", m);
      gsap
        .timeline({ scrollTrigger: { trigger: m, start: "top 65%", end: "bottom 80%", scrub: 0.6 } })
        .to(words, { opacity: 1, ease: "none", stagger: 1, duration: 1 });
    }, m);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="hero" ref={root} id="gsap_hero">
        <div className="hero__image" data-hero-image>
          <div className="hero__imageInner" data-hero-photo>
            <Image src="/anawak/hero.webp" alt="" fill priority sizes="100vw" />
            <div className="hero__screen" />
          </div>
        </div>
        <div className="hero__inner">
          <div className="hero__tagline" data-hero-tagline>
            <p>ANAWAK</p>
          </div>
          <p className="hero__body">
            <span data-hero-line>Own More Than a Home.</span>
            <br />
            <span data-hero-line>Own Your Future.</span>
          </p>
        </div>
      </div>
      <div className="stage">
        <div className="message" ref={msg} id="gsap_message">
          <p>
            <span className="message__hl">ANAWAK is not</span>
            <span className="message__text" data-msg-text>selling</span>
            <span className="message__text" data-msg-text>property.</span>
          </p>
          <p>
            <span className="message__text" data-msg-text>ANAWAK is</span>
            <span className="message__text" data-msg-text>curating</span>
            <br className="message__sp" />
            <span className="message__text" data-msg-text>a life without</span>
            <span className="message__text" data-msg-text>compromise.</span>
          </p>
        </div>
        {children}
      </div>
    </>
  );
}
