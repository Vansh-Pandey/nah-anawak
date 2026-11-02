"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let hydrated = false;

/** Resolves once the page has loaded and React has had time to finish hydrating (first visit only). */
function afterHydration(): Promise<void> {
  if (hydrated) return Promise.resolve();
  return new Promise((resolve) => {
    const done = () => {
      // let React flush any pending (lazy) hydration before we touch server-rendered nodes
      window.setTimeout(() => {
        hydrated = true;
        resolve();
      }, 400);
    };
    if (document.readyState === "complete") done();
    else window.addEventListener("load", done, { once: true });
  });
}

/**
 * Site-wide scroll reveal: fadeInUp (0.8s, 32px) for [data-scroll="normal"] elements below the fold.
 * It only touches the DOM after hydration, otherwise React reports a hydration mismatch
 * (gsap writes inline styles onto server-rendered elements).
 */
export default function Effects() {
  const path = usePathname();
  useEffect(() => {
    let ctx: gsap.Context | undefined;
    let cancelled = false;
    afterHydration().then(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('[data-scroll="normal"]').forEach((el) => {
          // already on screen: leave it visible instead of flashing it out and back in
          if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 32 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: "power1.inOut", scrollTrigger: { trigger: el, start: "top 90%", once: true } },
          );
        });
      });
      ScrollTrigger.refresh();
    });
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [path]);
  return null;
}
